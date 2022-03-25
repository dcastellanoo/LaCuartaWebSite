
const url_carta = "json/carta_comida.json";
$.getJSON(url_carta, function (carta) {
    let entrantesContainer = document.getElementById("load_en");
    entrantesContainer.innerHTML +=
        `
            <h1 class="align_opcion_plato_carta text_opcion_plato_carta">Entrantes</h1>
            `;
    for (let i = 0; i < carta.length; i++) {
        if (carta[i] == "entrantes"){
            let plato = carta[i];
            console.log(plato)
            entrantesContainer.innerHTML +=
                `
                <article class="background_plato_carta row">
                    <div class="col-12 text-center text_title_plato_carta d-lg-none">
                        <b>${plato.name}</b>
                    </div>

                    <div class="text_plato_carta col">
                        <div class="text_title_plato_carta row d-lg-block d-none">
                            ${plato.name}
                        </div>

                        <div class="descripcion_plato_carta row">
                            ${plato.description}
                        </div>
                        <div class="alergenos_plato_carta row">
                            ${plato.allergens}
                        </div>
                    </div>
                    <div class="col text-center align_money_plato_carta">
                        <figure>
                            <img src="images/imagen_plato.png" class="size_photo_comida" alt="Plato Comida.">
                            <p class="text_money_plato_carta background_money d-lg-block d-none">
                                ${plato.price} €
                            </p>
                        </figure>
                    </div>

                    <div class="col-12 d-lg-none d-block text-center">
                        <p class="background_money text_money_plato_carta">
                            ${plato.price} €
                        </p>
                    </div>

                </article>
            `;
        }
    }
});

function prueba() {
    alert( "Handler for .click() called." );
    console.log("pepe");
}



