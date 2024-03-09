
const animate = (selector, animation = 'fade-up', delay = 50, duration = 800) => {
    let el = document.querySelector(selector)
    el.setAttribute("data-aos", animation);
    el.setAttribute("data-aos-delay", delay);
    el.setAttribute("data-aos-duration", duration);
}

var path = window.location.pathname;

// navbar
animate('#top > header', 'fade-down', 50, 500);

if (path == '/' || path == '/id/') {
    animate('#top > main > div > div > h1', 'fade-up', 50, 600);  // heading
    animate('#top > main > div > div > span', 'fade-up', 150, 500);  // description
    // socials
    animate('#top > main > div > div > div.social-icons > a:nth-child(1)', 'fade-left', 300);
    animate('#top > main > div > div > div.social-icons > a:nth-child(2)', 'fade-left', 500);
    animate('#top > main > div > div > div.social-icons > a:nth-child(3)', 'fade-left', 700);
    // CTA
    animate('#top > main > div > div > div.buttons > a:nth-child(1)', 'fade-up', 900);
    animate('#top > main > div > div > div.buttons > a:nth-child(2)', 'fade-up', 1000);
}

if (path == '/about/' || path == '/id/about/') {
    animate('#top > main > article > header', 'fade-up');  // heading
    animate('#top > main > article > div', 'fade-up', 150);  // content
}

if (path == '/projects/' || path == '/id/projects/') {
    animate('#top > main > header', 'fade-up')  // heading
    animate('#top > main > div', 'fade-up', 150)  // content
}

AOS.init();
