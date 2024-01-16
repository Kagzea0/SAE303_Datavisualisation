$(document).ready(function(){
    $.ajax({
      url:'JSON/Repartition_clients_par_categorie_socio-professionnelle',
      data:{sem:1},
      dataType:'json',
      success:function(res){
        // Remarque : le data de res.data, c'est parce que le premier 
        // champ du jeu de résultat s'appelle data. C'est dedans que tout se trouve.
            const annee = res.data.map((enquete)=>enquete.annee);
            const pourcentage = res.data.map((enquete)=>enquete.pourcentage);
            const csp = res.data.map((enquete)=>enquete.csp);
            const gare = res.data.map((enquete)=>enquete.gare_enquetee);

            console.log(Object.values(csp));

            // c = new Chart('salaires',
            // {type:'bar',
            //     data: {
            //         labels: fullname,
            //         datasets: [{
            //             label:"salaire annuel",
            //             data: salary
            //         }
            //     ]
            // },
            
            // options: {
            //     title: {
            //             display: true,
            //             text: 'salaires'
            //         },
            //     scales: {
            //         y: {
            //             min:0
            //         }
            //     }
            // }});
  
            //Le deuxième graphe (âges)
            // En abscisse les âges triés
            
            // d = new Chart('ages',
            // {type:'bar',
            //     data: {
            //     labels: lesages.sort(),
            //     datasets: [{
            //         label:"répartition par âge",
            //         data: Object.values(compte)
            //     }
            
            //     ]
            // },
            
            // options: {
            //     title: {
            //             display: true,
            //             text: 'salaires'
            //         },
            //     scales: {
            //         y: {
            //         min:0
                
            //         }
            //     }
            // }});
        // c.update(); d.update(); //On met à jour le canvas
        }  //fin du success
    })//fin ajax
})