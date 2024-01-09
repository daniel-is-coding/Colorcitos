const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const copyBtn = document.getElementById('copyBtn');
const copyMessage = document.getElementById('copyMessage');

btn.addEventListener("click", function(){
    let hexColor = "#";
        for (let i = 0; i<6; i++){
            hexColor += hex[getRandomNumber()];
        }
        color.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
        console.log(hexColor)

    btn.classList.add('clicked');
    setTimeout(function () {
        btn.classList.remove('clicked');
      }, 500);
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
} 

copyBtn.addEventListener("click", function(){
    const textToCopy = color.textContent;

        // Crear un elemento de mensaje temporal
        copyMessage.textContent = "Color copiado: " + textToCopy;
        copyMessage.style.display = "block";

        // Ocultar el mensaje después de 1 segundo
        setTimeout(function () {
          copyMessage.style.display = "none";
        }, 600);

        // Crear un elemento de texto temporal
        const tempElement = document.createElement('textarea');
        tempElement.value = textToCopy;
        document.body.appendChild(tempElement);

        // Seleccionar el texto y copiarlo al portapapeles
        tempElement.select();
        document.execCommand('copy');

        // Eliminar el elemento temporal
        document.body.removeChild(tempElement);
});



