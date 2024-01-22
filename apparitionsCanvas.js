document.addEventListener('DOMContentLoaded', function () {
    var MvtSoc = document.querySelector('a[href="#MvtSoc"]');
    var SecMvtSoc = document.getElementById('MvtSoc');
    var buttonCollisions = document.getElementById('but2');

    MvtSoc.addEventListener('click', function (e) {
        e.preventDefault(); // Pour éviter de scroller vers l'ancre

        if (SecMvtSoc.style.display === 'none' || SecMvtSoc.style.display === '') {
            SecMvtSoc.style.display = 'block';
            // Cliquer automatiquement sur le bouton "Collisions"
            buttonCollisions.click();
        } else {
            SecMvtSoc.style.display = 'none';
        }
    });
});
