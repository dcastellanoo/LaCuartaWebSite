
$.getJSON('json/bebidas.json', function (bebidas) {
    let bebidasContainer = document.getElementById("load_bebidas");
    let type_bebida = "";
    let aux = '';
    bebidasContainer.innerHTML +=
        `
            <h1 class="align_opcion_plato_carta text_opcion_plato_carta">Bebidas</h1>
            `;
    for (let i = 0; i < bebidas.length; i++) {
        let bebida = bebidas[i];

        console.log(aux);
        if(type_bebida === bebida.type){
            aux +=
                `
                <div class="row margin_text_bebidas">
                    <div class="text_nombre_bebidas margin_nombre_bebidas col me-auto">
                        ${bebida.name}
                    </div>
                    <div class="text_money_bebidas col-md-2 col-auto margin_money_bebidas">
                        ${bebida.price}
                    </div>
                </div>
            `;


            if(i == (bebidas.length - 1)){
                bebidasContainer.innerHTML +=
                    `
                    <article class="background_text_bebidas col">
                ` + aux +
                ' </article>'
                ;
                aux="";
                console.log(bebidasContainer.innerHTML);
            }
        } else{

            if(i>0){

                bebidasContainer.innerHTML +=
                    `
                    <article class="background_text_bebidas col">
                ` + aux + ' </article>';
                aux="";
                console.log(bebidasContainer.innerHTML);
            }

            type_bebida = bebida.type;
            aux +=
                `
                    <div class="text_title_bebidas margin_title_bebidas row">
                        <b>
                            ${bebida.type}
                        </b>
                    </div>
                    <div class="row margin_text_bebidas">
                        <div class="text_nombre_bebidas margin_nombre_bebidas col me-auto">
                            ${bebida.name}
                        </div>
                        <div class="text_money_bebidas col-md-2 col-auto margin_money_bebidas">
                            ${bebida.price}
                        </div> 
                    </div>
            `;
        }



    }
});


