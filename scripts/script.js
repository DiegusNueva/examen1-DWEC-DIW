/**
 * @author Caterina Ilario
 * @GitHub 
 */
document.addEventListener("DOMContentLoaded", () => {

    const calculateButton = document.getElementById("calculate");
    const resultOutput = document.getElementById("result");
    
    calculateButton.addEventListener("click", () => {
    
        let length = (parseFloat(document.getElementById("length").value));
        let width = (parseFloat(document.getElementById("width").value));
    
        if (!isNaN(length) && !isNaN(width)){
            const area = length * width;
            const perimeter = (2 *length) + (2*width);
            const diagonal = Math.floor(Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2)));
    
            result.innerText = `
            Rectangle area: ${area}
            Rectangle perimeter: ${perimeter}
            Rectangle area: ${diagonal}`
        } else{
            result.innerText = ` Please, introduce valid values `;
        }
    });
    
    });