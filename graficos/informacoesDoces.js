const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; 

async function visualizarInformacoesDoces() {
    try {
        const res = await fetch(url + 'cake');
        const dados = await res.json();

        const totalDoces = dados.meals ? dados.meals.length : 0; 
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');
        paragrafo.innerHTML = `Existem <span>${totalDoces} tipos de doces</span> disponíveis. Abaixo estão alguns tipos de doces!`; 

        const container = document.getElementById('graficos-container');
        container.appendChild(paragrafo);
    } catch (error) {
        console.error('Erro ao buscar informações de doces:', error);
    }
}

visualizarInformacoesDoces();
