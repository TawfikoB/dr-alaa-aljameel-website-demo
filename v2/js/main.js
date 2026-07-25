/* Dr. Alaa Aljameel — bilingual engine, WhatsApp booking, mobile nav.
   No dependencies. The English copy lives in index.html; Arabic lives here and is
   swapped in on toggle, with the original English cached on first switch. */

(function () {
  'use strict';

  var WA_NUMBER = '966593339600';

  var AR = {
    'skip': 'تخطَّ إلى المحتوى',
    'brand-name': 'د. آلاء الجميل',
    'brand-role': 'استشارية طب أسنان الأطفال',

    'nav-about': 'نبذة',
    'nav-special': 'ذوو الاحتياجات الخاصة',
    'nav-services': 'الخدمات',
    'nav-guidance': 'لأولياء الأمور',
    'nav-clinic': 'العيادة',
    'nav-book': 'احجز موعداً',

    'hero-eyebrow': 'الرياض · حي التعاون',
    'hero-h1': 'رعاية أسنان متخصصة لكل طفل في الرياض — بما في ذلك الأطفال من ذوي الاحتياجات الخاصة',
    'hero-lede': 'أنا الدكتورة آلاء الجميل، استشارية طب أسنان الأطفال. أعتني بأسنان الأطفال بالطريقة اللطيفة — بالوقت والصبر والتدريب المتخصص الذي تستحقه تجربة الطفل الأولى مع طبيب الأسنان.',
    'pill-1': 'البورد الأمريكي',
    'pill-2': 'الزمالة الكندية · RCDC',
    'pill-3': 'بكالوريوس · ماجستير · شهادة أسنان الأطفال',
    'cta-book': 'احجز عبر واتساب',
    'cta-call': 'اتصل: ‎+966 59 333 9600',
    'hero-trust': 'رعاية على مستوى استشاري · تدريب على ذوي الاحتياجات الخاصة · بالعربية والإنجليزية',
    'badge-strong': 'د. آلاء الجميل',
    'badge-span': 'طب أسنان الأطفال وذوي الاحتياجات الخاصة',

    't1-num': 'أمريكا', 't1-lbl': 'شهادة البورد الأمريكي',
    't2-num': 'كندا',   't2-lbl': 'الزمالة الكندية RCDC',
    't3-num': 'ماجستير','t3-lbl': 'ماجستير وشهادة أسنان الأطفال',
    't4-num': 'AR / EN','t4-lbl': 'الرعاية بالعربية والإنجليزية',

    'about-eyebrow': 'لماذا الاختصاص',
    'about-h2': 'طبيب أسنان الأطفال ليس مجرد طبيب أسنان يعالج الأطفال',
    'about-p1': 'طب أسنان الأطفال تخصص قائم بذاته. يشمل كيفية نمو أسنان الطفل، وكيف تُشكّل العادات الفك، وكيف نعالج طفلاً قلقاً في الرابعة من عمره دون أن نُخيفه، وكيف نكتشف المشكلات التي لا تظهر إلا في فم ما زال ينمو.',
    'about-p2': 'تدريبي في هذا تحديداً: بكالوريوس جراحة الفم والأسنان، ودرجة الماجستير، وشهادة في طب أسنان الأطفال، وشهادة البورد الأمريكي، وزمالة الكلية الملكية لأطباء الأسنان في كندا.',
    'about-p3': 'وما يعنيه ذلك لطفلك ببساطة: مواعيد دون استعجال، وشرح قبل أي إجراء، وطبيبة رأت هذا القلق بعينه مرات كثيرة من قبل.',
    'about-link': 'احجز موعد طفلك',

    'sp-eyebrow': 'اهتمام خاص',
    'sp-h2': 'طب الأسنان للأطفال من ذوي الاحتياجات الخاصة',
    'sp-lede': 'إلى جانب طب أسنان الأطفال، أنا استشارية في طب أسنان ذوي الاحتياجات الخاصة. كثير من الأسر يُقال لها إن طفلها «صعب العلاج». وغالباً ما يحتاج الأمر إلى وقت أطول، وأسلوب مختلف، وشخص مدرَّب على ذلك.',
    'sp-c1-h': 'وقت كافٍ دون استعجال',
    'sp-c1-p': 'مواعيد تسير على إيقاع طفلك لا على إيقاع الجدول — بما في ذلك زيارات تعارف قصيرة لا يجري فيها أي إجراء علاجي إطلاقاً.',
    'sp-c2-h': 'روتين يمكن توقّعه',
    'sp-c2-p': 'الغرفة نفسها، والترتيب نفسه للخطوات، مشروحة خطوة بخطوة مسبقاً، لتقليل المفاجآت قدر الإمكان.',
    'sp-c3-h': 'الأهل شركاء في الزيارة',
    'sp-c3-p': 'أنتم أدرى بطفلكم. أخبروني بما يُهدّئه وما يُثير قلقه، ونبني الزيارة على ذلك.',
    'sp-note': 'إذا كان طفلك يعاني من حالة حسّية أو تطورية أو طبية جعلت زيارات الأسنان صعبة من قبل، فأخبرني بذلك عند الحجز — هذه المعلومة مفيدة فعلاً.',

    'sv-eyebrow': 'ما أقدّمه',
    'sv-h2': 'رعاية للأطفال، من أول سن',
    'sv-1-h': 'الزيارة الأولى والفحص الدوري', 'sv-1-p': 'تعريف لطيف بطبيب الأسنان، ويفضَّل قبل ظهور أي ألم.',
    'sv-2-h': 'الفلورايد وسد الشقوق',        'sv-2-p': 'إجراءات وقائية بسيطة وسريعة توقف التسوّس قبل أن يبدأ.',
    'sv-3-h': 'الحشوات والترميمات',          'sv-3-p': 'للأسنان اللبنية والدائمة، بطريقة يستطيع الطفل تحمّلها.',
    'sv-4-h': 'رعاية ذوي الاحتياجات الخاصة', 'sv-4-p': 'رعاية على مستوى استشاري تتكيّف مع احتياجات طفلك وقدرته على التحمّل.',
    'sv-5-h': 'قلق الأسنان وتوجيه السلوك',   'sv-5-p': 'للطفل الذي مرّ بتجربة سيئة، أو لم يزر الطبيب من قبل إطلاقاً.',
    'sv-6-h': 'متابعة النمو والعادات',       'sv-6-p': 'مصّ الإبهام، وتأخر الأسنان أو ازدحامها، وكيف تنمو الإطباقة.',
    'sv-7-h': 'إرشاد وقائي للأهل',           'sv-7-p': 'توجيهات للتنظيف والتغذية والفلورايد تناسب روتين أسرة حقيقية.',
    'sv-8-h': 'طوارئ الأسنان',               'sv-8-p': 'سن مخلوعة أو مكسورة أو مؤلمة — اتصل بأسرع وقت ممكن.',

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

    'foot-name': 'د. آلاء الجميل',
    'foot-role': 'استشارية طب أسنان الأطفال وذوي الاحتياجات الخاصة',
    'foot-creds': 'بكالوريوس · ماجستير · شهادة أسنان الأطفال · البورد الأمريكي · الزمالة الكندية (RCDC)',
    'foot-where': 'الموقع',
    'foot-addr': 'عيادة كونفيدنت<br>طريق الدائري الشمالي، حي التعاون<br>الرياض 12478، السعودية',
    'foot-contact': 'التواصل',
    'foot-wa': 'واتساب',
    'foot-clinic': 'confident.sa',
    'foot-legal': '© 2026 د. آلاء الجميل. صور العيادة بإذن من عيادة كونفيدنت.',

    'faq-eyebrow': 'أسئلة شائعة',
    'faq-h2': 'ما يسأل عنه الأهل قبل الحجز',
    'faq-q1': 'في أي عمر أُحضر طفلي أول مرة؟',
    'faq-a1': 'التوصية العامة هي أول زيارة عند ظهور أول سن أو حول عمر السنة. الزيارة المبكرة تكون تعارفاً أكثر منها علاجاً، وهذا بالضبط ما يجعل الزيارات اللاحقة أسهل.',
    'faq-q2': 'طفلي خائف جداً وبكى في عيادة سابقة. ماذا نفعل؟',
    'faq-a2': 'أخبريني بذلك عند الحجز. نبدأ بزيارة قصيرة للتعارف دون أي إجراء، ونبني الثقة تدريجياً. الطفل الذي مرّ بتجربة سيئة يحتاج وقتاً، لا ضغطاً.',
    'faq-q3': 'هل تعالجين الأطفال من ذوي الاحتياجات الخاصة؟',
    'faq-a3': 'نعم — هذا أحد تخصصاتي كاستشارية. أخبريني بحالة طفلك وما يهدّئه أو يزعجه، ونخطط للزيارة على هذا الأساس.',
    'faq-q4': 'هل يمكنني البقاء مع طفلي أثناء العلاج؟',
    'faq-a4': 'في الغالب نعم، وغالباً ما يكون ذلك مفيداً. هدوء الأهل ينتقل إلى الطفل مباشرة.',
    'faq-q5': 'بأي لغة تتعاملين؟',
    'faq-a5': 'بالعربية والإنجليزية.',

    'st-1-lbl': 'شهادة بورد أمريكية',
    'st-2-lbl': 'زمالة كندية (RCDC)',
    'st-3-lbl': 'تخصصان: أطفال وذوو احتياجات خاصة',
    'st-4-lbl': 'لغتان في العيادة',

    'em-h2': 'إصابة في الأسنان الآن؟',
    'em-p': 'ابقَ هادئاً، ثم اتصل مباشرة. في إصابات الأسنان الوقت مهم — الاتصال أسرع من الرسالة.',
    'em-cta': 'اتصل الآن',

    'hero-form-h': 'احجز في أقل من دقيقة',
    'cmp-eyebrow': 'اختيار الطبيب',
    'cmp-h2': 'عيادة أسنان عامة مقابل أخصائية أسنان أطفال',
    'cmp-lede': 'كلاهما يستطيع علاج طفلك. الفرق في ما بُني عليه التدريب.',
    'cmp-th1': 'ما يهم في حالة الطفل',
    'cmp-th2': 'عيادة أسنان عامة',
    'cmp-th3': 'أخصائية أسنان أطفال',
    'cmp-r1': 'تدريب مخصص للأطفال',
    'cmp-r1a': 'غير مطلوب',
    'cmp-r1b': 'سنوات إضافية بعد كلية طب الأسنان',
    'cmp-r2': 'التعامل مع الخوف والسلوك',
    'cmp-r2a': 'يُكتسب بالممارسة',
    'cmp-r2b': 'مهارة أساسية ويُختبر فيها',
    'cmp-r3': 'الأطفال ذوو الاحتياجات الخاصة',
    'cmp-r3a': 'يختلف كثيراً',
    'cmp-r3b': 'تخصص فرعي معترف به',
    'cmp-r4': 'متابعة نمو الإطباق',
    'cmp-r4a': 'غالباً عرضية',
    'cmp-r4b': 'تُتابَع دورياً عبر الزمن',
    'cmp-note': 'هذا وصف للتخصص بشكل عام — وليس حكماً على أي عيادة بعينها.'
  };

  /* ---------- language ---------- */

  var htmlEl = document.documentElement;
  var btn = document.getElementById('langToggle');

  function applyLang(lang) {
    var isAr = lang === 'ar';
    var nodes = document.querySelectorAll('[data-k]');

    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-k');
      if (el.dataset.enHtml === undefined) el.dataset.enHtml = el.innerHTML;
      if (isAr) {
        if (AR[key] !== undefined) el.innerHTML = AR[key];
      } else {
        el.innerHTML = el.dataset.enHtml;
      }
    }

    var phNodes = document.querySelectorAll('[data-k-ph]');
    for (var j = 0; j < phNodes.length; j++) {
      var p = phNodes[j];
      var pk = p.getAttribute('data-k-ph');
      if (p.dataset.enPh === undefined) p.dataset.enPh = p.getAttribute('placeholder') || '';
      if (isAr) {
        if (AR[pk] !== undefined) p.setAttribute('placeholder', AR[pk]);
      } else {
        p.setAttribute('placeholder', p.dataset.enPh);
      }
    }

    htmlEl.setAttribute('lang', isAr ? 'ar' : 'en');
    htmlEl.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    if (btn) {
      btn.textContent = isAr ? 'English' : 'العربية';
      btn.setAttribute('aria-label', isAr ? 'Switch language to English' : 'Switch language to Arabic');
    }
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  if (btn) {
    btn.addEventListener('click', function () {
      applyLang(htmlEl.getAttribute('lang') === 'ar' ? 'en' : 'ar');
    });
  }

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'ar') applyLang('ar');

  /* ---------- booking form -> prefilled WhatsApp ---------- */

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

      var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }

  /* ---------- mobile nav ---------- */

  var menuBtn = document.getElementById('menuToggle');
  var nav = document.getElementById('primaryNav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- FAQ accordion (used by version 3) ---------- */

  var faqs = document.querySelectorAll('.faq-q');
  for (var f = 0; f < faqs.length; f++) {
    faqs[f].addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      var panel = document.getElementById(this.getAttribute('aria-controls'));
      if (panel) panel.hidden = expanded;
    });
  }

  /* ---------- scroll reveal ---------- */

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

})();
