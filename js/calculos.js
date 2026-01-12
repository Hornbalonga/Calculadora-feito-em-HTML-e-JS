export const Calculos = {

    basico(num1, num2, operador) {
        num1 = Number(num1);
        num2 = Number(num2);

        switch (operador) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
            default: return 'Operador inválido';
        }
    },

    expressao(expressao) {
        try {
            return Function(`return ${expressao}`)();
        } catch {
            return 'Expressão inválida';
        }
    }
};
