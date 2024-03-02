document.addEventListener('DOMContentLoaded', function() {
    let textResult = document.querySelector('#moreRecommendations')
    let listVariablesForm = ['age', 'sexe', 'taille', 'poids', 'objectif', 'antecedentsMedicaux', 
                            'typeAntecedentsMedicaux', 'medicaments', 'fumer', 
                            'restrictionsAlimentaires', 'precisionRestrictionsAlimentaires', 
                            'frequenceActuelleSport', 'typeSportPratique', 
                            'experienceMusculation', 'dureeEntrainement', 'frequenceSouhaitee', 
                            'abonnement', 'equipementDomicile', 'preferencesExercices']

    textResult.textContent = "Aux vu des résultats de votre formulaire, nous vous recommandons de :"
    // add all infos in the textResult
    listVariablesForm.forEach(function(variable) {
        let value = localStorage.getItem(variable)
        if (value) {
            textResult.textContent += " Vous avez sélectionné " + value + " pour " + variable + "."
        }
    })


});