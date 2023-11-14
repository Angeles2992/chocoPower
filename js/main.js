// PRODUCTOS
const productos = [
    // regalos
    {
        id: "abrigo-01",
        titulo: "Regalo 01",
        imagen: "./img/regalos/01.jpg",
        categoria: {
            nombre: "Regalos",
            id: "regalos"
        },
        precio: 1
    },
    {
        id: "abrigo-02",
        titulo: "Regalo 02",
        imagen: "./img/regalos/02.jpg",
        categoria: {
            nombre: "Regalos",
            id: "regalos"
        },
        precio: 1
    },
    {
        id: "abrigo-03",
        titulo: "Regalo 03",
        imagen: "./img/regalos/03.jpg",
        categoria: {
            nombre: "Regalos",
            id: "regalos"
        },
        precio: 1
    },
    {
        id: "abrigo-04",
        titulo: "Regalo 04",
        imagen: "./img/regalos/04.jpg",
        categoria: {
            nombre: "Regalos",
            id: "regalos"
        },
        precio: 1
    },
    {
        id: "abrigo-05",
        titulo: "Regalo 05",
        imagen: "./img/regalos/05.jpg",
        categoria: {
            nombre: "Regalos",
            id: "regalos"
        },
        precio: 1
    },
    // bombones
    {
        id: "bombon-01",
        titulo: "Bombon 01",
        imagen: "./img/bombones/01.jpg",
        categoria: {
            nombre: "Bombones",
            id: "bombones"
        },
        precio: 1
    },
    {
        id: "bombon-02",
        titulo: "Bombon 02",
        imagen: "./img/bombones/02.jpg",
        categoria: {
            nombre: "Bombones",
            id: "bombones"
        },
        precio: 1
    },
    {
        id: "bombon-03",
        titulo: "Bombon 03",
        imagen: "./img/bombones/03.jpg",
        categoria: {
            nombre: "Bombones",
            id: "bombones"
        },
        precio: 1
    },
    {
        id: "bombon-04",
        titulo: "Bombon 04",
        imagen: "./img/bombones/04.jpg",
        categoria: {
            nombre: "Bombones",
            id: "bombones"
        },
        precio: 1
    },
    {
        id: "bombon-05",
        titulo: "Bombon 05",
        imagen: "./img/bombones/05.jpg",
        categoria: {
            nombre: "Bombones",
            id: "bombones"
        },
        precio: 1
    },
    {
        id: "bombon-06",
        titulo: "Bombon 06",
        imagen: "./img/bombones/06.jpg",
        categoria: {
            nombre: "Bombones",
            id: "bombones"
        },
        precio: 1
    },
    {
        id: "bombon-07",
        titulo: "Bombon 07",
        imagen: "./img/bombones/07.jpg",
        categoria: {
            nombre: "Bombones",
            id: "bombones"
        },
        precio: 1
    },
    {
        id: "bombon-08",
        titulo: "Bombon 08",
        imagen: "./img/bombones/08.jpg",
        categoria: {
            nombre: "Bombones",
            id: "bombones"
        },
        precio: 1
    },
    // artesanales
    {
        id: "artesanal-01",
        titulo: "Artesal 01",
        imagen: "./img/artesanales/01.jpg",
        categoria: {
            nombre: "Artesales",
            id: "artesanales"
        },
        precio: 1
    },
    {
        id: "artesanal-02",
        titulo: "Artesal 02",
        imagen: "./img/artesanales/02.jpg",
        categoria: {
            nombre: "Artesales",
            id: "artesanales"
        },
        precio: 1
    },
    {
        id: "artesanal-03",
        titulo: "Artesal 03",
        imagen: "./img/artesanales/03.jpg",
        categoria: {
            nombre: "Artesales",
            id: "artesanales"
        },
        precio: 1
    },
    {
        id: "artesanal-04",
        titulo: "Artesal 04",
        imagen: "./img/artesanales/04.jpg",
        categoria: {
            nombre: "Artesales",
            id: "artesanales"
        },
        precio: 1
    },
    {
        id: "artesanal-05",
        titulo: "Artesal 05",
        imagen: "./img/artesanales/05.jpg",
        categoria: {
            nombre: "Artesales",
            id: "artesanales"
        },
        precio: 1
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio"> S/ ${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 1000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #e2e2e2, #ec6516)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito) );
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}