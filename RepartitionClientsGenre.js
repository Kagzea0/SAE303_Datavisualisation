const genreCanvas = document.getElementById('RepartitionClientsGenre');
const genreChart = new Chart(genreCanvas, {
  type: 'doughnut',
  data: {
    datasets: [
      {
        label: 'Femmes',
        data: [], // Les données iront ici
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bleu
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Hommes',
        data: [], // Les données iront ici
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          // Récupère l'index de la barre survolée
          const index = tooltipItem.index;

          // Récupère le texte personnalisé correspondant à l'index
          const text = data.datasets[tooltipItem.datasetIndex].text[index];

          return text;
        },
      },
    },
  },
});

// Charger le fichier JSON
fetch('JSON/Repartition_clients_par_age.json')
  .then(response => response.json())
  .then(data => {
    // Mettre à jour les données du graphique
    updateChartData(genreChart, data);
  })
  .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartData(chart, data) {

  chart.data.labels = data.map(entry => entry.annee);

  chart.data.datasets[0].data = data.map(entry => entry.pourcentage);
  chart.data.datasets[1].data = data.map(entry => entry.annee);

  chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
    // Récupère l'index de la barre survolée
    const index = tooltipItem.index;

    // Récupère le texte personnalisé correspondant à l'index
    const text = data.datasets[tooltipItem.datasetIndex].text[index];

    return text;
  };

  chart.update(); // Mettre à jour le graphique
}