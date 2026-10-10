<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="pageTitle">Елена Филатова — Преподаватель & Frontend-разработчик</title>
    <!-- Иконка сайта (фавиконка) во вкладке браузера -->
    <link rel="icon" type="image/svg+xml" href="images/favicon.png">
    <link rel="stylesheet" href="style.css">
    <!-- GSAP библиотека для анимации интро -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="index.js" defer></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <!-- Интро-анимация логотипа -->
    <div id="introLogo" class="introLogo">
        <img id="introLogoImg" src="images/logo-s.webp" alt="Logo" class="introLogoImg">
        <div id="introName" class="introName">
            <span class="white">Filatova</span>
            <span class="violet">Elena</span>
        </div>
    </div>

    <!-- Интерактивный фон из пузырьков -->
    <div class="bubbles-bg" id="bubblesBg" aria-hidden="true"></div>

    <div class="portfolio-card">
        <!-- Кнопка переключения языка -->
        <div class="lang-switch-wrapper">
            <button id="langToggleBtn" class="lang-btn" onclick="toggleLanguage()">EN</button>
        </div>

        <!-- Шапка профиля -->
        <header class="profile-header">
            <!-- Логотип и брендовый текст слева -->
            <div class="header-logo">
                <img src="images/logo-s.webp" alt="Logo">
                <span class="brand-text"></span>
            </div>

            <div class="avatar-wrapper">
                <img src="images/portfolio_photo.png" alt="Елена Филатова" class="profile-avatar">
            </div>
            <h1>Елена Филатова</h1>
            <p class="profile-tagline" data-i18n="profileTagline">Преподаватель английского языка & Frontend-разработчик</p>
            
            <!-- Кнопки CV -->
            <div class="header-actions">
                <a href="images/cv-ru.pdf" download target="_blank" class="cv-btn">
                    <i class="fa-solid fa-file-arrow-down"></i> <span data-i18n="cvRu">CV (RU)</span>
                </a>
                <a href="images/cv-en.pdf" download target="_blank" class="cv-btn">
                    <i class="fa-solid fa-file-arrow-down"></i> <span data-i18n="cvEn">CV (EN)</span>
                </a>
            </div>

            <!-- Соцсети -->
            <div class="social-icons header-socials">
                <a href="https://t.me/elenafeela" target="_blank" rel="noreferrer" class="social-icon" title="Telegram">
                    <i class="fa-brands fa-telegram"></i>
                </a>
                <a href="https://www.instagram.com/elena_feela_/" target="_blank" rel="noreferrer" class="social-icon" title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=filatovae047@gmail.com" target="_blank" rel="noreferrer" class="social-icon" title="Email">
                    <i class="fa-solid fa-envelope"></i>
                </a>
            </div>
        </header>

        <!-- Навигация -->
        <div class="nav-tabs">
            <button class="nav-btn active" onclick="switchTab(event, 'about')" data-i18n="navAbout">О себе</button>
            <button class="nav-btn" onclick="switchTab(event, 'skills')" data-i18n="navSkills">Навыки</button>
            <button class="nav-btn" onclick="switchTab(event, 'experience')" data-i18n="navExperience">Опыт</button>
            <button class="nav-btn" onclick="switchTab(event, 'certificates')" data-i18n="navCerts">Сертификаты</button>
        </div>

        <!-- Содержимое вкладок -->
        <div class="content-body">
            
            <!-- О себе -->
            <section id="about" class="tab-pane active">
                <h2 data-i18n="aboutTitle">Обо мне</h2>
                <p data-i18n="aboutText1">
                   Преподаватель английского языка с высшим лингвистическим образованием(Казахский национальный педагогический университет имени Абая, факультет иностранных языков) 
                   и дополнительной технической базой. Выпускница Канадской школы программирования CanSheCode, 
                   что позволяет мне уверенно ориентироваться в цифровых технологиях, эффективно использовать онлайн/офлайн-инструменты и проводить интерактивные уроки. 
                </p>
            </section>

            <!-- Навыки -->
            <section id="skills" class="tab-pane">
                <h2 data-i18n="skillsTitle">Навыки и стек</h2>
                <div class="skills-grid">
                    <div class="skill-box">
                        <h3 data-i18n="skillTeachingTitle"><img src="images/chat-icon.gif" alt="Chat Icon" width="48" height="48"> Педагогическая деятельность</h3>
                        <ul>
                            <li data-i18n="st1">Обучаю детей и взрослых</li>
                            <li data-i18n="st2">Английский для IT-сферы, работа со школьниками и малышами, разговорный, грамматика</li>
                            <li data-i18n="st3">Геймификация и интерактив</li>
                        </ul>
                    </div>
                    <div class="skill-box">
                        <h3 data-i18n="skillDevTitle"><img src="images/laptop-life.gif" alt="Laptop Icon" width="48" height="48"> IT и программирование</h3>
                        <ul>
                            <li data-i18n="sd1">JavaScript (Vanilla), React</li>
                            <li data-i18n="sd2">HTML5, CSS3, FSD, RTK Query</li>
                            <li data-i18n="sd3">Git, GitHub, VS Code, Netlify</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Опыт работы -->
            <section id="experience" class="tab-pane">
                <h2 data-i18n="expTitle">Опыт работы</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="timeline-date" data-i18n="expDate1">2016 — Настоящее время</span>
                        <h3 data-i18n="expRole1">Частный преподаватель английского языка</h3>
                        <p data-i18n="expDesc1">Обучение различных возрастных групп, индивидуальный подход и современные методики.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-date" data-i18n="expDate2">2022 — 2026</span>
                        <h3 data-i18n="expRole2">Frontend Developer — AL TECH LABS LTD</h3>
                        <p data-i18n="expDesc2">Разработка коммерческих веб-приложений, проектирование интерфейсов и оптимизация клиентской части.</p>
                    </div>
                </div>
            </section>

           <!-- Сертификаты -->
            <section id="certificates" class="tab-pane">
                <h2 data-i18n="certsTitle">Сертификаты и достижения</h2>
                <div class="certs-grid">
                    <div class="cert-card">
                        <img src="images/cert14.jpg" alt="Certificate 14">
                        <div class="cert-info">
                            <h3>Disciplines and exams</h3>
                            <p>Дисциплины и экзамены</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert15.jpg" alt="Certificate 15">
                        <div class="cert-info">
                            <h3>ADDENDUM TO DIPLOMA</h3>
                            <p>Дополнение к диплому</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert16.jpg" alt="Certificate 16">
                        <div class="cert-info">
                            <h3>DIPLOMA</h3>
                            <p>Диплом</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/nkt.jpg" alt="НКТ">
                        <div class="cert-info">
                            <h3>НКТ 2022</h3>
                            <p data-i18n="cert1Desc">Национальный квал.тест</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert.jpg" alt="Cambridge Assessment">
                        <div class="cert-info">
                            <h3>British Council</h3>
                            <p>New Ways of teaching:Skills and CPD for Teachers</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert1.jpg" alt="British Council">
                        <div class="cert-info">
                            <h3>The English Classroom</h3>
                            <p>Teach with The English Classroom</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert3.jpg" alt="The English Classroom">
                        <div class="cert-info">
                            <h3>Cambridge Assessment English</h3>
                            <p>Developing speaking skills</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert4.jpg" alt="Macmillan Education">
                        <div class="cert-info">
                            <h3>British Council</h3>
                            <p data-i18n="certMacmillan">Teaching pathways: How to teach speaking</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert5.jpg" alt="Богатый таргетолог">
                        <div class="cert-info">
                            <h3 data-i18n="certTargetTitle">On-Skills.ru</h3>
                            <p data-i18n="certTargetDesc"> Онлайн-игра как метод вовлечения</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert6.jpg" alt="On-Skills.ru">
                        <div class="cert-info">
                            <h3>British Council</h3>
                            <p data-i18n="certOnSkillsDesc">Effective Communities of Practice</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert7.jpg" alt="Certificate 7">
                        <div class="cert-info">
                            <h3>Macmillan Education</h3>
                            <p>«Winter Fair Professional Development</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert8.png" alt="Bootstrap-5">
                        <div class="cert-info">
                            <h3>CanSheCode</h3>
                            <p>Certificate in Bootstrap-5</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert9.png" alt="JavaScript">
                        <div class="cert-info">
                            <h3>CanSheCode</h3>
                            <p>Certificate in JavaScript</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert10.png" alt="Fullstack Web Development">
                        <div class="cert-info">
                            <h3>CanSheCode</h3>
                            <p>Fullstack Web Development (React, Redux, Node.js)</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert11.png" alt="GSAP, Figma">
                        <div class="cert-info">
                            <h3>CanSheCode</h3>
                            <p>Certificate in GSAP, Figma</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert12.png" alt="HTML, CSS">
                        <div class="cert-info">
                            <h3>CanSheCode</h3>
                            <p>Introduction to Web Development (HTML, CSS)</p>
                        </div>
                    </div>
                    <div class="cert-card">
                        <img src="images/cert13.png" alt="Certificate 13">
                        <div class="cert-info">
                            <h3>Богатый таргетолог</h3>
                            <p>Курс по созданию и прогреву аккаунтов</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <!-- Футер -->
        <footer class="portfolio-footer">
            <p>© 2026 Елена Филатова</p>
        </footer>
    </div>

    <!-- Модальное окно -->
    <div id="certModal" class="modal" onclick="closeCertModal()">
        <span class="close-btn" onclick="closeCertModal()">&times;</span>
        <img class="modal-content" id="modalImg" alt="Увеличенный сертификат">
    </div>

<script>
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

// Единый скрипт для интро и пузырьков
document.addEventListener("DOMContentLoaded", () => {
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

        tl.to(bgRef, { opacity: 1, duration: 0.2 })
          .fromTo(logoRef, { scale: 0.3, opacity: 0, rotation: -15 }, { scale: 1, opacity: 1, rotation: 0, duration: 1.0 })
          .fromTo(nameRef, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.6")
          .to([logoRef, nameRef], { opacity: 0, scale: 1.1, duration: 0.6, delay: 0.1, ease: "power2.inOut" })
          .to(bgRef, { opacity: 0, duration: 0.6, ease: "sine.inOut" }, "-=0.4");
    }

    // Логика пузырьков и зоны выреза вокруг аватара
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
</script>
</body>
</html>
