/**
 * menu.js - مطبخ بيتي
 * جافاسكريبت صفحة القائمة (menu.html)
 * فلاتر الفئات، البحث، عرض الأطباق الديناميكي
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ══════════════════════════════════════
       شريط التنقل (مشترك)
    ══════════════════════════════════════ */
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
            });
        });
    }

    // الرابط النشط
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === 'menu.html') link.classList.add('active');
    });

    /* ══════════════════════════════════════
       تحميل الصور الكسول
    ══════════════════════════════════════ */
    let lazyObserver;
    function initLazyObserver() {
        lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
                        img.addEventListener('error', () => img.classList.add('loaded'), { once: true });
                    }
                    lazyObserver.unobserve(img);
                }
            });
        }, { rootMargin: '200px' });
    }
    initLazyObserver();

    /* ══════════════════════════════════════
       حالة الفلترة والبحث
    ══════════════════════════════════════ */
    let currentCategory = 'all';
    let searchQuery = '';

    /* ── أزرار الفلتر ── */
    const filterBtns = document.querySelectorAll('.filter-btn[data-category]');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            renderDishes();
        });
    });

    /* ── حقل البحث ── */
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            searchQuery = searchInput.value.trim().toLowerCase();
            renderDishes();
        });
    }

    /* ══════════════════════════════════════
       تصفية الأطباق
    ══════════════════════════════════════ */
    function getFilteredDishes() {
        return dishes.filter(dish => {
            const matchCat = currentCategory === 'all' || dish.category === currentCategory;
            const matchSearch = !searchQuery ||
                dish.name.toLowerCase().includes(searchQuery) ||
                dish.description.toLowerCase().includes(searchQuery);
            return matchCat && matchSearch;
        });
    }

    /* ══════════════════════════════════════
       تحديث عداد الفلتر
    ══════════════════════════════════════ */
    function updateFilterCounts() {
        filterBtns.forEach(btn => {
            const cat = btn.dataset.category;
            const count = cat === 'all'
                ? dishes.length
                : dishes.filter(d => d.category === cat).length;

            const countEl = btn.querySelector('.filter-count');
            if (countEl) countEl.textContent = count;
        });
    }

    /* ══════════════════════════════════════
       بناء بطاقة طبق
    ══════════════════════════════════════ */
    const categoryLabels = {
        main: 'طبق رئيسي',
        dessert: 'حلوى',
        side: 'مقبلات وسلطات'
    };

    function buildCard(dish) {
        return `
      <article class="dish-card animate-in" aria-label="${dish.name}">
        <div class="dish-card-img-wrap">
          <img
            class="dish-card-img lazy-img"
            data-src="${dish.image}"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="${dish.name}"
            loading="lazy"
            width="400" height="300"
          />
          ${dish.featured ? '<span class="dish-badge">⭐ مميز</span>' : ''}
        </div>
        <div class="dish-card-body">
          <span class="dish-category-badge">${categoryLabels[dish.category] || ''}</span>
          <h3 class="dish-name">${dish.name}</h3>
          <p class="dish-desc">${dish.description}</p>
          <div class="dish-footer">
            <div>
              <div class="dish-price">${dish.price} ج.م</div>
              <div class="dish-price-note">*سعر تقريبي</div>
            </div>
          </div>
        </div>
      </article>
    `;
    }

    /* ══════════════════════════════════════
       عرض الأطباق في الشبكة
    ══════════════════════════════════════ */
    const dishesGrid = document.getElementById('dishesGrid');
    const resultsCount = document.getElementById('resultsCount');

    function renderDishes() {
        const filtered = getFilteredDishes();

        // تحديث عداد النتائج
        if (resultsCount) {
            const total = filtered.length;
            resultsCount.innerHTML = total > 0
                ? `عرض <span>${total}</span> ${total === 1 ? 'طبق' : 'أطباق'}`
                : '';
        }

        if (!dishesGrid) return;

        if (filtered.length === 0) {
            dishesGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🍽️</div>
          <p class="no-results-text">لا توجد نتائج</p>
          <p class="no-results-hint">جرّب كلمة بحث مختلفة أو اختر فئة أخرى</p>
        </div>
      `;
            return;
        }

        dishesGrid.innerHTML = filtered.map((dish, i) => {
            const card = buildCard(dish);
            return card;
        }).join('');

        // تأخير أنيميشن البطاقات
        dishesGrid.querySelectorAll('.dish-card').forEach((card, i) => {
            card.style.animationDelay = `${i * 60}ms`;
        });

        // تسجيل الصور للتحميل الكسول
        dishesGrid.querySelectorAll('img[data-src]').forEach(img => lazyObserver.observe(img));
    }

    /* ══════════════════════════════════════
       تهيئة
    ══════════════════════════════════════ */
    updateFilterCounts();

    // دعم الـ deep-link: menu.html#main أو menu.html#dessert
    const hash = location.hash.replace('#', '');
    const validCategories = ['main', 'dessert', 'side'];
    if (hash && validCategories.includes(hash)) {
        currentCategory = hash;
        filterBtns.forEach(b => {
            const isActive = b.dataset.category === hash;
            b.classList.toggle('active', isActive);
            b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }

    renderDishes();

});

