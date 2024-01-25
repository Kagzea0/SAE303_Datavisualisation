// Graphique Cadre
const CadreCanvas = document.getElementById('Cadre');
const CadreChart = new Chart(CadreCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Nombre agents cadre',
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
fetch('JSON/ReposDimancheCadre.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartDataCadre(CadreChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartDataCadre(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.nombre_agents_cadre);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}

// Graphique Execution
const ExecutionCanvas = document.getElementById('Execution');
const ExecutionChart = new Chart(ExecutionCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Nombre agents execution',
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
fetch('JSON/ReposDimancheExecution.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartDataExecution(ExecutionChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartDataExecution(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.nombre_agents_execution);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}// Graphique Maitrise
const MaitriseCanvas = document.getElementById('Maitrise');
const MaitriseChart = new Chart(MaitriseCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Nombre agents Maitrise',
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
fetch('JSON/ReposDimancheMaitrise.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartDataMaitrise(MaitriseChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartDataMaitrise(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.nombre_agents_maitrise);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}

// Graphique CadreExecution
const CadreExecutionCanvas = document.getElementById('CadreExecution');
const CadreExecutionChart = new Chart(CadreExecutionCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Nombre agents Cadre',
                data: [], // Les données iront ici
                fill: true,
                backgroundColor: 'rgba(150, 220, 149, 0.5)', // Bleu
                borderColor: 'rgba(0, 61, 149, 1)',
                borderWidth: 1,
                radius: 0, // Taille des bulles
                hoverRadius: 0, // Taille au survol (même taille que radius)
                text: [] // Ajout d'une propriété text pour stocker le texte personnalisé
            },
            {
                label: 'Nombre agents Execution',
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
fetch('JSON/ReposDimancheCadreExecution.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartDataCadreExecution(CadreExecutionChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartDataCadreExecution(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.nombre_agents_cadre);

    chart.data.datasets[1].data = data.map(entry =>
    entry.nombre_agents_execution);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}

// Graphique CadreMaitrise
const CadreMaitriseCanvas = document.getElementById('CadreMaitrise');
const CadreMaitriseChart = new Chart(CadreMaitriseCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Nombre agents Cadre',
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
                label: 'Nombre agents Maitrise',
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
fetch('JSON/ReposDimancheCadreMaitrise.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartDataCadreMaitrise(CadreMaitriseChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartDataCadreMaitrise(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.nombre_agents_cadre);

    chart.data.datasets[1].data = data.map(entry =>
    entry.nombre_agents_maitrise);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}

// Graphique MaitriseExecution
const MaitriseExecutionCanvas = document.getElementById('MaitriseExecution');
const MaitriseExecutionChart = new Chart(MaitriseExecutionCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Nombre agents Maitrise',
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
                label: 'Nombre agents Execution',
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
fetch('JSON/ReposDimancheMaitriseExecution.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartDataMaitriseExecution(MaitriseExecutionChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartDataMaitriseExecution(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.nombre_agents_maitrise);

    chart.data.datasets[1].data = data.map(entry =>
    entry.nombre_agents_execution);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}

// Graphique CadreMaitriseExecution
const CadreMaitriseExecutionCanvas = document.getElementById('CadreMaitriseExecution');
const CadreMaitriseExecutionChart = new Chart(CadreMaitriseExecutionCanvas, {
    type: 'line',
    data: {
        labels: [], // Les dates iront ici
        datasets: [
            {
                label: 'Nombre agents Cadre',
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
                label: 'Nombre agents Maitrise',
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
                label: 'Nombre agents Execution',
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
fetch('JSON/ReposDimancheCadreMaitriseExecution.json')
    .then(response => response.json())
    .then(data => {
        // Mettre à jour les données du graphique
        updateChartDataCadreMaitriseExecution(CadreMaitriseExecutionChart, data);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

// Fonction pour mettre à jour les données du graphique
function updateChartDataCadreMaitriseExecution(chart, data) {

    chart.data.labels = data.map(entry => entry.date);

    chart.data.datasets[0].data = data.map(entry =>
    entry.nombre_agents_cadre);

    chart.data.datasets[1].data = data.map(entry =>
    entry.nombre_agents_maitrise);

    chart.data.datasets[2].data = data.map(entry =>
    entry.nombre_agents_execution);

    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        // Récupère l'index de la bulle survolée
        const index = tooltipItem.index;

        // Récupère le texte personnalisé correspondant à l'index
        const text = data.datasets[tooltipItem.datasetIndex].text[index];

        return text;
    };

    chart.update(); // Mettre à jour le graphique
}