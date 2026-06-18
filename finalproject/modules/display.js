export function createProductCard(product) {

    const card =
    document.createElement("section");

    card.classList.add(
        "product-card"
    );

    card.innerHTML = `

    <img
    src="${product.image}"
    alt="${product.name}"
    loading="lazy">

    <h3>${product.name}</h3>

    <p>
    Price: ${product.price}
    </p>

    <p>
    Storage: ${product.storage}
    </p>

    <p>
    Condition: ${product.condition}
    </p>

    <button class="details-btn">
    View Details
    </button>

    `;

    return card;
}