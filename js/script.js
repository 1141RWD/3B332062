/* === RUSH MOTO 完整腳本修正版 === */

const defaultProducts = [
    { id: 101, name: "合格亞杰PL1排氣管", price: 15500, category: "exhaust", img: "image/pl1.jpg", description: "一款專為機車設計的合法認證改裝排氣管，其設計旨在兼顧競技風格的「砲管」外觀與符合環保法規的噪音標準。" },
    { id: 102, name: "合格黃蜂SS2排氣管", price: 14300, category: "exhaust", img: "image/ss2.jpg", description: "專為符合台灣環保法規與噪音標準而設計的高階改裝排氣管，其主要特點在於通過國家級檢驗，讓車友在提升性能的同時，能合法上路免受罰。" },
    { id: 103, name: "合格黃蜂BT1排氣管", price: 12000, category: "exhaust", img: "image/bt1.jpg", description: "黃蜂 BT1 系列 是 Bumblebee 專為符合 2025 年台灣改裝排氣管法規所設計的合格認證排氣管。" },
    { id: 104, name: "合格章魚280黑金鈦排氣管", price: 14000, category: "exhaust", img: "image/280.jpg", description: "是一款兼顧合法噪音認證、性能提升與獨特外觀的改裝排氣管。" },
    { id: 105, name: "Moto-R M1-S排氣管", price: 15300, category: "exhaust", img: "image/m1s.jpg", description: "是一款專為在追求引擎性能提升的同時，兼顧台灣噪音法規而設計的合法認證回壓靜音排氣管。" },
    { id: 201, name: "Brembo 對四卡鉗", price: 4999, category: "brake", img: "image/brembo.jpg", description: "高性能煞車系統的象徵，採用輕量高強度鋁合金製造，具有優異的剛性和精確的煞車反應。" },
    { id: 202, name: "BREMBO 螃蟹卡鉗", price: 3900, category: "brake", img: "image/brembo2.jpg", description: "機車改裝中非常受歡迎的升級品，因其外形像螃蟹而得名，主要優點是對稱雙活塞設計提供穩定制動與靈敏反應，高壓鑄造或CNC鍛造鋁合金本體，有助於散熱，適用於輕檔車和速克達的後煞車，或小排氣量車的前煞車升級，是性價比高的性能選擇。" },
    { id: 203, name: "加祿達金屬油管", price: 1500, category: "brake", img: "image/加祿達.jpg", description: "主要功能是提高煞車系統的性能與安全性，其設計能承受高溫高壓而不膨脹，使煞車反應更靈敏、手感更紮實。" },
    { id: 204, name: "FAR SA黑金特仕碟盤", price: 3600, category: "brake", img: "image/far.jpg", description: "黑金雙色設計、強調動感視覺與實用性能的機車碟盤，結合輕量化內盤與高散熱外盤，採用日本進口SUS420J2不鏽鋼，具備良好散熱、耐用、減少熱衰退等特色。" },
    { id: 205, name: "FAR赤鬼碟盤", price: 2900, category: "brake", img: "image/far2.jpg", description: "專為機車設計的經典款浮動碟盤，主打**黑化防鏽鍍層（用於監測安裝與咬合）、高CP值、帥氣外型與「蟬鳴聲」體驗，適合通勤與山道熱血玩家，提供穩定手感與碟盤友善性，是初階改裝的熱門選擇。" },
    { id: 301, name: "鯊魚工廠X2後避震", price: 24800, category: "suspension", img: "image/x2.jpg", description: "是一款功能齊全、可多段調整的避震器，主要特色是採用複筒設計，讓伸側（回彈）與壓側（壓縮）阻尼調整互不干擾。" },
    { id: 302, name: "DY競技版前避震", price: 6600, category: "suspension", img: "image/dy.jpg", description: "以CNC精緻工藝、多樣化客製化配色、針對不同車型和騎士體重與騎乘需求調整為主要特色，提供市區舒適與山路熱血兼具的穩定操控性能，是許多賽道選手與車友的熱門首選。" },
    { id: 303, name: "FREAK FACTORY Z2 前避震", price: 13000, category: "suspension", img: "image/z2.jpg", description: "針對台灣熱門速克達設計的高性能改裝避震器，特色是採用倒立式設計、客製化雙K值彈簧（高抗性）、一體式氣瓶及7075鋁合金CNC切削下座，使用MOTUL 10W油品，提供強大支撐力，提升過彎穩定性與路感。" },
    { id: 304, name: "野蠻公牛ARX一般版", price: 13000, category: "suspension", img: "image/arx.jpg", description: "針對一般使用者設計的預載可調前叉，主要特色是高 CP 值、一體式卡座設計（可選對四或輻射卡鉗座），以及長氣瓶造型，但不可調整伸壓側阻尼。" },
    { id: 401, name: "REVENO傳動", price: 9500, category: "package", img: "image/reveno.jpg", description: "獨特的 STC (Smooth Torque Clutch) 多片式離合器、高效散熱風葉盤和線性大彈簧聞名，能有效提升機車加速性能、反應性與穩定性，其 2.0 版本更是開放珠重調整，具備輕量化和高強度設計，讓車主能依需求調整動力曲線。" },
    { id: 402, name: "SCRK傳動", price: 7800, category: "package", img: "image/scrk.jpg", description: "強調「冠軍傳動」的性能提升，主要特色是能改善起中速加速的爆發力與輕快感，同時兼顧高速巡航的穩定性，提供普利盤、普利珠、大彈簧、離合器、碗公等完整套件。" },
    { id: 403, name: "炸彈鯊傳動", price: 9700, category: "package", img: "image/bomp.jpg", description: "以 CNC精密加工 原廠零件為特色，提供 高CP值與性能提升，特別是後組的碗公經過 CNC 雕刻與風刀孔設計，強化起步抓力與排削效果。" },
    { id: 404, name: "WF傳動", price: 8100, category: "package", img: "image/wf.jpg", description: "是WF競速部品 (WF-RACING) 品牌推出的機車傳動系統產品，包含普利盤、壓板、滑鍵、開閉盤、普利套管等各式傳動零件，專為提升機車動力、加速和性能而設計。" },
    { id: 405, name: "aRacer MINI X2電腦", price: 9000, category: "package", img: "image/minix.jpg", description: "一套高效能的摩托車全取代噴射電腦 (ECU)，主要功能是監控、調校引擎動力與燃油，提供循跡防滑 (TCS)、快排 (QS)、啟動控制 (Launch Control)、動力模式 (MAP切換)及數據分析等進階功能。" },
    { id: 501, name: "AJ尾燈", price: 3650, category: "lighting", img: "image/aj.jpg", description: "主要特色是具備炫麗的開機動畫、流水方向燈、流水警示燈，並有針對驗車設計的「驗車模式」來符合法規。" },
    { id: 502, name: "AJ6尾燈", price: 5300, category: "lighting", img: "image/aj6.jpg", description: "針對YAMAHA勁戰六代設計的改裝尾燈，特色是外型帥氣、夜間辨識度高，擁有多種模式切換（序列式/單閃式）。" },
    { id: 503, name: "幻影尾燈", price: 3780, category: "lighting", img: "image/drg.jpg", description: "針對SYM DRG機車設計的改裝尾燈總成，主打立體造型與豐富燈效，提供動畫開機、高亮度煞車、序列式方向燈（可選配F1閃爍）、多種模式切換（如流水、呼吸）等功能。" },
    { id: 504, name: "APL魚眼大燈", price: 9765, category: "lighting", img: "image/apl.jpg", description: "是金鑫燈藝開發的機車改裝LED魚眼燈具，特色是提升亮度與範圍、具備智慧啟閉功能（利用原廠Pass鍵）、立體造型與多樣化日行燈/惡魔眼變化，提供清晰的切線和更好的夜間視野。" },
    { id: 505, name: "瓦甘達日行燈", price: 3650, category: "lighting", img: "image/瓦甘達.jpg", description: "針對SYM JET/JETS/JETSR/JETSL等車系優購愛馬設計的個性化LED燈具，具有獨特的雙刃造型和可變換的七彩燈光，提供多種模式（恆亮、呼吸、爆閃、循環）。" },
    { id: 601, name: "ZOO水箱護罩", price: 1080, category: "exterior", img: "image/zoo.jpg", description: "主要由64鈦合金或鋁合金製成，具備蜂巢造型，能提供高效保護，阻擋碎石撞擊水箱。" },
    { id: 602, name: "APEXX短牌架", price: 1380, category: "exterior", img: "image/apexx.jpg", description: "將原廠笨重的後牌架「上移」，使車牌角度更傾斜、視覺更美觀，通常會搭配內建的LED牌照燈，並且設計有碳纖維壓花、小定風翼等造型。" },
    { id: 603, name: "KOSO空濾外蓋", price: 900, category: "exterior", img: "image/koso.jpg", description: "提供比原廠更大進氣容積和3D流線造型，提升引擎性能和質感。" },
    { id: 604, name: "APEXX GP前土除", price: 1380, category: "exterior", img: "image/gp.jpg", description: "採用ABS高韌性材質，具有耐用、抗日曬不易泛白特性，結合碳纖維壓花與競速風格的進氣孔設計，提升質感與視覺效果。" },
    { id: 605, name: "KOSO後土除", price: 780, category: "exterior", img: "image/koso2.jpg", description: "有效阻擋泥水、增加車身立體感，材質多為工業塑鋼，具備耐熱抗摩擦特性，並常有卡夢壓紋等設計。" },
    { id: 701, name: "糯米腸握把套", price: 350, category: "accessories", img: "image/糯米腸.jpg", description: "一種常見的機車改裝握把，特色是柔軟、防滑、舒適且價格平價，通常有 120mm/130mm 兩種長度。" },
    { id: 702, name: "HUATAI正鈦螺絲", price: 130, category: "accessories", img: "image/huatai.jpg", description: "特色是100%台灣製造、輕量化、不生鏽、不掉色（透過燒色）、高強度，適合機車改裝，能有效提升美觀與質感。" },
    { id: 703, name: "燻黑無痕燈殼", price: 900, category: "accessories", img: "image/燻黑.jpg", description: "原廠有格紋的尾燈殼替換成透明度較低（約50%燻黑）、表面光滑無格紋的燈殼，讓導光條造型更清晰、視覺更霸氣。" },
    { id: 704, name: "APEXX飛旋踏板", price: 1600, category: "accessories", img: "image/apexx2.jpg", description: "主要功能是提供乘客更舒適的乘坐體驗，有別於原廠踏板，通常採用鋁合金等材質製成，具備輕巧、耐用、美觀的特性，並設計成可踩踏時自動彈出、不踩時可收回的機構。" },
    { id: 705, name: "APEXX油箱蓋", price: 680, category: "accessories", img: "image/apexx3.jpg", description: "美化並提升原廠油箱蓋的外觀，採用陽極上色和鍍鈦螺絲點綴。" }
];

let products = JSON.parse(localStorage.getItem('rush_products')) || defaultProducts;
let currentUser = null; 
let cart = JSON.parse(localStorage.getItem('rush_cart')) || []; 
let currentCategory = 'all'; 

const categoryNames = {
    exhaust: "排氣管系列", brake: "煞車制動", suspension: "懸吊系統", package: "動力升級",
    lighting: "燈系全套", exterior: "外觀升級", accessories: "質感小物"
};

// 全域函數定義 (放在 DOMContentLoaded 之外)
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

function saveData() { localStorage.setItem('rush_products', JSON.stringify(products)); }
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
        imgClone.style.width = '20px'; 
        imgClone.style.height = '20px'; 
        imgClone.style.opacity = '0.5'; 
    }, 10);
    setTimeout(() => { 
        imgClone.remove(); 
        const badge = document.getElementById('cart-count');
        badge.style.transform = "scale(1.5)"; 
        setTimeout(() => badge.style.transform = "scale(1)", 200); 
    }, 800);
}

window.openProductDetail = function(p) {
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
    showToast(`排序已更新`);
};

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

window.removeFromCart = function(index) {
    cart.splice(index, 1); updateCart(); saveCart();
    showToast("已移除商品");
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
    renderAdminMessages();
}

function renderAdminMessages() {
    const tbody = document.getElementById('admin-msg-list-body');
    if (!tbody) return;
    const msgList = JSON.parse(localStorage.getItem('site_messages')) || [];
    if (msgList.length === 0) { tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">目前沒有新訊息</td></tr>'; return; }
    tbody.innerHTML = msgList.map(msg => `
        <tr>
            <td>${msg.time}</td><td>${msg.name}</td><td>${msg.content}</td>
            <td><button class="btn-delete" onclick="deleteMsg(${msg.id})">刪除</button></td>
        </tr>`).join('');
}

window.deleteMsg = function(id) {
    if(!confirm("確定刪除？")) return;
    let msgList = JSON.parse(localStorage.getItem('site_messages')) || [];
    localStorage.setItem('site_messages', JSON.stringify(msgList.filter(m => m.id !== id)));
    renderAdminMessages();
}

// 頁面加載處理
window.onload = () => { document.getElementById('preloader').style.opacity = '0'; setTimeout(() => document.getElementById('preloader').style.display = 'none', 500); };

document.addEventListener('DOMContentLoaded', () => {
    renderUserUI(); renderProducts(); updateCart();

    function renderUserUI() {
        const userMenu = document.getElementById('user-menu');
        if (currentUser) {
            let html = `<span class="user-name-display">Hi, ${currentUser.name}</span>`;
            if(currentUser.username === 'admin') html += `<button id="admin-btn" class="btn-admin">後台</button>`;
            html += `<button id="logout-btn" class="btn-logout">登出</button>`;
            userMenu.innerHTML = html;
        } else { userMenu.innerHTML = `<button id="open-auth" class="btn-nav-auth">登入</button>`; }
    }

    // 事件監聽
    document.addEventListener('click', (e) => {
        if(e.target.id === 'open-auth') { document.getElementById('auth-modal').style.display = 'flex'; switchAuth('login'); }
        if(e.target.id === 'close-auth' || e.target.id === 'close-cart' || e.target.id === 'close-detail' || e.target.id === 'close-admin') {
            e.target.closest('.modal').style.display = 'none';
        }
        if(e.target.classList.contains('modal')) e.target.style.display = 'none';
        if(e.target.id === 'logout-btn') { if(confirm("確定登出？")) { currentUser = null; renderUserUI(); showToast("已登出"); } }
        if(e.target.id === 'admin-btn') { document.getElementById('admin-modal').style.display = 'flex'; renderAdminMessages(); }
    });

    // 登入邏輯
    document.getElementById('login-form').onsubmit = (e) => {
        e.preventDefault();
        const u = document.getElementById('login-user').value.trim();
        const p = document.getElementById('login-pass').value.trim();
        if (u === 'admin' && p === '013112') {
            currentUser = { name: '超級管理員', username: 'admin' };
            showToast("✅ 管理員權限已啟動");
        } else {
            let users = JSON.parse(localStorage.getItem('rush_users')) || [];
            const foundUser = users.find(user => user.username === u && user.password === p);
            if (foundUser) { currentUser = foundUser; showToast(`👋 歡迎回來，${u}`); }
            else { showToast("帳號或密碼錯誤！", "error"); return; }
        }
        document.getElementById('auth-modal').style.display = 'none';
        renderUserUI();
    };

    // 註冊邏輯
    document.getElementById('register-form').onsubmit = (e) => {
        e.preventDefault();
        const u = document.getElementById('reg-user').value.trim();
        const p = document.getElementById('reg-pass').value.trim();
        let users = JSON.parse(localStorage.getItem('rush_users')) || [];
        if (users.find(user => user.username === u) || u === 'admin') { showToast("帳號已存在！", "error"); return; }
        users.push({ username: u, password: p, name: u });
        localStorage.setItem('rush_users', JSON.stringify(users));
        showToast("註冊成功！請登入");
        switchAuth('login');
    };

    // 購物車按鈕
    document.getElementById('open-cart').onclick = () => document.getElementById('cart-modal').style.display = 'flex';
    document.getElementById('clear-cart').onclick = () => { if(confirm("確定清空？")) { cart = []; updateCart(); saveCart(); } };
    document.getElementById('btn-checkout').onclick = () => {
        if(cart.length===0) return showToast("購物車空的", "error");
        if(!currentUser) { showToast("請先登入！", "error"); switchAuth('login'); document.getElementById('auth-modal').style.display='flex'; }
        else { showToast("✅ 訂單已送出！"); cart = []; updateCart(); saveCart(); document.getElementById('cart-modal').style.display='none'; }
    };

    // 搜尋與輪播
    document.getElementById('product-search').oninput = (e) => renderProducts(currentCategory, e.target.value);
    const slides = document.querySelectorAll('.slide'); const dots = document.querySelectorAll('.dot'); let curr = 0;
    const showSlide = (i) => { slides.forEach(s=>s.classList.remove('active')); dots.forEach(d=>d.classList.remove('active')); slides[i].classList.add('active'); dots[i].classList.add('active'); curr=i; };
    let timer = setInterval(() => showSlide((curr+1)%slides.length), 5000);
    dots.forEach((d,i) => d.onclick = () => { clearInterval(timer); showSlide(i); timer = setInterval(() => showSlide((curr+1)%slides.length), 5000); });
});