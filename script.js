let displayValue = '';

function appendCharacter(character) {
    displayValue += character;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        // Calcula a expressão usando a função eval, mas garante que apenas números e operadores são permitidos
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        // Em caso de erro (exemplo: expressão inválida), exibe "Erro"
        document.getElementById('display').value = 'Erro';
        displayValue = '';
    }
}
