/* Dr. Alaa Aljameel — Version 4
   Bilingual engine, WhatsApp booking, fullscreen menu, scroll reveals and parallax.
   No dependencies: the motion that Dr. Majid's Version Two got from GSAP + Lenis is
   hand-written here so nothing external can break the demo. */

(function () {
  'use strict';

  var WA_NUMBER = '966593339600';

  var AR = {
    'skip': 'تخطَّ إلى المحتوى',
    'brand-name': 'د. آلاء الجميل',
    'brand-role': 'استشارية طب أسنان الأطفال',
    'menu-label': 'القائمة',
    'menu-close': 'إغلاق',
    'watermark': 'الجميل',

    'nav-about': 'نبذة',
    'nav-special': 'ذوو الاحتياجات الخاصة',
    'nav-services': 'الخدمات',
    'nav-guidance': 'لأولياء الأمور',
    'nav-clinic': 'العيادة',
    'nav-book': 'احجز موعداً',

    'hero-eyebrow': 'الرياض · حي التعاون',
    'hero-h1': 'رعاية أسنان متخصصة لكل طفل في الرياض — بما في ذلك الأطفال من ذوي الاحتياجات الخاصة',
    'cta-book': 'احجز عبر واتساب',
    'disc-1': 'طب أسنان الأطفال',
    'disc-2': 'أسنان ذوي الاحتياجات الخاصة',
    'disc-3': 'الرعاية الوقائية',
    'explore': 'استكشاف +',
    'lbl-cred': 'الاعتماد المهني',

    't1-lbl': 'شهادة البورد الأمريكي',
    't2-lbl': 'الزمالة الكندية RCDC',
    't3-lbl': 'ماجستير وشهادة أسنان الأطفال',
    't4-lbl': 'الرعاية بالعربية والإنجليزية',

    'lbl-glance': 'نظرة سريعة',
    's1-c': 'اعتماد على مستوى البورد',
    's2-c': 'تخصصان: الأطفال وذوو الاحتياجات الخاصة',
    's3-n': 'ماجستير',
    's3-c': 'ماجستير وشهادة أسنان الأطفال',
    's4-c': 'لغتان في العيادة',
    's5-n': 'الرياض',
    's5-c': 'حي التعاون، طريق الدائري الشمالي',

    'about-eyebrow': 'لماذا الاختصاص',
    'about-h2': 'طبيب أسنان الأطفال ليس مجرد طبيب أسنان يعالج الأطفال',
    'about-p1': 'طب أسنان الأطفال تخصص قائم بذاته. يشمل كيفية نمو أسنان الطفل، وكيف تُشكّل العادات الفك، وكيف نعالج طفلاً قلقاً في الرابعة من عمره دون أن نُخيفه، وكيف نكتشف المشكلات التي لا تظهر إلا في فم ما زال ينمو.',
    'about-p2': 'تدريبي في هذا تحديداً: بكالوريوس جراحة الفم والأسنان، ودرجة الماجستير، وشهادة في طب أسنان الأطفال، وشهادة البورد الأمريكي، وزمالة الكلية الملكية لأطباء الأسنان في كندا.',
    'about-link': 'احجز موعد طفلك',

    'typo-eyebrow': 'ثلاث ركائز',
    'typo-1': 'لطيفة',
    'typo-2': 'متخصصة',
    'typo-3': 'دون استعجال',
    'typo-note': 'ثلاثة أمور تُبنى عليها كل زيارة — مهما كان ما يقلق طفلك عند دخوله.',

    'sp-eyebrow': 'اهتمام خاص',
    'sp-h2': 'طب الأسنان للأطفال من ذوي الاحتياجات الخاصة',
    'sp-lede': 'إلى جانب طب أسنان الأطفال، أنا استشارية في طب أسنان ذوي الاحتياجات الخاصة. كثير من الأسر يُقال لها إن طفلها «صعب العلاج». وغالباً ما يحتاج الأمر إلى وقت أطول، وأسلوب مختلف، وشخص مدرَّب على ذلك.',
    'pn-1': 'الإيقاع',
    'pn-2': 'الروتين',
    'pn-3': 'الشراكة',
    'sp-c1-h': 'وقت كافٍ دون استعجال',
    'sp-c1-p': 'مواعيد تسير على إيقاع طفلك لا على إيقاع الجدول — بما في ذلك زيارات تعارف قصيرة لا يجري فيها أي إجراء علاجي إطلاقاً.',
    'sp-c2-h': 'روتين يمكن توقّعه',
    'sp-c2-p': 'الغرفة نفسها، والترتيب نفسه للخطوات، مشروحة خطوة بخطوة مسبقاً، لتقليل المفاجآت قدر الإمكان.',
    'sp-c3-h': 'الأهل شركاء في الزيارة',
    'sp-c3-p': 'أنتم أدرى بطفلكم. أخبروني بما يُهدّئه وما يُثير قلقه، ونبني الزيارة على ذلك.',
    'sp-note': 'إذا كان طفلك يعاني من حالة حسّية أو تطورية أو طبية جعلت زيارات الأسنان صعبة من قبل، فأخبرني بذلك عند الحجز — هذه المعلومة مفيدة فعلاً.',

    'q1-plain': 'الأطفال غالباً أسهل في التعامل عندما يشعرون بالهدوء والطمأنينة من والديهم.',

    'sv-eyebrow': 'ما أقدّمه',
    'sv-h2': 'رعاية للأطفال، من أول سن',
    'rw-1': 'الوقاية',
    'rw-2': 'العلاج',
    'rw-3': 'الطمأنينة',
    'sv-1-h': 'الزيارة الأولى والفحص الدوري', 'sv-1-p': 'تعريف لطيف بطبيب الأسنان',
    'sv-2-h': 'الفلورايد وسد الشقوق',        'sv-2-p': 'وقاية قبل أن يبدأ التسوّس',
    'sv-3-h': 'الحشوات والترميمات',          'sv-3-p': 'للأسنان اللبنية والدائمة',
    'sv-4-h': 'رعاية ذوي الاحتياجات الخاصة', 'sv-4-p': 'على مستوى استشاري، تتكيّف مع طفلك',
    'sv-5-h': 'قلق الأسنان وتوجيه السلوك',   'sv-5-p': 'للطفل الخائف من طبيب الأسنان',
    'sv-6-h': 'متابعة النمو والعادات',       'sv-6-p': 'مصّ الإبهام، الازدحام، نمو الإطباق',
    'sv-7-h': 'إرشاد وقائي للأهل',           'sv-7-p': 'التنظيف والتغذية والفلورايد',
    'sv-8-h': 'طوارئ الأسنان',               'sv-8-p': 'سن مخلوعة أو مكسورة أو مؤلمة',

    'g-eyebrow': 'بكلماتي',
    'g-h2': 'ثلاثة أمور أكرّرها على الأهل دائماً',
    'q1': '«الأطفال غالباً أسهل في التعامل عندما يشعرون بالهدوء والطمأنينة من والديهم.»',
    'q1-f': 'عن الحضور إلى الموعد',
    'q2': '«عندما تسقط سنّ طفلك، أول شيء هو أن تبقى هادئاً.»',
    'q2-f': 'عن حوادث الأسنان',
    'q3': '«الفلورايد ليس شيئاً يُخاف منه — إنه مادة طبيعية تساعد على تقوية الأسنان.»',
    'q3-f': 'عن الوقاية',
    'g-note': 'أشارك إرشادات قصيرة للأهل على إنستغرام — <a href="https://www.instagram.com/dr.alaaaljameel/" target="_blank" rel="noopener noreferrer">@dr.alaaaljameel</a>.',

    'cl-eyebrow': 'أين تجدني',
    'cl-h2': 'عيادة كونفيدنت، حي التعاون',
    'cl-p1': 'أستقبل الأطفال في عيادة كونفيدنت على طريق الدائري الشمالي في حي التعاون بالرياض — عيادة مجهّزة بغرف علاج حديثة، تشمل شاشات فوق الكراسي لإشغال المرضى الصغار.',
    'cl-addr': 'عيادة كونفيدنت، طريق الدائري الشمالي، التعاون، الرياض 12478، المملكة العربية السعودية',
    'cl-cta': 'احجز موعداً',
    'cl-link': 'زيارة موقع كونفيدنت',
    'lbl-clinic': 'عيادة كونفيدنت',
    'visit-map': 'احصل على الاتجاهات',
    'visit-call': 'اتصل بالعيادة',

    'bk-eyebrow': 'الحجز',
    'bk-h2': 'أخبرني عن طفلك',
    'bk-p': 'املأ هذه الحقول وسيفتح واتساب برسالة جاهزة للإرسال — لأعرف من سأستقبل قبل وصولكم. لا شيء يُرسَل إلى موقع إلكتروني؛ الرسالة تصل مباشرة إلى هاتفي.',
    'bk-l1': 'أرد شخصياً، بالعربية أو الإنجليزية',
    'bk-l2': 'أخبرني بأي احتياجات خاصة — يساعدني ذلك على الاستعداد',
    'bk-l3': 'في الحالات الطارئة: اتصل بدلاً من الرسالة',

    'f-name': 'الاسم الأول للطفل <span class="opt">(اختياري)</span>',
    'f-age': 'عمر الطفل',
    'f-age-ph': 'مثال: 5',
    'f-reason': 'ما سبب الزيارة؟',
    'f-r1': 'زيارة أولى / فحص دوري',
    'f-r2': 'ألم في الأسنان',
    'f-r3': 'حادث أو إصابة في الأسنان',
    'f-r4': 'رعاية أسنان لذوي الاحتياجات الخاصة',
    'f-r5': 'طفلي قلق من طبيب الأسنان',
    'f-r6': 'سبب آخر',
    'f-time': 'الوقت المفضّل',
    'f-t1': 'صباحاً', 'f-t2': 'بعد الظهر', 'f-t3': 'مساءً', 'f-t4': 'أي وقت',
    'f-notes': 'هل هناك ما يجب أن أعرفه؟ <span class="opt">(اختياري)</span>',
    'f-notes-ph': 'تجارب سابقة، حساسيات، حالات طبية…',
    'f-submit': 'افتح واتساب برسالتي',
    'f-foot': 'أو اتصل على <a href="tel:+966593339600">‎+966 59 333 9600</a>',

    'foot-cta-h': 'هل أنت مستعد لتكون زيارة طفلك القادمة لطبيب الأسنان سهلة؟',
    'foot-watermark': 'استشارة',
    'foot-name': 'د. آلاء الجميل',
    'foot-role': 'استشارية طب أسنان الأطفال وذوي الاحتياجات الخاصة',
    'foot-about': 'نبذة',
    'foot-where': 'الموقع',
    'foot-addr': 'عيادة كونفيدنت<br>طريق الدائري الشمالي، حي التعاون<br>الرياض 12478، السعودية',
    'foot-site': 'أقسام الموقع',
    'foot-contact': 'التواصل',
    'foot-wa': 'واتساب',
    'foot-creds-t': 'المؤهلات',
    'foot-creds': 'بكالوريوس · ماجستير · شهادة أسنان الأطفال · البورد الأمريكي · الزمالة الكندية (RCDC)',
    'foot-legal': '© 2026 د. آلاء الجميل',
    'foot-demo': 'موقع تجريبي — صور العيادة بإذن من عيادة كونفيدنت'
  };

  var htmlEl = document.documentElement;
  var langBtn = document.getElementById('langToggle');

  /* ── language ─────────────────────────────────────── */
  function applyLang(lang) {
    var isAr = lang === 'ar';
    var nodes = document.querySelectorAll('[data-k]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i], key = el.getAttribute('data-k');
      if (el.dataset.enHtml === undefined) el.dataset.enHtml = el.innerHTML;
      if (isAr) { if (AR[key] !== undefined) el.innerHTML = AR[key]; }
      else { el.innerHTML = el.dataset.enHtml; }
    }
    var ph = document.querySelectorAll('[data-k-ph]');
    for (var j = 0; j < ph.length; j++) {
      var p = ph[j], pk = p.getAttribute('data-k-ph');
      if (p.dataset.enPh === undefined) p.dataset.enPh = p.getAttribute('placeholder') || '';
      if (isAr) { if (AR[pk] !== undefined) p.setAttribute('placeholder', AR[pk]); }
      else { p.setAttribute('placeholder', p.dataset.enPh); }
    }
    htmlEl.setAttribute('lang', isAr ? 'ar' : 'en');
    htmlEl.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    if (langBtn) {
      langBtn.textContent = isAr ? 'English' : 'العربية';
      langBtn.setAttribute('aria-label', isAr ? 'Switch language to English' : 'Switch language to Arabic');
    }
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLang(htmlEl.getAttribute('lang') === 'ar' ? 'en' : 'ar');
    });
  }
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'ar') applyLang('ar');

  /* ── fullscreen menu ──────────────────────────────── */
  var menu = document.getElementById('fullMenu');
  var menuBtn = document.getElementById('menuToggle');
  var menuClose = document.getElementById('menuClose');

  function openMenu() {
    menu.hidden = false;
    void menu.offsetWidth;               // force reflow so the transition runs
    menu.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    window.setTimeout(function () {
      if (!menu.classList.contains('open')) menu.hidden = true;
    }, 560);
  }
  if (menu && menuBtn) {
    menuBtn.addEventListener('click', function () {
      if (menu.classList.contains('open')) closeMenu(); else openMenu();
    });
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
    });
  }

  /* ── booking form → prefilled WhatsApp ────────────── */
  var form = document.getElementById('bookForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var isAr = htmlEl.getAttribute('lang') === 'ar';
      function val(id) {
        var el = document.getElementById(id);
        if (!el) return '';
        if (el.tagName === 'SELECT') return el.options[el.selectedIndex].textContent.trim();
        return el.value.trim();
      }
      var L = isAr
        ? { open: 'السلام عليكم د. آلاء، أود حجز موعد لطفلي.', name: 'الاسم', age: 'العمر', reason: 'سبب الزيارة', time: 'الوقت المفضّل', notes: 'ملاحظات' }
        : { open: "Hello Dr. Alaa, I'd like to book a visit for my child.", name: 'Child', age: 'Age', reason: 'Reason', time: 'Preferred time', notes: 'Notes' };
      var lines = [L.open, ''];
      if (val('childName')) lines.push(L.name + ': ' + val('childName'));
      if (val('childAge'))  lines.push(L.age + ': ' + val('childAge'));
      lines.push(L.reason + ': ' + val('reason'));
      lines.push(L.time + ': ' + val('timing'));
      if (val('notes')) lines.push(L.notes + ': ' + val('notes'));
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  }

  /* ── motion: reveals, lit words, parallax ─────────── */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { revealIO.observe(el); });

    var wordIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('lit');
        else e.target.classList.remove('lit');
      });
    }, { rootMargin: '0px 0px -22% 0px', threshold: 0.5 });
    Array.prototype.forEach.call(document.querySelectorAll('.rw'), function (el) { wordIO.observe(el); });
  } else {
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { el.classList.add('in'); });
    Array.prototype.forEach.call(document.querySelectorAll('.rw'), function (el) { el.classList.add('lit'); });
  }

  // lightweight parallax — replaces Majid V2's GSAP ScrollTrigger version
  if (!reduced) {
    var layers = Array.prototype.slice.call(
      document.querySelectorAll('.hero-bg img, .panel-bg img, .parallax img')
    );
    var ticking = false;
    function shift() {
      var vh = window.innerHeight;
      for (var i = 0; i < layers.length; i++) {
        var img = layers[i];
        var box = img.parentElement.getBoundingClientRect();
        if (box.bottom < -200 || box.top > vh + 200) continue;
        // -1 (below viewport) → +1 (above viewport)
        var progress = (box.top + box.height / 2 - vh / 2) / (vh / 2 + box.height / 2);
        img.style.transform = 'translate3d(0,' + (progress * -5).toFixed(2) + '%,0)';
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) { ticking = true; window.requestAnimationFrame(shift); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    shift();
  }

})();
