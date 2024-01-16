// InvestissementsSNCF
const invCanvas = document.getElementById('InvestissementsSNCF');
const invChart = new Chart(invCanvas, {
    type: 'scatter',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Investissements SNCF Mobilites (en milliards)',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                radius: 5, // Taille des bulles
                hoverRadius: 5, // Taille au survol (même taille que radius)
                text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
            },
            {
                label: 'Investissements Tous Financements (en milliards)',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bleu
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                radius: 5, // Taille des bulles
                hoverRadius: 5, // Taille au survol (même taille que radius)
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
fetch('JSON/Investissements_SNCF_Mobilites.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartData1(invChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartData1(chart, data) {

    chart.data.labels = data.map(entry => entry.date);
  
    chart.data.datasets[0].data = data.map(entry =>
      entry.investissements_sncf_mobilites_en_milliards);
  
    chart.data.datasets[1].data = data.map(entry =>
      entry.investissements_tous_financements_confondus_y_compris_les_financements_par_des_tiers_comme_les_regio);
  
      chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}

// InvestissementsSNCF
const colCanvas = document.getElementById('Collisions');
const colChart = new Chart(colCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Piétons tués',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                radius: 5, // Taille des bulles
                hoverRadius: 5, // Taille au survol (même taille que radius)
                text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
            },
            {
                label: 'Tués dans un véhicule',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bleu
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                radius: 5, // Taille des bulles
                hoverRadius: 5, // Taille au survol (même taille que radius)
                text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
            },
            {
                label: 'Usagers tués',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bleu
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                radius: 5, // Taille des bulles
                hoverRadius: 5, // Taille au survol (même taille que radius)
                text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
            },
            {
                label: 'Collision du véhicule avec le train',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bleu
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                radius: 5, // Taille des bulles
                hoverRadius: 5, // Taille au survol (même taille que radius)
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
fetch('JSON/Collisions_passages_à_niveau_depuis_2004.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartData2(colChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartData2(chart, data) {

    chart.data.labels = data.map(entry => entry.date);
  
    chart.data.datasets[0].data = data.map(entry =>
      entry.pietons_tues);
  
    chart.data.datasets[1].data = data.map(entry =>
      entry.tues_vehicule);
      
    chart.data.datasets[2].data = data.map(entry =>
        entry.usagers_tues);
        
    chart.data.datasets[3].data = data.map(entry =>
        entry.collision_vehicule_train);
  
      chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}