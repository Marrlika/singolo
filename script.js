/*header*/

let flagIsMenuOpen = false;

document.querySelector(".burger-menu").addEventListener("click", onBurgerClick);
function onBurgerClick ( event ) {
    if (flagIsMenuOpen) {
        hideMenu();
    } else {
        showMenu();  
    }
}

function isBurgerAvailable () {
    const burgerMenu =   document.querySelector(".burger-menu");
    return (burgerMenu)?true:false;
}

function showMenu() {
    if (isBurgerAvailable()) {
        document.querySelector(".burger-menu").classList.add("burger-menu__selected");
        document.querySelector(".header__logo").style.left = "40px";
        document.querySelector(".header-modal-menu").classList.add("header-modal-menu_color");
        document.querySelector(".heder__navigation").style.left = "0";
        flagIsMenuOpen = true;
    }
}

function hideMenu() {
    if (isBurgerAvailable()) {
        document.querySelector(".burger-menu").classList.remove("burger-menu__selected");
        document.querySelector(".header__logo").removeAttribute("style");
        document.querySelector(".header-modal-menu").classList.remove("header-modal-menu_color");
        document.querySelector(".heder__navigation").removeAttribute("style");
        flagIsMenuOpen = false;
    }
}



document.querySelector(".heder__navigation").addEventListener("click", selectNavigationLink);

function selectNavigationLink(event) {
    document.querySelectorAll(".navigation__link").forEach( element => {
        element.classList.remove("navigation__link_selected");
    });
    event.target.classList.add("navigation__link_selected");
    hideMenu();
}


document.addEventListener("scroll", onScroll);

function onScroll(event) {
const curPos = window.scrollY;
const section =  document.querySelectorAll("body>section");

section.forEach(element => {

    if(element.offsetTop-1  <= curPos && (element.offsetTop + element.offsetHeight) > curPos) {
        document.querySelectorAll(".navigation__link").forEach( a => {
            a.classList.remove("navigation__link_selected");
            if(element.getAttribute("id") === a.getAttribute("href").substring(1)) {
                a.classList.add("navigation__link_selected");
            }
        });
    }
});
}



/* slider */

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

/* slider carousel */

  let slides = document.querySelectorAll(".slide");
  let currentSlider = 0;
  let isEnabled = true;

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


  function previousSlide(n){
    hideSlide("to-right");
    changeCurrentSlide(n - 1);
    showSlide("from-left");
  }

  function nextSlide(n){
    hideSlide("to-left");
    changeCurrentSlide(n + 1);
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



/*portfolio*/

const portfolio = document.querySelector(".portfolio__projects-container");
const tags = document.querySelector(".portfolio_filter");

tags.addEventListener("click", highlightPortfolioTag);

function highlightPortfolioTag(event) {
    if (!event.target.classList.contains("filter__item_selected")) {
        tags.querySelectorAll(".filter__item").forEach( element => {
            element.classList.remove("filter__item_selected");
        });
        event.target.classList.add("filter__item_selected");
        shufflePortfolioProject();
    }
}

function shufflePortfolioProject() {
    let projects = [...portfolio.querySelectorAll(".portfolio__project")];
    projects.push(...projects.splice(0,3));
    projects.forEach(project => portfolio.append(project));

}


portfolio.addEventListener("click", (event) => {
    if ([...event.target.classList].some( className => className==="portfolio__project")) {
        portfolio.querySelectorAll(".portfolio__project").forEach(project => project.classList.remove("project-bordered"));
        event.target.classList.add("project-bordered");
    }
});

/*forma*/

const form = document.querySelector(".get-information");
const modal = document.querySelector(".modal-block");
const modalMessage = document.querySelector(".modal__message");
const modalButton = document.querySelector(".modal__button");

form.addEventListener("submit", (event) => {
event.preventDefault();

if( userName.value && userEmail.value) {
    modalMessage.innerHTML = "";
    let content = document.createElement("p");
    content.innerText =   `${subject.value ? `Subject: ${subject.value}` : "No subject"}
    ${detail.value ? `Description: ${detail.value}` : "No description"}`;
    modalMessage.append(content);
    modal.classList.remove("hidden");
    modalButton.addEventListener("click", (event) => {
        modal.classList.add("hidden");
        document.forms[0].reset();
    }); 
}
}
)

