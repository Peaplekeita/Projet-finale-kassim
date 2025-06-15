// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("#menu-toggle");
  const menu = document.querySelector(".navbar ul");

  if (!toggleButton || !menu) {
    console.error("Bouton ou menu introuvable.");
    return;
  }

  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    // Optionnel : Mettre à jour le texte/aria pour accessibilité
    const isMenuOpen = menu.classList.contains("active");
    toggleButton.textContent = isMenuOpen ? "✕ Fermer" : "☰ Menu";
    toggleButton.setAttribute("aria-expanded", isMenuOpen);
  });
});



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
    
    let normalizedHref = hreff.startsWith("..")?`/Projet-finale-kassim${hreff.slice(2)}`:`/Projet-finale-kassim/${hreff}`;
    console.log(normalizedHref)
    
    // Comparaison exacte (ou gérer la page d'accueil)
    if (normalizedHref === currentPath || (currentPath === "/" && normalizedHref === "/index")) {
      link.classList.add("active");
    }
  });
}

// Exécuter au chargement de la page
document.addEventListener("DOMContentLoaded", setActiveLink);