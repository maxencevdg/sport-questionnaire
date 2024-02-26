import exercisesDatabase from "./data/exercisesDatabase.js"

document.addEventListener(
  "DOMContentLoaded",
  function getQuestionnaireAnswers() {
    let form = document.querySelector("form")

    // retourne les noms des exercices liés au muscle ciblé :
    function filterByMuscle(muscle) {
      return exercisesDatabase
        .filter((exercise) => exercise.musclesTargeted[0] === muscle)
        .map((exercise) => exercise.name)
    }

    // recupere les noms des exercices liés au muscle ciblé :
    // seance epaules/trapezes
    let exercisesForEpaules = filterByMuscle("Épaules")
    let exercisesForDeltoideLateraux = filterByMuscle("Deltoïdes latéraux")
    let exercisesForDeltoideAnterieurs = filterByMuscle("Deltoïdes antérieurs")
    let exercisesForDeltoidePosterieurs = filterByMuscle("Deltoïdes postérieurs")
    let exercisesForTrapezes = filterByMuscle("Trapèzes")
    let exercisesForEpaulesTrapezes = [...new Set([].concat(
      exercisesForEpaules,
      exercisesForDeltoideLateraux,
      exercisesForDeltoideAnterieurs,
      exercisesForDeltoidePosterieurs,
      exercisesForTrapezes
      )),
    ]

    // seance dos/biceps
    let exercisesForDorsaux = filterByMuscle("Dorsaux")
    let exercisesForRhomboides = filterByMuscle("Rhomboides")
    let exercisesForBiceps = filterByMuscle("Biceps")
    let exercisesForBrachial = filterByMuscle("Brachial")
    let exercisesForDosBiceps = [...new Set([].concat(
      exercisesForDorsaux,
      exercisesForRhomboides,
      exercisesForBiceps,
      exercisesForBrachial
      )),
    ]

    // seance pectoraux/triceps
    let exercisesForPectoraux = filterByMuscle("Pectoraux")
    let exercisesForTriceps = filterByMuscle("Triceps")
    let exercisesForPectorauxTriceps = [...new Set([].concat(
      exercisesForPectoraux, 
      exercisesForTriceps
      )),
    ]

    // seance jambes
    let exercisesForQuadriceps = filterByMuscle("Quadriceps")
    let exercisesForFessiers = filterByMuscle("Fessiers")
    let exercisesForIschioJambiers = filterByMuscle("Ischio-jambiers")
    let exercisesForJambes = [...new Set([].concat(
      exercisesForQuadriceps,
      exercisesForFessiers,
      exercisesForIschioJambiers
      )),
    ]

    // seance abdominaux/obliques
    let exercisesForAbdominaux = filterByMuscle("Abdominaux")
    let exercisesForObliques = filterByMuscle("Obliques")
    let exercisesForAbdominauxObliques = [...new Set([].concat(
      exercisesForAbdominaux, 
      exercisesForObliques
      )),
    ]

    // liste de tout les exercices
    let exercicesAll = [].concat(
      exercisesForEpaulesTrapezes,
      exercisesForDosBiceps,
      exercisesForPectorauxTriceps,
      exercisesForJambes,
      exercisesForAbdominauxObliques
    )

    console.log(exercicesAll)

    form.addEventListener("submit", function (event) {
      event.preventDefault() // Empêche l'envoi du formulaire

      // Récupère les données du formulaire
      let formData = new FormData(form)
      let data = {}
      for (let [key, value] of formData.entries()) {
        data[key] = value
      }
      console.log(data)

      function frequency() {
        // Récupère la valeur de "frequence-souhaitee" pour créer un objet workoutProgram de la taille de la fréquence
        let frequenceSouhaitee = parseInt(data["frequence-souhaitee"])

        let workoutProgram = {}

        for (let i = 1; i <= frequenceSouhaitee; i++) {
          workoutProgram["jour-" + i] = {}
        }
        return workoutProgram
      }

      // en fonction de l'objectif, creer un nouveau tableau avec le nombre de series et de repetitions associés
      function seriesRepetitions() {
        let seriesRepetitions = {}
        let objectifValue = data["objectif"]
        for (let i = 0; i < exercicesAll.length; i++) {
          let exerciseName = exercicesAll[i]
          if (exercisesDatabase[i] && exercisesDatabase[i][objectifValue]) {
            let exerciseObjectif = exercisesDatabase[i][objectifValue]
            seriesRepetitions[exerciseName] = exerciseObjectif
          }
        }
        return seriesRepetitions
      }

      function createWorkoutPlan() {
        let maxSecondsPerDay = data["duree"] * 60 // conversion du temps en secondes
        let timeForExercise = 165 // temps moyen d'une serie (effort + recuperation)
        let totalTime = 0
        let workoutPlan = []
        let workoutProgram = frequency()
        let objectifDatabase = seriesRepetitions()
      
        // Convertir les clés de workoutProgram en tableau pour obtenir l'ordre des jours
        let days = Object.keys(workoutProgram)
      
        // Pour chaque jour on choisit un exercice au hasard et on l'ajoute au workoutPlan tant que le temps total respecte la durée souhaitée
        for (let day of days) {
          let dayExercises = {}
          let frequenceSouhaitee = parseInt(data["frequence-souhaitee"])
          let exercisesForDay;
        
          if (frequenceSouhaitee <= 2) {
            exercisesForDay = exercicesAll;
          } else if (frequenceSouhaitee === 3) {
            switch (day) {
              case 'jour-1':
                exercisesForDay = [...exercisesForPectoraux, ...exercisesForDorsaux, ...exercisesForRhomboides, ...exercisesForEpaulesTrapezes];
                break;
              case 'jour-2':
                exercisesForDay = [...exercisesForJambes];
                break;
              case 'jour-3':
                exercisesForDay = [...exercisesForBiceps, ...exercisesForBrachial, ...exercisesForTriceps];
                break;
            }
          } else if (frequenceSouhaitee >= 4) {
            let dayNumber = parseInt(day.split('-')[1]);
            switch (dayNumber % 4) {
              case 0:
                exercisesForDay = [...exercisesForPectorauxTriceps];
                break;
              case 1:
                exercisesForDay = [...exercisesForDosBiceps];
                break;
              case 2:
                exercisesForDay = [...exercisesForJambes];
                break;
              case 3:
                exercisesForDay = [...exercisesForEpaulesTrapezes];
                break;
            }
          }
        
          let exercisesDone = new Set();

          while ((totalTime + timeForExercise) < maxSecondsPerDay && exercisesDone.size < exercisesForDay.length) {
            let randomExercise = exercisesForDay[Math.floor(Math.random() * exercisesForDay.length)]
            if (!dayExercises[randomExercise]) {
              dayExercises[randomExercise] = objectifDatabase[randomExercise]
              totalTime += dayExercises[randomExercise].series * timeForExercise
              exercisesDone.add(randomExercise);
            }
          }
        
          workoutPlan.push({ [day]: dayExercises })
          totalTime = 0
        }
        return workoutPlan
      }
    

      console.log("frequency")
      console.log(frequency())
      console.log("seriesRepetitions")
      console.log(seriesRepetitions())
      console.log("workoutPlan")
      console.log(createWorkoutPlan())
    })
  }
)

// concernant le programme en lui meme, il y a bien le bon nombre d'exercices par jour en fonction du temps disponible, 
// mais il faudrait qu'il y ait un lien entre les différents exercices concernant les muscles ciblés.

// il faudra ecrire un texte afin de mettre en garde les personnes, donner des conseils supplémentaires, et autres informations complémentaires 
// qui seraient utiles grâce aux données recueillies dans le questionnaire. 
// Il faudra également donner des conseils sur la récupération, les étirements, et l'importance de l'échauffement.
// De plus il faudra développer une partie sur le cardio qui sera plus ou moins importante en fonction des profils.
// Enfin, il faudra donner des conseils sur l'alimentation et l'hydratation en fonction des objectifs.


// une seance = fullbody 
// deux seances = fullbody
// trois seances = pecs(=exercisesForPectoraux)/dos(=exercisesForDorsaux + exercisesForRhomboides)/(epaules(=exercisesForEpaulesTrapezes)) - jambes(=exercisesForJambes) - bras(=exercisesForBiceps + exercisesForBrachial + exercisesForTriceps) => un exo abdos/obliques(=exercisesForAbdominauxObliques) chaque seance
// quatre seances = pecs/triceps(=exercisesForPectorauxTriceps) - dos/biceps(=exercisesForDosBiceps) - jambes(=exercisesForJambes) - epaules/trapezes(=exercisesForEpaulesTrapezes) => un exo abdos/obliques(=exercisesForAbdominauxObliques) chaque seance
// cinq/six/sept seances = meme chose que pour 4 seances mais en boucle => un exo abdos/obliques chaque seance


// concernant le fullbody, il se fera de cette manière : => on créé 6 séances types avec un exo par groupe musculaire voir plus ou moins en fonction du temps (ordre de priorité homme : dos, pecs, epaules, bras, jambes, abdos/obliques -- ordre de priorité femme : jambes, abdos/obliques, dos, epaules, bras, pecs)