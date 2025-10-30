// 🧠 Base de datos inicial (simulando el JSON)
let productos = [
  { id: 1, nombre: "Audífonos Inalámbricos Bluetooth", precio: 499, imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg" },
  { id: 2, nombre: "Mouse Gamer RGB", precio: 349, imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg" },
  { id: 3, nombre: "Teclado Mecánico Retroiluminado", precio: 899, imagen: "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" },
  { id: 4, nombre: "Monitor LED 24 pulgadas Full HD", precio: 2899, imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { id: 5, nombre: "Silla Gamer Ergonómica", precio: 3999, imagen: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
  { id: 6, nombre: "Smartwatch Deportivo", precio: 899, imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { id: 7, nombre: "Cámara Web HD con Micrófono", precio: 699, imagen: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { id: 8, nombre: "Disco Duro Externo 1TB", precio: 1299, imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
  { id: 9, nombre: "Memoria USB 64GB", precio: 199, imagen: "https://images.unsplash.com/photo-1517817748491-39c0e7ce8d1a" },
  { id: 10, nombre: "Altavoz Bluetooth Portátil", precio: 599, imagen: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
  { id: 11, nombre: "Laptop HP 15'' Ryzen 5", precio: 11999, imagen: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" },
  { id: 12, nombre: "Tablet Samsung Galaxy A9", precio: 6999, imagen: "https://images.pexels.com/photos/34950/pexels-photo.jpg" },
  { id: 13, nombre: "Cargador Rápido USB-C", precio: 299, imagen: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" },
  { id: 14, nombre: "Power Bank 10000mAh", precio: 499, imagen: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg" },
  { id: 15, nombre: "Smart TV 43 pulgadas 4K", precio: 7499, imagen: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg" },
  { id: 16, nombre: "Mouse Pad Gamer XL", precio: 299, imagen: "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg" },
  { id: 17, nombre: "Auriculares con Cancelación de Ruido", precio: 1599, imagen: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" },
  { id: 18, nombre: "Micrófono Condensador USB", precio: 849, imagen: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg" },
  { id: 19, nombre: "Router WiFi Doble Banda", precio: 1099, imagen: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg" },
  { id: 20, nombre: "Bocina Inteligente con Asistente de Voz", precio: 1899, imagen: "https://images.pexels.com/photos/158826/forest-trees-sun-rays-woods-158826.jpeg" }
];

  
  
  const contenedor = document.getElementById("contenedor-productos");
  const btnAgregar = document.getElementById("agregar");
  
  // 🧩 Renderizar productos
  function mostrarProductos() {
    contenedor.innerHTML = "";
    productos.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <button class="boton-eliminar" data-id="${producto.id}">×</button>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>Nombre: ${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
      `;
      contenedor.appendChild(div);
    });
  
    // Asignar eventos de eliminación
    document.querySelectorAll(".boton-eliminar").forEach((boton) => {
      boton.addEventListener("click", eliminarProducto);
    });
  }
  
  // 🧱 Agregar nuevo producto
  btnAgregar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const precio = document.getElementById("precio").value.trim();
    const imagen = document.getElementById("url").value.trim();
  
    if (!nombre || !precio || !imagen) {
      alert("Completa todos los campos.");
      return;
    }
  
    const nuevoProducto = {
      id: productos.length ? productos[productos.length - 1].id + 1 : 1,
      nombre,
      precio: parseFloat(precio),
      imagen,
    };
  
    productos.push(nuevoProducto);
    mostrarProductos();
  
    // Limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("url").value = "";
  
    console.log("JSON actualizado:", JSON.stringify(productos, null, 2));
  });
  
  // 🗑️ Eliminar producto
  function eliminarProducto(e) {
    const id = parseInt(e.target.dataset.id);
    productos = productos.filter((p) => p.id !== id);
    mostrarProductos();
    console.log("JSON actualizado:", JSON.stringify(productos, null, 2));
  }
  
  // Inicializar
  mostrarProductos();
  