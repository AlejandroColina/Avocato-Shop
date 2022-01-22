/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const url = "https://platzi-avo.vercel.app"; // url directa de la API
const divApp = document.querySelector("#container"); // Es el llamado a JS del DIV contenedor del HTML. Aquí se reflejarán los cambios

const formatoMoneda = (precio) => {
    const nuevoPrecio = new window.Intl.NumberFormat("es",{
        style: "currency",
        currency: "COP"
    }).format(precio)
    return nuevoPrecio
}


window.fetch(`${url}/api/avo`) // Empieza la conexión a la API
.then( e => e.json() ) // Llega la información de la API y la convertimos a JSON
.then( info => {       // Se empieza a dar manejo a la información

    const fragment = [];    // Este ARRAY contendra en un solo elemento las tarjetas que se llevarán al HTML

    info.data.forEach(element => { // Se itera entre cada objeto aguacate entrante de la API
    const img = document.createElement("img");  // Se crea elemento imágen
    const title = document.createElement("h2"); // Se crea elemento título
    const price = document.createElement("label"); // Se crea elemento label para el precio

        title.textContent = element.name; // Se asigna valor 
        img.src = url + element.image // Se asigna valor 
        price.textContent = formatoMoneda(element.price); // Se asigna valor 

    const container = document.createElement("div"); // Se crea div para que sea el padre de los elementos ateriormente asignados
    container.append(img, title, price); // Append se los inyecta al div padre

    fragment.push(container); // Aquí se inserta cada div padre al array que se reflejará en el HTML
    }); 
    divApp.append(...fragment) // Aquí se inyectan todos los divs padres a la linea 6. Al id que los imprime en el HTML
});