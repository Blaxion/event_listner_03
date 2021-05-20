// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
let exo1 = document.querySelector('h1');
exo1.addEventListener('click', () =>{
    exo1.setAttribute('class','text-blue')
});

// ### 2. Au double clique du h3, rajoute la class text-error
let exo2 = document.querySelector('h3');
exo2.addEventListener('dblclick', () =>{
    exo2.setAttribute('class','text-error')
});
// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 

let exo3 = document.querySelector('p');
exo3.addEventListener('dblclick', () =>{
    if (exo3.className == "text-style") {
        exo3.classList.remove('text-style');
    } else {
        exo3.classList.add('text-style');
    }
});
// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 

let exo4 = document.querySelectorAll('p')[document.querySelectorAll('p').length-2].querySelectorAll('span')
exo4.forEach((e,i) => {
    exo4[i].addEventListener('click', () =>{
        exo4[i].classList.add('bolder')
    });
});



// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !
let exo5 = document.querySelectorAll('p')[document.querySelectorAll('p').length-1].querySelectorAll('span')
exo5.forEach((e,i) => {
    exo5[i].addEventListener('click', () =>{
        switch (i) {
            case 0:
                exo5[i+1].classList.remove('bolder-red');
                exo5[i+2].classList.remove('bolder-red');
                break;
            case 1:
                exo5[i-1].classList.remove('bolder-red');
                exo5[i+1].classList.remove('bolder-red');
                break;
            case 2:
                exo5[i-1].classList.remove('bolder-red');
                exo5[i-2].classList.remove('bolder-red');
                break;
            default:
                break;
        }
        exo5[i].classList.add('bolder-red');
    });
});