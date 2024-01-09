document.addEventListener(
  "DOMContentLoaded",
  function getQuestionnaireAnswers() {
    let form = document.querySelector("form")

    let exercisesDatabase = [
      {
        name: "Développé militaire",
        musclesTargeted: ["Épaules"],
        muscleGain: { series: 4, repetitions: 8 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 5 },
      },
      {
        name: "Élévations latérales",
        musclesTargeted: ["Deltoïdes latéraux"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 15 },
        toning: { series: 3, repetitions: 20 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Élévations frontales",
        musclesTargeted: ["Deltoïdes antérieurs"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 15 },
        toning: { series: 3, repetitions: 20 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Oiseau",
        musclesTargeted: ["Deltoïdes postérieurs", "Trapèzes"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 15 },
        toning: { series: 3, repetitions: 20 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Face-Pull à la poulie",
        musclesTargeted: ["Deltoïdes postérieurs", "Trapèzes"],
        muscleGain: { series: 4, repetitions: 12 },
        weightLoss: { series: 3, repetitions: 15 },
        toning: { series: 3, repetitions: 20 },
        performanceImprovement: { series: 5, repetitions: 10 },
      },
      {
        name: "Shrug",
        musclesTargeted: ["Trapèzes"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Traction",
        musclesTargeted: ["Dorsaux", "Biceps"],
        muscleGain: { series: 4, repetitions: 8 },
        weightLoss: { series: 3, repetitions: 10 },
        toning: { series: 3, repetitions: 12 },
        performanceImprovement: { series: 5, repetitions: 6 },
      },
      {
        name: "Tirage horizontal",
        musclesTargeted: ["Dorsaux", "Rhomboides"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Tirage vertical",
        musclesTargeted: ["Dorsaux", "Rhomboides"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Rowing",
        musclesTargeted: ["Dorsaux", "Rhomboides", "Biceps"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Curl aux haltères",
        musclesTargeted: ["Biceps"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Curl marteau",
        musclesTargeted: ["Biceps", "Brachial"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Curl à la poulie",
        musclesTargeted: ["Biceps"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Curl pupitre",
        musclesTargeted: ["Biceps", "Brachial"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Développé couché",
        musclesTargeted: ["Pectoraux", "Triceps"],
        muscleGain: { series: 4, repetitions: 8 },
        weightLoss: { series: 3, repetitions: 10 },
        toning: { series: 3, repetitions: 12 },
        performanceImprovement: { series: 5, repetitions: 6 },
      },
      {
        name: "Développé incliné",
        musclesTargeted: ["Pectoraux", "Triceps"],
        muscleGain: { series: 4, repetitions: 8 },
        weightLoss: { series: 3, repetitions: 10 },
        toning: { series: 3, repetitions: 12 },
        performanceImprovement: { series: 5, repetitions: 6 },
      },
      {
        name: "Dips",
        musclesTargeted: ["Pectoraux", "Triceps"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Pec Deck",
        musclesTargeted: ["Pectoraux"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Écarté poulie basse",
        musclesTargeted: ["Pectoraux", "Triceps"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Écarté poulie haute",
        musclesTargeted: ["Pectoraux"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Écarté poulie médiane",
        musclesTargeted: ["Pectoraux"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Triceps à la poulie haute",
        musclesTargeted: ["Triceps"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Triceps à la poulie basse",
        musclesTargeted: ["Triceps"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Squat",
        musclesTargeted: ["Quadriceps", "Fessiers", "Ischio-jambiers"],
        muscleGain: { series: 4, repetitions: 8 },
        weightLoss: { series: 3, repetitions: 10 },
        toning: { series: 3, repetitions: 12 },
        performanceImprovement: { series: 5, repetitions: 6 },
      },
      {
        name: "Presse à cuisse",
        musclesTargeted: ["Quadriceps", "Fessiers"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Hip Thrust",
        musclesTargeted: ["Fessiers", "Ischio-jambiers"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Soulevé de terre",
        musclesTargeted: ["Quadriceps", "Ischio-jambiers", "Fessiers"],
        muscleGain: { series: 4, repetitions: 8 },
        weightLoss: { series: 3, repetitions: 10 },
        toning: { series: 3, repetitions: 12 },
        performanceImprovement: { series: 5, repetitions: 6 },
      },
      {
        name: "Leg Extension",
        musclesTargeted: ["Quadriceps"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Fentes Bulgares",
        musclesTargeted: ["Quadriceps", "Fessiers", "Ischio-jambiers"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Leg Curl",
        musclesTargeted: ["Ischio-jambiers"],
        muscleGain: { series: 4, repetitions: 10 },
        weightLoss: { series: 3, repetitions: 12 },
        toning: { series: 3, repetitions: 15 },
        performanceImprovement: { series: 5, repetitions: 8 },
      },
      {
        name: "Crunch à la poulie",
        musclesTargeted: ["Abdominaux"],
        muscleGain: { series: 4, repetitions: 15 },
        weightLoss: { series: 3, repetitions: 20 },
        toning: { series: 3, repetitions: 25 },
        performanceImprovement: { series: 5, repetitions: 12 },
      },
      {
        name: "Roulette à abdominaux",
        musclesTargeted: ["Abdominaux"],
        muscleGain: { series: 4, repetitions: 12 },
        weightLoss: { series: 3, repetitions: 15 },
        toning: { series: 3, repetitions: 18 },
        performanceImprovement: { series: 5, repetitions: 10 },
      },
      {
        name: "Crunch à la machine",
        musclesTargeted: ["Abdominaux"],
        muscleGain: { series: 4, repetitions: 15 },
        weightLoss: { series: 3, repetitions: 20 },
        toning: { series: 3, repetitions: 25 },
        performanceImprovement: { series: 5, repetitions: 12 },
      },
      {
        name: "Flexions latérales à la poulie basse",
        musclesTargeted: ["Obliques"],
        muscleGain: { series: 4, repetitions: 12 },
        weightLoss: { series: 3, repetitions: 15 },
        toning: { series: 3, repetitions: 18 },
        performanceImprovement: { series: 5, repetitions: 10 },
      },
      {
        name: "Rotation du buste à la poulie",
        musclesTargeted: ["Obliques"],
        muscleGain: { series: 4, repetitions: 12 },
        weightLoss: { series: 3, repetitions: 15 },
        toning: { series: 3, repetitions: 18 },
        performanceImprovement: { series: 5, repetitions: 10 },
      },
    ]

    // retourne les noms des exercices liés au muscle ciblé :
    function filterByMuscle(muscle) {
      return exercisesDatabase
        .filter((exercise) => exercise.musclesTargeted.includes(muscle))
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
        )
      ),
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
            
            while ((totalTime + timeForExercise) < maxSecondsPerDay) {
                let randomExercise = exercicesAll[Math.floor(Math.random() * exercicesAll.length)]
                if (!dayExercises[randomExercise]) {
                    dayExercises[randomExercise] = objectifDatabase[randomExercise]
                    totalTime += dayExercises[randomExercise].series * timeForExercise
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
