$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.dressup-button').click(clickedDressUpButton);
    
  })

  function Pet(name, image, weight, happiness){
    this.name = name;
    this.image = image;
    this.weight = weight;
    this.happiness = happiness;
    

  }

  const pets = [
    new Pet("Kia", "images/kia.png", 7 ,0 ),
    new Pet("Dodge", "images/dodge.jpg", 15 ,0 )
  ]
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Kia", weight:7, happiness:0};
    var pet_info2 = {name:"Dodge", weight: 10, happiness: 0}  
    function clickedTreatButton() {
      // Make the current card usable with jQuery methods
      const $card = $(this).closest(".pet");
      const index = $(".pet").index($card);
      const pet = pets[index];

      // Increase pet happiness
      ++pet.happiness;
      // Increase pet weight
      ++pet.weight;
      checkAndUpdatePetInfoInHtml();
      setItem("bone", $card);
      flashItem($card);
    }
    
    function clickedPlayButton() {
      const $card = $(this).closest(".pet");
      const index = $(".pet").index($card);
      const pet = pets[index];
      
      // Increase pet happiness

      pet.happiness++;
      //Increase pet weight, make sure it doesn't go below zero;
      pet.weight = pet.weight > 0 ? pet.weight - 1 : 0;

      checkAndUpdatePetInfoInHtml();
      setItem("ball", $card);
      flashItem($card);
    }
    
    function clickedExerciseButton() {

      const $card = $(this).closest(".pet");
      const index = $(".pet").index($card);
      const pet = pets[index];


      // Decrease pet happiness
      --pet.happiness;
      // Decrease pet weight
      pet.weight = pet.weight > 0 ? pet.weight - 1 : 0;
      checkAndUpdatePetInfoInHtml();
      checkAndUpdatePetInfoInHtml();
      setItem("leash",$card);
      flashItem($card);
    }

    function clickedDressUpButton(){

      const $card = $(this).closest(".pet");
      const index = $(".pet").index($card);
      const pet = pets[index];
      ++pet.happiness;

      checkAndUpdatePetInfoInHtml();
      setItem("collar", $card);
      flashItem($card);
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.

    }

    function setItem(item, $card) {
      // This methods allows for one img tag to load 4 different images
      const images = {
        bone: "images/bone.png",
        ball: "images/ball.png",
        collar: "images/collar.png",
        leash: "images/leash.png"
      };

      $card.find(".item").attr("src", images[item]);
    }

    function flashItem($card) {
      $card.find(".item").stop(true, true).show(300).delay(1000).hide(300); //.3 sec show + 1 sec delay + .3 sec hide added for a smooth animation
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $(".pet").each(function(index) {
        const pet = pets[index];
        //takes an HTML card and stores it as a jQuery object called $card. That lets the code use jQuery methods to work with that specific card
        const $card = $(this);

         // Find its name, weight, and hapiness element and update the text
        $card.find(".name").text(pet.name);
        $card.find(".weight").text(pet.weight);
        $card.find(".happiness").text(pet.happiness);4

        //While pet's weight is less than 3 lbs, display message
        const weightMesage = pet.weight < 3 ? `${pet.name} is looking a little thin. Make sure you're feeding them enough!` : "";
        $card.find(".weight-warning").text(weightMesage)

        //While pet's happiness is less than 0, display message
        const happinessMesage = pet.happiness < 0 ? `${pet.name} is looking a little sad. Play with them, give them a treat, or dress them up to cheer them up!` : "";
        $card.find(".happiness-warning").text(happinessMesage)
      });
    }
    