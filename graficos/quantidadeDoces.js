const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; // URL base para buscar receitas

async function visualizarGraficosDoces() {
    try {
        const doces = ['cake', 'pudding', 'brownie', 'cookie', 'pie']; // Tipos de doces para buscar
        const tipos = [];
        const quantidades = [];

        for (const doce of doces) {
            const res = await fetch(url + doce);
            const dados = await res.json();

            tipos.push(doce); // Adiciona o tipo de doce à lista de tipos
            quantidades.push(dados.meals.length); // Adiciona a quantidade de receitas do tipo doce
        }

        const data = [
            {
                x: tipos,
                y: quantidades,
                type: 'bar',
                marker: {
                    color: 'rgba(255, 182, 193, 0.7)', // Cor para doces
                }
            }
        ];

        const layout = {
            title: 'Tipos de Doces e Quantidade de Receitas',
            xaxis: { title: 'Tipos de Doces' },
            yaxis: { title: 'Número de Receitas' }
        };

        Plotly.newPlot('grafico', data, layout);

    } catch (error) {
        console.error('Erro ao buscar ou processar dados da API:', error);
    }
}

visualizarGraficosDoces();
