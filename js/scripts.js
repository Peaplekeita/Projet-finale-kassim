// script pour la gestion du menu déroulant
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("#menu-toggle");
  const menu = document.querySelector(".navbar ul");

  if (!toggleButton || !menu) {
    console.error("Bouton ou menu introuvable.");
    return;
  }

  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
   
    const isMenuOpen = menu.classList.contains("active");
    toggleButton.textContent = isMenuOpen ? "✕ Fermer" : "☰ Menu";
    toggleButton.setAttribute("aria-expanded", isMenuOpen);
  });
});


//Script pour gerer la selection du menu
// Ce script active ou désactive la class .active en fonction window.location.pathname
function setActiveLink() {
  // Récupérer tous les liens de navigation
  const links = document.querySelectorAll(".navbar ul a");
  const currentPath = window.location.pathname || "/"; 
  console.log(currentPath);
  

  // Supprimer la classe .active de tous les liens
  links.forEach(link => link.classList.remove("active"));

  // Ajouter la classe .active au lien correspondant
  links.forEach(link => {
    
    const hreff = link.getAttribute("href") || "";
    
    // Cette normalisation est lies a la structure du lien
    let normalizedHref = hreff.startsWith("..")?`/Projet-finale-kassim${hreff.slice(2)}`:`/Projet-finale-kassim/${hreff}`;
    console.log(normalizedHref)
    
    // Comparaison exacte (ou gérer la page d'accueil)
    if (normalizedHref === currentPath || (currentPath === "/" && normalizedHref === "/index")) {
      link.classList.add("active");
    }
  });
}

// le script est executé a chaque réchagement de page
document.addEventListener("DOMContentLoaded", setActiveLink);