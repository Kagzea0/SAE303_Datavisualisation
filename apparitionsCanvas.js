document.addEventListener('DOMContentLoaded', function () {

    /* JOURNÉES PERDUES PAR AN OU PAR MOIS */

    var MvtSoc = document.querySelector('a[href="#MvtSoc"]');
    var SecMvtSoc = document.getElementById('MvtSoc');
    
    var butMensuels = document.getElementById('butMensuels');
    var butAnnuels = document.getElementById('butAnnuels');

    var textMvtSoc = document.getElementById('textMvtSoc');

    // Initialisation du texte
    var textAnnuels = "Journées perdues par an";
    var textMensuels = "Journées perdues par mois";

    var currentText = textAnnuels; // Texte actuel, initialisé avec le texte annuels

    MvtSoc.addEventListener('click', function (e) {
        e.preventDefault();

        // Masquer les autres sections
        SecJourRepos.style.display = 'none'; //Jours repos
        SecTTA.style.display = 'none'; //Temps travail annuel
        SecInfog.style.display = 'none'; //Infographie

        if (SecMvtSoc.style.display === 'none' || SecMvtSoc.style.display === '') {
            SecMvtSoc.style.display = 'block';
            butMensuels.click(); // Cliquez automatiquement sur le bouton "Mensuels"
        } else {
            SecMvtSoc.style.display = 'none';
        }
    });

    // Mettez à jour le texte lorsque le bouton "Mensuels" est cliqué
    butMensuels.addEventListener('click', function () {
        currentText = textMensuels;
        textMvtSoc.textContent = currentText;
    });

    // Mettez à jour le texte lorsque le bouton "Annuels" est cliqué
    butAnnuels.addEventListener('click', function () {
        currentText = textAnnuels;
        textMvtSoc.textContent = currentText;
    });

    /* JOURS DE REPOS */

    var JourRepos = document.querySelector('a[href="#JourRepos"]');
    var SecJourRepos = document.getElementById('JourRepos');

    JourRepos.addEventListener('click', function (e) {
        e.preventDefault();

        // Masquer les autres sections
        SecMvtSoc.style.display = 'none'; //Mouvements sociaux
        SecTTA.style.display = 'none'; //Temps travail annuel
        SecInfog.style.display = 'none'; //Infographie

        if (SecJourRepos.style.display === 'none' || SecJourRepos.style.display === '') {
            SecJourRepos.style.display = 'block';
        } else {
            SecJourRepos.style.display = 'none';
        }
    });

    /* TEMPS DE TRAVAIL ANNUEL */

    var tta = document.querySelector('a[href="#TTA"]');
    var SecTTA = document.getElementById('TTA');

    tta.addEventListener('click', function (e) {
        e.preventDefault();

        // Masquer les autres sections
        SecMvtSoc.style.display = 'none'; //Mouvements sociaux
        SecJourRepos.style.display = 'none'; //Jours repos
        SecInfog.style.display = 'none'; //Infographie

        if (SecTTA.style.display === 'none' || SecTTA.style.display === '') {
            SecTTA.style.display = 'block';
        } else {
            SecTTA.style.display = 'none';
        }
    });

    /* INFOGRAPHIE */

    var infog = document.querySelector('a[href="#Infographie"]');
    var SecInfog = document.getElementById('Infographie');

    infog.addEventListener('click', function (e) {
        e.preventDefault();

        // Masquer les autres sections
        SecMvtSoc.style.display = 'none'; //Mouvements sociaux
        SecJourRepos.style.display = 'none'; //Jours repos
        SecTTA.style.display = 'none'; //Temps travail annuel

        if (SecInfog.style.display === 'none' || SecInfog.style.display === '') {
            SecInfog.style.display = 'block';
        } else {
            SecInfog.style.display = 'none';
        }
    });
});

