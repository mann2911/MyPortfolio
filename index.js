// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})




document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    form.reset()
    sendEmail(formData);
  });
});

function sendEmail(formData) {
  emailjs.send("service_df746s8", "template_ynus5zn", {
    to_email: "mannpatel1360@gmail.com", // Your email address
    from_name: formData.get("name"),
    from_email: formData.get("email"),
    message: formData.get("message")
  }).then(function(response) {
    alert("Email sent successfully")
    console.log("Email sent successfully:", response);
    // You can add further actions here, like showing a success message
  }).catch(function(error) {
    console.error("Email sending error:", error);
    // You can add further actions here, like showing an error message
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const typedOutput = document.getElementById("auto-type");
  
  const options = {
    strings: ["I am Mann Patel", "I am React Js Developer", "Happy to have you here!"],
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 70, // Backspacing speed in milliseconds
    loop: true // Loop the typing animation
  };
  
  const typed = new Typed(typedOutput, options);
});