const url = "data/members.json";

const cards = document.querySelector("#members");

async function getMembers() {

    const response =
        await fetch(url);

    const data =
        await response.json();

    displayMembers(data);

}

getMembers();

function displayMembers(members) {

    cards.innerHTML = "";

    members.forEach(member => {

        let card =
            document.createElement("section");
            
card.innerHTML=`

<h2>${member.name}</h2>

<img
src="images/${member.image}"
alt="${member.name}"
loading="lazy">

<p><strong>${member.category}</strong></p>

<p>${member.address}</p>

<p>${member.phone}</p>

<a
href="${member.website}"
target="_blank"
rel="noopener">

Visit Website

</a>

`;

        cards.appendChild(card);

    });

}

const gridButton =
    document.querySelector("#grid");

const listButton =
    document.querySelector("#list");


gridButton.addEventListener(
    "click", () => {

        cards.classList.add("grid");

        cards.classList.remove("list");

    });


listButton.addEventListener(
    "click", () => {

        cards.classList.add("list");

        cards.classList.remove("grid");

    });