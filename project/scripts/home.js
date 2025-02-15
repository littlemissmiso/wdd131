const choices = [
    {
      id: "adoption",
      name: "Adopting a Cat",
    },
    {
      id: "cat-care",
      name: "General Cat Care",
    },
    {
      id: "donate",
      name: "Donations",
    },
    {
      id: "foster",
      name: "Foster Opportunities",
    },
    {
      id: "volunteer",
      name: "Volunteer Opportunities",
    },  
    {
      id: "other",
      name: "Other",
    }
  ];

const selectChoice = document.getElementById("chooseChoice");

choices.forEach(choice => {
    const option = document.createElement("option");
    option.value = choice.id;
    option.textContent = choice.name;

    selectChoice.appendChild(option);
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('active');
	hamButton.classList.toggle('active');
});

const visitCount = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitCount.textContent = numVisits;}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;