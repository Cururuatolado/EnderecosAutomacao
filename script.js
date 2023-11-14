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

   
    let output = '';
    if (modo === 'uma-linha') {
        output = enderecos.join(', ');
    } else if (modo === 'por-coluna') {
        output = enderecos.map((endereco, index) => {
            return index < enderecos.length - 1 ? endereco + ',' : endereco;
        }).join('\n');
    }
    outputDiv.innerText = output;
}


function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var botao = document.querySelector('.butao');

    if (element.classList.contains('dark-mode')) {
        botao.textContent = 'Modo claro';
        localStorage.setItem('modoEscuro', 'ativado');
    } else {
        botao.textContent = 'Modo escuro';
        localStorage.setItem('modoEscuro', 'desativado');
    }
}

// Verifica se o modo escuro estava ativado ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const modoEscuroSalvo = localStorage.getItem('modoEscuro');
    if (modoEscuroSalvo === 'ativado') {
        DarkMode(); // Chama a função para ativar o modo escuro
    }
});


function Copiar() {
    var copyText = document.getElementById('output');
    var textoParaCopiar = copyText.innerText.replace(/<br>/g, '\n');

    if (textoParaCopiar === '' || textoParaCopiar === 'Nenhum endereço inserido.') {
        alert('Insira um endereço');
    } else {
        var tempElement = document.createElement('textarea');
        tempElement.innerHTML = textoParaCopiar;
        document.body.appendChild(tempElement);
    
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);

        alert('Texto copiado');
    }
}

function VerificarIps() {
    var tabela1 = document.getElementById('tabela1').value.split('\n').map(function(ip) {
        return ip.trim();
    });
    var tabela2 = document.getElementById('tabela2').value.split('\n').map(function(ip) {
        return ip.trim();
    });
    
    var ipsAusentesTabela1 = [];
    var ipsAdicionaisTabela2 = [];

    // Verifica os IPs ausentes na Tabela 2 em relação à Tabela 1
    for (var i = 0; i < tabela1.length; i++) {
        if (!tabela2.includes(tabela1[i])) {
            ipsAusentesTabela1.push(tabela1[i]);
        }
    }

    // Verifica os IPs adicionais na Tabela 2
    for (var j = 0; j < tabela2.length; j++) {
        if (!tabela1.includes(tabela2[j])) {
            ipsAdicionaisTabela2.push(tabela2[j]);
        }
    }

    exibirResultado(ipsAusentesTabela1, ipsAdicionaisTabela2);
}

function exibirResultado(ipsAusentesTabela1, ipsAdicionaisTabela2) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpa o conteúdo anterior

    if (ipsAusentesTabela1.length > 0) {
        resultadoDiv.innerHTML += '<h2>IPs Ausentes na Rota dinâmica em relação à Rota estática:</h2>';
        for (var i = 0; i < ipsAusentesTabela1.length; i++) {
            resultadoDiv.innerHTML += ipsAusentesTabela1[i] + '<br>';
        }
    } else {
        resultadoDiv.innerHTML += '<h2>Todos os IPs da Rota estática estão presentes na Rota dinâmica.</h2>';
    }

    if (ipsAdicionaisTabela2.length > 0) {
        resultadoDiv.innerHTML += '<h2>IPs Adicionais na Rota dinâmica:</h2>';
        for (var j = 0; j < ipsAdicionaisTabela2.length; j++) {
            resultadoDiv.innerHTML += ipsAdicionaisTabela2[j] + '<br>';
        }
    }
}
