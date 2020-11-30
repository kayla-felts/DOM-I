const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const header = document.querySelector('header');
const nav = header.querySelector('nav');
const nav1 = nav.querySelector('a:nth-of-type(1)');
const nav2 = nav.querySelector('a:nth-of-type(2)');
const nav3 = nav.querySelector('a:nth-of-type(3)');
const nav4 = nav.querySelector('a:nth-of-type(4)');
const nav5 = nav.querySelector('a:nth-of-type(5)');
const nav6 = nav.querySelector('a:nth-of-type(6)');

nav1.textContent = 'Services';
nav1.style.color = 'green';
nav2.textContent = 'Product';
nav2.style.color = 'green';
nav3.textContent = 'Vision';
nav3.style.color = 'green';
nav4.textContent = 'Features';
nav4.style.color = 'green';
nav5.textContent = 'About';
nav5.style.color = 'green';
nav6.textContent = 'Contact';
nav6.style.color = 'green';

const cta = document.querySelector('.cta');
const ctaTxt = cta.querySelector('h1');
const ctaBtn = cta.querySelector('button');
const ctaImg = cta.querySelector('img');

ctaTxt.innerHTML = 'DOM <br />';
ctaTxt.innerHTML += 'IS <br />';
ctaTxt.innerHTML += 'AWESOME';
ctaBtn.textContent = 'Get Started';
ctaImg.src = 'img/header-img.png';

const topCont = document.querySelector('.top-content');
const features = topCont.querySelector('.text-content:nth-of-type(1)');
const featuresTit = features.querySelector('h4');
const featuresCont = features.querySelector('p');
const about = topCont.querySelector('.text-content:nth-of-type(2)')
const aboutTit = about.querySelector('h4');
const aboutCont = about.querySelector('p');
const midImg = document.getElementById('middle-img');

featuresTit.textContent = 'Features';
featuresCont.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperfiet metus scelerisque quis.';
aboutTit.textContent = 'About';
aboutCont.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperfiet metus scelerisque quis.';
midImg.src = 'img/mid-page-accent.jpg';

const bottomCont = document.querySelector('.bottom-content');
const services = bottomCont.querySelector('.text-content:nth-of-type(1)');
const servicesTit = services.querySelector('h4');
const servicesCont = services.querySelector('p');
const product = bottomCont.querySelector('.text-content:nth-of-type(2)');
const productTit = product.querySelector('h4');
const productCont = product.querySelector('p');
const vision = bottomCont.querySelector('.text-content:nth-of-type(3)');
const visionTit = vision.querySelector('h4');
const visionCont = vision.querySelector('p');

servicesTit.textContent = 'Sevices';
servicesCont.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperfiet metus scelerisque quis.';
productTit.textContent = 'Product';
productCont.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperfiet metus scelerisque quis.';
visionTit.textContent = 'Vision';
visionCont.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperfiet metus scelerisque quis.';

const contact = document.querySelector('.contact');
const contactTit = contact.querySelector('h4');
const streetAdd = contact.querySelector('p:nth-of-type(1)');
const phone = contact.querySelector('p:nth-of-type(2)');
const email = contact.querySelector('p:nth-of-type(3)');
const footer = document.querySelector('footer');
const footerCont = footer.querySelector('p');

contactTit.textContent = 'Contact';
streetAdd.innerHTML = '123 Way 456 Street <br />';
streetAdd.innerHTML += 'Somewhere, USA';
phone.textContent = '1 (888) 888-8888';
email.textContent = 'sales@greatidea.io';
footerCont.textContent = 'Copyright Great Idea! 2018';

const nav7 = document.createElement('a');
const nav8 = document.createElement('a');

nav7.textContent = 'Blog';
nav7.style.color = 'green';
nav8.textContent = 'Gallery';
nav8.style.color = 'green';

nav.appendChild(nav7);
nav.appendChild(nav8);