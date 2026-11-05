async function init() {
    const response = await fetch("./products.json")
    console.log("Headerek letöltve");

    const data = await response.json();
    const main = document.getElementsByTagName('main')[0];
    
    document.getElementById('cim').textContent = data.shopName;
    
    for (const product of data.products) {
        const p = document.createElement("p");
        p.textContent = `${product.name}, ${product.img}, ${product.price}`;
        main.appendChild(p)
    }
    console.log("Tartalom betöltve")
}

init();
console.log("Betöltve");