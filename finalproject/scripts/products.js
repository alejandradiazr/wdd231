import {
    createProductCard
}
from "../modules/display.js";

const container =
    document.querySelector(
        "#products-container"
    );

const dialog =
    document.querySelector(
        "#product-dialog"
    );

const dialogContent =
    document.querySelector(
        "#dialog-content"
    );

const closeButton =
    document.querySelector(
        "#close-dialog"
    );

async function displayProducts() {

    try {

        const response =
            await fetch("./data/products.json");

        if (!response.ok) {

            throw new Error(
                "Data not found"
            );

        }

        const products =
            await response.json();

        products.forEach(product => {

            const card =
                createProductCard(product);

            const button =
                card.querySelector(
                    ".details-btn"
                );

            button.addEventListener(
                "click",
                () => {

                    dialogContent.innerHTML = `

<h2>${product.name}</h2>

<img
src="${product.image}"
alt="${product.name}">

<p>
Price: ${product.price}
</p>

<p>
Storage: ${product.storage}
</p>

<p>
Condition: ${product.condition}
</p>

`;

                    dialog.showModal();

                }
            );

            container.appendChild(card);

        });

    }

    catch (error) {

        container.innerHTML = `

<p>
Unable to load products.
</p>

`;

        console.error(error);

    }

}

displayProducts();

closeButton.addEventListener(
    "click",
    () => {

        dialog.close();

    }
);