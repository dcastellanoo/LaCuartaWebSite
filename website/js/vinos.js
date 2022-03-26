$.getJSON('json/vinos.json', function (vinos) {
    let bebidasContainer = document.getElementById("load_vinos");
    let type_bebida = "";
    let aux = '';
    bebidasContainer.innerHTML +=
        `
            <h1 class="align_opcion_plato_carta text_opcion_plato_carta">Carta de Vinos</h1>
            `;
    for (let i = 0; i < vinos.length; i++) {
        let vino = vinos[i];
        console.log(i)
        if(type_bebida === vino.type){
            aux +=
                `
                <div class="row margin_text_bebidas">
                    <div class="text_nombre_bebidas margin_nombre_bebidas col me-auto">
                        ${vino.name}
                    </div>
                    <div class="text_money_bebidas col-md-2 col-auto margin_money_bebidas">
                        ${vino.price}
                    </div>
                    <div class="margin_origen_bebidas text_origen_bebidas col-12">
                        ${vino.origen}
                    </div>
                </div>
            `;


            if(i == (vinos.length - 1)){
                bebidasContainer.innerHTML +=
                    `
                    <article class="background_text_bebidas col">
                ` + aux +
                    ' </article>'
                ;
                aux="";
                //console.log(bebidasContainer.innerHTML);
            }
        } else{

            if(i>0){

                bebidasContainer.innerHTML +=
                    `
                    <article class="background_text_bebidas col">
                ` + aux + ' </article>';
                aux="";
                //console.log(bebidasContainer.innerHTML);
            }

            type_bebida = vino.type;
            aux +=
                `
                    <div class="text_title_bebidas margin_title_bebidas row">
                        <b>
                            ${vino.type}
                        </b>
                    </div>
                    <div class="row margin_text_bebidas">
                        <div class="text_nombre_bebidas margin_nombre_bebidas col me-auto">
                            ${vino.name}
                        </div>
                        <div class="text_money_bebidas col-md-2 col-auto margin_money_bebidas">
                            ${vino.price}
                        </div> 
                        <div class="margin_origen_bebidas text_origen_bebidas col-12">
                            ${vino.origen}
                        </div>
                    </div>
            `;
        }



    }
});