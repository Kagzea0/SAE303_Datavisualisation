const traficCanvas = document.getElementById('TraficDepuis1841');
const traficChart = new Chart(traficCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Nombre de voyageurs transportés (en millions)',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(32, 149, 0, 0.5)', // Bleu
                borderColor: 'rgba(32, 149, 0, 1)',
                borderWidth: 1,
                tension: 0.1,
                radius: 0, // Taille des bulles
                hoverRadius: 0, // Taille au survol (même taille que radius)
                text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
            },
            {
                label: 'Nombre de tonnes transportées (en millions)',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(32, 149, 0, 0.5)', // Bleu
                borderColor: 'rgba(32, 149, 0, 1)',
                borderWidth: 1,
                tension: 0.1,
                radius: 0, // Taille des bulles
                hoverRadius: 0, // Taille au survol (même taille que radius)
                text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
            }
        ]
    },
    options: {
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    // Récupère l'index de la bulle survolée
                    const index = tooltipItem.index;

                    // Récupère le texte personnalisé correspondant à l'index
                    const text = data.datasets[tooltipItem.datasetIndex].text[index];

                    return text;
                }
            }
        }
    }
});

// Charger le fichier JSON
fetch('JSON/Trafic_voyageurs_et_marchandises_depuis_1841.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartData7(traficChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartData7(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
        entry.voyageurs);

    chart.data.datasets[1].data = data.map(entry =>
        entry.tonnes);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}