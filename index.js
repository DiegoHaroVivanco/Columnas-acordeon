let columnaActiva = 1;
const columnas = document.querySelectorAll('.columna');

let position = Array(300).join(0).split('');
const canva = document.getElementById('canva');
const ctx = canva.getContext('2d');
const width = document.body.clientWidth;
const height = document.body.clientHeight;

canva.width = width;
canva.height = height;

// Columnas
columnas.forEach((columna, indice) => {
    columna.addEventListener('click', () => {
        actualizarColumnaActiva(indice);
    });
});

const actualizarColumnaActiva = ((indice) => {
    columnas[columnaActiva].classList.remove('activa');
    columnas[indice].classList.add('activa');
    columnaActiva = indice;
});

// Canvas
function inicioLluvia(){
	ctx.fillStyle = 'rgba(0, 30, 1, 0.05)';
	ctx.fillRect(0, 0, width, height);
	ctx.fillStyle = '#37cc05';

	ctx.font = '11pt arial';

	position.map((y, index) => {
		let text = String.fromCharCode(1e2 + Math.random() * 30);
		let x = (index * 15) + 15;
		
		canva.getContext('2d').fillText(text, x, y);

		if(y > 100 + Math.random() * 1e5){
			position[index] = 0;
		}else{
			position[index] = y + 15;
		}

        setTimeout(() => {
            canva.remove();
        }, 80000);
    });

}

setInterval(inicioLluvia, 300);