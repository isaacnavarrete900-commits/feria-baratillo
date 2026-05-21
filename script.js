// -------------------------
// VARIABLES DE ANIMACIÓN
// -------------------------

let posX = 200;
let velocidad = 3;

// -------------------------
// ANIMACIÓN DEL LOGO
// -------------------------

function animarLogo(){

    const canvas = document.getElementById('logoCanvas');
    const ctx = canvas.getContext('2d');

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fondo del letrero
    ctx.fillStyle = '#2e1065';
    ctx.fillRect(10, 10, 380, 60);

    // Marco decorativo
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 4;
    ctx.strokeRect(15, 15, 370, 40);

    // Movimiento
    posX = posX + velocidad;

    // Rebote
    if(posX > 270 || posX < 130){
        velocidad = velocidad * -1;
    }

    // Texto
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px Arial';
    ctx.textAlign = 'center';

    ctx.fillText(
        'FERIA "EL BARATILLO"',
        posX,
        45
    );

    // Repetir animación
    requestAnimationFrame(animarLogo);
}

// Iniciar
window.onload = animarLogo;


// -------------------------
// PANEL DINÁMICO
// -------------------------

function mostrarDetalle(nombre, precio, descripcion){

    const contenedorInfo =
    document.getElementById('vista-previa');

    contenedorInfo.innerHTML = `
    
        <h4>${nombre}</h4>

        <p>
            <strong>Precio Especial:</strong>
            ${precio}
        </p>

        <p>${descripcion}</p>

        <button
        class="btn-producto"
        style="
            background-color:#10b981;
            width:100%;
            margin-top:10px;
        ">
            🛒 Apartar Producto
        </button>

    `;
}