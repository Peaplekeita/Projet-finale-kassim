//const links = document.querySelectorAll(".navbar ul li a");
//const path = window.location.pathname;
//
//
//links.forEach(
//    link =>{
//        if(link.href.includes(path)){
//            link.classList.add("active");
//        }else{
//            link.classList.remove('active')
//        }
//    }
//)



function setActiveLink() {
  // Récupérer tous les liens de navigation
  const links = document.querySelectorAll(".link-portfolio");
  const currentPath = window.location.pathname || "/"; 

  // Supprimer la classe .active de tous les liens
  links.forEach(link => link.classList.remove("active"));

  // Ajouter la classe .active au lien correspondant
  links.forEach(link => {
    const href = link.getAttribute("href") || "";
    // Normaliser les chemins pour gérer les URLs relatives/absolues
    const normalizedHref = href.startsWith("/") ? href : `/${href}`;
    // Comparaison exacte (ou gérer la page d'accueil)
    if (normalizedHref === currentPath || (currentPath === "/" && href === "/home")) {
      link.classList.add("active");
    }
  });
}

// Exécuter au chargement de la page
document.addEventListener("DOMContentLoaded", setActiveLink);