// > Event Target

// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.
let content = document.getElementById('content');
content.addEventListener('click', (e) =>{
    if(e.target.localName == "div"){
        e.target.style.border = '1px solid blue';
    } else if(e.target.localName == 'h1'){
        e.target.style.backgroundColor = 'pink';
    } else if(e.target.localName == 'p'){
        e.target.style.color = 'red';
        e.target.style.fontWeight = 'bolder';
    } else if(e.target.localName == 'h2'){
        e.target.innerText = e.target.innerText.substring(0, e.target.innerText.length - 1);
    }
});

// ### 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 
let texte = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";
let section = document.querySelector('section');
section.style.width = '200px';
section.style.height = '200px';
section.addEventListener('mouseover', ()=>{
    document.querySelector('section p').innerText = texte;
});