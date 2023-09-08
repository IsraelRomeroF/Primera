// Función para agregar productos al carrito
document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const vaciarCarrito = document.getElementById('vaciar-carrito');
    
    let carrito = [];
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.getAttribute('data-nombre');
            const precio = parseFloat(boton.getAttribute('data-precio'));
    
            const producto = {
                nombre,
                precio
            };
    
            carrito.push(producto);
            mostrarCarrito();
        });
    });
    
    function mostrarCarrito() {
        listaCarrito.innerHTML = '';
    
        carrito.forEach(producto => {
            const { nombre, precio } = producto;
    
            const elemento = document.createElement('li');
            elemento.innerHTML = `${nombre} - $${precio}`;
            listaCarrito.appendChild(elemento);
        });
    
        calcularTotal();
    }
    
    function calcularTotal() {
        const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        totalCarrito.textContent = total.toFixed(2);
    }
    
    vaciarCarrito.addEventListener('click', () => {
        carrito = [];
        mostrarCarrito();
    });
});
