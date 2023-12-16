function createHome() {
    const home = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const image = document.createElement("img");

    home.classList.add("home");
    p1.textContent = "Best Sub in the town";
    p2.textContent = "Made with passion since 1968";
    p3.textContent = "Order online or visit us!";
    image.src = "./Images/chef.png";

    home.appendChild(p1);
    home.appendChild(p2);
    home.appendChild(image);
    home.appendChild(p3);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome