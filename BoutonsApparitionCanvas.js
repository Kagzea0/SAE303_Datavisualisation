document.getElementById('ButInvOpen').addEventListener('click', function() {
    var container = document.getElementById('Investissements');
    container.style.opacity = (container.style.opacity === '0') ? '1' : '0';
});

document.getElementById('ButInvClose').addEventListener('click', function() {
    var container = document.getElementById('Investissements');
    container.style.opacity = (container.style.opacity === '0') ? '1' : '0';
});

document.getElementById('ButColOpen').addEventListener('click', function() {
    var container = document.getElementById('Collisions');
    container.style.opacity = (container.style.opacity === '0') ? '1' : '0';
});
