/*header*/

document.querySelector(".heder__navigation").addEventListener("click", selectNavigationLink);

function selectNavigationLink(event) {
    document.querySelectorAll(".navigation__link").forEach( element => {
        element.classList.remove("navigation__link_selected");
    });
    event.target.classList.add("navigation__link_selected");
    }


document.addEventListener("scroll", onScroll);

function onScroll(event) {
const curPos = window.scrollY;
const section =  document.querySelectorAll("body>section");

section.forEach(element => {

    if(element.offsetTop  <= curPos && (element.offsetTop + element.offsetHeight) > curPos) {
        document.querySelectorAll(".navigation__link").forEach( a => {
            a.classList.remove("navigation__link_selected");
            if(element.getAttribute("id") === a.getAttribute("href").substring(1)) {
                a.classList.add("navigation__link_selected");
            }
        });
    }
});
}

/*slider*/
document.querySelector(".slide1").addEventListener("click", selectPhone);
flagContentInvisible = false;

function selectPhone(event) {

    if (event.target.classList.value == "img_phone_vertical") {
        setVisibility(document.querySelector(".phone_content_vertical"));
    }
    if (event.target.classList.value == "img_phone_horizontal") {
        setVisibility(document.querySelector(".phone_content_horizontal"));
        }
}

function setVisibility(block) {
    if (block.style.visibility == "hidden") {
        block.style.visibility = null;
    } else {
        block.style.visibility = "hidden";
    }
}

/////////////////////////////////////////////////////
  let slides = document.querySelectorAll(".slide");
  let currentSlider = 0;
  let isEnabled = true;
  const slideBackground = document.querySelector(".slider");

  const slideColor = {
    0: "backgroundColor1",
    1: "backgroundColor2",
    "default": "backgroundColor1"
  }

  function changeCurrentSlide(n) {
    currentSlider = (n + slides.length) % slides.length;
  }

  function hideSlide(direction){
      isEnabled = false;
      slides[currentSlider].classList.add(direction);
      slides[currentSlider].addEventListener("animationend", function(){
          this.classList.remove("active", direction);
      })

  }

  function showSlide(direction){
    isEnabled = false;
    slides[currentSlider].classList.add("next", direction);
    slides[currentSlider].addEventListener("animationend", function(){
        this.classList.remove("next", direction);
        this.classList.add("active");
        isEnabled = true;
    })
}

function changeSlideBackground(){
    slideBackground.classList.value = "slider";
    if(slideColor.hasOwnProperty(currentSlider)) {
      slideBackground.classList.add(slideColor[currentSlider]);
    } else {
      slideBackground.classList.add( slideColor["default"] );
    }
  }

  function previousSlide(n){
    hideSlide("to-right");
    changeCurrentSlide(n - 1);
    changeSlideBackground();
    showSlide("from-left");
  }

  function nextSlide(n){
    hideSlide("to-left");
    changeCurrentSlide(n + 1);
    changeSlideBackground();
    showSlide("from-right");
  }

  document.querySelector(".slider__arrow-left").addEventListener("click", function(){
      if(isEnabled) {
          previousSlide(currentSlider);
      } 
  });

  document.querySelector(".slider__arrow-right").addEventListener("click", function(){
    if(isEnabled) {
        nextSlide(currentSlider);
    } 
});

/*forma*/

const form = document.querySelector(".get-information");
const modal = document.querySelector(".modal-block");
const modalMessage = document.querySelector(".modal__message");

form.addEventListener("submit", (event) => {
event.preventDefault();

if( userName.value && userEmail.value) {
    modalMessage.innerHTML = "";
    let content = document.createElement("p");
    content.innerText =   `${subject.value ? `Subject: ${subject.value}` : "No subject"}
    ${detail.value ? `Description: ${detail.value}` : "No description"}`;
    modalMessage.append(content);
    modal.classList.remove("hidden");
    const modalButton = document.querySelector(".modal__button");
    modalButton.addEventListener("click", (event) => {
        modal.classList.add("hidden");
        document.forms[0].reset();
    });
  
}

}
)
    
