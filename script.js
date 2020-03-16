document.querySelector(".heder__navigation").addEventListener("click", selectNavigationLink);

function selectNavigationLink(event) {
    document.querySelectorAll(".navigation__link").forEach( element => {
        element.classList.remove("navigation__link_selected");
    });
    event.target.classList.add("navigation__link_selected");
    }



/*portfolio*/

const portfolio = document.querySelector(".portfolio__projects");
const tags = document.querySelector(".portfolio_filter");

tags.addEventListener("click", selectPortfolioLink);

function selectPortfolioLink(event) {

    tags.querySelectorAll(".filter__item").forEach( element => {
        element.classList.remove("filter__item_selected");
    });
    event.target.classList.add("filter__item_selected");

    portfolio.querySelectorAll(".portfolio__project").forEach(element =>{
        let newIndex;

        element.classList.forEach(nameClass => {
            let hasIndex = getCurrentIndex(nameClass);
            if (hasIndex) {
                newIndex  = getNewIndex(hasIndex[0]);
                element.classList.remove(nameClass);
            }
        })
        element.classList.add(`portfolio__project-image${newIndex}`);
    });
}

function getCurrentIndex(str) {
    let portfolioIndex = str.match(/\d+/);
    return portfolioIndex;
}

function getNewIndex(index) {
    let portfolioIndex = +index+3;
    if (portfolioIndex>12) {
        portfolioIndex -=12;
    }
    return portfolioIndex;
}

portfolio.addEventListener("click", (event) => {
    if ([...event.target.classList].some( className => className==="portfolio__project")) {
        portfolio.querySelectorAll(".portfolio__project").forEach(project => project.classList.remove("project-bordered"));
        event.target.classList.add("project-bordered");
    }
});
    
