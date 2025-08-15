

class Basic {
    level = "Basic";
    exercises = [
        { name: "Push-ups", sets: 3, reps: 10, difficulty: "Easy" },
        { name: "Squats", sets: 3, reps: 15, difficulty: "Easy" },
        { name: "Plank", sets: 3, duration: "30 seconds", difficulty: "Easy" },
        { name: "Jumping Jacks", sets: 3, reps: 20, difficulty: "Easy" }
    ];
    totalExercises = this.exercises.length;

  
    getExercises() {
        return this.exercises;
    }

    
    displayInfo() {
        console.log(`${this.level} Level - ${this.totalExercises} exercises available`);
        return this.exercises;
    }
}


class Advanced {
    level = "Advanced";
    exercises = [
        { name: "Burpees", sets: 4, reps: 12, difficulty: "Hard" },
        { name: "Mountain Climbers", sets: 4, reps: 25, difficulty: "Hard" },
        { name: "Pull-ups", sets: 4, reps: 8, difficulty: "Hard" },
        { name: "Pistol Squats", sets: 3, reps: 6, difficulty: "Very Hard" },
        { name: "Handstand Push-ups", sets: 3, reps: 5, difficulty: "Very Hard" }
    ];
    totalExercises = this.exercises.length;


    getExercises() {
        return this.exercises;
    }


    displayInfo() {
        console.log(`${this.level} Level - ${this.totalExercises} exercises available`);
        return this.exercises;
    }
}


const basic = new Basic();
const advanced = new Advanced();

const total = {

    allExercises: [...basic.getExercises(), ...advanced.getExercises()],
    

    basicExercises: basic.getExercises(),
    advancedExercises: advanced.getExercises(),
    

    totalBasicExercises: basic.totalExercises,
    totalAdvancedExercises: advanced.totalExercises,
    totalAllExercises: basic.totalExercises + advanced.totalExercises,
    

    getExercisesByLevel: function(level) {
        if (level.toLowerCase() === 'basic') {
            return this.basicExercises;
        } else if (level.toLowerCase() === 'advanced') {
            return this.advancedExercises;
        } else {
            return this.allExercises;
        }
    },
    

    getExercisesByDifficulty: function(difficulty) {
        return this.allExercises.filter(exercise => 
            exercise.difficulty.toLowerCase() === difficulty.toLowerCase()
        );
    },
    

    displayWorkoutSummary: function() {

        console.log(`Total Exercises Available: ${this.totalAllExercises}`);
        console.log(`Basic Level Exercises: ${this.totalBasicExercises}`);
        console.log(`Advanced Level Exercises: ${this.totalAdvancedExercises}`);

        
        this.allExercises.forEach((exercise, index) => {
            console.log(`${index + 1}. ${exercise.name} - ${exercise.difficulty}`);
            if (exercise.reps) {
                console.log(`   Sets: ${exercise.sets}, Reps: ${exercise.reps}`);
            } else if (exercise.duration) {
                console.log(`   Sets: ${exercise.sets}, Duration: ${exercise.duration}`);
            }
        });
        
        return this;
    }
};



console.log("Basic exercises:", basic.displayInfo());
console.log("Advanced exercises:", advanced.displayInfo());


total.displayWorkoutSummary();


console.log("Basic exercises from total:", total.getExercisesByLevel('basic'));
console.log("Advanced exercises from total:", total.getExercisesByLevel('advanced'));
console.log("Hard difficulty exercises:", total.getExercisesByDifficulty('Hard'));


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Basic, Advanced, total };
}