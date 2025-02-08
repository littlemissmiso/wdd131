const visitCount = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitCount.textContent = numVisits;}
 else {
    visitCount.textContent = `This is your first review! Thank you!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);



//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;