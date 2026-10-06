function switchTab(event, tabId) {
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => pane.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    event.currentTarget.classList.add('active');
}

// Открытие сертификата в модальном окне
document.addEventListener('DOMContentLoaded', () => {
    const certImages = document.querySelectorAll('.cert-card img');
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');

    certImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });
});

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
}

// Закрытие при прокрутке колесика мыши
window.addEventListener('wheel', () => {
    const modal = document.getElementById('certModal');
    if (modal.style.display === 'flex') {
        closeCertModal();
    }
});

// Переключение языков
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
        aboutText1: " Преподаватель английского языка с высшим лингвистическим образованием(Казахский национальный педагогический университет имени Абая, факультет иностранных языков) и дополнительной технической базой. Выпускница Канадской школы программирования CanSheCode, что позволяет мне уверенно ориентироваться в цифровых технологиях, эффективно использовать онлайн/офлайн-инструменты и проводить интерактивные уроки. ",
        skillsTitle: "Навыки и стек",
        skillTeachingTitle: "🗣 Преподавание",
        st1: "Обучаю детей и взрослых",
        st2: "Английский для IT-сферы, работа со школьниками и малышами, разговорный, грамматика",
        st3: "Геймификация и интерактив",
        skillDevTitle: "💻 Разработка",
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
        certMacmillan: "Участие в вебинаре «Winter Fair»",
        certTargetTitle: "Богатый таргетолог",
        certTargetDesc: "Курс по созданию и прогреву аккаунтов",
        certOnSkillsDesc: "Онлайн-игра как метод вовлечения"
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
        aboutText1: "Certified specialist with a Bachelor's degree in Linguistics (Abai Kazakh National Pedagogical University, Foreign Languages Department) and an additional technical background. Successfully combining traditional English language teaching with modern web technologies to create interactive and engaging lessons for children and adults",
        skillsTitle: "Skills & Tech Stack",
        skillTeachingTitle: "🗣 Teaching",
        st1: "Methodology for kids & adults",
        st2: "IT English, conversational English, grammar, teaching kids and school students.",
        st3: "Gamification & interactive tools",
        skillDevTitle: "💻 Development",
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
        certMacmillan: "Participation in the «Winter Fair» webinar",
        certTargetTitle: "Targeting Expert",
        certTargetDesc: "Course on account creation and promotion",
        certOnSkillsDesc: "Online game as an engagement method"
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

document.addEventListener("DOMContentLoaded", () => {
    const bgRef = document.getElementById("introLogo");
    const logoRef = document.getElementById("introLogoImg");
    const nameRef = document.getElementById("introName");

    // Если интро уже показывалось в эту сессию, можно сразу скрыть (по желанию), 
    // но сейчас оно будет проигрываться при каждом открытии/обновлении страницы.
    
    const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
            if (bgRef) {
                bgRef.style.display = "none"; // Полностью убираем элемент из потока после завершения
            }
        },
    });

    tl.to(bgRef, { opacity: 1, duration: 0.6 })
      .fromTo(logoRef, { scale: 0.3, opacity: 0, rotation: -15 }, { scale: 1, opacity: 1, rotation: 0, duration: 1.2 })
      .fromTo(nameRef, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.8")
      .to([logoRef, nameRef], { opacity: 0, scale: 1.1, duration: 0.8, delay: 0.1, ease: "power2.inOut" })
      .to(bgRef, { opacity: 0, duration: 0.8, ease: "sine.inOut" }, "-=0.6");
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Логика Intro-заставки (GSAP)
    const bgRef = document.getElementById("introLogo");
    const logoRef = document.getElementById("introLogoImg");
    const nameRef = document.getElementById("introName");

    if (bgRef && logoRef && nameRef) {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
                bgRef.style.display = "none";
            },
        });

        tl.to(bgRef, { opacity: 1, duration: 0.6 })
          .fromTo(logoRef, { scale: 0.3, opacity: 0, rotation: -15 }, { scale: 1, opacity: 1, rotation: 0, duration: 1.2 })
          .fromTo(nameRef, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.8")
          .to([logoRef, nameRef], { opacity: 0, scale: 1.1, duration: 0.8, delay: 0.1, ease: "power2.inOut" })
          .to(bgRef, { opacity: 0, duration: 0.8, ease: "sine.inOut" }, "-=0.6");
    }

    // 2. Логика генерации пузырьков и зоны выреза вокруг аватара
    const bubblesContainer = document.getElementById("bubblesBg");
    const avatar = document.querySelector(".profile-avatar");

    if (bubblesContainer) {
        const count = 20;
        const rand = (a, b) => a + Math.random() * (b - a);

        for (let i = 0; i < count; i++) {
            const span = document.createElement("span");
            const size = rand(30, 80);
            const left = rand(0, 100);
            const duration = rand(18, 36);
            const delay = -rand(0, 10);
            const hue = rand(260, 320);
            const depth = rand(0.05, 0.2);
            const opacity = rand(0.3, 0.6);

            span.style.setProperty("--size", `${size}px`);
            span.style.setProperty("--left", `${left}%`);
            span.style.setProperty("--duration", `${duration}s`);
            span.style.setProperty("--delay", `${delay}s`);
            span.style.setProperty("--hue", hue);
            span.style.setProperty("--depth", depth);
            span.style.setProperty("--opacity", opacity);

            bubblesContainer.appendChild(span);
        }

        // Функция обновления позиции «безопасной зоны» вокруг фото
        const updateAvatarMask = () => {
            if (avatar) {
                const rect = avatar.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                bubblesContainer.style.setProperty("--avatar-x", `${centerX}px`);
                bubblesContainer.style.setProperty("--avatar-y", `${centerY}px`);
            }
        };

        updateAvatarMask();
        window.addEventListener("resize", updateAvatarMask);
        window.addEventListener("scroll", updateAvatarMask);

        // Эффект движения за курсором мыши
        const onMove = (e) => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const mx = ((e.clientX - w / 2) / w) * 50;
            const my = ((e.clientY - h / 2) / h) * 50;
            bubblesContainer.style.setProperty("--mx", `${mx}px`);
            bubblesContainer.style.setProperty("--my", `${my}px`);
        };

        window.addEventListener("mousemove", onMove);
    }
});
