export function controleDeSelecao() {
    const operador = document.getElementById('operadores').value;
    const txtValor2 = document.getElementById('txtValor2');
    const txtValor1 = document.getElementById('txtValor1');

    if (operador === 'calc') {
        txtValor2.style.visibility = 'hidden';
        txtValor1.value = '';
        txtValor1.placeholder = '3+4*(5-1)';
    } else {
        txtValor2.style.visibility = 'visible';
        txtValor1.placeholder = '';
    }
}

export function limparCampos() {
    document.getElementById('txtValor1').value = '';
    document.getElementById('txtValor2').value = '';
    document.getElementById('saida').innerHTML = 'Resultado:';
}

export function mostrarResultado(resultado) {
    document.getElementById('saida').innerHTML = `Resultado: ${resultado}`;
}
