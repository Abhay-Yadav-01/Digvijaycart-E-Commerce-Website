document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    // 1. Toast Container
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    body.appendChild(toastContainer);
    
    // 2. Slide-out Cart
    const cartOverlay = document.createElement('div');
    cartOverlay.className = 'cart-overlay';
    cartOverlay.id = 'cart-overlay';
    body.appendChild(cartOverlay);
    
    const cartSidebar = document.createElement('div');
    cartSidebar.className = 'cart-sidebar';
    cartSidebar.id = 'cart-sidebar';
    cartSidebar.innerHTML = `
        <div class="cart-header">
            <h2>Your Cart (<span id="sidebar-cart-count">0</span>)</h2>
            <button class="cart-close" id="cart-close">&times;</button>
        </div>
        <div class="cart-body" id="sidebar-cart-body"></div>
        <div class="cart-footer">
            <div style="display:flex; justify-content:space-between; margin-bottom:1rem; font-size:1.2rem; font-weight:bold;">
                <span>Subtotal</span>
                <span id="sidebar-cart-total" style="color:var(--accent-color);">₹0</span>
            </div>
            <button class="btn-primary" style="width:100%" onclick="window.location.href='cart.html'">Proceed to Checkout</button>
        </div>
    `;
    body.appendChild(cartSidebar);
    
    // 3. Quick View Modal
    const qvOverlay = document.createElement('div');
    qvOverlay.className = 'qv-overlay';
    qvOverlay.id = 'qv-overlay';
    qvOverlay.innerHTML = `
        <div class="qv-modal" id="qv-modal"></div>
    `;
    body.appendChild(qvOverlay);
    
    // 4. Back to Top Button
    const bttBtn = document.createElement('button');
    bttBtn.className = 'back-to-top';
    bttBtn.id = 'back-to-top';
    bttBtn.innerHTML = '↑';
    body.appendChild(bttBtn);
    
    // 5. Mobile Bottom Nav
    const mobileNav = document.createElement('nav');
    mobileNav.className = 'mobile-bottom-nav';
    mobileNav.innerHTML = `
        <a href="index.html" class="\${window.location.pathname.endsWith('index.html') || window.location.pathname === '/' ? 'active' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Home</span>
        </a>
        <a href="categories.html" class="\${window.location.pathname.includes('categor') ? 'active' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span>Explore</span>
        </a>
        <a href="cart.html" class="\${window.location.pathname.includes('cart') ? 'active' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>Cart</span>
        </a>
        <a href="login.html" class="\${window.location.pathname.includes('login') ? 'active' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>Profile</span>
        </a>
    `;
    body.appendChild(mobileNav);

    // Global Toast Function
    window.showToast = function(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `✅ <span>${message}</span>`;
        toastContainer.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };

    // Override addToCart to use toast and update sidebar
    const originalAddToCart = window.addToCart;
    if (typeof originalAddToCart === 'function') {
        window.addToCart = function(productId, btn) {
            originalAddToCart(productId, btn);
            const product = allProducts.find(p => p.id === productId);
            if(product) showToast(`${product.name.substring(0,25)}... added to cart!`);
            renderSidebarCart();
            // Open sidebar optionally
            cartOverlay.classList.add('show');
            cartSidebar.classList.add('open');
        };
    }

    // Sidebar Cart Listeners
    const cartBtns = document.querySelectorAll('.cart-btn');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Only intercept if we are not already on cart.html
            if(!window.location.pathname.includes('cart.html')) {
                e.preventDefault(); 
                renderSidebarCart();
                cartOverlay.classList.add('show');
                cartSidebar.classList.add('open');
            }
        });
    });
    
    document.getElementById('cart-close').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    function closeCart() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('show');
    }
    
    function renderSidebarCart() {
        const cartBody = document.getElementById('sidebar-cart-body');
        let savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        document.getElementById('sidebar-cart-count').textContent = savedCart.length;
        
        if (savedCart.length === 0) {
            cartBody.innerHTML = '<p style="color:#a0aec0; text-align:center; margin-top:2rem;">Your cart is empty.</p>';
            document.getElementById('sidebar-cart-total').textContent = '₹0';
            return;
        }
        
        const itemCounts = {};
        savedCart.forEach(id => itemCounts[id] = (itemCounts[id] || 0) + 1);
        
        let html = '';
        let total = 0;
        
        Object.keys(itemCounts).forEach(id => {
            const count = itemCounts[id];
            const product = allProducts.find(p => p.id === id);
            if (product) {
                total += product.price * count;
                html += `
                    <div style="display:flex; gap:1rem; align-items:center;">
                        <img src="${product.image}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
                        <div style="flex:1;">
                            <h4 style="font-size:0.9rem; margin-bottom:0.2rem;">${product.name.substring(0,25)}...</h4>
                            <span style="color:var(--accent-color); font-weight:bold;">₹${product.price.toLocaleString('en-IN')}</span>
                            <span style="color:#a0aec0; font-size:0.8rem; margin-left:0.5rem;">Qty: ${count}</span>
                        </div>
                    </div>
                `;
            }
        });
        cartBody.innerHTML = html;
        document.getElementById('sidebar-cart-total').textContent = '₹' + total.toLocaleString('en-IN');
    }

    // Quick View Logic
    window.openQuickView = function(productId, e) {
        if(e) e.stopPropagation();
        const product = allProducts.find(p => p.id === productId);
        if(!product) return;
        
        const qvModal = document.getElementById('qv-modal');
        qvModal.innerHTML = `
            <button class="qv-close" onclick="closeQuickView()">&times;</button>
            <img src="${product.image}" class="qv-img" alt="${product.name}">
            <div style="display:flex; flex-direction:column; justify-content:center;">
                <p style="color:#a0aec0; font-size:0.9rem; margin-bottom:0.5rem;">${product.categoryName} > ${product.subCategory}</p>
                <h2 style="margin-bottom:1rem; font-size:1.8rem; color:white;">${product.name}</h2>
                <h3 style="color:var(--accent-color); font-size:1.5rem; margin-bottom:1.5rem;">₹${product.price.toLocaleString('en-IN')}</h3>
                <p style="color:#cbd5e1; margin-bottom:2rem; line-height:1.6;">${product.description}</p>
                <button class="btn-primary" style="width:100%; padding:1rem;" onclick="addToCart('${product.id}', this); setTimeout(closeQuickView, 500);">Add to Cart</button>
                <a href="product.html?id=${product.id}" style="color:var(--accent-color); text-align:center; display:block; margin-top:1.5rem; text-decoration:none;">View Full Details →</a>
            </div>
        `;
        qvOverlay.classList.add('show');
    };
    
    window.closeQuickView = function() {
        qvOverlay.classList.remove('show');
    };
    
    qvOverlay.addEventListener('click', (e) => {
        if(e.target === qvOverlay) closeQuickView();
    });

    // Back to Top Logic
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            bttBtn.classList.add('visible');
        } else {
            bttBtn.classList.remove('visible');
        }
    });
    
    bttBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
