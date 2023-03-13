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

// NAV ITEMS
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, index) => {
link.textContent = siteContent.nav[`nav-item-${index + 1}`]
});

// CTA ITEMS
const ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = siteContent.cta['h1']

const btn = document.querySelector('.cta-text button')
btn.textContent = siteContent.cta['button']

const heroImg = document.querySelector('.cta #cta-img')
heroImg.setAttribute('src', siteContent.cta['img-src'])


// TOP MAIN CONTENT ITEMS
const topContent = document.querySelector('.top-content');
const textContentItems = topContent.querySelectorAll('.text-content')

textContentItems.forEach((item, index) => {
const h4 = item.querySelector('h4')
const p  = item.querySelector('p')

if (index === 0) {
  h4.textContent = siteContent["main-content"]["features-h4"];
  p.textContent = siteContent["main-content"]["features-content"];
} else if (index === 1) {
  h4.textContent = siteContent["main-content"]["about-h4"];
  p.textContent = siteContent["main-content"]["about-content"];
}
});

// MIDDLE IMG
const midleImg = document.querySelector('.main-content .middle-img')
midleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// BOTOM CONTENT 
const botomContent = document.querySelector('.bottom-content');
const botomContentItems = botomContent.querySelectorAll('.text-content')

botomContentItems.forEach((item, index) => {
const h4 = item.querySelector('h4')
const p  = item.querySelector('p')

if (index === 0) {
  h4.textContent = siteContent["main-content"]['services-h4'];
  p.textContent = siteContent["main-content"]['services-content'];
} else if (index === 1) {
  h4.textContent = siteContent["main-content"]['product-h4'];
  p.textContent = siteContent["main-content"]['product-content'];
}

else if (index === 2) {
  h4.textContent = siteContent["main-content"]['vision-h4'];
  p.textContent = siteContent["main-content"]['vision-content'];
}
});


// CONTACT ITEM
const contactSection = document.querySelector('.contact');
const headerContact = contactSection.querySelector('h4');
const addresContact = contactSection.querySelectorAll('p')[0];
const phonContact = contactSection.querySelectorAll('p')[1];
const emailContact = contactSection.querySelectorAll('p')[2];

headerContact.textContent = siteContent.contact['contact-h4'];
addresContact.textContent = siteContent.contact['address'];
phonContact.textContent = siteContent.contact['phone']
emailContact.textContent = siteContent.contact['email']


// FOOTER ITEM

const foterSec = document.querySelector('footer p')
foterSec.textContent = siteContent.footer['copyright']