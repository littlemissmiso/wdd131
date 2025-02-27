//Temple Array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "images/aba-nigeria-temple.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "images/manti-temple.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "images/payson-temple.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "images/yigo-guam-temple.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "images/dc-temple.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "images/lima-peru-temple.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "images/mexico-city-temple.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1877, May, 18",
        area: 119619,
        imageUrl:
        "images/logan-temple.jpg"
      },
    {
        templeName: "Bismarck North Dakota",
        location: "Bismarck, North Dakota, United States",
        dedicated: "1998, October, 17",
        area: 10700,
        imageUrl:
        "images/bismarck-north-dakota-temple-7781.jpg"
    },
    {
        templeName: "Smithfield Utah",
        location: "Smithfield, Utah, United States",
        dedicated: "2022, June, 18",
        area: 81000,
        imageUrl:
        "images/smithfield-temple.jpg"
    },
];

//Starting Page
const templesArray = document.querySelector('#templesArray')

for (let i = 0; i < temples.length; i++) {
    templesArray.innerHTML += `
        <div class="temple-card">
            <div class="temple-details">
                <h2>${temples[i].templeName}</h2>
                <p><span class="location-label">LOCATION:</span> ${temples[i].location}</p>
                <p><span class="dedication-label">DEDICATED:</span> ${temples[i].dedicated}</p>
                <p><span class="area-label">AREA:</span> ${temples[i].area} sqft</p>
            </div>
            <img loading="lazy" width="400" src="${temples[i].imageUrl}" alt="${temples[i].templeName}" />
        </div>
        `;
}

//Home Button Settings
const homeLink = document.querySelector("#Home");
homeLink.addEventListener("click", () => {

    const h2 = document.querySelector("h2")
    h2.innerHTML = "Home";

    templesArray.innerHTML = "";

    for (let i = 0; i < temples.length; i++) {
        templesArray.innerHTML += `
            <div class="temple-card">
                <div class="temple-details">
                    <h2>${temples[i].templeName}</h2>
                    <p><span class="location-label">LOCATION:</span> ${temples[i].location}</p>
                    <p><span class="dedication-label">DEDICATED:</span> ${temples[i].dedicated}</p>
                    <p><span class="area-label">AREA:</span> ${temples[i].area} sqft</p>
                </div>
                <img loading="lazy" width="400" src="${temples[i].imageUrl}" alt="${temples[i].templeName}" />
            </div>
            `;
    }
    });

//Old Temple Menu Button Settings
const oldLink = document.querySelector("#Old");
oldLink.addEventListener("click", () => {

    const h2 = document.querySelector("h2")
    h2.innerHTML = "Old";

    const oldTempleDates = ["1888, May, 21", "1877, May, 18"];

    const oldTemples = temples.filter(temple => oldTempleDates.some(date => temple.dedicated.includes(date)));
    templesArray.innerHTML = "";

    for (let i = 0; i < oldTemples.length; i++) {
        templesArray.innerHTML += `
            <div class="temple-card">
                <div class="temple-details">
                    <h2>${oldTemples[i].templeName}</h2>
                    <p><span class="location-label">LOCATION:</span> ${oldTemples[i].location}</p>
                    <p><span class="dedication-label">DEDICATED:</span> ${oldTemples[i].dedicated}</p>
                    <p><span class="area-label">AREA:</span> ${oldTemples[i].area} sqft</p>
                </div>
                <img loading="lazy" width="400" src="${oldTemples[i].imageUrl}" alt="${oldTemples[i].templeName}" />
            </div>
            `;
    }
    });

//New Temple Menu Button Settings
const newLink = document.querySelector("#New");
newLink.addEventListener("click", () => {

    const h2 = document.querySelector("h2")
    h2.innerHTML = "New";

    const newTempleDates = ["2005, August, 7", "2015, June, 7", "2020, May, 2", "2022, June, 18"];

    const newTemples = temples.filter(temple => newTempleDates.some(date => temple.dedicated.includes(date)));
    templesArray.innerHTML = "";

    for (let i = 0; i < newTemples.length; i++) {
        templesArray.innerHTML += `
            <div class="temple-card">
                <div class="temple-details">
                    <h2>${newTemples[i].templeName}</h2>
                    <p><span class="location-label">LOCATION:</span> ${newTemples[i].location}</p>
                    <p><span class="dedication-label">DEDICATED:</span> ${newTemples[i].dedicated}</p>
                    <p><span class="area-label">AREA:</span> ${newTemples[i].area} sqft</p>
                </div>
                <img loading="lazy" width="400" src="${newTemples[i].imageUrl}" alt="${newTemples[i].templeName}" />
            </div>
            `;
    }
    });

//Large Temple Menu Button Settings
const largeLink = document.querySelector("#Large");
largeLink.addEventListener("click", () => {

    const h2 = document.querySelector("h2")
    h2.innerHTML = "Large";

    const largeTemples = temples.filter(temple => temple.area > 90000);
    templesArray.innerHTML = "";

    for (let i = 0; i < largeTemples.length; i++) {
        templesArray.innerHTML += `
            <div class="temple-card">
                <div class="temple-details">
                    <h2>${largeTemples[i].templeName}</h2>
                    <p><span class="location-label">LOCATION:</span> ${largeTemples[i].location}</p>
                    <p><span class="dedication-label">DEDICATED:</span> ${largeTemples[i].dedicated}</p>
                    <p><span class="area-label">AREA:</span> ${largeTemples[i].area} sqft</p>
                </div>
                <img loading="lazy" width="400" src="${largeTemples[i].imageUrl}" alt="${largeTemples[i].templeName}" />
            </div>
            `;
    }
    });

//Small Temple Menu Button Settings
const smallLink = document.querySelector("#Small");
smallLink.addEventListener("click", () => {

    const h2 = document.querySelector("h2")
    h2.innerHTML = "Small";

    const smallTemples = temples.filter(temple => temple.area < 10000);
    templesArray.innerHTML = "";

    for (let i = 0; i < smallTemples.length; i++) {
        templesArray.innerHTML += `
            <div class="temple-card">
                <div class="temple-details">
                    <h2>${smallTemples[i].templeName}</h2>
                    <p><span class="location-label">LOCATION:</span> ${smallTemples[i].location}</p>
                    <p><span class="dedication-label">DEDICATED:</span> ${smallTemples[i].dedicated}</p>
                    <p><span class="area-label">AREA:</span> ${smallTemples[i].area} sqft</p>
                </div>
                <img loading="lazy" width="400" src="${smallTemples[i].imageUrl}" alt="${smallTemples[i].templeName}" />
            </div>
            `;
    }
    });
    
//Menu Button Settings
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('active');
	hamButton.classList.toggle('active');
});


//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;