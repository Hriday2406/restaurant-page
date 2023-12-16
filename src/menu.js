function createMenu() {
    const menu = document.createElement("menu");
    menu.classList.add("menu");

    menu.appendChild( createCard(
        "./Images/Chicken Teriyaki.png", 
        "Chicken Teriyaki", 
        "Chicken Teriyaki", 
        "Chicken strips glazed with teriyaki sauce."
    ));

    menu.appendChild( createCard(
        "./Images/Tangy Paneer Tikka.png",
        "Tangy Paneer Tikka",
        "Tangy Paneer Tikka",
        "Your favourite cheese cubes marinated with tandoori sauce."
    ));

    menu.appendChild( createCard(
        "./Images/Italian BMT.png",
        "Italian BMT",
        "Italian BMT",
        "Sub with a mix of chicken pepperoni, smoked chicken slice."
    ));

    menu.appendChild( createCard(
        "./Images/Chicken Kofta.png",
        "Chicken Kofta",
        "Chicken Kofta",
        "Authentic indian meatballs perfectly seasoned and spiced."
    ));

    menu.appendChild( createCard( 
        "./Images/Aloo Patty.png",
        "Aloo Patty",
        "Aloo Patty",
        "Aloo patty seasoned with special herbs and spices."
    ));

    menu.appendChild( createCard( 
        "./Images/Tuna.png",
        "Tuna",
        "Tuna",
        "Flaked light tuna mixed with eggless mayo."
    ));

    menu.appendChild( createCard(
        "./Images/Choco Chip Cookie.png",
        "Double Choco Chunk Cookie",
        "Double Choco Chunk Cookie",
        "Tasty & chocolatey."
    ));

    menu.appendChild( createCard(
        "./Images/Pepsi Black.png",
        "Pepsi Black",
        "Pepsi Black",
        "The Orignal Pepsi but with 0 Kcal."
    ));

    return menu;
}

function createCard(source, alt, hText, pText) {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    card.classList.add("card");

    image.src = `${source}`;
    image.alt = `${alt}`;
    h1.textContent = `${hText}`;
    p.textContent = `${pText}`;

    card.appendChild(image);
    card.appendChild(h1);
    card.appendChild(p);

    return card;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu