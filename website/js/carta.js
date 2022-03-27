

$.getJSON('json/carta_comida.json', function (carta) {

    let entrantesContainer = document.getElementById("load_entrantes");
    entrantesContainer.innerHTML +=
        `
            <h1 class="align_opcion_plato_carta text_opcion_plato_carta">Entrantes</h1>
            `;
    for (let i = 0; i < carta.length; i++) {
        let plato = carta[i];
        if (plato.type === "Entrantes"){

            entrantesContainer.innerHTML +=
                `
                <article class="background_plato_carta row">
                    <div class="col-12 text-center text_title_plato_carta d-lg-none">
                        <b>${plato.name}</b>
                    </div>

                    <div class="text_plato_carta col-6">
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
                    <div class="col-lg-2 col-5 text-center align_money_plato_carta">
                        <figure>
                            <img src="${plato.url}" class="size_photo_comida" alt="Plato Comida.">
                            <p class="text_money_plato_carta background_money d-lg-block d-none">
                                ${plato.price}
                            </p>
                        </figure>
                    </div>

                    <div class="col-12 d-lg-none d-block text-center">
                        <p class="background_money text_money_plato_carta">
                            ${plato.price}
                        </p>
                    </div>

                </article>
            `;
        }
    }
});


$.getJSON('json/carta_comida.json', function (carta) {
    let entrantesContainer = document.getElementById("load_principales");
    entrantesContainer.innerHTML +=
        `
            <h1 class="align_opcion_plato_carta text_opcion_plato_carta">Principales</h1>
            `;
    for (let i = 0; i < carta.length; i++) {
        let plato = carta[i];
        if (plato.type === "Principales"){

            entrantesContainer.innerHTML +=
                `
                <article class="background_plato_carta row">
                    <div class="col-12 text-center text_title_plato_carta d-lg-none">
                        <b>${plato.name}</b>
                    </div>

                    <div class="text_plato_carta col-6">
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
                    <div class="col-lg-2 col-5 text-center align_money_plato_carta">
                        <figure>
                            <img src="${plato.url}" class="size_photo_comida" alt="Plato Comida.">
                            <p class="text_money_plato_carta background_money d-lg-block d-none">
                                ${plato.price}
                            </p>
                        </figure>
                    </div>

                    <div class="col-12 d-lg-none d-block text-center">
                        <p class="background_money text_money_plato_carta">
                            ${plato.price}
                        </p>
                    </div>

                </article>
            `;
        }
    }
});

$.getJSON('json/carta_comida.json', function (carta) {

    let entrantesContainer = document.getElementById("load_sugerencias");
    entrantesContainer.innerHTML +=
        `
            <h1 class="align_opcion_plato_carta text_opcion_plato_carta">Sugerencias</h1>
            `;
    for (let i = 0; i < carta.length; i++) {
        let plato = carta[i];

        if (plato.type === "Sugerencias"){

            entrantesContainer.innerHTML +=
                `
                <article class="background_plato_carta row">
                    <div class="col-12 text-center text_title_plato_carta d-lg-none">
                        <b>${plato.name}</b>
                    </div>

                    <div class="text_plato_carta col-6">
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
                    <div class="col-lg-2 col-5 text-center align_money_plato_carta">
                        <figure>
                            <img src="${plato.url}" class="size_photo_comida" alt="Plato Comida.">
                            <p class="text_money_plato_carta background_money d-lg-block d-none">
                                ${plato.price}
                            </p>
                        </figure>
                    </div>

                    <div class="col-12 d-lg-none d-block text-center">
                        <p class="background_money text_money_plato_carta">
                            ${plato.price}
                        </p>
                    </div>

                </article>
            `;
        }
    }
});

$.getJSON('json/carta_comida.json', function (carta) {

    let entrantesContainer = document.getElementById("load_postres");
    entrantesContainer.innerHTML +=
        `
            <h1 class="align_opcion_plato_carta text_opcion_plato_carta">Postres</h1>
            `;
    for (let i = 0; i < carta.length; i++) {
        let plato = carta[i];

        if (plato.type === "Postres"){

            entrantesContainer.innerHTML +=
                `
                <article class="background_plato_carta row">
                    <div class="col-12 text-center text_title_plato_carta d-lg-none">
                        <b>${plato.name}</b>
                    </div>

                    <div class="text_plato_carta col-6">
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
                    <div class="col-lg-2 col-5 text-center align_money_plato_carta">
                        <figure>
                            <img src="${plato.url}" class="size_photo_comida" alt="Plato Comida.">
                            <p class="text_money_plato_carta background_money d-lg-block d-none">
                                ${plato.price}
                            </p>
                        </figure>
                    </div>

                    <div class="col-12 d-lg-none d-block text-center">
                        <p class="background_money text_money_plato_carta">
                            ${plato.price}
                        </p>
                    </div>

                </article>
            `;
        }
    }
});


