/**
 * main.js - مطبخ بيتي
 * جافاسكريبت الصفحة الرئيسية (index.html)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ══════════════════════════════════════
       شريط التنقل: تأثير التمرير + القائمة
    ══════════════════════════════════════ */
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // تأثير التمرير على الناف بار
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });

    // قائمة الجوال
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // إغلاق عند النقر على رابط
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // تحديد الرابط النشط
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ══════════════════════════════════════
       أنيميشن الكشف عند التمرير
    ══════════════════════════════════════ */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    // تسجيل عناصر .reveal الثابتة في HTML فقط (ليس الديناميكية)
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ══════════════════════════════════════
       تحميل الصور الكسول
    ══════════════════════════════════════ */
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                if (src) {
                    img.src = src;
                    img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
                    img.addEventListener('error', () => {
                        // إخفاء الصورة المكسورة بلطف
                        img.style.opacity = '0.15';
                        img.classList.add('loaded');
                    }, { once: true });
                }
                lazyObserver.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img[data-src]').forEach(img => lazyObserver.observe(img));

    /* ══════════════════════════════════════
       قسم الأطباق المميزة في الرئيسية
       FIX: البطاقات تُضاف ديناميكياً بعد المسح الأول
            لـ revealObserver، لذلك يجب تسجيلها يدوياً
    ══════════════════════════════════════ */
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid && typeof dishes !== 'undefined') {
        const featured = dishes.filter(d => d.featured).slice(0, 6);
        featuredGrid.innerHTML = featured.map((dish, i) => buildDishCard(dish, i * 80)).join('');

        // تسجيل صور البطاقات المُضافة
        featuredGrid.querySelectorAll('img[data-src]').forEach(img => lazyObserver.observe(img));

        // ✅ FIX: تسجيل البطاقات الديناميكية مع revealObserver
        //    لم يكن هذا السطر موجوداً — سبب الفراغ الكبير
        featuredGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    /* ══════════════════════════════════════
       معرض الصور في الرئيسية
    ══════════════════════════════════════ */
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid && typeof dishes !== 'undefined') {
        // أخذ أول 8 صور فريدة
        const galleryDishes = dishes.slice(0, 8);
        galleryGrid.innerHTML = galleryDishes.map(dish => `
      <div class="gallery-item reveal">
        <div class="gallery-img-wrap">
          <img
            class="gallery-img lazy-img"
            data-src="${dish.image}"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="${dish.name}"
            loading="lazy"
          />
          <div class="gallery-overlay">
            <span class="gallery-label">${dish.name}</span>
          </div>
        </div>
      </div>
    `).join('');

        galleryGrid.querySelectorAll('img[data-src]').forEach(img => lazyObserver.observe(img));
        galleryGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    /* ══════════════════════════════════════
       عداد الإحصائيات (أنيميشن)
    ══════════════════════════════════════ */
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if (statNumbers.length) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => statsObserver.observe(el));
    }

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const start = performance.now();

        function step(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + (el.dataset.suffix || '');
            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

});

/* ══════════════════════════════════════
   دالة مشتركة: بناء بطاقة الطبق
══════════════════════════════════════ */
function buildDishCard(dish, delay = 0) {
    const categoryLabels = {
        main: 'طبق رئيسي',
        dessert: 'حلوى',
        side: 'مقبلات وسلطات'
    };

    return `
    <article class="dish-card reveal" style="transition-delay:${delay}ms" aria-label="${dish.name}">
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
