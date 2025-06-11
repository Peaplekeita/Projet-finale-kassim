let linksElements = document.querySelectorAll(".navbar a");


let linksElementsActive = window.location.pathname;
let currentePAge = linksElementsActive.split('/')


document.activeElement(
    'DOMContentLoaded',
    ()=>{
        let linksElementsActive = window.location.pathname;
        let linksElements = document.querySelectorAll(".navbar ul li a");
        linksElements.forEach(element =>{
            if(element.getAttribute("href"==linksElementsActive)){
                element.classList.add('active');
            }
            alert(element.getAttribute("href"));
        }

        )
    }
)