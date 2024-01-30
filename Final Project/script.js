const faqs = document.querySelectorAll('.baloon');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  function validateName() {
    let inputName = document.querySelector("#name");
    let valueName = inputName.value;
    let errorName = document.querySelector("#error-name");
  
    if (valueName == "") {
      errorName.innerHTML = "First name cannot be empty!";
      return false;
    } else {
      errorName.innerHTML = "";
      return true;
    }
  }
  
  function validateEmail() {
    let inputEmail = document.querySelector("#email");
    let valueEmail = inputEmail.value;
    let errorEmail = document.querySelector("#error-email");
  
    if (valueEmail == "") {
      errorEmail.innerHTML = "Email cannot be empty!";
      return false;
    } else if (!valueEmail.includes("@")) {
      errorEmail.innerHTML = "Email must contain '@'!";
      return false;
    } else {
      errorEmail.innerHTML = "";
      return true;
    }
  }
  
  function validateSubject() {
    let inputSubject = document.querySelector("#subject");
    let valueSubject = inputSubject.value;
    let errorSubject = document.querySelector("#error-subject");
  
    if (valueSubject == "") {
      errorSubject.innerHTML = "Subject cannot be empty!";
      return false;
    } else {
      errorSubject.innerHTML = "";
      return true;
    }
  }

  function validateMsg() {
    let inputMsg = document.querySelector("#msg");
    let valueMsg = inputMsg.value;
    let errorMsg = document.querySelector("#error-msg");
  
    if (valueMsg == "") {
      errorMsg.innerHTML = "Message cannot be empty!";
      return false;
    } else {
      errorMsg.innerHTML = "";
      return true;
    }
  }
  
  let contactBtn = document.querySelector("#contact-btn");
  contactBtn.addEventListener("click", function (e) {
    e.preventDefault();
  
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isSubjectValid = validateSubject();
    let isMsgValid = validateMsg();
  
    if (
      isNameValid &&
      isEmailValid &&
      isSubjectValid &&
      isMsgValid
    ) {
      let contactForm = document.querySelector("form");
      alert("FORM SUBMITTED!");
      contactForm.submit(); // SUBMIT FORM
    }
  });