/**
 * @author Caterina Ilario
 * @GitHub 
 */ 

//Hacemos que cargue todo el HTML y CSS antes del JavaScript
document.addEventListener("DOMContentLoaded", () => {

    //Vinculamos el JS y el template mediante id del botón y del resultado
    const calculateButton = document.getElementById("calculate");
    const resultOutput = document.getElementById("result");
    
    //Vinculamos el evento de al hacer click al botón pase algo:
    calculateButton.addEventListener("click", () => {
    
        //Declaramos las variables que tiene que introducir el usuario
        let length = (parseFloat(document.getElementById("length").value));
        let width = (parseFloat(document.getElementById("width").value));
    
        //Si ambos valores son números (ya que se puede introducir e) se harán los cálculos
        if (!isNaN(length) && !isNaN(width)){
            const area = length * width;
            const perimeter = (2 *length) + (2*width);
            const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2)); //aplicamos las funciones de js para elevar al cuadrado y raiz cuadrada

            //Hacemos que los resultados salgan por pantalla en el div 
            resultOutput.innerHTML = `
            <p>Rectangle area: ${area.toFixed(2)}</p>
            <p>Rectangle perimeter: ${perimeter.toFixed(2)}</p>
            <p>Rectangle area: ${diagonal.toFixed(2)}</p>`

            //Si no, mensaje de error
        } else{
            result.innerText = ` Please, introduce valid values `;
        }
    });
    
    });