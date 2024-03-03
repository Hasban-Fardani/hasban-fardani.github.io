
const animate = (selector, animation, delay = 50, duration = 800) => {
    let el = document.querySelector(selector)
    el.setAttribute("data-aos", animation);
    el.setAttribute("data-aos-delay", delay);
    el.setAttribute("data-aos-duration", duration);
}

var path = window.location.pathname;
console.log(path)

// navbar
animate('#top > header', 'fade-down', 50, 500);
if (path == '/') {
    animate('#top > main > div > div > h1', 'fade-up', 50, 1000);  // heading
    animate('#top > main > div > div > span', 'fade-up', 150);  // description
    // socials
    animate('#top > main > div > div > div.social-icons > a:nth-child(1)', 'fade-left', 300);
    animate('#top > main > div > div > div.social-icons > a:nth-child(2)', 'fade-left', 600);
    animate('#top > main > div > div > div.social-icons > a:nth-child(3)', 'fade-left', 900);
    // CTA
    animate('#top > main > div > div > div.buttons > a:nth-child(1)', 'fade-up', 1200);
    animate('#top > main > div > div > div.buttons > a:nth-child(2)', 'fade-up', 1500);
}

if (path == '/about/') {
    animate('#top > main > article > header', 'fade-up');
    animate('#top > main > article > div', 'fade-up', 150);
}

AOS.init();
