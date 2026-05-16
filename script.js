const categories = [
    { id: 'electronics', name: 'Electronics Accessories', imgSet: ['1505740420928-5e560c06d30e', '1523275335684-37898b6baf30', '1600080972464-8e5f35f63d08', '1546868871-7041f2a55e12'] },
    { id: 'makeup', name: 'Women\'s Beauty', imgSet: ['1596462502278-27bfdc403348', '1512496015851-a1fbbfcbd3c4', '1620916566398-39f1143ab7be'] },
    { id: 'baby', name: 'Baby Products', imgSet: ['1515488042361-ee00e0ddd4e4', '1519689680058-324335c77eba', '1595967755821-0e1dbf3a7434', '1522771930-ddc345371c66'] },
    { id: 'fashion', name: 'Fashion & Clothing', imgSet: ['1515886657613-9f3515b0c78f', '1541099649105-f69ad21f3246', '1542291026-7eec264c27ff'] },
    { id: 'mobiles', name: 'Mobiles', imgSet: ['1511707171634-5f897ff02aa9', '1580910051074-3eb694886505', '1601784551446-20c9e07cddea'] },
    { id: 'home', name: 'Home & Furniture', imgSet: ['1555041469-a586c61ea9bc', '1583847268964-b28ce7f31562'] },
    { id: 'appliances', name: 'Appliances', imgSet: ['1584224971598-cb5f7e6514e8', '1556228578-0d85b1a4d571'] },
    { id: 'health', name: 'Food & Health', imgSet: ['1514228742587-6b1558fefa46'] },
    { id: 'auto', name: 'Auto Accessories', imgSet: ['1505740420928-5e560c06d30e'] },
    { id: 'two-wheelers', name: '2 Wheelers', imgSet: ['1558981806-ec527fa84c39'] },
    { id: 'sports', name: 'Sports & Fitness', imgSet: ['1515886657613-9f3515b0c78f'] },
    { id: 'books', name: 'Books & More', imgSet: ['1496181133206-80ce9b88a853'] },
    { id: 'furniture', name: 'Furniture', imgSet: ['1555041469-a586c61ea9bc'] }
];

const subCategoryData = {
    fashion: [
        { name: "Trendy", img: "1515886657613-9f3515b0c78f" },
        { name: "Shirts", img: "1602810318383-e386cc2a3ccf" },
        { name: "Jeans", img: "1541099649105-f69ad21f3246" },
        { name: "Shoes", img: "1542291026-7eec264c27ff" },
        { name: "Watches", img: "1524592094714-0f0654e20314" },
        { name: "Kids", img: "1519689680058-324335c77eba" },
        { name: "Luggage", img: "1553531384-411a4a8f61eb" },
        { name: "Formal Wear", img: "1507679622140-6290aa0b98bc" }
    ],
    mobiles: [
        { name: "iPhone", img: "1580910051074-3eb694886505" },
        { name: "Samsung", img: "1601784551446-20c9e07cddea" },
        { name: "Motorola", img: "1511707171634-5f897ff02aa9" },
        { name: "Vivo", img: "1592899677977-9c1341401639" },
        { name: "Realme", img: "1533228100845-08145a01de14" },
        { name: "Poco", img: "1598327105650-59b53f0e6bfb" },
        { name: "Oppo", img: "1565849904071-f6340528aca8" },
        { name: "Google", img: "1505156868547-9b19f44f598b" }
    ],
    beauty: [
        { name: "Skin Care", img: "1556228578-0d85b1a4d571" },
        { name: "Hair Care", img: "1527799820374-dcf8d9d4a388" },
        { name: "Makeup", img: "1596462502278-27bfdc403348" },
        { name: "Mens Grooming", img: "1620916566398-39f1143ab7be" },
        { name: "Fragrances", img: "1587406846511-d839f5f08832" },
        { name: "Derma", img: "1571781256007-65d321584e0d" },
        { name: "Hygiene", img: "1584308666744-247b87508493" }
    ],
    electronics: [
        { name: "Laptops", img: "1496181133206-80ce9b88a853" },
        { name: "Tablets", img: "1544244015-0f1140625d8d" },
        { name: "Wearables", img: "1523275335684-37898b6baf30" },
        { name: "Accessories", img: "1527864551452-14518b22e176" },
        { name: "Cameras", img: "1516035069371-29a1b244cc32" },
        { name: "Gaming Hub", img: "1600080972464-8e5f35f63d08" },
        { name: "Storage", img: "1588508065123-287b28e8f6e8" },
        { name: "Networking", img: "1544197150-b99a580bb7a8" }
    ],
    home: [
        { name: "Utilities", img: "1555041469-a586c61ea9bc" },
        { name: "Decor", img: "1583847268964-b28ce7f31562" },
        { name: "Beds", img: "1505691938895-1758d7feb511" },
        { name: "Wall Decor", img: "1513694203232-719a280e022f" },
        { name: "Bedsheets", img: "1522771739844-6a9f6d5f14af" },
        { name: "Gardening", img: "1416879598056-0e6b69b22e11" },
        { name: "Sofas", img: "1555041469-a586c61ea9bc" },
        { name: "Drinkware", img: "1514228742587-6b1558fefa46" },
        { name: "Furnishing", img: "1583847268964-b28ce7f31562" },
        { name: "Cookware", img: "1584224971598-cb5f7e6514e8" },
        { name: "Hardware", img: "1505740420928-5e560c06d30e" },
        { name: "Electricals", img: "1546868871-7041f2a55e12" },
        { name: "Mattresses", img: "1505691938895-1758d7feb511" },
        { name: "Bathroom", img: "1584622650111-993a426fbf0a" }
    ],
    appliances: [
        { name: "10 Mins Delivery", img: "1584224971598-cb5f7e6514e8" },
        { name: "Cooling", img: "1556228578-0d85b1a4d571" },
        { name: "Television", img: "1593305846765-55146b9a89c3" },
        { name: "Kitchen", img: "1584224971598-cb5f7e6514e8" },
        { name: "ACs", img: "1556228578-0d85b1a4d571" },
        { name: "Fridges", img: "1584622650111-993a426fbf0a" },
        { name: "Microwaves", img: "1584224971598-cb5f7e6514e8" },
        { name: "Built-in", img: "1556228578-0d85b1a4d571" },
        { name: "Laundry", img: "1584622650111-993a426fbf0a" }
    ],
    baby: [
        { name: "Get in Mins", img: "1515488042361-ee00e0ddd4e4" },
        { name: "Toys & Games", img: "1519689680058-324335c77eba" },
        { name: "Top Brands", img: "1595967755821-0e1dbf3a7434" },
        { name: "Stationery", img: "1456735190827-d1262f71b8a3" },
        { name: "Summer Play", img: "1519689680058-324335c77eba" },
        { name: "School", img: "1456735190827-d1262f71b8a3" },
        { name: "Pet Toys", img: "1519689680058-324335c77eba" },
        { name: "Diapers", img: "1515488042361-ee00e0ddd4e4" },
        { name: "Skin Care", img: "1556228578-0d85b1a4d571" },
        { name: "Wipes", img: "1515488042361-ee00e0ddd4e4" },
        { name: "Walkers", img: "1519689680058-324335c77eba" },
        { name: "Bedding", img: "1522771739844-6a9f6d5f14af" },
        { name: "Feeding", img: "1595967755821-0e1dbf3a7434" }
    ],
    health: [
        { name: "Dry Fruits", img: "1608686207856-001b95cf60ca" },
        { name: "Beverages", img: "1514228742587-6b1558fefa46" },
        { name: "Gourmet", img: "1490481651843-f111f11a43d9" },
        { name: "Chocolates", img: "1542291026-7eec264c27ff" },
        { name: "Breakfast", img: "1505740420928-5e560c06d30e" },
        { name: "Cooking", img: "1584224971598-cb5f7e6514e8" },
        { name: "Household", img: "1584622650111-993a426fbf0a" },
        { name: "Health Drinks", img: "1514228742587-6b1558fefa46" },
        { name: "Proteins", img: "1596462502278-27bfdc403348" },
        { name: "Vitamins", img: "1571781256007-65d321584e0d" },
        { name: "Ayurveda", img: "1556228578-0d85b1a4d571" },
        { name: "Pet Food", img: "1583847268964-b28ce7f31562" }
    ],
    auto: [
        { name: "Dashcams", img: "1505740420928-5e560c06d30e" },
        { name: "Helmets", img: "1558981806-ec527fa84c39" },
        { name: "Covers", img: "1494976388531-d1058494cdd8" },
        { name: "Car Washer", img: "1584224971598-cb5f7e6514e8" },
        { name: "Tyres", img: "1580273916550-e323be2ae537" },
        { name: "Media Player", img: "1593305846765-55146b9a89c3" },
        { name: "Car Mats", img: "1494976388531-d1058494cdd8" },
        { name: "Engine Oils", img: "1608686207856-001b95cf60ca" },
        { name: "Cleaners", img: "1556228578-0d85b1a4d571" },
        { name: "Lights", img: "1513694203232-719a280e022f" },
        { name: "Batteries", img: "1505740420928-5e560c06d30e" },
        { name: "Riding Gear", img: "1558981806-ec527fa84c39" },
        { name: "Subwoofers", img: "1600080972464-8e5f35f63d08" },
        { name: "Air Freshener", img: "1587406846511-d839f5f08832" }
    ],
    furniture: [
        { name: "Mattresses", img: "1505691938895-1758d7feb511" },
        { name: "Office chairs", img: "1583847268964-b28ce7f31562" },
        { name: "Beds", img: "1505691938895-1758d7feb511" },
        { name: "Wardrobes", img: "1583847268964-b28ce7f31562" },
        { name: "Office tables", img: "1584224971598-cb5f7e6514e8" },
        { name: "Recliners", img: "1555041469-a586c61ea9bc" },
        { name: "Hammock", img: "1513694203232-719a280e022f" },
        { name: "Collapsibles", img: "1583847268964-b28ce7f31562" },
        { name: "Bean bags", img: "1555041469-a586c61ea9bc" },
        { name: "Home temples", img: "1583847268964-b28ce7f31562" },
        { name: "Kids furniture", img: "1519689680058-324335c77eba" },
        { name: "Sofas", img: "1555041469-a586c61ea9bc" },
        { name: "Dining sets", img: "1583847268964-b28ce7f31562" },
        { name: "Coffee tables", img: "1584224971598-cb5f7e6514e8" },
        { name: "Dressing tables", img: "1583847268964-b28ce7f31562" },
        { name: "Sofa beds", img: "1555041469-a586c61ea9bc" },
        { name: "TV units", img: "1584224971598-cb5f7e6514e8" },
        { name: "Laptop tables", img: "1584224971598-cb5f7e6514e8" },
        { name: "Shoe racks", img: "1583847268964-b28ce7f31562" },
        { name: "Inflatable sofas", img: "1555041469-a586c61ea9bc" },
        { name: "Video units", img: "1584224971598-cb5f7e6514e8" }
    ]
};

const genericSubcats = [
    { name: "New Arrivals", img: "1490481651843-f111f11a43d9" },
    { name: "Bestsellers", img: "1550009158-9fffc49c8f2b" },
    { name: "Discounts", img: "1607082348524-ce7103328ee6" }
];

const allProducts = [];

categories.forEach(cat => {
    const subList = subCategoryData[cat.id] || genericSubcats;
    for (let i = 1; i <= 100; i++) {
        let imgId = cat.imgSet[i % cat.imgSet.length];
        let subcat = subList[i % subList.length].name;
        allProducts.push({
            id: `${cat.id}-${i}`,
            name: `${subcat} - Premium ${cat.name} Item ${i}`,
            category: cat.id,
            categoryName: cat.name,
            subCategory: subcat,
            price: Math.floor(Math.random() * 3000) + 299,
            image: `https://images.unsplash.com/photo-${imgId}?w=500&q=80`,
            description: `This is a premium ${cat.name.toLowerCase()} item. Crafted with care and high quality materials. Experience the best value with DigvijayCart. Specifications include standard warranty, durable build, and excellent performance. Perfect for everyday use.`
        });
    }
});

// Helper to render product card
function createProductCard(product) {
    return `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
            <img src="${product.image}" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(product.name)}&background=random'" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Premium Quality</p>
                <div class="product-footer">
                    <span class="price">₹${product.price.toLocaleString('en-IN')}</span>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${product.id}', this)">Add to Cart</button>
                </div>
            </div>
            <button class="quick-view-btn" onclick="openQuickView('${product.id}', event)">👁️</button>
        </div>
    `;
}

// Cart Logic
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function updateCartCount() {
    document.querySelectorAll('.cart-count').forEach(span => span.textContent = cartItems.length);
}

function addToCart(productId, btn) {
    cartItems.push(productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
    
    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = 'var(--accent-color)';
    btn.style.color = 'var(--bg-color)';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = 'transparent';
        btn.style.color = 'var(--text-color)';
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Search Logic
    const searchInputs = document.querySelectorAll('#global-search');
    
    function performSearch(inputVal) {
        if (inputVal.trim() !== '') {
            window.location.href = 'products.html?search=' + encodeURIComponent(inputVal.trim());
        }
    }
    
    searchInputs.forEach(input => {
        // Create suggestion box
        const suggestionBox = document.createElement('div');
        suggestionBox.className = 'search-suggestions';
        input.parentNode.appendChild(suggestionBox);
        
        input.addEventListener('input', function() {
            const val = this.value.trim().toLowerCase();
            if (val.length < 2) {
                suggestionBox.style.display = 'none';
                return;
            }
            
            // Filter products
            const matches = allProducts.filter(p => 
                p.name.toLowerCase().includes(val) || 
                p.categoryName.toLowerCase().includes(val) || 
                p.subCategory.toLowerCase().includes(val)
            ).slice(0, 5); // top 5
            
            if (matches.length > 0) {
                suggestionBox.innerHTML = matches.map(p => `
                    <a href="product.html?id=${p.id}" class="suggestion-item">
                        <img src="${p.image}" alt="${p.name}">
                        <div class="suggestion-item-info">
                            <span class="suggestion-title">${p.name}</span>
                            <span class="suggestion-cat">${p.categoryName} > ${p.subCategory}</span>
                        </div>
                    </a>
                `).join('');
                suggestionBox.style.display = 'flex';
            } else {
                suggestionBox.style.display = 'none';
            }
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!input.parentNode.contains(e.target)) {
                suggestionBox.style.display = 'none';
            }
        });

        // Show suggestions on focus if there's text
        input.addEventListener('focus', function() {
            if (this.value.trim().length >= 2 && suggestionBox.innerHTML !== '') {
                suggestionBox.style.display = 'flex';
            }
        });

        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
        
        // Find the adjacent search icon
        const icon = input.previousElementSibling;
        if (icon && icon.classList.contains('search-icon')) {
            icon.style.cursor = 'pointer';
            icon.addEventListener('click', () => {
                performSearch(input.value);
            });
        }
    });
    
    // Update cart count on load
    updateCartCount();

    // Dynamic Active Class
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    const rootUrlParams = new URLSearchParams(window.location.search);
    const globalCatId = rootUrlParams.get('cat');
    const globalSubcatId = rootUrlParams.get('subcat');

    // Update active state on category icon bar
    if(globalCatId) {
        document.querySelectorAll('.cat-icon-item').forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('href').includes(`cat=${globalCatId}`)) {
                item.classList.add('active');
            }
        });
        
        // Handle "makeup" vs "beauty" mapping
        const mappedCatId = (globalCatId === 'makeup') ? 'beauty' : globalCatId;
        
        // Render Subcategories if container exists
        const subContainer = document.getElementById('subcategory-container');
        if (subContainer) {
            const subList = subCategoryData[mappedCatId] || genericSubcats;
            let html = '';
            subList.forEach(sub => {
                const imgUrl = `https://images.unsplash.com/photo-${sub.img}?w=150&q=80`;
                const subcatHref = `category.html?cat=${mappedCatId}&subcat=${encodeURIComponent(sub.name)}`;
                const isActive = (globalSubcatId === sub.name) ? 'style="border: 2px solid var(--accent-color); transform: scale(1.05);"' : '';
                html += `
                    <a href="${subcatHref}" class="subcat-card cat-theme-${mappedCatId}" ${isActive}>
                        <div class="subcat-img-wrapper">
                            <img src="${imgUrl}" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(sub.name)}&background=random&color=fff&rounded=true'" alt="${sub.name}">
                        </div>
                        <span>${sub.name}</span>
                    </a>
                `;
            });
            subContainer.innerHTML = html;
            subContainer.style.display = 'flex';
        }
    } else if (currentPath === 'index.html' || currentPath === '') {
        const firstIcon = document.querySelector('.cat-icon-item');
        if (firstIcon) firstIcon.classList.add('active');
    }

    // 1. Home Page Logic (Show 10 of each)
    const homeElectronics = document.getElementById('home-electronics');
    if (homeElectronics) {
        ['electronics', 'makeup', 'baby', 'fashion', 'mobiles'].forEach(catId => {
            const container = document.getElementById(`home-${catId}`);
            if (container) {
                const catProducts = allProducts.filter(p => p.category === catId).slice(0, 10);
                container.innerHTML = catProducts.map(createProductCard).join('');
            }
        });
    }

    // 2. Category Page Logic (Show all 100 of category, filtered by subcat if provided)
    const categoryGrid = document.getElementById('category-grid');
    if (categoryGrid) {
        let catProducts = allProducts.filter(p => p.category === (globalCatId || 'electronics'));
        
        if (globalSubcatId) {
            catProducts = catProducts.filter(p => p.subCategory === globalSubcatId);
        }

        if(catProducts.length > 0) {
            document.getElementById('category-title').textContent = `${globalSubcatId ? globalSubcatId + ' in ' : ''}${catProducts[0].categoryName} (${catProducts.length} Items)`;
            categoryGrid.innerHTML = catProducts.map(createProductCard).join('');
        } else {
            document.getElementById('category-title').textContent = 'No Products Found';
            categoryGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 2rem;">No items match this filter.</p>';
        }
    }

    // 3. All Products Page Logic
    const allProductsGrid = document.getElementById('all-products-grid');
    if (allProductsGrid) {
        const globalSearch = rootUrlParams.get('search');
        let displayProducts = allProducts;
        
        if (globalSearch) {
            const term = globalSearch.toLowerCase();
            displayProducts = allProducts.filter(p => p.name.toLowerCase().includes(term) || p.categoryName.toLowerCase().includes(term) || p.subCategory.toLowerCase().includes(term));
            document.title = 'Search: ' + globalSearch + ' | DigvijayCart';
            const pageTitle = document.querySelector('.category-header h1');
            if(pageTitle) pageTitle.textContent = 'Search Results for "' + globalSearch + '"';
        }
        
        if (displayProducts.length > 0) {
            allProductsGrid.innerHTML = displayProducts.map(createProductCard).join(''); 
        } else {
            allProductsGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 2rem; font-size:1.2rem;">No products found matching "' + globalSearch + '".</p>';
        }
    }

    // 4. Product Details Page Logic
    const productDetails = document.getElementById('product-details-container');
    if (productDetails) {
        const productId = rootUrlParams.get('id');
        const product = allProducts.find(p => p.id === productId) || allProducts[0]; // fallback
        
        document.title = `${product.name} | DigvijayCart`;
        
        productDetails.innerHTML = `
            <div class="product-detail-layout">
                <div class="product-detail-img">
                    <img src="${product.image}" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(product.name)}&background=random'" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <p class="category-tag">${product.categoryName} > ${product.subCategory}</p>
                    <h1>${product.name}</h1>
                    <div class="price-huge">₹${product.price.toLocaleString('en-IN')}</div>
                    <p class="desc">${product.description}</p>
                    <button class="btn-primary" onclick="addToCart(this)" style="width:100%; margin-bottom: 2rem;">Add to Cart</button>
                    
                    <div class="external-links">
                        <h3>Compare Prices & Buy Original:</h3>
                        <a href="https://www.amazon.in/s?k=${encodeURIComponent(product.name)}" target="_blank" class="btn-amazon">View on Amazon.in</a>
                        <a href="https://www.flipkart.com/search?q=${encodeURIComponent(product.name)}" target="_blank" class="btn-flipkart">View on Flipkart</a>
                    </div>
                </div>
            </div>
        `;
    }
});

// Smart Sticky Header Scroll Logic
let lastScrollTop = 0;
let scrollUpStart = 0;
let isScrollingUp = false;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Downscroll - hide lower header
        if (scrollTop > 150) {
            header.classList.add('shrink');
        }
        isScrollingUp = false;
        scrollUpStart = 0;
    } else if (scrollTop < lastScrollTop) {
        // Upscroll - show lower header
        if (!isScrollingUp) {
            isScrollingUp = true;
            scrollUpStart = lastScrollTop;
        }
        
        // Require about 50px (approx 1.5cm depending on DPI) of upward scroll before revealing
        if (scrollUpStart - scrollTop > 50 || scrollTop <= 0) {
            header.classList.remove('shrink');
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
