const spotlightContainer =
document.querySelector("#spotlights");

async function loadSpotlights(){

const response =
await fetch("data/members.json");

const data =
await response.json();

const filteredMembers =

data.filter(member =>

member.membership >= 2

);

const randomMembers =

filteredMembers
.sort(() => 0.5 - Math.random())
.slice(0,3);

displaySpotlights(randomMembers);

}

loadSpotlights();


function displaySpotlights(members){

spotlightContainer.innerHTML = "";

members.forEach(member => {

spotlightContainer.innerHTML += `

<section>
<h3>${member.name}</h3>

<img
src="images/${member.image}"
alt="${member.name} logo"
loading="lazy">

<p>
<strong>${member.category}</strong>
</p>

<p>${member.phone}</p>

<p>${member.address}</p>

<p>
Membership Level:
${member.membership}
</p>

<a
href="${member.website}"
target="_blank"
rel="noopener">

Visit Website
</a>
</section>

`;

});

}