const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show menu 
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// Hide menu 
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}




// ==================== ADD BLUR HEADER=============
const scrollHeader = () =>{
  const header = document.getElementById('header')

  window.scrollY >= 50 
    ? header.classList.add('blur-header') 
    : header.classList.remove('blur-header')
}

window.addEventListener('scroll', scrollHeader)

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
  e.preventDefault()
} 

contactForm.addEventListener('submit', sendEmail)





