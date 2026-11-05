async function init() {
    const response = await fetch("./products.json")
    console.log("Headerek letöltve");

    const data = await response.json();
    const main = document.getElementsByTagName('main')[0];
    
    document.getElementById('cim').textContent = data.shopName;
    
    for (const product of data.products) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const divBody = document.createElement("div");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");
        const a = document.createElement("a");

        img.src = product.img;
        h5.textContent = product.name;
        p.textContent = product.price + " Ft";
        a.textContent = "Reservation";

        div.classList.add("card");
        div.classList.add("col-md-6")
        div.classList.add("col-lg-4")
        divBody.classList.add("card-body");
        h5.classList.add("card-title")
        p.classList.add("card-text");
        a.classList.add("btn");
        a.classList.add("btn-primary");

        a.addEventListener('click', function() {
            const alert = document.getElementById("alert");
            alert.textContent = "Successful reservation"
            alert.style.backgroundColor = "green";
            setTimeout(function() {
                alert.textContent = ""
                alert.style.backgroundColor = null;
            }, 3000);
        });
        
        divBody.appendChild(h5);
        divBody.appendChild(p);
        divBody.appendChild(a);
        div.appendChild(img);
        div.appendChild(divBody);
        main.appendChild(div)
    }
    console.log("Tartalom betöltve")
}

init();
console.log("Betöltve");