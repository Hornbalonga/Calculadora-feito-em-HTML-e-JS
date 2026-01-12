import { Calculos } from './calculos.js';
import { controleDeSelecao, limparCampos, mostrarResultado } from './ui.js';

window.controleDeSelecao = controleDeSelecao;
window.limparCampos = limparCampos;

window.calcular = function () {
    const operador = document.getElementById('operadores').value;
    const num1 = document.getElementById('txtValor1').value;
    const num2 = document.getElementById('txtValor2').value;

    let resultado;

    if (operador === 'calc') {
        resultado = Calculos.expressao(num1);
    } else {
        resultado = Calculos.basico(num1, num2, operador);
    }

    mostrarResultado(resultado);
};
