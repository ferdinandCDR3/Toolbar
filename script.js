const menuPersonne = document.getElementById('menuPersonne');
const menuCaracteristique = document.getElementById('menuCaracteristique');
const formulaire1 = document.getElementById('formulaire1');
const formulaire2 = document.getElementById('formulaire2');

menuPersonne.addEventListener('click', () => {
    formulaire1.classList.add('active');
    formulaire2.classList.remove('active');
    menuPersonne.classList.add('active');
    menuCaracteristique.classList.remove('active');
});

menuCaracteristique.addEventListener('click', () => {
    formulaire2.classList.add('active');
    formulaire1.classList.remove('active');
    menuCaracteristique.classList.add('active');
    menuPersonne.classList.remove('active');
});