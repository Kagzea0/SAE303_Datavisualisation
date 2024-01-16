const tempsCanvas = document.getElementById('EvolutionTempsParcours');
const tempsChart = new Chart(tempsCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'temps_estime_en_minutes',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
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
fetch('JSON/EvolutionTempsParcours.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartData(tempsChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartData(chart, data) {

    chart.data.labels = data.map(entry => entry.date);
  
    chart.data.datasets[0].data = data.map(entry =>
      entry.annee);
  
    chart.data.datasets[1].data = data.map(entry =>
      entry.temps_estime_en_minutes);
  
      chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}