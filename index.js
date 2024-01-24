// Graphique des journées perdues par an
const MvtAnnuelsCanvas = document.getElementById('MvtAnnuels');
const MvtAnnuelsChart = new Chart(MvtAnnuelsCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Journées perdues par an',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(0, 61, 149, 0.5)', // Bleu
                borderColor: 'rgba(0, 61, 149, 1)',
                borderWidth: 1,
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
fetch('JSON/MvtAnnuels1994.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartData(MvtAnnuelsChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartData(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.journees_perdues);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}

// Graphique des journées perdues par mois
const MvtMensuelsCanvas = document.getElementById('MvtMensuels');
const MvtMensuelsChart = new Chart(MvtMensuelsCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Journées perdues par mois',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(149, 0, 0, 0.5)', // Rouge
                borderColor: 'rgba(149, 0, 0, 1)',
                borderWidth: 1,
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
fetch('JSON/MvtMensuels1994.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartData(MvtMensuelsChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartData(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.journees_perdues);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}

// Temps de travail annuel entre SNCF ET la France depuis 1957

const ttaCanvas = document.getElementById('TempsTravailAnnuel');
const ttaChart = new Chart(ttaCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: "Temps annuel d'heures de travail en France",
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(32, 149, 0, 0.5)', // Vert
                borderColor: 'rgba(32, 149, 0, 1)',
                borderWidth: 1,
                tension: 0.1,
                radius: 0, // Taille des bulles
                hoverRadius: 0, // Taille au survol (même taille que radius)
                text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
            },
            {
                label: "Temps annuel d'heures de travail à la SNCF",
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba( 255, 213, 102, 0.5)', // Jaune
                borderColor: 'rgba(255, 213, 102, 1)',
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
fetch('JSON/TempsTravailAnnuel1994.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartData1(ttaChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartData1(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.temps_annuel_de_travail_france);

    chart.data.datasets[1].data = data.map(entry =>
    entry.temps_annuel_de_travail_sncf);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}