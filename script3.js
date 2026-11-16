function Pet(name, weight, happiness, image){
    this.name = name;
    this.image = image;
    this.weight = weight;
    this.happiness = happiness;

    this.treat = function(){
        this.weight++;
        this.happiness++;
    }

    this.play = function(){
        if(this.weight > 0){
            this.weight--;
        }
        this.happiness++;
    }

    this.exercise = function(){
        if(this.weight > 0){
            this.weight--;
        }
        this.happiness++;
    }

    this.dressUp = function(){
        this.happiness++;
    }
}

$(function() {
    // Wait until the page's HTML is ready before setting up the pet cards.

    // Store each pet's starting information.
    const Kia = {name:"Kia", weight:7, happiness:0};
    const Dodge = {name:"Dodge", weight:15, happiness:0};

    // Create a Pet instance for each dog and store them in an array.
    const pets = [
        new Pet(Kia.name, Kia.weight, Kia.happiness, "images/kia.png"),
        new Pet(Dodge.name, Dodge.weight, Dodge.happiness, "images/dodge.png")
    ];

    // Loop through each pet card on the page.
    $(".pet").each(function(index) {
        const pet = pets[index];
        
        //takes that HTML card and stores it as a jQuery object called $card. That lets the code use jQuery methods to work with that specific card
        const $card = $(this);

        // Show this pet's image, name, weight, and happiness in the card.
        $card.find(".pet-image").attr("src", pet.image).attr("alt", pet.name);
        $card.find(".name").text(pet.name);
        $card.find(".weight").text(pet.weight);
        $card.find(".happiness").text(pet.happiness);
        updateWarning(pet, $card);

        $card.find(".treat-button").on("click", function() {
        clickedTreatButton(pet, $card);
        });

        $card.find(".play-button").on("click", function () {
            clickedPlayButton(pet,$card);
        })

        $card.find(".exercise-button").on("click", function () {
            clickedExerciseButton(pet,$card);
        })

        $card.find(".dressup-button").on("click", function () {
            clickedDressUpButton(pet,$card);
        })
    });

});

function clickedTreatButton(pet, $card){
  pet.treat();

  $card.find(".weight").text(pet.weight);
  $card.find(".happiness").text(pet.happiness);
  updateWarning(pet, $card);

  $card.find(".item")
    .attr("src", "images/bone.png")
    .stop(true, true)
    .show(300)
    .delay(1000)
    .hide(300);
}

function clickedPlayButton(pet, $card){
    pet.play();

    $card.find(".weight").text(pet.weight);
    $card.find(".happiness").text(pet.happiness);
    updateWarning(pet, $card);

    $card.find(".item")
        .attr("src", "images/ball.png")
        .stop(true, true)
        .show(300)
        .delay(1000)
        .hide(300);

}

function clickedExerciseButton(pet, $card){
    pet.exercise();

    $card.find(".weight").text(pet.weight);
    $card.find(".happiness").text(pet.happiness);
    updateWarning(pet, $card);

    $card.find(".item")
        .attr("src", "images/ball.png")
        .stop(true, true)
        .show(300)
        .delay(1000)
        .hide(300);

}

function clickedDressUpButton(pet, $card){
    pet.dressUp();

    $card.find(".happiness").text(pet.happiness);

    $card.find(".item")
        .attr("src", "images/collar.png")
        .stop(true, true)
        .show(300)
        .delay(1000)
        .hide(300);

}

function updateWarning(pet, $card){
    const message = pet.weight < 3
        ? `${pet.name} is looking a little thin, make sure you're feeding them enough!`
        : "";
    $card.find(".warning-message").text(message);
}
