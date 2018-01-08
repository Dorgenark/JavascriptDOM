// Exercice 1
// document.getElementsByClassName("bg-aqua")[0].className = "bg-olive";
document.body.className = "bg-olive";
document.getElementById("first-paragraph").className = "aqua";
document.getElementsByClassName("bg-silver")[0].classList.add('bg-teal');
document.getElementsByClassName("bg-silver")[0].classList.remove('bg-silver');
document.getElementsByTagName("blockquote")[0].classList.add('bg-white');

// Exercice 2
document.querySelector("#my-table").classList.add("bg-purple");
document.querySelectorAll(".container")[0].classList.add("shadow");

// Exercice 3
document.querySelectorAll("pre")[0].setAttribute("style", "color: blue; background-color: green; border-top: 3px solid red; border-bottom: 3px solid red;");
document.querySelector("h3").innerHTML = "<em>Itelic title ! yeah !</em>";
document.querySelector("h2").innerHTML = "<strong>HTML doesn't work !</strong>";

// Exercice 4 partie 1
document.querySelector("ul").innerHTML += "<li>Mon meilleur ami est <a href='http://www.google.com'>Google</a></li>";
document.getElementsByTagName("a")[1].setAttribute("style", "text-decoration: none; color: brown;");

// Exercice 4 partie 2
var liste, tableau;
liste = document.querySelector("ol");
tableau = ["Silent Teacher","Code Monkey", "CodeCombat"];
// a = document.querySelector("ol").children.length;
// while (a > 0)

while (liste.firstChild) {
  liste.removeChild(liste.firstChild);
};

// Rest à créer un loop pour aligner les éléments de "tableau" dans la list ol
