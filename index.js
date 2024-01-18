// LES INVESTISSEMENTS SNCF

    const invCanvas = document.getElementById('InvestissementsSNCF');
    const invChart = new Chart(invCanvas, {
        type: 'bubble',
        data: {
            labels: [], // Les dates iront ici
            datasets: [
                {
                    label: 'Investissements SNCF Mobilites (en milliards)',
                    data: [], // Les données iront ici
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 1)', //Rouge
                    borderWidth: 1,
                    radius: 5, // Taille des bulles
                    hoverRadius: 0, // Taille au survol (même taille que radius)
                    text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
                },
                {
                    label: 'Investissements Tous Financements (en milliards)',
                    data: [], // Les données iront ici
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 1)', // Bleu
                    borderWidth: 1,
                    radius: 5, // Taille des bulles
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

// LES COLLISIONS A UN PASSAGE A NIVEAU

    const colCanvas = document.getElementById('CollisionsDepuis2004');
    const colChart = new Chart(colCanvas, {
        type: 'line',
        data: {
            labels: [], // Les dates iront ici
            datasets: [
                {
                    label: 'Piétons tués',
                    data: [], // Les données iront ici
                    fill: true,
                    backgroundColor: 'rgba(149, 0, 0, 0.5)', // Rouge
                    borderColor: 'rgba(149, 0, 0, 1)',
                    borderWidth: 1,
                    radius: 0, // Taille des bulles
                    hoverRadius: 0, // Taille au survol (même taille que radius)
                    text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
                },
                {
                    label: 'Tués dans un véhicule',
                    data: [], // Les données iront ici
                    fill: true,
                    backgroundColor: 'rgba(0, 61, 149, 0.5)', // Bleu
                    borderColor: 'rgba(0, 61, 149, 1)',
                    borderWidth: 1,
                    radius: 0, // Taille des bulles
                    hoverRadius: 0, // Taille au survol (même taille que radius)
                    text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
                },
                {
                    label: 'Usagers tués',
                    data: [], // Les données iront ici
                    fill: true,
                    backgroundColor: 'rgba(32, 149, 0, 0.5)', // Vert
                    borderColor: 'rgba(32, 149, 0, 1)',
                    borderWidth: 1,
                    radius: 0, // Taille des bulles
                    hoverRadius: 0, // Taille au survol (même taille que radius)
                    text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
                },
                {
                    label: 'Collision du véhicule avec le train',
                    data: [], // Les données iront ici
                    fill: true,
                    backgroundColor: 'rgba( 255, 213, 102, 0.5)', // Jaune
                    borderColor: 'rgba(255, 213, 102, 1)',
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

// MOUVEMENTS SOCIAUX ANNUELS DEPUIS 1947

    const mvtSocAnsCanvas = document.getElementById('MvtAnnuelsDepuis1947');
    const mvtSocAnsChart = new Chart(mvtSocAnsCanvas, {
        type: 'line',
        data: {
            labels: [], // Les dates iront ici
            datasets: [
                {
                    label: 'Journées perdues par agent en moyenne par an',
                    data: [], // Les données iront ici
                    fill: true,
                    backgroundColor: 'rgba(0, 61, 149, 0.5)', // Bleu
                    borderColor: 'rgba(0, 61, 149, 1)',
                    borderWidth: 1,
                    tension: 0.25,
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
    fetch('JSON/Mouvements_sociaux_annuels_depuis_1947.json')
        .then(response => response.json())
        .then(data => {
            // Mettre à jour les données du graphique
            updateChartData3(mvtSocAnsChart, data);
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

    // Fonction pour mettre à jour les données du graphique
    function updateChartData3(chart, data) {

        chart.data.labels = data.map(entry => entry.date);
    
        chart.data.datasets[0].data = data.map(entry =>
        entry.journees_perdues_par_agent);
    
        chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
            // Récupère l'index de la bulle survolée
            const index = tooltipItem.index;

            // Récupère le texte personnalisé correspondant à l'index
            const text = data.datasets[tooltipItem.datasetIndex].text[index];

            return text;
        };

        chart.update(); // Mettre à jour le graphique
    }

// MOUVEMENTS SOCIAUX MENSUELS DEPUIS 1994

    const mvtSocMoisCanvas = document.getElementById('MvtMensuelsDepuis1994');
    const mvtSocMoisChart = new Chart(mvtSocMoisCanvas, {
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
    fetch('JSON/Mouvements_sociaux_mensuels_depuis_1994.json')
        .then(response => response.json())
        .then(data => {
            // Mettre à jour les données du graphique
            updateChartData4(mvtSocMoisChart, data);
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

    // Fonction pour mettre à jour les données du graphique
    function updateChartData4(chart, data) {

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

// REGULARITE MENSUEL DU TVG DEPUIS 2015

    const regulariteCanvas = document.getElementById('RegulariteMensuelleTGV2015');
    const regulariteChart = new Chart(regulariteCanvas, {
        type: 'line',
        data: {
            labels: [], // Les dates iront ici
            datasets: [
                {
                    label: 'Régularité en pourcentage',
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
                    label: 'Ponctualité en pourcentage',
                    data: [], // Les données iront ici
                    fill: true,
                    backgroundColor: 'rgba(32, 149, 0, 0.5)', // Vert
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
    fetch('JSON/Regularité_mensuelle_TGV_depuis_2015.json')
        .then(response => response.json())
        .then(data => {
            // Mettre à jour les données du graphique
            updateChartData5(regulariteChart, data);
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

    // Fonction pour mettre à jour les données du graphique
    function updateChartData5(chart, data) {

        chart.data.labels = data.map(entry => entry.date);

        chart.data.datasets[0].data = data.map(entry =>
        entry.regularite_composite);

        chart.data.datasets[1].data = data.map(entry =>
            entry.ponctualite_origine);

        chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
            // Récupère l'index de la bulle survolée
            const index = tooltipItem.index;

            // Récupère le texte personnalisé correspondant à l'index
            const text = data.datasets[tooltipItem.datasetIndex].text[index];

            return text;
        };

        chart.update(); // Mettre à jour le graphique
    }

// TEMPS DE TRAVAIL ANNUEL DEPUIS 1957

    const ttaCanvas = document.getElementById('TempsTravailAnnuelDepuis1957');
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
    fetch('JSON/Temps_travail_annuel_depuis_1957.json')
        .then(response => response.json())
        .then(data => {
            // Mettre à jour les données du graphique
            updateChartData6(ttaChart, data);
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

    // Fonction pour mettre à jour les données du graphique
    function updateChartData6(chart, data) {

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

// TRAFIC FRET ET VOYAGEURS DEPUIS 1841

const traficCanvas = document.getElementById('TraficDepuis1841');
const traficChart = new Chart(traficCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Nombre de tonnes transportées (en millions)',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(0, 61, 149, 0.5)', // Bleu
                borderColor: 'rgba(0, 61, 149, 1)',
                borderWidth: 1,
                tension: 0.1,
                radius: 0, // Taille des bulles
                hoverRadius: 0, // Taille au survol (même taille que radius)
                text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
            },
            {
                label: 'Nombre de voyageurs transportés (en millions)',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(149, 0, 0, 0.5)', // Rouge
                borderColor: 'rgba(149, 0, 0, 1)',
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
    entry.tonnes);

    chart.data.datasets[1].data = data.map(entry =>
    entry.voyageurs);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}