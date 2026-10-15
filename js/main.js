(function () {
  "use strict";

  var translations = {
    en: {
      "meta.title": "Nguyen Hung Phat | Front-end Developer",
      "meta.description": "Nguyen Hung Phat — Front-end Developer portfolio.",
      skip: "Skip to content",
      "nav.label": "Main navigation",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "language.switchToEnglish": "Switch to English",
      "language.switchToVietnamese": "Switch to Vietnamese",
      "hero.greeting": "Hello! I Am",
      "hero.headline": 'A developer who cares about <span class="highlight-oval">pixel-perfect</span> interfaces and smooth user experience.',
      "hero.tagline": "I'm a Front-end Developer",
      "hero.summary": 'Front-end Developer with hands-on experience in ReactJS, JavaScript, and modern UI libraries. I integrate RESTful APIs and turn Figma designs into responsive products. Currently building CMS &amp; ERP interfaces at <span class="text-brand">TopOnTech</span> in Ho Chi Minh City.',
      "hero.work": "View my work",
      "hero.contact": "Contact me",
      "about.heading": "About Me",
      "about.body": "Passionate about improving user experience and developing scalable front-end solutions. Strong in Scrum workflow, responsive design, BEM methodology, and GitLab CI/CD. Seeking to grow into a professional Front-end Engineer in a real-world product environment.",
      "experience.heading": "Work Experience",
      "experience.meta": 'Front End Developer · TopOnTech · <time datetime="2025-02/2026-04">Feb 2025 — Apr 2026</time>',
      "experience.cms.title": "CMS & ERP Systems",
      "experience.cms.body": "Built and maintained web applications with ReactJS, connecting complex business flows to RESTful APIs.",
      "experience.landing.title": "Landing Pages",
      "experience.landing.body": "Responsive marketing pages with HTML, CSS, JavaScript, Bootstrap, and Tailwind for desktop and mobile.",
      "experience.mui.title": "UI with Material UI",
      "experience.mui.body": "Consistent, user-friendly interfaces using MUI — reusable components and design system alignment.",
      "experience.gitlab.title": "GitLab & CI/CD",
      "experience.gitlab.body": "Source control on GitLab and automated build/deploy pipelines for reliable delivery.",
      "experience.projects": "See projects",
      "experience.stack": "My stack",
      "experience.getInTouch": "Get in touch",
      "skills.heading": "Technical Skills",
      "skills.lead": 'I&apos;m looking to join a <span class="text-accent">cross-functional</span> team where I can ship polished front-end work and keep learning.',
      "skills.practices": "Practices",
      "skills.scrum": "Scrum",
      "skills.oop": "OOP",
      "skills.responsive": "Responsive",
      "projects.heading": "Projects",
      "projects.sub": "Click a project to see my role, contributions, and tech stack in detail.",
      "projects.details": "View details →",
      "projectCard.internal": "Internal CMS",
      "projectCard.thaco": "Voucher Management module · React & MUI",
      "projectCard.corporate": "Corporate Web",
      "projectCard.sinhnam": "Figma to responsive UI · HTML/CSS/JS",
      "projectCard.brand": "Brand Website",
      "projectCard.mazda": "Showroom maps & responsive layouts",
      "projectCard.landing": "Landing Page",
      "projectCard.peugeot": "Component-driven UI with Material UI",
      "projectCard.elearning": "E-learning",
      "projectCard.courseWeb": "Catalog, schedule & payment flows",
      "projectCard.mobile": "Mobile App",
      "projectCard.courseApp": "Flutter Android · course & orders",
      "modal.close": "Close project details",
      "modal.contributions": "What I did",
      "modal.stack": "Tech stack",
      "modal.liveDemo": "Live demo",
      "modal.github": "View on GitHub",
      "education.heading": "Education",
      "education.degree": "Software Engineering",
      "education.school": "Ho Chi Minh University of Technology",
      "education.languages": "Languages",
      "education.english": "<strong>English</strong> — Basic working proficiency (technical reading &amp; basic communication).",
      "contact.heading": "Contact",
      "contact.sub": "Open to front-end roles and collaborations.",
      "contact.location": "Ho Chi Minh City, Vietnam",
      "footer.top": "Back to top ↑"
    },
    vi: {
      "meta.title": "Nguyễn Hưng Phát | Lập trình viên Front-end",
      "meta.description": "Portfolio của Nguyễn Hưng Phát — Lập trình viên Front-end.",
      skip: "Bỏ qua đến nội dung",
      "nav.label": "Điều hướng chính",
      "nav.home": "Trang chủ",
      "nav.about": "Giới thiệu",
      "nav.experience": "Kinh nghiệm",
      "nav.projects": "Dự án",
      "nav.contact": "Liên hệ",
      "menu.open": "Mở menu",
      "menu.close": "Đóng menu",
      "language.switchToEnglish": "Chuyển sang tiếng Anh",
      "language.switchToVietnamese": "Chuyển sang tiếng Việt",
      "hero.greeting": "Xin chào! Mình là",
      "hero.headline": 'Lập trình viên luôn chăm chút giao diện <span class="highlight-oval">đến từng pixel</span> và trải nghiệm người dùng mượt mà.',
      "hero.tagline": "Mình là lập trình viên Front-end",
      "hero.summary": 'Lập trình viên Front-end có kinh nghiệm thực tế với ReactJS, JavaScript và các thư viện giao diện hiện đại. Mình tích hợp RESTful API và chuyển thiết kế Figma thành sản phẩm tương thích nhiều màn hình. Hiện đang phát triển giao diện CMS &amp; ERP tại <span class="text-brand">TopOnTech</span>, TP. Hồ Chí Minh.',
      "hero.work": "Xem dự án",
      "hero.contact": "Liên hệ với mình",
      "about.heading": "Giới thiệu",
      "about.body": "Mình yêu thích cải thiện trải nghiệm người dùng và phát triển các giải pháp front-end có khả năng mở rộng. Có kinh nghiệm với quy trình Scrum, thiết kế responsive, phương pháp BEM và GitLab CI/CD. Mình mong muốn phát triển thành Front-end Engineer chuyên nghiệp trong môi trường sản phẩm thực tế.",
      "experience.heading": "Kinh nghiệm làm việc",
      "experience.meta": 'Lập trình viên Front-end · TopOnTech · <time datetime="2025-02/2026-04">Tháng 02/2025 — Tháng 04/2026</time>',
      "experience.cms.title": "Hệ thống CMS & ERP",
      "experience.cms.body": "Phát triển và bảo trì ứng dụng web bằng ReactJS, kết nối các quy trình nghiệp vụ phức tạp với RESTful API.",
      "experience.landing.title": "Trang giới thiệu sản phẩm",
      "experience.landing.body": "Xây dựng trang marketing responsive bằng HTML, CSS, JavaScript, Bootstrap và Tailwind cho máy tính lẫn di động.",
      "experience.mui.title": "Giao diện với Material UI",
      "experience.mui.body": "Xây dựng giao diện nhất quán, dễ sử dụng bằng MUI, với các component tái sử dụng và tuân theo design system.",
      "experience.gitlab.title": "GitLab & CI/CD",
      "experience.gitlab.body": "Quản lý mã nguồn trên GitLab và thiết lập pipeline build/deploy tự động để phát hành ổn định.",
      "experience.projects": "Xem dự án",
      "experience.stack": "Công nghệ sử dụng",
      "experience.getInTouch": "Kết nối với mình",
      "skills.heading": "Kỹ năng chuyên môn",
      "skills.lead": 'Mình muốn tham gia một đội ngũ <span class="text-accent">đa chức năng</span>, nơi có thể tạo ra sản phẩm front-end chỉn chu và không ngừng học hỏi.',
      "skills.practices": "Phương pháp",
      "skills.scrum": "Scrum",
      "skills.oop": "Lập trình hướng đối tượng",
      "skills.responsive": "Thiết kế responsive",
      "projects.heading": "Dự án",
      "projects.sub": "Chọn một dự án để xem vai trò, đóng góp và công nghệ được sử dụng.",
      "projects.details": "Xem chi tiết →",
      "projectCard.internal": "CMS nội bộ",
      "projectCard.thaco": "Phân hệ quản lý voucher · React & MUI",
      "projectCard.corporate": "Website doanh nghiệp",
      "projectCard.sinhnam": "Từ Figma đến giao diện responsive · HTML/CSS/JS",
      "projectCard.brand": "Website thương hiệu",
      "projectCard.mazda": "Bản đồ showroom & giao diện responsive",
      "projectCard.landing": "Trang chiến dịch",
      "projectCard.peugeot": "Giao diện component với Material UI",
      "projectCard.elearning": "Nền tảng học trực tuyến",
      "projectCard.courseWeb": "Danh mục khóa học, lịch học và thanh toán",
      "projectCard.mobile": "Ứng dụng di động",
      "projectCard.courseApp": "Flutter Android · khóa học & đơn hàng",
      "modal.close": "Đóng chi tiết dự án",
      "modal.contributions": "Đóng góp của mình",
      "modal.stack": "Công nghệ sử dụng",
      "modal.liveDemo": "Xem bản chạy thử",
      "modal.github": "Xem trên GitHub",
      "education.heading": "Học vấn",
      "education.degree": "Kỹ thuật phần mềm",
      "education.school": "Trường Đại học Công nghệ TP. Hồ Chí Minh",
      "education.languages": "Ngôn ngữ",
      "education.english": "<strong>Tiếng Anh</strong> — Có thể đọc tài liệu kỹ thuật và giao tiếp cơ bản trong công việc.",
      "contact.heading": "Liên hệ",
      "contact.sub": "Mình sẵn sàng đón nhận cơ hội Front-end và hợp tác trong các dự án.",
      "contact.location": "TP. Hồ Chí Minh, Việt Nam",
      "footer.top": "Về đầu trang ↑"
    }
  };

  var currentLanguage = "en";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var languageToggle = document.querySelector(".language-toggle");
  var siteNav = document.querySelector(".site-nav");
  var navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  var sections = document.querySelectorAll("section[id]");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function closeNav() {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", translations[currentLanguage]["menu.open"]);
    siteNav.classList.remove("is-open");
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", open ? "false" : "true");
      navToggle.setAttribute("aria-label", translations[currentLanguage][open ? "menu.open" : "menu.close"]);
      siteNav.classList.toggle("is-open", !open);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeNav();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });

  window.addEventListener("scroll", function () {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    var scrollPos = window.scrollY + 120;
    var current = "";

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id") || "";
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      link.classList.toggle("is-active", href === "#" + current);
    });
  }, { passive: true });

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var projectData = {
    thaco: {
      type: "Internal CMS · ThaCo Auto Service",
      title: "ThaCo Auto Service — Voucher Management",
      meta: "Front-end Developer · Team of 7 · ReactJS & Material UI",
      summary:
        "Internal CMS for automotive service operations. I owned the front-end of the Voucher Management module, covering creation rules, lifecycle, and redemption flows tied to backend services.",
      tasks: [
        "Developed the Voucher Management module using ReactJS and Material UI (MUI).",
        "Implemented business logic: voucher expiration, denominations, and usage conditions.",
        "Integrated RESTful APIs for data synchronization between frontend and backend.",
        "Improved and maintained existing system features for better usability and consistency.",
      ],
      stack: ["ReactJS", "Material UI", "JavaScript", "RESTful APIs", "GitLab"],
      links: [],
      vi: {
        type: "CMS nội bộ · Dịch vụ ô tô ThaCo",
        title: "ThaCo Auto Service — Quản lý voucher",
        meta: "Lập trình viên Front-end · Nhóm 7 người · ReactJS & Material UI",
        summary: "Hệ thống CMS nội bộ phục vụ hoạt động dịch vụ ô tô. Mình phụ trách front-end cho phân hệ Quản lý voucher, bao gồm quy tắc tạo, vòng đời và quy trình sử dụng voucher kết nối với backend.",
        tasks: [
          "Phát triển phân hệ Quản lý voucher bằng ReactJS và Material UI (MUI).",
          "Triển khai nghiệp vụ về hạn sử dụng, mệnh giá và điều kiện áp dụng voucher.",
          "Tích hợp RESTful API để đồng bộ dữ liệu giữa frontend và backend.",
          "Cải tiến và bảo trì các tính năng hiện có nhằm nâng cao tính nhất quán và khả năng sử dụng."
        ]
      },
    },
    sinhnam: {
      type: "Corporate Website",
      title: "SinhNam Facade Website",
      meta: "Front-end Developer · Team of 5 · HTML, CSS, JavaScript",
      summary:
        "Marketing and company website delivered from design to production. Focus on responsive layout, visual fidelity to Figma, and smooth collaboration via GitLab.",
      tasks: [
        "Developed responsive web interfaces using HTML, CSS, and JavaScript for desktop and mobile.",
        "Converted Figma designs into pixel-perfect layouts with consistent UI across breakpoints.",
        "Collaborated in a team of developers following Git workflow via GitLab.",
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "Figma", "GitLab", "Responsive Design"],
      links: [{ label: "Live demo", url: "https://sinhnamfacade.com" }],
      vi: {
        type: "Website doanh nghiệp",
        title: "Website SinhNam Facade",
        meta: "Lập trình viên Front-end · Nhóm 5 người · HTML, CSS, JavaScript",
        summary: "Website doanh nghiệp và marketing được triển khai từ thiết kế đến production. Tập trung vào bố cục responsive, bám sát thiết kế Figma và phối hợp nhóm qua GitLab.",
        tasks: [
          "Phát triển giao diện web responsive bằng HTML, CSS và JavaScript cho máy tính và thiết bị di động.",
          "Chuyển thiết kế Figma thành giao diện sát thiết kế, nhất quán trên nhiều kích thước màn hình.",
          "Phối hợp cùng nhóm phát triển và sử dụng Git workflow qua GitLab."
        ]
      },
    },
    mazda: {
      type: "Brand Website",
      title: "Mazda Web",
      meta: "Front-end Developer · Team of 5 · HTML, CSS, JavaScript",
      summary:
        "Official brand web experience with emphasis on responsive layout and embedded showroom location maps for customers on desktop and mobile.",
      tasks: [
        "Built responsive web interfaces using HTML, CSS, and JavaScript.",
        "Optimized layouts and interactions for both desktop and mobile viewports.",
        "Integrated Google Maps iframe to display showroom locations.",
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "Google Maps", "Responsive Design"],
      links: [{ label: "Live demo", url: "https://mazdamotors.vn" }],
      vi: {
        type: "Website thương hiệu",
        title: "Website Mazda",
        meta: "Lập trình viên Front-end · Nhóm 5 người · HTML, CSS, JavaScript",
        summary: "Website thương hiệu với trọng tâm là giao diện responsive và bản đồ vị trí showroom, phục vụ khách hàng trên cả máy tính lẫn thiết bị di động.",
        tasks: [
          "Xây dựng giao diện web responsive bằng HTML, CSS và JavaScript.",
          "Tối ưu bố cục và tương tác trên máy tính cũng như thiết bị di động.",
          "Tích hợp Google Maps iframe để hiển thị vị trí các showroom."
        ]
      },
    },
    peugeot: {
      type: "Automotive Landing Page",
      title: "Peugeot Landing Page",
      meta: "Front-end Developer · Team of 5 · ReactJS & MUI",
      summary:
        "Campaign landing page built with React and Material UI, structured as reusable components for fast iteration and a polished brand presentation.",
      tasks: [
        "Developed the front-end using ReactJS.",
        "Built clean, scalable, and reusable UI components with Material UI (MUI).",
        "Aligned implementation with design specs and responsive behavior across devices.",
      ],
      stack: ["ReactJS", "Material UI", "JavaScript", "CSS3"],
      links: [],
      vi: {
        type: "Trang giới thiệu ô tô",
        title: "Landing page Peugeot",
        meta: "Lập trình viên Front-end · Nhóm 5 người · ReactJS & MUI",
        summary: "Landing page cho chiến dịch, được xây dựng bằng React và Material UI với các component có thể tái sử dụng, giúp cập nhật nhanh và đảm bảo trải nghiệm thương hiệu chỉn chu.",
        tasks: [
          "Phát triển giao diện bằng ReactJS.",
          "Xây dựng các component UI rõ ràng, dễ mở rộng và tái sử dụng với Material UI (MUI).",
          "Triển khai theo thiết kế và đảm bảo hiển thị responsive trên nhiều thiết bị."
        ]
      },
    },
    "course-web": {
      type: "E-learning Platform (Web)",
      title: "Course Selling Website",
      meta: "Front-end Developer · Team of 3 · React",
      summary:
        "Full web UI for an online course marketplace: discovery, detail pages, scheduling, and payment — all driven by backend APIs.",
      tasks: [
        "Designed and developed the user interface using React, HTML, CSS, and JavaScript.",
        "Implemented core pages: homepage, course catalog, course details, weekly schedule, and payment gateway.",
        "Integrated APIs to retrieve and display course data dynamically.",
      ],
      stack: ["React", "HTML5", "CSS3", "JavaScript", "RESTful APIs"],
      links: [
        {
          label: "View on GitHub",
          url: "https://github.com/trantrung28122003/EasyLearning-JAVA",
        },
      ],
      vi: {
        type: "Nền tảng học trực tuyến (Web)",
        title: "Website bán khóa học",
        meta: "Lập trình viên Front-end · Nhóm 3 người · React",
        summary: "Giao diện web cho nền tảng khóa học trực tuyến, gồm khám phá khóa học, trang chi tiết, lịch học và thanh toán; dữ liệu được cung cấp qua backend API.",
        tasks: [
          "Thiết kế và phát triển giao diện bằng React, HTML, CSS và JavaScript.",
          "Xây dựng các trang chính: trang chủ, danh mục khóa học, chi tiết khóa học, lịch học theo tuần và thanh toán.",
          "Tích hợp API để truy xuất và hiển thị dữ liệu khóa học."
        ]
      },
    },
    "course-app": {
      type: "E-learning Platform (Mobile)",
      title: "Course Selling App",
      meta: "Front-end Developer · Team of 3 · Flutter (Android)",
      summary:
        "Companion Android app for the course platform — browsing courses, managing orders, and keeping user data in sync with the same backend as the web product.",
      tasks: [
        "Developed a mobile application using Flutter for Android devices.",
        "Designed a user-friendly interface for course browsing and purchase flows.",
        "Integrated APIs to synchronize user data, courses, and order details.",
      ],
      stack: ["Flutter", "Dart", "RESTful APIs", "Android"],
      links: [
        {
          label: "View on GitHub",
          url: "https://github.com/trantrung28122003/EasyLearning-JAVA",
        },
      ],
      vi: {
        type: "Nền tảng học trực tuyến (Di động)",
        title: "Ứng dụng bán khóa học",
        meta: "Lập trình viên Front-end · Nhóm 3 người · Flutter (Android)",
        summary: "Ứng dụng Android đồng hành cùng nền tảng khóa học, hỗ trợ duyệt khóa học, quản lý đơn hàng và đồng bộ dữ liệu người dùng với cùng hệ thống backend của website.",
        tasks: [
          "Phát triển ứng dụng di động bằng Flutter cho thiết bị Android.",
          "Thiết kế giao diện thân thiện cho quy trình duyệt và mua khóa học.",
          "Tích hợp API để đồng bộ dữ liệu người dùng, khóa học và đơn hàng."
        ]
      },
    },
  };

  var modal = document.getElementById("project-modal");
  var modalType = document.getElementById("modal-type");
  var modalTitle = document.getElementById("modal-title");
  var modalMeta = document.getElementById("modal-meta");
  var modalDesc = document.getElementById("modal-desc");
  var modalTasks = document.getElementById("modal-tasks");
  var modalStack = document.getElementById("modal-stack");
  var modalLinks = document.getElementById("modal-links");
  var lastFocused = null;

  function renderProjectData(id) {
    var data = projectData[id];
    if (!data || !modal) return;
    var localizedData = data[currentLanguage] || data;

    if (modalType) modalType.textContent = localizedData.type;
    if (modalTitle) modalTitle.textContent = localizedData.title;
    if (modalMeta) modalMeta.textContent = localizedData.meta;
    if (modalDesc) modalDesc.textContent = localizedData.summary;
    fillList(modalTasks, localizedData.tasks);
    fillList(modalStack, data.stack);

    if (modalLinks) {
      modalLinks.innerHTML = "";
      data.links.forEach(function (link) {
        var a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        var labelKey = link.label === "Live demo" ? "modal.liveDemo" : "modal.github";
        a.textContent = translations[currentLanguage][labelKey] + " ↗";
        modalLinks.appendChild(a);
      });
    }
    modal.setAttribute("data-project", id);
  }

  function applyLanguage(language) {
    if (!translations[language]) return;
    currentLanguage = language;
    var dictionary = translations[language];
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]:not(meta)").forEach(function (el) {
      var value = dictionary[el.getAttribute("data-i18n")];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = dictionary[el.getAttribute("data-i18n-html")];
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var value = dictionary[el.getAttribute("data-i18n")];
      if (value !== undefined) el.setAttribute(el.getAttribute("data-i18n-attr"), value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (el === navToggle && navToggle.getAttribute("aria-expanded") === "true") {
        key = "menu.close";
      }
      if (dictionary[key] !== undefined) el.setAttribute("aria-label", dictionary[key]);
    });

    document.title = dictionary["meta.title"];
    if (languageToggle) {
      var code = languageToggle.querySelector(".language-toggle__code");
      if (code) code.textContent = language === "en" ? "ENG" : "VIE";
      var switchKey = language === "en" ? "language.switchToVietnamese" : "language.switchToEnglish";
      languageToggle.setAttribute("aria-label", dictionary[switchKey]);
      languageToggle.title = dictionary[switchKey];
    }

    if (modal && !modal.hidden) renderProjectData(modal.getAttribute("data-project"));
  }

  function fillList(el, items, className) {
    if (!el) return;
    el.innerHTML = "";
    items.forEach(function (text) {
      var li = document.createElement("li");
      li.textContent = text;
      if (className) li.className = className;
      el.appendChild(li);
    });
  }

  function openProjectModal(id) {
    if (!projectData[id] || !modal) return;

    lastFocused = document.activeElement;
    renderProjectData(id);

    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    requestAnimationFrame(function () {
      modal.classList.add("is-open");
    });

    var closeBtn = modal.querySelector(".project-modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeProjectModal() {
    if (!modal || modal.hidden) return;

    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");

    window.setTimeout(function () {
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    }, 320);
  }

  document.querySelectorAll(".project-card[data-project]").forEach(function (card) {
    card.addEventListener("click", function () {
      openProjectModal(card.getAttribute("data-project"));
    });
  });

  if (modal) {
    modal.querySelectorAll("[data-close-modal]").forEach(function (el) {
      el.addEventListener("click", closeProjectModal);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) {
        closeProjectModal();
      }
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", function () {
      var nextLanguage = currentLanguage === "en" ? "vi" : "en";
      applyLanguage(nextLanguage);
      try {
        window.localStorage.setItem("portfolio-language", nextLanguage);
      } catch (error) {
        // Language switching still works when storage is unavailable.
      }
    });
  }

  var savedLanguage = "en";
  try {
    var storedLanguage = window.localStorage.getItem("portfolio-language");
    if (translations[storedLanguage]) savedLanguage = storedLanguage;
  } catch (error) {
    // Use English when storage is unavailable.
  }
  applyLanguage(savedLanguage);
})();
