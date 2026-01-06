/* === RUSH MOTO 最終修正版 script.js === */

const defaultProducts = [
    { id: 101, name: "合格亞杰PL1排氣管", price: 15500, category: "exhaust", img: "image/pl1.jpg", description: "一款專為機車設計的合法認證改裝排氣管。" },
    { id: 102, name: "合格黃蜂SS2排氣管", price: 14300, category: "exhaust", img: "image/ss2.jpg", description: "專為符合台灣環保法規與噪音標準而設計的高階改裝排氣管。" },
    { id: 103, name: "合格黃蜂BT1排氣管", price: 12000, category: "exhaust", img: "image/bt1.jpg", description: "黃蜂 BT1 系列是專為 2025 年台灣改裝排氣管法規所設計。" },
    { id: 104, name: "合格章魚280黑金鈦排氣管", price: 14000, category: "exhaust", img: "image/280.jpg", description: "兼顧合法噪音認證、性能提升與獨特外觀。" },
    { id: 105, name: "Moto-R M1-S排氣管", price: 15300, category: "exhaust", img: "image/m1s.jpg", description: "合法認證回壓靜音排氣管。" },
    { id: 201, name: "Brembo 對四卡鉗", price: 4999, category: "brake", img: "image/brembo.jpg", description: "高性能煞車系統，優異的剛性和精確反應。" },
    { id: 202, name: "BREMBO 螃蟹卡鉗", price: 3900, category: "brake", img: "image/brembo2.jpg", description: "機車改裝中非常受歡迎的升級品，因外形像螃蟹得名。" },
    { id: 203, name: "加祿達金屬油管", price: 1500, category: "brake", img: "image/加祿達.jpg", description: "提升煞車靈敏度、手感紮實。" },
    { id: 204, name: "FAR SA黑金特仕碟盤", price: 3600, category: "brake", img: "image/far.jpg", description: "黑金雙色設計，採用日本進口SUS420J2不鏽鋼。" },
    { id: 205, name: "FAR赤鬼碟盤", price: 2900, category: "brake", img: "image/far2.jpg", description: "主打黑化防鏽鍍層與「蟬鳴聲」體驗。" },
    { id: 301, name: "鯊魚工廠X2後避震", price: 24800, category: "suspension", img: "image/x2.jpg", description: "複筒設計，讓伸側與壓側阻尼調整互不干擾。" },
    { id: 302, name: "DY競技版前避震", price: 6600, category: "suspension", img: "image/dy.jpg", description: "CNC精緻工藝、針對騎士體重客製化調整。" },
    { id: 303, name: "FREAK FACTORY Z2 前避震", price: 13000, category: "suspension", img: "image/z2.jpg", description: "高性能倒立式設計前叉。" },
    { id: 304, name: "野蠻公牛ARX一般版", price: 13000, category: "suspension", img: "image/arx.jpg", description: "高 CP 值、一體式卡座設計。" },
    { id: 401, name: "REVENO傳動", price: 9500, category: "package", img: "image/reveno.jpg", description: "多片式離合器，有效提升加速反應。" },
    { id: 402, name: "SCRK傳動", price: 7800, category: "package", img: "image/scrk.jpg", description: "「冠軍傳動」，改善起中速加速爆發力。" },
    { id: 403, name: "炸彈鯊傳動", price: 9700, category: "package", img: "image/bomp.jpg", description: "CNC精密加工，強化起步抓力與排削效果。" },
    { id: 404, name: "WF傳動", price: 8100, category: "package", img: "image/wf.jpg", description: "提升機車動力、加速和性能。" },
    { id: 405, name: "aRacer MINI X2電腦", price: 9000, category: "package", img: "image/minix.jpg", description: "全取代噴射電腦，支援TCS與數據分析。" },
    { id: 501, name: "AJ尾燈", price: 3650, category: "lighting", img: "image/aj.jpg", description: "炫麗開機動畫、流水方向燈。" },
    { id: 502, name: "AJ6尾燈", price: 5300, category: "lighting", img: "image/aj6.jpg", description: "針對YAMAHA勁戰六代設計，辨識度極高。" },
    { id: 503, name: "幻影尾燈", price: 3780, category: "lighting", img: "image/drg.jpg", description: "針對SYM DRG設計，立體造型燈效。" },
    { id: 504, name: "APL魚眼大燈", price: 9765, category: "lighting", img: "image/apl.jpg", description: "金鑫燈藝開發，提升亮度與夜間視野。" },
    { id: 505, name: "瓦甘達日行燈", price: 3650, category: "lighting", img: "image/瓦甘達.jpg", description: "獨特雙刃造型，可變換七彩燈光。" },
    { id: 601, name: "ZOO水箱護罩", price: 1080, category: "exterior", img: "image/zoo.jpg", description: "64鈦合金製，阻擋碎石撞擊水箱。" },
    { id: 602, name: "APEXX短牌架", price: 1380, category: "exterior", img: "image/apexx.jpg", description: "牌照上移設計，視覺更美觀。" },
    { id: 603, name: "KOSO空濾外蓋", price: 900, category: "exterior", img: "image/koso.jpg", description: "3D流線造型，提升進氣容積。" },
    { id: 604, name: "APEXX GP前土除", price: 1380, category: "exterior", img: "image/gp.jpg", description: "碳纖維壓花，競速風格進氣孔。" },
    { id: 605, name: "KOSO後土除", price: 780, category: "exterior", img: "image/koso2.jpg", description: "有效阻擋泥水、工業塑鋼材質。" },
    { id: 701, name: "糯米腸握把套", price: 350, category: "accessories", img: "image/糯米腸.jpg", description: "柔軟防滑、手感舒適。" },
    { id: 702, name: "HUATAI正鈦螺絲", price: 130, category: "accessories", img: "image/huatai.jpg", description: "100%台灣製造，輕量化不掉色。" },
    { id: 703, name: "燻黑無痕燈殼", price: 900, category: "accessories", img: "image/燻黑.jpg", description: "表面光滑無格紋，視覺更霸氣。" },
    { id: 704, name: "APEXX飛旋踏板", price: 1600, category: "accessories", img: "image/apexx2.jpg", description: "鋁合金材質，可自動彈出機構。" },
    { id: 705, name: "APEXX油箱蓋", price: 680, category: "accessories", img: "image/apexx3.jpg", description: "陽極上色，提升外觀質感。" }
];

// 核心狀態
let products = JSON.parse(localStorage.getItem('rush_products')) || defaultProducts;
let currentUser = null; 
let cart = JSON.parse(localStorage.getItem('rush_cart')) || []; 
let currentCategory = 'all'; 

const categoryNames = {
    exhaust: "排氣管系列", brake: "煞車制動", suspension: "懸吊系統", package: "動力升級",
    lighting: "燈系全套", exterior: "外觀升級", accessories: "質感小物"
};

/* --- 全域函數 (供 HTML onclick 調用) --- */

window.showToast = function(msg, type = "success") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const emoji = type === 'success' ? '✅' : '⚠️';
    toast.innerHTML = `<span style="font-size:1.2rem; margin-right:8px;">${emoji}</span> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.animation = "fadeOut 0.3s forwards"; setTimeout(() => toast.remove(), 300); }, 3000);
};

window.switchAuth = function(type) {
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');
    const toRegHint = document.getElementById('to-reg');
    if (type === 'register') {
        loginForm.style.display = 'none';
        regForm.style.display = 'block';
        toRegHint.style.display = 'none';
    } else {
        loginForm.style.display = 'block';
        regForm.style.display = 'none';
        toRegHint.style.display = 'block';
    }
};

window.triggerFilter = function(filter) { 
    currentCategory = filter;
    const searchTerm = document.getElementById('product-search').value;
    renderProducts(currentCategory, searchTerm); 
    document.getElementById('shop-start').scrollIntoView({ behavior: 'smooth' }); 
};

window.handleSort = function() {
    const sortValue = document.getElementById('sort-select').value;
    const searchTerm = document.getElementById('product-search').value;
    if (sortValue === 'price-low') products.sort((a, b) => a.price - b.price);
    else if (sortValue === 'price-high') products.sort((a, b) => b.price - a.price);
    else products.sort((a, b) => a.id - b.id);
    renderProducts(currentCategory, searchTerm);
};

window.removeFromCart = function(index) {
    cart.splice(index, 1); updateCart(); saveCart();
    showToast("已移除商品");
}

window.deleteMsg = function(id) {
    if(!confirm("確定刪除？")) return;
    let msgList = JSON.parse(localStorage.getItem('site_messages')) || [];
    localStorage.setItem('site_messages', JSON.stringify(msgList.filter(m => m.id !== id)));
    renderAdminMessages();
}

/* --- 內部函數 --- */

function saveCart() { localStorage.setItem('rush_cart', JSON.stringify(cart)); }

function addToCartAnimation(btn, imgUrl) {
    const cartIcon = document.getElementById('cart-target'); 
    if (!cartIcon) return;
    const imgClone = document.createElement('img');
    imgClone.src = imgUrl; imgClone.className = 'flying-img';
    const rect = btn.closest('.card') ? btn.closest('.card').querySelector('img').getBoundingClientRect() : btn.closest('.detail-content').querySelector('img').getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();
    imgClone.style.top = `${rect.top}px`; 
    imgClone.style.left = `${rect.left}px`; 
    imgClone.style.width = `${rect.width}px`; 
    imgClone.style.height = `${rect.height}px`;
    document.body.appendChild(imgClone);
    setTimeout(() => { 
        imgClone.style.top = `${cartRect.top}px`; 
        imgClone.style.left = `${cartRect.left}px`; 
        imgClone.style.width = '20px'; imgClone.style.height = '20px'; imgClone.style.opacity = '0.5'; 
    }, 10);
    setTimeout(() => { 
        imgClone.remove(); 
        const badge = document.getElementById('cart-count');
        badge.style.transform = "scale(1.5)"; setTimeout(() => badge.style.transform = "scale(1)", 200); 
    }, 800);
}

function openProductDetail(p) {
    const modal = document.getElementById('product-detail-modal');
    document.getElementById('detail-img').src = p.img;
    document.getElementById('detail-title').innerText = p.name;
    document.getElementById('detail-tag').innerText = categoryNames[p.category];
    document.getElementById('detail-desc').innerText = p.description || "此商品目前沒有詳細說明。";
    document.getElementById('detail-price').innerText = `NT$ ${p.price.toLocaleString()}`;
    const addBtn = document.getElementById('detail-add-btn');
    addBtn.onclick = (e) => {
        cart.push(p); updateCart(); saveCart();
        addToCartAnimation(e.target, p.img);
        showToast(`已加入: ${p.name}`);
        modal.style.display = 'none';
    };
    modal.style.display = 'flex';
}

function renderProducts(filter = 'all', searchTerm = '') {
    const container = document.getElementById('all-products-container');
    if(!container) return;
    container.innerHTML = '';
    let categoriesToShow = filter === 'all' ? Object.keys(categoryNames) : [filter];
    categoriesToShow.forEach(catKey => {
        const filteredProds = products.filter(p => p.category === catKey && p.name.toLowerCase().includes(searchTerm.toLowerCase()));
        if (filteredProds.length > 0) {
            const section = document.createElement('div');
            section.className = 'category-section reveal';
            section.innerHTML = `<h3 class="category-title">${categoryNames[catKey]}</h3><div class="product-grid"></div>`;
            const grid = section.querySelector('.product-grid');
            filteredProds.forEach(p => {
                const card = document.createElement('div');
                card.className = 'card';
                card.onclick = (e) => { if(!e.target.classList.contains('btn-add')) openProductDetail(p); };
                card.innerHTML = `
                    <div class="card-img"><img src="${p.img}" alt="${p.name}"></div>
                    <div class="card-info">
                        <span class="tag">${categoryNames[p.category]}</span>
                        <h3>${p.name}</h3>
                        <p class="price">NT$ ${p.price.toLocaleString()}</p>
                        <button class="btn-add" data-id="${p.id}" data-img="${p.img}">加入購物車</button>
                    </div>`;
                grid.appendChild(card);
            });
            container.appendChild(section);
        }
    });
    // 動態綁定加入按鈕
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const p = products.find(prod => prod.id === id);
            cart.push(p); updateCart(); saveCart();
            addToCartAnimation(e.target, btn.dataset.img);
            showToast(`已加入: ${p.name}`);
        };
    });
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-items').innerHTML = cart.map((p, index) => `
        <li>
            <div>
                <div style="font-weight:bold;">${p.name}</div>
                <div style="font-size:0.85rem; color:#aaa;">$${p.price.toLocaleString()}</div>
            </div>
            <button class="btn-remove-item" onclick="removeFromCart(${index})">刪除</button>
        </li>`).join('');
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    document.getElementById('total-price').innerText = total.toLocaleString();
}

window.submitContact = function(event) {
    event.preventDefault();
    const newMsg = {
        id: Date.now(),
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        content: document.getElementById('contact-message').value,
        time: new Date().toLocaleString()
    };
    let msgList = JSON.parse(localStorage.getItem('site_messages')) || [];
    msgList.push(newMsg);
    localStorage.setItem('site_messages', JSON.stringify(msgList));
    showToast('🎉 您的諮詢已送出！');
    document.getElementById('contact-form').reset();
}

function renderAdminMessages() {
    const tbody = document.getElementById('admin-msg-list-body');
    if (!tbody) return;
    const msgList = JSON.parse(localStorage.getItem('site_messages')) || [];
    if (msgList.length === 0) { tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">目前沒有新訊息</td></tr>'; return; }
    tbody.innerHTML = msgList.map(msg => `
        <tr>
            <td style="padding:10px;">${msg.time}</td>
            <td style="padding:10px;">${msg.name}</td>
            <td style="padding:10px;">${msg.content}</td>
            <td style="padding:10px;"><button class="btn-delete" onclick="deleteMsg(${msg.id})">刪除</button></td>
        </tr>`).join('');
}

function renderUserUI() {
    const userMenu = document.getElementById('user-menu');
    if (!userMenu) return;
    if (currentUser) {
        let html = `<span class="user-name-display">Hi, ${currentUser.name}</span>`;
        if(currentUser.username === 'admin') html += `<button id="admin-btn" class="btn-admin">後台</button>`;
        html += `<button id="logout-btn" class="btn-logout">登出</button>`;
        userMenu.innerHTML = html;
    } else { 
        userMenu.innerHTML = `<button id="open-auth" class="btn-nav-auth">登入</button>`; 
    }
}

// 頁面加載
window.onload = () => { 
    document.getElementById('preloader').style.opacity = '0'; 
    setTimeout(() => document.getElementById('preloader').style.display = 'none', 500); 
};

document.addEventListener('DOMContentLoaded', () => {
    renderUserUI(); renderProducts(); updateCart();

    // 點擊事件監聽
    document.addEventListener('click', (e) => {
        if(e.target.id === 'open-auth') { document.getElementById('auth-modal').style.display = 'flex'; switchAuth('login'); }
        if(e.target.classList.contains('close-modal')) { e.target.closest('.modal').style.display = 'none'; }
        if(e.target.classList.contains('modal')) e.target.style.display = 'none';
        if(e.target.id === 'logout-btn') { if(confirm("確定登出？")) { currentUser = null; renderUserUI(); showToast("已登出"); } }
        if(e.target.id === 'admin-btn') { document.getElementById('admin-modal').style.display = 'flex'; renderAdminMessages(); }
        if(e.target.id === 'open-cart') document.getElementById('cart-modal').style.display = 'flex';
        
        if(e.target.classList.contains('nav-cat')) {
            e.preventDefault();
            triggerFilter(e.target.dataset.filter);
        }
    });

    // 登入
    document.getElementById('login-form').onsubmit = (e) => {
        e.preventDefault();
        const u = document.getElementById('login-user').value.trim();
        const p = document.getElementById('login-pass').value.trim();
        if (u === 'admin' && p === '013112') {
            currentUser = { name: '超級管理員', username: 'admin' };
            showToast("✅ 管理員權限啟動");
        } else {
            let users = JSON.parse(localStorage.getItem('rush_users')) || [];
            const foundUser = users.find(user => user.username === u && user.password === p);
            if (foundUser) { currentUser = foundUser; showToast(`歡迎回來，${u}`); }
            else { showToast("帳密錯誤", "error"); return; }
        }
        document.getElementById('auth-modal').style.display = 'none';
        renderUserUI();
    };

    // 註冊
    document.getElementById('register-form').onsubmit = (e) => {
        e.preventDefault();
        const u = document.getElementById('reg-user').value.trim();
        const p = document.getElementById('reg-pass').value.trim();
        let users = JSON.parse(localStorage.getItem('rush_users')) || [];
        if (users.find(user => user.username === u) || u === 'admin') { showToast("帳號已存在", "error"); return; }
        users.push({ username: u, password: p, name: u });
        localStorage.setItem('rush_users', JSON.stringify(users));
        showToast("註冊成功！請登入");
        switchAuth('login');
    };

    document.getElementById('clear-cart').onclick = () => { if(confirm("確定清空？")) { cart = []; updateCart(); saveCart(); } };
    document.getElementById('btn-checkout').onclick = () => {
        if(cart.length===0) return showToast("購物車空的", "error");
        if(!currentUser) { showToast("請先登入！", "error"); document.getElementById('auth-modal').style.display='flex'; }
        else { showToast("✅ 訂單已送出！"); cart = []; updateCart(); saveCart(); document.getElementById('cart-modal').style.display='none'; }
    };

    document.getElementById('product-search').oninput = (e) => renderProducts(currentCategory, e.target.value);

    // 輪播
    const slides = document.querySelectorAll('.slide'); const dots = document.querySelectorAll('.dot'); let currSlide = 0;
    const showSlide = (i) => { 
        slides.forEach(s=>s.classList.remove('active')); dots.forEach(d=>d.classList.remove('active')); 
        slides[i].classList.add('active'); dots[i].classList.add('active'); currSlide=i; 
    };
    let slideTimer = setInterval(() => showSlide((currSlide+1)%slides.length), 5000);
    dots.forEach((d,i) => d.onclick = () => { clearInterval(slideTimer); showSlide(i); slideTimer = setInterval(() => showSlide((currSlide+1)%slides.length), 5000); });

    // 滾動特效
    const scrollHandler = () => { document.querySelectorAll('.reveal').forEach(el => { if(el.getBoundingClientRect().top < window.innerHeight-100) { el.style.opacity="1"; el.style.transform="translateY(0)"; } }); };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
});