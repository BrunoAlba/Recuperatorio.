//Arreglo que contiene los productos
const productos = [

    /*********************************/
    /** Celulares Motorola */

    {
        id:"motorola-01",
        titulo:"Moto G13 Dual Sim 128 Gb Azul Difuso 4 Gb Ram",
        imagen: [
            "./img/motorola/11.png",
            "./img/motorola/12.png",
            "./img/motorola/13.png"
        ], 
        categoria:{
            nombre:"Celulares",
            id:"motorola"
        },
        precio:70000,
        descuento:14,
        informacion:[
            "Pantalla IPS de 6.5.",
            "Camara trasea 13Mpx.",
            "Cámra delantera 5Mpx",
            "Procesaor 1.66 Gh con 2GB de RAM.",
            "Batería interna 54 GB.",
            "Con reconocimiento facial."
        ],
        envio: "Envío Gratis",
        stock:100,
        proveedor:"OVERHARD",
    },
    {
        id:"motorola-02",
        titulo:"Moto E22 64gb 4gb Ram Negro Test",
        imagen: [
            "./img/motorola/21.png",
            "./img/motorola/22.png",
            "./img/motorola/23.png"
        ], 
        categoria:{
            nombre:"Celulares",
            id:"motorola"
        },
        precio:79599,
        descuento:17,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras",
            "Pantalla de 6.5",
            "Cámra delantera 5Mpx",
            "Procesaor 1.66 Gh con 2GB de RAM.",
            "Batería 4020m.",
            "Memoria interna de 54 GB"
        ],
        envio: 2000,
        stock:21,
        proveedor:"OVERHARD",
    },
    {
        id:"motorola-03",
        titulo:"Moto G23 128GB 4gb Ram Blanco",
        imagen: [
            "./img/motorola/31.jpg",
            "./img/motorola/32.jpg",
            "./img/motorola/33.jpg"
        ], 
        categoria:{
            nombre:"Celulares",
            id:"motorola"
        },
        precio:111999,
        descuento:10,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras",
            "Pantalla de 6.5",
            "Cámra frontal 16Mpx.",
            "Procesaor Mediatek Helio G85.",
            "Batería 5000m.",
            "Memoria Externa 512 GB.",
            "Memoria interna de 128 GB."
        ],
        envio: 5000,
        stock:21,
        proveedor:"DIGIT",
    },
    {
        id:"motorola-04",
        titulo:"Moto E22 32gb 3gb Ram Azul",
        imagen: [
            "./img/motorola/41.jpg",
            "./img/motorola/42.jpg",
            "./img/motorola/43.jpg"
        ], 
        categoria:{
            nombre:"Celulares",
            id:"motorola"
        },
        precio:159499,
        descuento:13,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Pantalla IPS de 6.5",
            "Tiene 2 cámaras traseras de 16Mpx/2Mpx.",
            "Cámara delantera de 5Mpx.",
            "Procesador Mediatek MT6765V/CB Helio G37 Octa-Core de 2.3GHz con 3GB de RAM.",
            "Batería de 4020mAh.",
            "Memoria interna de 32GB.",
            "Resistente al agua.",
            "Con reconocimiento facial y sensor de huella dactilar."
        ],
        envio: "Envío Gratis",
        stock:21,
        proveedor:"DIGIT",
    },

    /*********************************/
    /** Celulares Samsung */

    {
        id:"samsung-01",
        titulo:"Samsung Galaxy Z Flip4 5G 5G 256 GB Blue 8 GB RAM",
        imagen: [
            "./img/samsung/11.jpg",
            "./img/samsung/12.jpg",
            "./img/samsung/13.jpg",
        ], 
        categoria:{
            nombre:"Samsungs",
            id:"Samsung"
        },
        precio:593000,
        descuento:13,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Compatible con redes 5G.",
            "Pantalla plegable con una extensión total de 6.7 y resolución de 1080px x 2640px.",
            "Tiene 2 cámaras traseras de 12Mpx/12Mpx.",
            "Cámara delantera de 10Mpx.",
            "Procesador Snapdragon 8+ Gen 1 Octa-Core de 3.18GHz con 8GB de RAM.",
            "Batería de 3700mAh con carga inalámbrica.",
            "Memoria interna de 256GB.",
            "Resistente al agua.",
            "Con reconocimiento facial y sensor de huella dactilar.",
            "Pantalla secundaria táctil de 1.9.",
            "Tarjeta eSIM incluida."
        ],
        envio: "Envío Gratis",
        stock:2,
        proveedor:"Samsung Oficial",
    },
    {
        id:"samsung-02",
        titulo:"Samsung Galaxy S23 Fe 256gb 8gb Ram Negro",
        imagen: [
            "./img/samsung/21.jpg",
            "./img/samsung/22.jpg",
            "./img/samsung/23.jpg",
        ], 
        categoria:{
            nombre:"Samsungs",
            id:"Samsung"
        },
        precio:216999,
        descuento:34,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Compatible con redes 5G.",
            "Pantalla AMOLED Dinâmico 2X de 6.4.",
            "Tiene 3 cámaras traseras de 50mpx/12mpx/8mpx.",
            "Cámaras delanteras de 10.0Mpx.",
            "Batería de 4500mAh.",
            "Memoria interna de 256GB.",
            "Resistente a las salpicaduras.",
            "Con sensor de huella dactilar.",
            "Resistente al polvo.",
            "Tarjeta eSIM incluida."
        ],
        envio: "Envío Gratis",
        stock:35,
        proveedor:"Samsung Oficial",
    },
    {
        id:"samsung-03",
        titulo:"Samsung A04s 128 GB negro 4 GB RAM",
        imagen: [
            "./img/samsung/31.png",
            "./img/samsung/32.png",
            "./img/samsung/33.png",
        ], 
        categoria:{
            nombre:"Samsungs",
            id:"Samsung"
        },
        precio:64999,
        descuento:47,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Pantalla PLS de 6.5'.",
            "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
            "Cámara delantera de 5Mpx.",
            "Procesador Exynos 850 Octa-Core de 2GHz con 4GB de RAM.",
            "Batería de 5000mAh.",
            "Memoria interna de 128GB.",
            "Con reconocimiento facial y sensor de huella dactilar."
        ],
        envio: "Envío Gratis",
        stock:35,
        proveedor:"Samsung Oficial",
    },
    {
        id:"samsung-04",
        titulo:"Samsung Galaxy A04s 128 GB blanco 4 GB RAM",
        imagen: [
            "./img/samsung/41.png",
            "./img/samsung/42.png",
            "./img/samsung/43.png",
        ], 
        categoria:{
            nombre:"Samsungs",
            id:"Samsung"
        },
        precio:119999,
        descuento:5,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Pantalla PLS de 6.5'.",
            "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
            "Cámara delantera de 5Mpx.",
            "Procesador Exynos 850 Octa-Core de 2GHz con 4GB de RAM.",
            "Batería de 5000mAh.",
            "Memoria interna de 128GB.",
            "Con reconocimiento facial y sensor de huella dactilar."
        ],
        envio: 6000,
        stock:35,
        proveedor:"Samsung Oficial",
    },

    /*********************************/
    /** Celulares Xiaomi */

    {
        id:"xiaomi-01",
        titulo:"Xiaomi Redmi Note 11 4gb Ram 128gb Rom Color Gris grafito",
        imagen: [
            "./img/xiaomi/11.jpg",
            "./img/xiaomi/12.jpg",
            "./img/xiaomi/13.jpg",
        ], 
        categoria:{
            nombre:"Xiaomis",
            id:"Xiaomi"
        },
        precio:212999,
        descuento:10,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Pantalla AMOLED de 6.43.",
            "Tiene 4 cámaras traseras de 50Mpx/8Mpx/2Mpx/2Mpx.",
            "Cámara delantera de 13Mpx.",
            "Procesador Snapdragon 680 Octa-Core de 2.4GHz con 4GB o 6GB de RAM.",
            "Batería de 5000mAh.",
            "Memoria interna de 64GB o 128GB.",
            "Con reconocimiento facial y sensor de huella dactilar.",
            "Resistente al polvo."
        ],
        envio: "Envío Gratis",
        stock:10,
        proveedor:"OPEN FACTORY",
    },

    /*********************************/
    /** Celulares Iphone */

    {
        id:"IPhone-1",
        titulo:"Apple iPhone 15 Pro Max (256 GB) - Titanio Azul",
        imagen: [
            "./img/iphone/11.jpg",
            "./img/iphone/12.jpg",
            "./img/iphone/13.jpg",
        ], 
        categoria:{
            nombre:"IPhones",
            id:"IPhone"
        },
        precio:181499,
        descuento:27,
        informacion:[
            "Diseño resistente y ligero",
            "Pantalla Super Retina XDR con ProMotion con frecuencia de actualización hasta 120 Hz",
            "La Dynamic Island muestra alertas y actividades en vivo al instante",
            "Sistema de cámaras pro de super alta resolución",
            "Botón de acción personalizable para ir a tu funcionalidad favorita",
            "Con conector USB-C y WiFi 6 con el doble de velocidad",
            "Funcionalidad esencial de seguridad con detección de choques para pedir ayuda",
            "Con tecnologías de privacidad que te ayudan a mantener el control de tus datos"
        ],
        envio: "Envío Gratis",
        stock:10,
        proveedor:"MALL WEB",
    },
    {
        id:"IPhone-2",
        titulo:"Apple iPhone 11 (64 GB) - Negro",
        imagen: [
            "./img/iphone/21.jpg",
            "./img/iphone/22.jpg",
            "./img/iphone/23.jpg",
        ], 
        categoria:{
            nombre:"Pphone",
            id:"IPhone"
        },
        precio:145000,
        descuento:27,
        informacion:[
            "Pantalla LCD Liquid Retina HD de 6.1 pulgadas.",
            "Clasificación IP68 de resistencia al agua y al polvo.",
            "Sistema de dos cámaras de 12 MP con modo Noche, modo Retrato y video 4K de hasta 60 cps.",
            "Face ID para una autenticación segura y Apple Pay.",
            "Chip A13 Bionic con Neural Engine de tercera generación.",
            "Carga rápida.",
            "Carga inalámbrica.",
            "iOS 14 con widgets rediseñados en la pantalla de inicio, nueva Biblioteca de Apps, App Clips y mucho más."
        ],
        envio: 8000,
        stock:10,
        proveedor:"MALL WEB",
    },
    {
        id:"IPhone-3",
        titulo:"Apple iPhone 12 (128 GB) - Blanco",
        imagen: [
            "./img/iphone/31.jpg",
            "./img/iphone/32.jpg",
            "./img/iphone/33.jpg",
        ], 
        categoria:{
            nombre:"IPhone",
            id:"IPhone"
        },
        precio:159000,
        descuento:10,
        informacion:[
            
        ],
        envio: "Envío Gratis",
        stock:10,
        proveedor:"MALL WEB",
    }
]

/*********************************/
/**Termina la lista de Productos */
/*********************************/

const contenedorProductos = document.querySelector("#contenedor-productos");
const tituloSeccion = document.querySelector("#titulo-seccion");
const cantCarrito = document.querySelector("#num-en-carrito");

//función para mostrar todos los productos
function cargarProductos(productos){
    //Vaciamos el contenedor productos,
    contenedorProductos.innerHTML = "";

    //Recorremos todo el arreglo de elementos
    productos.forEach(producto =>{
        //creamos un div para el elemento producto
        const div = document.createElement("div");
        div.classList.add("producto");

        //Determino como mostrar el tipo de envio
        let precio_envio = ""
        if(producto.envio != "Envío Gratis"){
            precio_envio = ""
        }else{
            precio_envio = producto.envio;
        }
        div.innerHTML = `
            <img src="${producto.imagen[0]}" alt="" class="producto-imagen">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$ ${(producto.precio).toLocaleString()}<span class="descuento"> ${producto.descuento}% OFF</span></p>
                <p class="producto-tipo-envio">${precio_envio}</p>
            </div>
        `;

        //le agrego el id a dicho producto
        div.id = producto.id;
        contenedorProductos.append(div);
    })
}
//Llamamos a la función
cargarProductos(productos);



//Tomo los Botones de las categorías
const botonesCategorias = document.querySelectorAll(".boton-categoria");

//agregamos un eventlistener a cada boton de categoría
function asignarEventListenerBotonCategoria(){
    botonesCategorias.forEach(boton=> {
        boton.addEventListener("click", (e)=>{
    
            if(e.currentTarget.id != "todos"){
                //Filtro por id
                //e.currentTarget.id = hace referencia al id del boton donde hice clic
                const productosFiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
    
                //colocamos el titulo de la sección
                //Debemos buscar el primer producto que coincida con la categoría seleccionada, para luego tomar el nombre de la categoria
                const productoCagegoria = productos.find(producto=> producto.categoria.id === e.currentTarget.id);
                tituloSeccion.innerHTML = productoCagegoria.categoria.nombre;
    
                cargarProductos(productosFiltrados);
               
            }else{
                cargarProductos(productos);
                tituloSeccion.innerHTML = "Todos los productos";
            }

            // Una vez que se han cargado los productos le asignamos a dichos productos un EventListenerPara llamar que al hacer clic se visualice la información de dicho producto.
            asignarEventListenerProductos();


        })
    });
}
//Llamamos a la función
asignarEventListenerBotonCategoria();



//tomo el elmento donde se agregara la info del producto visitado
const contenedorProductoVisitado = document.querySelector("#contenedor-producto-visitado");

//Agrego a cada producto un eventListener onclikc para dirigirlo a la pàgina producto
function asignarEventListenerProductos(){
    const divsProductos = document.querySelectorAll(".producto");
    
    divsProductos.forEach(producto=>{
        producto.addEventListener("click", (e)=>{
            contenedorProductos.style.display = "none";
    
            //creamos un div para el elemento producto
            const div = document.createElement("div");
            div.classList.add("producto-visitado");
            div.id = e.currentTarget.id;
    
            const prod = productos.find((producto) => producto.id === e.currentTarget.id);
            console.log(prod);
    
            div.innerHTML = `
            <span class="cerrar" onclick="cerrar()"> <i class="bi bi-x-circle"></i> </span>
            <div class="fotos-galeria">
            <div class="miniaturas">
                <img src="${prod.imagen[0]}" alt="" class="img-miniatura">
                <img src="${prod.imagen[1]}" alt="" class="img-miniatura">
                <img src="${prod.imagen[2]}" alt="" class="img-miniatura">
            </div>
            <div class="foto-principal">
                <img src="${prod.imagen[0]}" alt="" id="foto-principal">
            </div>
        </div>
        <div class="info-producto">
            <h2 class="titulo-producto">${prod.titulo}</h2>
    
            <p class="precio-producto">$ ${(prod.precio).toLocaleString()} <span class="descuento">${prod.descuento}% OFF</span></p>
    
            <span class="txt">Lo que tenes que saber de este producto</span>
            <ul id="listado-info">
    
            </ul>
        </div>
        <div class="info-compra">
            <span class="info-stock">Stock disponible</span>
            <span class="cantidad">Cantidad: 1 unidad <span class="stock">(${prod.stock} disponibles)</span> </span>
    
            <button class="btn-agregar-al-carrito" id="${prod.id}">Agregar al Carrito</button>
    
            <span class="vendedor">Vendido por <a href="#">${prod.proveedor}</a></span>
    
            <div class="beneficios">
                <div class="beneficio">
                    <div class="col">
                        <i class="bi bi-arrow-return-left"></i>
                    </div>
                    <div class="col">
                        <a href="#">Devolución Gratis</a> Tenes 30 días desde que lo recibis
                    </div>
                </div>
                <div class="beneficio">
                    <div class="col">
                        <i class="bi bi-shield-check"></i>
                    </div>
                    <div class="col">
                        <a href="#">Compra protegida</a> recibí el producto que esperabas o te devolvemos tu dinero.
                    </div>
                </div>
                <div class="beneficio">
                </div>
            </div>
    
        </div>
            `;
            
            contenedorProductoVisitado.append(div);
            contenedorProductoVisitado.style.display = "flex";
    
            const listadoInfo = document.querySelector("#listado-info")
            //Detalle del producto
            prod.informacion.forEach(info =>{
                const li = document.createElement("li");
                li.innerHTML = info;
                listadoInfo.append(li);
            })
    
            //Funcionalidad los botones de miniatura
            asignarEventListenerImgMiniatura();

            //eventListener al botón Agregar al carrito
            btnAgregar = document.querySelectorAll(".btn-agregar-al-carrito");
            btnAgregar[0].addEventListener("click", agregarAlCarrito)
    
        })
    })
}

asignarEventListenerProductos();


//--------------------------------------------------
//Función para cerrar la ventana de productos
function cerrar(){
    contenedorProductoVisitado.innerHTML = "";
    contenedorProductos.style.display = "grid";
    contenedorProductoVisitado.style.display = "none";
}

function asignarEventListenerImgMiniatura(){
    const imgMiniatura = document.querySelectorAll(".img-miniatura");
    const fotoPrincipal = document.querySelector("#foto-principal")
    
    imgMiniatura.forEach(mini=>{
        mini.addEventListener("click", (e)=>{
            console.log(e.target);
            fotoPrincipal.src = e.target.src;
        })
    });
}

//Estructura para guardar los elementos que se vayan guardando en el carrito.
let productosEnCarrito;
//controlo si ya hay algo cargado en el localstorage cuando vuelvo de carrito.html para que los productos continuen existiendo.
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if(productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumEnCarrito();
}else{//Comienzo un carrito vacío
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    //alert()
    const idBoton = e.currentTarget.id;
    //console.log(id);
    const productoAgregado = productos.find(producto => producto.id=== idBoton);
    //console.log(productoAgregado);

    //controlamos si el producto ya esta en el carrito
    if(productosEnCarrito.some(producto=>producto.id===idBoton)){
        //El producto que se quiere ignresar ya esta en el carrito
        //Lo busca y aumenta en uno la cantidad
        const index = productosEnCarrito.findIndex(producto=> producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
        //console.log(productosEnCarrito);
    }else{
        //Al objeto producto le agrego una nueva propiedad para guardar la cantidad de dicho producto agregados al carrito
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        //console.log(productosEnCarrito);
    }
    actualizarNumEnCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    //Lo dirijo al carrito
    location.href = "./carrito.html";
}

function actualizarNumEnCarrito(){
    let nuevaCantEnCarrito = productosEnCarrito.reduce((acc,producto)=> acc + producto.cantidad,0)
    //console.log(nuevaCantEnCarrito);
    cantCarrito.innerHTML = nuevaCantEnCarrito;
}