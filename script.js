function processarEnderecos() {
    const enderecoInput = document.getElementById('enderecoInput');
    const outputDiv = document.getElementById('output');
    const modeSelect = document.getElementById('modoSelect');
    const modo = modeSelect.value;
    const enderecos = enderecoInput.value.split('\n').map(e => e.trim()).filter(Boolean);

    if (enderecos.length === 0) {
        outputDiv.innerHTML = 'Nenhum endereço inserido.';
        return;
    }

    let output = 'Endereços Processados: ';
    if (modo === 'uma-linha') {
        output += enderecos.join(', ');
    } else if (modo === 'por-coluna') {
        output += ('<br>')
        output +=  enderecos.join(', <br>');
    }
    outputDiv.innerHTML = output;
}

function DarkMode () {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var botao = document.querySelector('.butao');

    if (element.classList.contains('dark-mode')) {
        botao.textContent = 'Modo claro';
    } else {
        botao.textContent = 'Modo escuro';
    }
}

