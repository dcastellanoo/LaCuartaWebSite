$.getJSON('json/carta_comida.json', function (data) {
        
        for (let i = 0; i < data.length; i++) {

            if (data[i].type == "Entrantes") {
                let mainContainer = document.getElementById("myData");
                // div dos pedidos
                let divPedido = document.createElement("div");
                divPedido.className = "col-3 pedido";

                // div com a imagem
                let divImage = document.createElement("div");
                divImage.className = "d-none d-lg-block";
                let image = document.createElement('img');
                image.src = data[i].url;
                image.className = "pedido_image";
                divImage.appendChild(image);

                let divInfo = document.createElement("div");
                divInfo.className = "pedido-info";

                let label1 = document.createElement("label");
                label1.className = "spi-1";
                label1.innerHTML = data[i].name;

                let label2 = document.createElement("label");
                label2.className = "spi-2 d-none d-lg-block";
                
                for (var j = 0; j < 5; j++) {

                    let imageStar = document.createElement('img');
                    imageStar.src = "images/icone-star.png";
                    imageStar.setAttribute("width", "18");
                    imageStar.setAttribute("heigth", "18");
                    label2.appendChild(imageStar);

                }
                
                let span3 = document.createElement("label");
                span3.className = "spi-3";
                span3.innerHTML = data[i].price;

                divInfo.appendChild(label1);
                divInfo.appendChild(label2);
                divInfo.appendChild(span3);

                // div para quantidade
                let divQuant = document.createElement("div");
                divQuant.className = "pedido-quant";

                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("size", "1");
                input.setAttribute("value", "0");

                let imagePlus = document.createElement("img");
                imagePlus.src = "images/icone-plus.png";
                imagePlus.setAttribute("width", "14");
                imagePlus.setAttribute("heigth", "14");

                let imageMnius = document.createElement("img");
                imageMnius.src = "images/icone-minus.png";
                imageMnius.setAttribute("width", "14");
                imageMnius.setAttribute("heigth", "14");

                divQuant.appendChild(imagePlus);
                divQuant.appendChild(input);
                divQuant.appendChild(imageMnius);

                let divButton = document.createElement("div");
                divButton.className = "btn-pedido d-none d-lg-block";

                let icon = document.createElement("img");
                icon.src = "images/icone-cart.png";
                icon.setAttribute("width", "15");
                icon.setAttribute("heigth", "15");
                

                let button = document.createElement("button");
                button.className = "btn";
                button.innerHTML = "Compra";
                button.appendChild(icon);

                divButton.appendChild(button);

                divPedido.appendChild(divImage);
                divPedido.appendChild(divInfo);
                divPedido.appendChild(divQuant);
                divPedido.appendChild(divButton);

                mainContainer.appendChild(divPedido);
            }
        }
    });


$.getJSON('json/carta_comida.json', function (data) {
        
        for (let i = 0; i < data.length; i++) {

            if (data[i].type == "Principales") {
                let mainContainer = document.getElementById("myData1");
                // div dos pedidos
                let divPedido = document.createElement("div");
                divPedido.className = "col-3 pedido";

                // div com a imagem
                let divImage = document.createElement("div");
                divImage.className = "d-none d-lg-block";
                let image = document.createElement('img');
                image.src = data[i].url;
                image.className = "pedido_image";
                divImage.appendChild(image);

                let divInfo = document.createElement("div");
                divInfo.className = "pedido-info";

                let label1 = document.createElement("label");
                label1.className = "spi-1";
                label1.innerHTML = data[i].name;

                let label2 = document.createElement("label");
                label2.className = "spi-2 d-none d-lg-block";
                
                for (var j = 0; j < 5; j++) {

                    let imageStar = document.createElement('img');
                    imageStar.src = "images/icone-star.png";
                    imageStar.setAttribute("width", "18");
                    imageStar.setAttribute("heigth", "18");
                    label2.appendChild(imageStar);

                }
                
                let span3 = document.createElement("label");
                span3.className = "spi-3";
                span3.innerHTML = data[i].price;

                divInfo.appendChild(label1);
                divInfo.appendChild(label2);
                divInfo.appendChild(span3);

                // div para quantidade
                let divQuant = document.createElement("div");
                divQuant.className = "pedido-quant";

                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("size", "1");
                input.setAttribute("value", "0");

                let imagePlus = document.createElement("img");
                imagePlus.src = "images/icone-plus.png";
                imagePlus.setAttribute("width", "14");
                imagePlus.setAttribute("heigth", "14");

                let imageMnius = document.createElement("img");
                imageMnius.src = "images/icone-minus.png";
                imageMnius.setAttribute("width", "14");
                imageMnius.setAttribute("heigth", "14");

                divQuant.appendChild(imagePlus);
                divQuant.appendChild(input);
                divQuant.appendChild(imageMnius);

                let divButton = document.createElement("div");
                divButton.className = "btn-pedido d-none d-lg-block";

                let icon = document.createElement("img");
                icon.src = "images/icone-cart.png";
                icon.setAttribute("width", "15");
                icon.setAttribute("heigth", "15");
                

                let button = document.createElement("button");
                button.className = "btn";
                button.innerHTML = "Compra";
                button.appendChild(icon);

                divButton.appendChild(button);

                divPedido.appendChild(divImage);
                divPedido.appendChild(divInfo);
                divPedido.appendChild(divQuant);
                divPedido.appendChild(divButton);

                mainContainer.appendChild(divPedido);
            }
        }
    });

$.getJSON('json/carta_comida.json', function (data) {
        
        for (let i = 0; i < data.length; i++) {

            if (data[i].type == "Sugerencias") {
                let mainContainer = document.getElementById("myData2");
                // div dos pedidos
                let divPedido = document.createElement("div");
                divPedido.className = "col-3 pedido";

                // div com a imagem
                let divImage = document.createElement("div");
                divImage.className = "d-none d-lg-block";
                let image = document.createElement('img');
                image.src = data[i].url;
                image.className = "pedido_image";
                divImage.appendChild(image);

                let divInfo = document.createElement("div");
                divInfo.className = "pedido-info";

                let label1 = document.createElement("label");
                label1.className = "spi-1";
                label1.innerHTML = data[i].name;

                let label2 = document.createElement("label");
                label2.className = "spi-2 d-none d-lg-block";
                
                for (var j = 0; j < 5; j++) {

                    let imageStar = document.createElement('img');
                    imageStar.src = "images/icone-star.png";
                    imageStar.setAttribute("width", "18");
                    imageStar.setAttribute("heigth", "18");
                    label2.appendChild(imageStar);

                }
                
                let span3 = document.createElement("label");
                span3.className = "spi-3";
                span3.innerHTML = data[i].price;

                divInfo.appendChild(label1);
                divInfo.appendChild(label2);
                divInfo.appendChild(span3);

                // div para quantidade
                let divQuant = document.createElement("div");
                divQuant.className = "pedido-quant";

                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("size", "1");
                input.setAttribute("value", "0");

                let imagePlus = document.createElement("img");
                imagePlus.src = "images/icone-plus.png";
                imagePlus.setAttribute("width", "14");
                imagePlus.setAttribute("heigth", "14");

                let imageMnius = document.createElement("img");
                imageMnius.src = "images/icone-minus.png";
                imageMnius.setAttribute("width", "14");
                imageMnius.setAttribute("heigth", "14");

                divQuant.appendChild(imagePlus);
                divQuant.appendChild(input);
                divQuant.appendChild(imageMnius);

                let divButton = document.createElement("div");
                divButton.className = "btn-pedido d-none d-lg-block";

                let icon = document.createElement("img");
                icon.src = "images/icone-cart.png";
                icon.setAttribute("width", "15");
                icon.setAttribute("heigth", "15");
                

                let button = document.createElement("button");
                button.className = "btn";
                button.innerHTML = "Compra";
                button.appendChild(icon);

                divButton.appendChild(button);

                divPedido.appendChild(divImage);
                divPedido.appendChild(divInfo);
                divPedido.appendChild(divQuant);
                divPedido.appendChild(divButton);

                mainContainer.appendChild(divPedido);
            }
        }
    });

$.getJSON('json/carta_comida.json', function (data) {
        
        for (let i = 0; i < data.length; i++) {

            if (data[i].type == "Postres") {
                let mainContainer = document.getElementById("myData3");
                // div dos pedidos
                let divPedido = document.createElement("div");
                divPedido.className = "col-3 pedido";

                // div com a imagem
                let divImage = document.createElement("div");
                divImage.className = "d-none d-lg-block";
                let image = document.createElement('img');
                image.src = data[i].url;
                image.className = "pedido_image";
                divImage.appendChild(image);

                let divInfo = document.createElement("div");
                divInfo.className = "pedido-info";

                let label1 = document.createElement("label");
                label1.className = "spi-1";
                label1.innerHTML = data[i].name;

                let label2 = document.createElement("label");
                label2.className = "spi-2 d-none d-lg-block";
                
                for (var j = 0; j < 5; j++) {

                    let imageStar = document.createElement('img');
                    imageStar.src = "images/icone-star.png";
                    imageStar.setAttribute("width", "18");
                    imageStar.setAttribute("heigth", "18");
                    label2.appendChild(imageStar);

                }
                
                let span3 = document.createElement("label");
                span3.className = "spi-3";
                span3.innerHTML = data[i].price;

                divInfo.appendChild(label1);
                divInfo.appendChild(label2);
                divInfo.appendChild(span3);

                // div para quantidade
                let divQuant = document.createElement("div");
                divQuant.className = "pedido-quant";

                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("size", "1");
                input.setAttribute("value", "0");

                let imagePlus = document.createElement("img");
                imagePlus.src = "images/icone-plus.png";
                imagePlus.setAttribute("width", "14");
                imagePlus.setAttribute("heigth", "14");

                let imageMnius = document.createElement("img");
                imageMnius.src = "images/icone-minus.png";
                imageMnius.setAttribute("width", "14");
                imageMnius.setAttribute("heigth", "14");

                divQuant.appendChild(imagePlus);
                divQuant.appendChild(input);
                divQuant.appendChild(imageMnius);

                let divButton = document.createElement("div");
                divButton.className = "btn-pedido d-none d-lg-block";

                let icon = document.createElement("img");
                icon.src = "images/icone-cart.png";
                icon.setAttribute("width", "15");
                icon.setAttribute("heigth", "15");
                

                let button = document.createElement("button");
                button.className = "btn";
                button.innerHTML = "Compra";
                button.appendChild(icon);

                divButton.appendChild(button);

                divPedido.appendChild(divImage);
                divPedido.appendChild(divInfo);
                divPedido.appendChild(divQuant);
                divPedido.appendChild(divButton);

                mainContainer.appendChild(divPedido);
            }
        }
    });