// JavaScript
const barCanvas = document.getElementById('barCanvas');
const barChart = new Chart(barCanvas, {
    type: 'bubble',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Investissements SNCF Mobilites (en milliards)',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: ['rgba(255, 99, 132, 0.2)']
            },
            {
                label: 'Investissements Tous Financements (en milliards)',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: ['rgba(54, 162, 235, 0.2)'] // Bleu
            }
        ]
    }
});

// Charger le fichier JSON
fetch('JSON/Investissements_SNCF_Mobilites.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartData(barChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartData(chart, data) {
    chart.data.labels = data.map(entry => entry.date);
    chart.data.datasets[0].data = data.map(entry => entry.investissements_sncf_mobilites_en_milliards);
    chart.data.datasets[1].data = data.map(entry => entry.investissements_tous_financements_confondus_y_compris_les_financements_par_des_tiers_comme_les_regio);
    chart.update(); // Mettre à jour le graphique
}