// ---------- Вкладки ----------
function switchTab(event, tabId) {
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    event.currentTarget.classList.add('active');
}

// ---------- Модальное окно сертификатов ----------
function closeCertModal() {
    const modal = document.getElementById('certModal');
    if (modal) modal.style.display = 'none';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertModal();
});

// ---------- Переводы ----------
const translations = {
    ru: {
        pageTitle: "Елена Филатова — Преподаватель & Frontend-разработчик",
        profileTagline: "Преподаватель английского языка & Frontend-разработчик",
        cvRu: "CV (RU)",
        cvEn: "CV (EN)",
        navAbout: "О себе",
        navSkills: "Навыки",
        navExperience: "Опыт",
        navCerts: "Сертификаты",
        aboutTitle: "Обо мне",
        aboutText1: "Преподаватель английского языка с высшим лингвистическим образованием (Казахский национальный педагогический университет имени Абая, факультет иностранных языков) и дополнительной технической базой. Выпускница Канадской школы программирования CanSheCode, что позволяет мне уверенно ориентироваться в цифровых технологиях, эффективно использовать онлайн/офлайн-инструменты и проводить интерактивные уроки.",
        skillsTitle: "Навыки и стек",
        skillTeachingTitle: "Педагогическая деятельность",
        st1: "Обучаю детей и взрослых",
        st2: "Английский для IT-сферы, работа со школьниками и малышами, разговорный, грамматика",
        st3: "Геймификация и интерактив",
        skillDevTitle: "IT и программирование",
        sd1: "JavaScript (Vanilla), React",
        sd2: "HTML5, CSS3, FSD, RTK Query",
        sd3: "Git, GitHub, VS Code, Netlify",
        expTitle: "Опыт работы",
        expDate1: "2016 — Настоящее время",
        expRole1: "Частный преподаватель английского языка",
        expDesc1: "Обучение различных возрастных групп, индивидуальный подход и современные методики.",
        expDate2: "2022 — 2026",
        expRole2: "Frontend Developer — AL TECH LABS LTD",
        expDesc2: "Разработка коммерческих веб-приложений, проектирование интерфейсов и оптимизация клиентской части.",
        certsTitle: "Сертификаты и достижения",
        cert1Desc: "Национальный квал.тест",
        certTargetTitle: "Богатый таргетолог",
        certTargetDesc: "Курс по созданию и прогреву аккаунтов"
    },
    en: {
        pageTitle: "Elena Filatova — English Teacher & Frontend Developer",
        profileTagline: "English Language Teacher & Frontend Developer",
        cvRu: "CV (RU)",
        cvEn: "CV (EN)",
        navAbout: "About",
        navSkills: "Skills",
        navExperience: "Experience",
        navCerts: "Certificates",
        aboutTitle: "About Me",
        aboutText1: "Certified specialist with a Bachelor's degree in Linguistics (Abai Kazakh National Pedagogical University, Foreign Languages Department) and an additional technical background. Successfully combining traditional English language teaching with modern web technologies to create interactive and engaging lessons for children and adults.",
        skillsTitle: "Skills & Tech Stack",
        skillTeachingTitle: "Teaching",
        st1: "Methodology for kids & adults",
        st2: "IT English, conversational English, grammar, teaching kids and school students.",
        st3: "Gamification & interactive tools",
        skillDevTitle: "IT & Development",
        sd1: "JavaScript (Vanilla), React",
        sd2: "HTML5, CSS3, FSD, RTK Query",
        sd3: "Git, GitHub, VS Code, Netlify",
        expTitle: "Work Experience",
        expDate1: "2016 — Present",
        expRole1: "Private English Language Teacher",
        expDesc1: "Teaching various age groups, individual approach, and modern methodologies.",
        expDate2: "2022 — 2026",
        expRole2: "Frontend Developer — AL TECH LABS LTD",
        expDesc2: "Development of commercial web applications, interface design, and client-side optimization.",
        certsTitle: "Certificates & Achievements",
        cert1Desc: "74 scores (English: 54, Pedagogy: 20)",
        certTargetTitle: "Targeting Expert",
        certTargetDesc: "Course on account creation and promotion"
    }
};

let currentLang = 'ru';

function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    const btn = document.getElementById('langToggleBtn');
    btn.textContent = currentLang === 'ru' ? 'EN' : 'RU';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    document.documentElement.setAttribute('lang', currentLang);
}

// ---------- Инициализация ----------
document.addEventListener("DOMContentLoaded", () => {

    // 1. Открытие сертификата в модальном окне
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');

    document.querySelectorAll('.cert-card img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });

    // 2. Интро-анимация (GSAP)
    const bgRef = document.getElementById("introLogo");
    const logoRef = document.getElementById("introLogoImg");
    const nameRef = document.getElementById("introName");

    let introFinished = false;
    const revealPortfolio = () => {
        document.body.classList.remove("is-loading");
    };
    const finishIntro = () => {
        if (introFinished) return;
        introFinished = true;
        revealPortfolio();
        if (bgRef) bgRef.style.display = "none";
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduceMotion && bgRef && logoRef && nameRef && typeof gsap !== "undefined") {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: finishIntro,
        });

        tl.fromTo(logoRef, { scale: 0.3, opacity: 0, rotation: -15 }, { scale: 1, opacity: 1, rotation: 0, duration: 1.0 })
          .fromTo(nameRef, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.6")
          .to([logoRef, nameRef], { opacity: 0, scale: 1.1, duration: 0.6, delay: 0.3, ease: "power2.inOut" })
          // портфолио проявляется под интро, пока оно растворяется
          .add(revealPortfolio, "-=0.2")
          .to(bgRef, { opacity: 0, duration: 0.6, ease: "sine.inOut" });

        // страховка, если что-то пошло не так
        setTimeout(finishIntro, 6000);
    } else {
        // GSAP не загрузился или включено «уменьшение движения»
        finishIntro();
    }

    // 3. Пузырьки и вырез вокруг аватара
    const bubblesContainer = document.getElementById("bubblesBg");
    const avatar = document.querySelector(".profile-avatar");

    if (bubblesContainer && !reduceMotion) {
        const count = 20;
        const rand = (a, b) => a + Math.random() * (b - a);

        for (let i = 0; i < count; i++) {
            const span = document.createElement("span");

            span.style.setProperty("--size", `${rand(30, 80)}px`);
            span.style.setProperty("--left", `${rand(0, 100)}%`);
            span.style.setProperty("--duration", `${rand(18, 36)}s`);
            span.style.setProperty("--delay", `${-rand(0, 10)}s`);
            span.style.setProperty("--hue", rand(260, 320));
            span.style.setProperty("--depth", rand(0.05, 0.2));
            span.style.setProperty("--opacity", rand(0.3, 0.6));

            bubblesContainer.appendChild(span);
        }

        const updateAvatarMask = () => {
            if (avatar) {
                const rect = avatar.getBoundingClientRect();
                bubblesContainer.style.setProperty("--avatar-x", `${rect.left + rect.width / 2}px`);
                bubblesContainer.style.setProperty("--avatar-y", `${rect.top + rect.height / 2}px`);
            }
        };

        updateAvatarMask();
        window.addEventListener("resize", updateAvatarMask);
        window.addEventListener("scroll", updateAvatarMask);

        window.addEventListener("mousemove", (e) => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            bubblesContainer.style.setProperty("--mx", `${((e.clientX - w / 2) / w) * 50}px`);
            bubblesContainer.style.setProperty("--my", `${((e.clientY - h / 2) / h) * 50}px`);
        });
    }
});
