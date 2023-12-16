function createContact() {
    const contact = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const image = document.createElement("img");

    contact.classList.add("contact");

    p1.textContent = "📞 123 456 789";
    p2.textContent = "🏠 Outer Circle, Connaught Place, Delhi, India";
    image.src = "../src/Images/map.png";
    image.alt = "map";

    contact.appendChild(p1);
    contact.appendChild(p2);
    contact.appendChild(image);

    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact