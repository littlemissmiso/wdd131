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
  

//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;