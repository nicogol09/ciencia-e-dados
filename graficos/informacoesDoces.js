const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; // URL base para buscar receitas

async function visualizarInformacoesDoces() {
    try {
        const res = await fetch(url + 'cake'); // Exemplo: buscando receitas de bolos
        const dados = await res.json();

        const totalDoces = dados.meals.length;
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');
        paragrafo.innerHTML = Existem <span>${totalDoces} tipos de doces</span> disponíveis. Abaixo estão alguns tipos de doces!;

        const container = document.getElementById('graficos-container');
        container.appendChild(paragrafo);
    } catch (error) {
        console.error('Erro ao buscar informações de doces:', error);
    }
}

visualizarInformacoesDoces();
