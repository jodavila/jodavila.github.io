// Grace Project - Price Comparator JavaScript

// Alterna entre as abas
function toggleTab(tabId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="toggleTab('${tabId}')"]`).classList.add('active');
}

// Função para comparar opções e destacar a mais barata
function compararOpcoes() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const quantidade1 = parseInt(document.getElementById('quantidade1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const quantidade2 = parseInt(document.getElementById('quantidade2').value);

    const precoPorOvo1 = valor1 / quantidade1;
    const precoPorOvo2 = valor2 / quantidade2;

    const tituloOp1 = document.getElementById('tituloOp1');
    const tituloOp2 = document.getElementById('tituloOp2');

    const valorTotal = valor1 + valor2;

    if (precoPorOvo1 < precoPorOvo2) {
        tituloOp1.innerText = 'Opção 1 - Mais barata';
        tituloOp2.innerText = 'Opção 2';
        tituloOp1.classList.add('mais-barata');
        tituloOp2.classList.remove('mais-barata');
    } else {
        tituloOp1.innerText = 'Opção 1';
        tituloOp2.innerText = 'Opção 2 - Mais barata';
        tituloOp2.classList.add('mais-barata');
        tituloOp1.classList.remove('mais-barata');
    }

    document.getElementById('resultadoOpcao').innerText = `Valor: R$ ${valorTotal.toFixed(2)}`;
}

// Função para calcular o valor por peso
function calcularValorPorPeso() {
    const valorKilo = parseFloat(document.getElementById('valorKilo').value);
    const gramas = parseInt(document.getElementById('gramas').value);

    const precoPorGrama = valorKilo / 1000;
    const valorTotal = precoPorGrama * gramas;

    document.getElementById('resultadoPeso').innerText = `Valor correspondente: R$ ${valorTotal.toFixed(2)}`;
}

// Função para calcular o valor com desconto
function calcularValorComDesconto() {
    const valorOriginal = parseFloat(document.getElementById('valorOriginal').value);
    const percentualDesconto = parseFloat(document.getElementById('percentualDesconto').value);

    const valorDesconto = valorOriginal * (percentualDesconto / 100);
    const valorComDesconto = valorOriginal - valorDesconto;

    document.getElementById('resultadoDesconto').innerText = `Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`;
}

// Função para comparar proporção peso/volume
function compararProporcaoPesoVolume() {
    const peso1 = parseFloat(document.getElementById('peso1').value);
    const volume1 = parseFloat(document.getElementById('volume1').value);
    const peso2 = parseFloat(document.getElementById('peso2').value);
    const volume2 = parseFloat(document.getElementById('volume2').value);

    const proporcao1 = peso1 / volume1;
    const proporcao2 = peso2 / volume2;

    const resultadoProporcao = document.getElementById('resultadoProporcao');
    if (proporcao1 > proporcao2) {
        resultadoProporcao.innerText = 'Opção 1 possui maior proporção peso/volume';
    } else if (proporcao2 > proporcao1) {
        resultadoProporcao.innerText = 'Opção 2 possui maior proporção peso/volume';
    } else {
        resultadoProporcao.innerText = 'Ambas as opções possuem a mesma proporção peso/volume';
    }
}
