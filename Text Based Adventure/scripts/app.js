// Declare all variables
var applicationName = "Application Name";
var titleHeading = document.querySelector("title");
var gameHeading = document.querySelector("h1");
var inputButton = document.querySelector("#inputButton");
var playerInput = document.querySelector("#playerInput");
var playerName = "";
var sceneBackground = document.querySelector("#viewPort");
var sceneMessageContainer = document.querySelector(".scene-message");
var sceneMessage = {
	intro: "You are about to embark on journey of enlightenment. Please input your name below and press 'enter'.",
	room1State1: "Looking around the room you can see green grass and a closed wooden door. In the center of the room you can see a pool of water with something in it. On the ground in a far corner of the room you can see something shiny in the grass. Beside your feet there is a stick.",
	room1State2: "Looking around the room you can see green grass and a closed wooden door. In the center of the room you can see a pool of water with something in it. Beside your feet there is a stick.",
	room1State3: "Looking around the room you can see green grass and a closed wooden door. In the center of the room you can see a pool of water with something in it. On the ground in a far corner of the room you can see something shiny in the grass.",	
	room1State4: "Looking around the room you can see green grass and a closed wooden door. In the center of the room you can see a pool of water with something in it.",	
	room1State5: "Looking around the room you can see green grass and a closed wooden door. In the center of the room you can see a pool of water with a leaf floating on it.",
	room1State6: "Looking around the room you can see green grass and an open wooden door. In the center of the room you can see a pool of water with a leaf floating on it. A tunnel appears to lead out of the room.",
	room2State1: "Looking around the room you can see a metal floor with small tiny holes and a closed metal door. A sign reads 'Choose Quickly!'. There are holes in the ceiling above you.",
	room2State2: "Looking around the room you can see a metal floor with small tiny holes and a closed metal door. A sign reads 'Choose Quickly!'. There are holes in the ceiling above you and sand is pouring out fast, steadily beginning to the fill the room!",
	room2State3: "Looking around the room you can see a metal floor with small tiny holes and a closed metal door. A sign reads 'Choose Quickly!'. There are holes in the ceiling above you and sand is pouring out fast, steadily beginning to the fill the room!",
	room3: "Welcome to room 3",
	room4: "Welcome to room 4",
	room5: "Welcome to room 5",
	room6: "Welcome to room 6",
	room7: "Welcome to room 7",
	end: "Welcome to the end screen"
};
var messageContainer = document.createElement("p");
var newMessage = "";
var speaker = {
	narrator: "narrator",
	judge: "judge",
	creature: "Astral",
	shadow: "shadow"
}
var sprites = {
	clickBlocker: 'clickBlocker',
	talkingCreature: 'talkingCreature',
	poolDrowningCreature: 'poolDrowningCreature',
	leaf: 'leaf',
	stick: 'stick',
	hook: 'hook',	
	room1DoorClosed: 'room1DoorClosed',
	room1DoorOpen: 'room1DoorOpen',
	room1ClickToProgress: 'room1ClickToProgress',
	redButton: 'redButton',
	redButtonBlueGlow: 'redButtonBlueGlow',
	redButtonPressed: 'redButtonPressed',
	redButtonPressedBlueGlow: 'redButtonPressedBlueGlow',
	blueButton: 'blueButton',
	blueButtonRedGlow: 'blueButtonRedGlow',
	blueButtonGreenGlow: 'blueButtonGreenGlow',
	blueButtonRedGreenGlow: 'blueButtonRedGreenGlow',
	blueButtonPressed: 'blueButtonPressed',
	blueButtonPressedRedGlow: 'blueButtonPressedRedGlow',
	blueButtonPressedGreenGlow: 'blueButtonPressedGreenGlow',
	blueButtonPressedRedGreenGlow: 'blueButtonPressedRedGreenGlow',
	greenButton: 'greenButton',
	greenButtonBlueGlow: 'greenButtonBlueGlow', 
	greenButtonPressed: 'greenButtonPressed',
	greenButtonPressedBlueGlow: 'greenButtonPressedBlueGlow',
	room2ClickToProgress: 'room2ClickToProgress',
	vileDoor: 'vileDoor',
	smallDoor: 'smallDoor',
	hotDoor: 'hotDoor',
	coldDoor: 'coldDoor',
	laughingDoor: 'laughingDoor',
	room3ClickToProgress: 'room3ClickToProgress',
	shadow: 'shadow',
	room4ClickToProgress: 'room4ClickToProgress',
	standingPedestal: 'standingPedestal',
	smallCreature: 'smallCreature',
	waterBowl: 'waterBowl', 
	creatureInBowl: 'creatureInBowl',
	deadCreatureInBowl: 'deadCreatureInBowl',
	fallenPedestal: 'fallenPedestal',
	spill1: 'spill1',
	spill2: 'spill2',
	judge: 'judge'
}
var spriteContainer = "";
var correctSequence = false;
var yesButton = document.createElement("div");
var noButton = document.createElement("div");
var choiceBox = document.createElement("div");
var choiceText = document.createElement("p");

// Set the name of the application in the title element
titleHeading.textContent = applicationName;
// Set the name of the application in the h1 element
gameHeading.textContent = applicationName;
// Add the message class to our message container
messageContainer.classList.add("message");

// Only when the page has loaded show the begin screen.
window.onload = function(){
	loadBegin();
};

function loadBegin(){
	// no screen message
	sceneMessageContainer.classList.add("hide");
	// set the background
	sceneBackground.classList.add("begin");

	// hide the text input
	playerInput.classList.add("hide");

	// show the begin button
	inputButton.classList.add("show");
};

inputButton.addEventListener("click", function(e){
	e.preventDefault();
	// load the game intro screen that prompts the player for their name
	loadIntro();	
});


function loadIntro(){
	// show the text input
	playerInput.classList.remove("hide");

	// hide the begin button
	inputButton.classList.remove("show");
	inputButton.classList.add("hide");

	// set the screen message
	sceneMessageContainer.classList.remove("hide");
	sceneMessageContainer.textContent = sceneMessage.intro;
	// set the background
	sceneBackground.classList.remove("begin");
	sceneBackground.classList.add("intro");
	// change text default text in input field
	playerInput.setAttribute("placeholder", "Input Your Name Here");

	// Add a listener on the player input so we can determine when they have pressed the 'enter' key
	playerInput.addEventListener("keypress", function(e){
		if(e.which === 13){
			// If they do capture the value and prevent the form from actually submitting
			e.preventDefault();
			playerName = this.value;
			// Then create a message with feedback
			createMessage(speaker.narrator, "Hello " + playerName + ". I know this may seem like a dream but I assure you it's very real. You went to sleep and now your unconscious mind is travelling via a form of Astral Projection. Like life, you can leave at anytime you like but the true adventure would be to see if you can get to the end. If you are ready click 'begin' and lets see what's in store for you.");
			// Hide the input and show the button
			this.classList.add("hide");
			inputButton.classList.remove("hide");
		}
	});
	// To load the first room we want the player to click on the button
	inputButton.addEventListener("click", function(e){
		e.preventDefault();
		// clear any messages present currently
		clearMessage();		
		// Then load Room 1
		loadRoom1();
	});
};

// Set up and maintain room 1
function loadRoom1(){
	// hide the input
	playerInput.classList.add("hide");

	// Set the screen message
	sceneMessageContainer.textContent = sceneMessage.room1State1;
	// Set the background
	sceneBackground.classList.remove("intro");
	sceneBackground.classList.add("room-1");

	// Add all necessary sprites for the scene
	createSprite(sprites.poolDrowningCreature);
	createSprite(sprites.room1DoorClosed);
	createSprite(sprites.stick);
	createSprite(sprites.hook);
	// make everything non-clickable by overlaying our blocker sprite
	createSprite(sprites.clickBlocker);	


	// we need a slight delay 
	var roomSequence1 = window.setInterval(room1Sequence1, 5000);

	var counter = 0;

	// Start a timed sequence of events
	function room1Sequence1(){
		// incremenet the counter
		counter += 1;

		if(counter === 1){
			// clear messages on the screen
			clearMessage();			
			createMessage(speaker.judge, "To progress on your journey you must achieve one selfless act.");	
		} else if(counter === 4){
			// clear messages on the screen
			clearMessage();				
			clearSprite(sprites.clickBlocker);
			clearInterval(roomSequence1);	
		}
	};	

};

// Set up and maintain room 2
function loadRoom2(){
	// Set the screen message
	sceneMessageContainer.textContent = sceneMessage.room2State1;
	// Set the background
	sceneBackground.classList.remove("room-1");
	sceneBackground.classList.add("room-2");
	// clear sprites
	clearSprites();
	// clear any current messages
	clearMessage();

	// create a new backdrop

	var backdrop = document.createElement("div");

	backdrop.classList.add("backdrop");

	sceneBackground.appendChild(backdrop); 

	var backdrop = document.querySelector(".backdrop");
	// was 8000
	var roomSequence1 = window.setInterval(room2Sequence1, 5000);
	var counter = 0;

	function room2Sequence1(){

		counter += 1;

		console.log(counter);

		if(counter === 1){
			// clear messages on the screen
			//clearMessage();
			createMessage(speaker.judge, "To progress you must be fast. Listen, trust and use the opportunity as it presents itself.");
			backdrop.classList.add("state-1");
		} else if(counter === 2){			
			// clear messages on the screen
			clearMessage();
			createSprite(sprites.talkingCreature);
			createMessage(speaker.creature, "Who is saying that? What does it mean by 'be fast'?");
		} else if(counter === 3){			
			// clear messages on the screen
			clearMessage();
			createMessage(speaker.creature, "Wait! What's that noise?! It's coming from above...");				
		} else if(counter === 4){
			// Set the screen message
			sceneMessageContainer.textContent = sceneMessage.room2State2;
			// clear messages on the screen
			clearMessage();
			createMessage(speaker.creature, "It's sand!!! We have to get out of here as fast as possible!");
			backdrop.classList.remove("state-1");
			backdrop.classList.add("state-2");
		} else if(counter === 5){
			// clear messages on the screen
			clearMessage();
			// clear sprites on the screen
			clearSprite(sprites.talkingCreature)			
			createMessage(speaker.narrator, "Sand is pouring out of the ceiling all around you and you're starting to feel panicked!");	
			backdrop.classList.remove("state-2");
			backdrop.classList.add("state-3");				
		} else if(counter === 6){
			// clear messages on the screen
			clearMessage();
			createMessage(speaker.narrator, "It's becoming more and more difficult to move about. The sand is starting to get too deep.");					
			backdrop.classList.remove("state-3");
			backdrop.classList.add("state-4");			
		} else if(counter === 7){
			// Set the screen message
			//sceneMessageContainer.textContent = sceneMessage.room2State3;			
			// clear messages on the screen
			clearMessage();
			createSprite(sprites.talkingCreature);
			createMessage(speaker.creature, "I'll try to find something that will help us get out of here!");	
			// backdrop.classList.remove("state-4");
			// backdrop.classList.add("state-5");								
		} else if(counter === 8){
			// clear messages on the screen
			clearMessage();
			clearSprite(sprites.talkingCreature);
			createMessage(speaker.narrator, "You can no longer move. The sand is too deep. " + speaker.creature + " continues to dart about the room looking for a lever or switch that may open the door.");
			backdrop.classList.remove("state-4");
			backdrop.classList.add("state-5");			
		} else if(counter === 9){
			// clear messages on the screen
			clearMessage();
			createSprite(sprites.talkingCreature);
			createMessage(speaker.creature, "Back home, I have a family and friends that I haven't seen for many moons. I have been trapped here for a long time.");		
		} else if(counter === 10){
			// clear messages on the screen
			clearMessage();
			createMessage(speaker.creature, "My species may not be able to swim but we can stay afloat amid difficult situations like these.");
			backdrop.classList.remove("state-5");
			backdrop.classList.add("state-6");			
		} else if(counter ===11){
			// clear messages on the screen
			clearMessage();
			clearSprite(sprites.talkingCreature);
			createMessage(speaker.narrator, "The sand is up to your waist and you are running out of time. " + speaker.creature + " persists with trying to find a way out.");
			// backdrop.classList.remove("state-8");
			// backdrop.classList.add("state-9");
		} else if(counter ===12){
			// clear messages on the screen
			clearMessage();
			createSprite(sprites.talkingCreature);
			//**************************
			// show buttons here 
			//**************************
			createSprite(sprites.redButton);
			createSprite(sprites.blueButton);
			createSprite(sprites.greenButton);
			backdrop.classList.remove("state-6");
			backdrop.classList.add("state-7");	
			createMessage(speaker.creature, "There are three buttons here! Blue, red and green. But wait! I don't know which one to push.");;
		} else if(counter ===13){
			checkButtonStatus();
			// clear messages on the screen
			clearMessage();
			createMessage(speaker.creature, "Wait! There is something written here. It says 'Purple is the only way that ensures you will not have to stay'.  What do you think it means?");
			backdrop.classList.remove("state-7");
			backdrop.classList.add("state-8");	
		} else if(counter ===14){
			checkButtonStatus();
			// clear messages on the screen
			clearMessage();
			clearSprite(sprites.talkingCreature);
			createMessage(speaker.narrator, "Sand has fast covered your waist, you don't have much longer left. You can still give instructions to " + speaker.creature + ".");
		} else if(counter ===15){
			checkButtonStatus();
			// clear messages on the screen
			clearMessage();
			createSprite(sprites.talkingCreature);
			createMessage(speaker.creature, "Do you think 'Purple' has anything to do with these buttons? I can not see a purple one here...");
			backdrop.classList.remove("state-8");
			backdrop.classList.add("state-9");	
		} else if(counter ===16){
			checkButtonStatus();
			// clear messages on the screen
			clearMessage();
			createMessage(speaker.creature, "We are running out of time! Quickly, what should I press? Maybe I have to push two at the same time?");	
		} else if(counter ===19){
			// clear messages on the screen
			clearMessage();
			clearSprite(sprites.talkingCreature);
			if(correctSequence){
				createMessage(speaker.narrator, "You guessed the right sequence! The sand stops pouring into the room and starts to drain instead!");
			} else {
				createMessage(speaker.narrator, "It's too late! You have succumbed to the sand.");
				backdrop.classList.remove("state-9");
				backdrop.classList.add("state-10");			
			}
			
		} else if(counter === 20){	
			// clear messages on the screen
			clearMessage();
			if(correctSequence){
				createMessage(speaker.judge, "Fascinating! Faced against the odds you were still able to hold yourself together and showed trust in your new friend. You may progress!");	
				backdrop.classList.remove("state-10");
				backdrop.classList.add("state-11");
				// clear button panel
				clearSprite(sprites.redButtonPressedBlueGlow);
				clearSprite(sprites.blueButtonPressedRedGlow);
				clearSprite(sprites.greenButtonBlueGlow);
				//create our way out of this room.
				createSprite(sprites.room2ClickToProgress);
				// end the timed sequence of events
				clearInterval(roomSequence1);
			} else {
				createMessage(speaker.judge, "Too slow. Quicker next time!");
			}			

		} else if(counter === 21){	
			// clear messages on the screen
			clearMessage();				
			backdrop.classList.remove("state-10");
			backdrop.classList.add("state-1");
			// restart
			loadRoom2();
			// end the timed sequence of events
			clearInterval(roomSequence1);
		} 	
	};
};

// Set up and maintain room 3
function loadRoom3(){
	// remove the makeshift backdrop from the last room
	var backdrop = document.querySelector(".backdrop");
	var counter = 0;
	sceneBackground.removeChild(backdrop);
	// Set the screen message
	sceneMessageContainer.textContent = sceneMessage.room3;
	// Set the background
	sceneBackground.classList.remove("room-2");
	sceneBackground.classList.add("room-3");

	createSprite(sprites.vileDoor);
	createSprite(sprites.smallDoor);
	createSprite(sprites.hotDoor);
	createSprite(sprites.coldDoor);
	createSprite(sprites.laughingDoor);

	// Start a sequence of events
	setInterval(function(){
		counter += 1;
		if(counter === 1){
			console.log(counter);
			createSprite(sprites.clickBlocker);
			createMessage(speaker.judge, "To progress you need to demonstrate your patience and attention to detail, for that is the only way that you will leave this room.");
		} else if(counter === 2){
					console.log(counter);
			// clear any messages 
			clearMessage();
			createSprite(sprites.talkingCreature);
			createMessage(speaker.creature, "There are many different doors but which one is the right one?");
		} else if(counter === 3){
					console.log(counter);
			// clear any messages
			clearMessage();
			clearSprite(sprites.talkingCreature);
			clearSprite(sprites.clickBlocker);
			clearInterval();
		}
	}, 4000);

};

// Set up and maintain room 4
function loadRoom4(){
	// Set the screen message
	sceneMessageContainer.textContent = sceneMessage.room4;
	// Set the background
	sceneBackground.classList.remove("room-3");
	sceneBackground.classList.add("room-4");
};

// Set up and maintain room 5
function loadRoom5(){
	// Set the screen message
	sceneMessageContainer.textContent = sceneMessage.room5;
	// Set the background
	sceneBackground.classList.remove("room-4");
	sceneBackground.classList.add("room-5");
};

// Set up and maintain room 6
function loadRoom6(){
	// Set the screen message
	sceneMessageContainer.textContent = sceneMessage.room6;
	// Set the background
	sceneBackground.classList.remove("room-5");
	sceneBackground.classList.add("room-6");
};

// Set up and maintain room 7
function loadRoom7(){
	// Set the screen message
	sceneMessageContainer.textContent = sceneMessage.room7;
	// Set the background
	sceneBackground.classList.remove("room-6");
	sceneBackground.classList.add("room-7");
};

// Set up and maintain room 8
function loadRoom8(){
	// Set the screen message
	sceneMessageContainer.textContent = sceneMessage.room8;
	// Set the background
	sceneBackground.classList.remove("room-7");
	sceneBackground.classList.add("room-7");
};


// create a new message and container with a class that identifies who it was spoken by and then append it to the view port
function createMessage(name, message){
	// save the text in a variable
	newMessage = document.createTextNode(message);
	// add the message container paragraph element to the view port 
	sceneBackground.appendChild(messageContainer);
	// add our text to the newly added message container paragraph
	messageContainer.appendChild(newMessage);
	// add a class name to our message container
	messageContainer.classList.add(name);		
};

function clearMessage(){
	// select the message
	var message = document.querySelector(".message");
	// only if there's a message already present
	if(message){
		// remove the classes
		message.classList.remove("narrator", "judge", "shadow", "Astral");
		// set the text node back to empty
		message.textContent = "";
		// remove the message element from the view port
		message.parentNode.removeChild(message);
	}
}

// This will clear a specific sprite from the screen
function clearSprite(sprite){
	// first we select the sprites specific container by class name
	spriteContainer = document.querySelector("." + sprite);
	// then we remove this container from the view port
	sceneBackground.removeChild(spriteContainer);
};

// clear all sprites that are currently already placed on the screen
function clearSprites(){
	// grab all our placed sprites and assign them to an array
	var placedSprites = document.querySelectorAll(".sprite");	
	// cycle through the array deleting each sprite until all are gone
	for(var i = 0; i < placedSprites.length; i++){
		placedSprites[i].parentNode.removeChild(placedSprites[i]);
	}
};

// create a new element with sprite and action classes and append it to the the viewport
function createSprite(sprite){
	// Our element will be a div
	spriteContainer = document.createElement("div");
	// first give it a class of sprite so that we can target all 'sprites' for removal when leaving a room.
	spriteContainer.classList.add("sprite");
	// now give it our specific sprite class for css
	spriteContainer.classList.add(sprite);
	// add it to our viewport.
	sceneBackground.appendChild(spriteContainer);

	// Now we want to add a click listener 
	addClickToSprite(sprite);
};

// This will add a click event to a sprite as it's created. 
function addClickToSprite(sprite){
	// Select the sprite that was just created
	var clickableSprite = document.querySelector("." + sprite)
	// Add a click event to the sprite
	clickableSprite.addEventListener("click", function(){
		// clear any messages currently on screen
		clearMessage();
		// This function will create a dynamic function call to one of the sprite actions based on the sprite clicked.
		function actionAfterSpriteClick(function_name) {
			window["sprite_"+function_name](sprite);
		}
		// call the function that creates the dynamic funciton call
   		actionAfterSpriteClick(sprite);
	});
};

// Checks the current button status to determine their current state
function checkButtonStatus(){

	var blueButtonRedGlow = document.querySelector(".blueButtonRedGlow");
	var blueButtonRedGreenGlow = document.querySelector(".blueButtonRedGreenGlow");
	var blueButtonGreenGlow = document.querySelector(".blueButtonGreenGlow");
	var blueButtonPressed = document.querySelector(".blueButtonPressed");
	var blueButtonPressedRedGlow = document.querySelector(".blueButtonPressedRedGlow");
	var blueButtonPressedGreenGlow = document.querySelector(".blueButtonPressedGreenGlow");
	var blueButtonPressedRedGreenGlow = document.querySelector(".blueButtonPressedRedGreenGlow");

	if(blueButtonPressedRedGlow){
		console.log("You win");
		return correctSequence = true;
	} else if(blueButtonPressedRedGreenGlow){
		console.log("You lose")
		return correctSequence = false;
	} else if(blueButtonPressedGreenGlow){
		console.log("You lose");
		return correctSequence = false;
	} else if(blueButtonRedGlow || blueButtonPressed){
		console.log("You can still win");
		return correctSequence = false;
	} else if(blueButtonGreenGlow || blueButtonRedGreenGlow){
		console.log("You're going to lose I'm sorry");
		return correctSequence = false;
	}
}

// Creates yes/no buttons for door confirmation choice
function createYesNoButtons(){
	// add classes
	yesButton.classList.add("yes-button");
	noButton.classList.add("no-button");
	choiceBox.classList.add("choice-box")

	// determine text content 
	yesButton.textContent = "Yes";
	noButton.textContent = "No";
	choiceText.textContent = "Are you sure you want to pick this door?"

	choiceBox.appendChild(choiceText);
	choiceBox.appendChild(yesButton);
	choiceBox.appendChild(noButton);
	sceneBackground.appendChild(choiceBox);
}

//============================================================
// These functions will determine what actions must occur when a particular sprite is clicked
//============================================================
// This sprite is invisible and overlays all other sprites to block out clicks
function sprite_clickBlocker(sprite){}

function sprite_poolDrowningCreature(sprite){
	// check to see if certain sprites are on the screen
	var hook = document.querySelector(".hook");	
	var stick = document.querySelector(".stick");
	
	// if they are we need to handle the output of this click differently
	// if holding nothing
	if(hook && stick){
		createMessage(speaker.narrator, "A small creature desperately clambering on a leaf and gasping for air. It's soaking wet and looks like it needs help so that it doesn't drown, but you can't reach it!");
	} 
	// if holding hook
	else if(!hook && stick){		
		createMessage(speaker.narrator, "A small creature desperately clambering on a leaf and gasping for air. It's soaking wet and looks like it needs help so that it doesn't drown. You are holding the hook but you still can't reach it!");
	} 
	// if holding the stick
	else if(hook && !stick){		
		createMessage(speaker.narrator, "A small creature desperately clambering on a leaf and gasping for air. It's soaking wet and looks like it needs help so that it doesn't drown. You are holding the stick and can reach but you keep slipping!");
	} 
	// otherwise it's assumed you are holding both 
	else {		
		createMessage(speaker.narrator, "Using the combined stick and hook, you reach out and hook the leaf and pull it to the side and help the creature to dry out.");
		clearSprite(sprites.poolDrowningCreature);
		createSprite(sprites.leaf);
		// Set the screen message
		sceneMessageContainer.textContent = sceneMessage.room1State5;		
		// make everything non-clickable by overlaying our blocker sprite
		createSprite(sprites.clickBlocker);

		// we need a slight delay 
		window.setTimeout(function(){
			// clear messages on the screen
			clearMessage();			
		}, 3000);

		// Start a timed sequence of events
		var roomSequence2 = window.setInterval(room1Sequence2, 8000);

		var counter = 0;

		function room1Sequence2(){

			counter += 1;

			console.log(counter);

			if(counter === 1){
				// clear messages on the screen
				clearMessage();
				// show our creature talking sprite
				createSprite(sprites.talkingCreature);
				createMessage(speaker.creature, "Thank you! You saved my life! I couldn't hold on any longer.");
			} else if(counter === 2){
				// clear messages on the screen
				clearMessage();
				createMessage(speaker.creature, "My name is " + speaker.creature + " and I'm a Pixee. How can I ever repay you for your kindness?");
			} else if(counter === 3){
				// clear messages on the screen
				clearMessage();
				createMessage(speaker.creature, "I know, I can help you in return! I'll tag along and see if I can help you.");
			} else if(counter === 4){
				// clear messages on the screen
				clearMessage();
				// clear the talking creature closeup
				clearSprite(sprites.talkingCreature);
			} else if(counter === 5){
				createMessage(speaker.judge, "Interesting! New found friendship. You may progress.")
			} else if(counter === 6){
				// Set the screen message
				sceneMessageContainer.textContent = sceneMessage.room1State6;				
				// clear messages on the screen
				clearMessage();				
				// remove the click blocker
				clearSprite(sprites.clickBlocker);
				// change the state of existing sprites
				clearSprite(sprites.room1DoorClosed);
				createSprite(sprites.room1DoorOpen);
				// create our exit room sprite
				createSprite(sprites.room1ClickToProgress);
				// end the timed sequence of events
				clearInterval(roomSequence2);				
			}				
		};
	}
};
function sprite_leaf(sprite) {
	createMessage(speaker.narrator, "The leaf is still floating.");
}
function sprite_stick(sprite) {
	// check to see if certain sprites are on the screen
	var hook = document.querySelector(".hook");

	// if they are we need to handle this click differently
	// if holding nothing
	if(hook){
		// Set the screen message
		sceneMessageContainer.textContent = sceneMessage.room1State3;		
		createMessage(speaker.narrator, "It's a sturdy stick. You pick it up.");
	} 
	// otherwise assume they are already holding the hook
	else {
		// Set the screen message
		sceneMessageContainer.textContent = sceneMessage.room1State4;		
		createMessage(speaker.narrator, "It's a sturdy stick. You pick it up and combine it with the hook.");
	}
	// remove the stick
	clearSprite(sprites.stick);
}
function sprite_hook(sprite) {
	// Set the screen message
	sceneMessageContainer.textContent = sceneMessage.room1State2;	

	// check to see if certain sprites are on the screen
	var stick = document.querySelector(".stick");

	// if they are we need to handle this click differently
	// if holding nothing
	if(stick){
		// Set the screen message
		sceneMessageContainer.textContent = sceneMessage.room1State2;		
		createMessage(speaker.narrator, "It's a shiny hook. You pick it up.");
	} 
	// otherwise assume they are already holding the stick
	else {
		// Set the screen message
		sceneMessageContainer.textContent = sceneMessage.room1State4;		
		createMessage(speaker.narrator, "It's a shiny hook. You pick it up and combine it with the stick.");
	}
	// remove the hook	
	clearSprite(sprites.hook);
}

function sprite_room1DoorClosed(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
	createMessage(speaker.narrator, "The door is closed!");
}
function sprite_room1DoorOpen(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_room1ClickToProgress(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
	// the player proceeds to the second room
	loadRoom2();
}

function sprite_redButton(sprite) {

	var blueButtonGreenGlow = document.querySelector(".blueButtonGreenGlow");

	if(blueButtonGreenGlow){
		clearSprite(sprites.redButton);
		clearSprite(sprites.blueButtonGreenGlow);
		createSprite(sprites.blueButtonRedGreenGlow);
		createSprite(sprites.redButtonPressed);
	} else {
		clearSprite(sprites.redButton);
		clearSprite(sprites.blueButton);
		createSprite(sprites.redButtonPressed);
		createSprite(sprites.blueButtonRedGlow);	
	}
}

function sprite_redButtonPressed(sprite) {
	console.log("You have pressed the red button already!");
}

function sprite_redButtonBlueGlow(sprite) {

	var blueButtonPressedGreenGlow = document.querySelector(".blueButtonPressedGreenGlow");

	if(blueButtonPressedGreenGlow){
		clearSprite(sprites.redButtonBlueGlow);
		clearSprite(sprites.blueButtonPressedGreenGlow);
		createSprite(sprites.blueButtonPressedRedGreenGlow);
		createSprite(sprites.redButtonPressedBlueGlow);
	} else {
		clearSprite(sprites.redButtonBlueGlow);
		clearSprite(sprites.blueButtonPressed);
		createSprite(sprites.blueButtonPressedRedGlow);
		createSprite(sprites.redButtonPressedBlueGlow);		
	}
}

function sprite_redButtonPressedBlueGlow(sprite) {
	console.log("You have pressed the red button already!");
}

function sprite_blueButton(sprite) {
	clearSprite(sprites.blueButton);
	clearSprite(sprites.redButton);
	clearSprite(sprites.greenButton);
	createSprite(sprites.blueButtonPressed);
	createSprite(sprites.redButtonBlueGlow);
	createSprite(sprites.greenButtonBlueGlow);
}

function sprite_blueButtonPressed(sprite) {
	console.log("You have pressed the blue button already!");
}

function sprite_blueButtonRedGlow(sprite) {
	clearSprite(sprites.blueButtonRedGlow);
	clearSprite(sprites.redButtonPressed);
	clearSprite(sprites.greenButton);
	createSprite(sprites.blueButtonPressedRedGlow);
	createSprite(sprites.redButtonPressedBlueGlow);
	createSprite(sprites.greenButtonBlueGlow);
}

function sprite_blueButtonPressedRedGlow(sprite) {
	console.log("You have pressed the blue button already!");
}

function sprite_blueButtonGreenGlow(sprite) {
	clearSprite(sprites.blueButtonGreenGlow);
	clearSprite(sprites.redButton);
	clearSprite(sprites.greenButtonPressed);
	createSprite(sprites.blueButtonPressedGreenGlow);
	createSprite(sprites.redButtonBlueGlow);
	createSprite(sprites.greenButtonPressedBlueGlow);
}

function sprite_blueButtonPressedGreenGlow(sprite) {
	console.log("You have pressed the blue button already!");
}

function sprite_blueButtonRedGreenGlow(sprite) {
	clearSprite(sprites.blueButtonRedGreenGlow);
	clearSprite(sprites.redButtonPressed);
	clearSprite(sprites.greenButtonPressed);
	createSprite(sprites.blueButtonPressedRedGreenGlow);
	createSprite(sprites.redButtonPressedBlueGlow);
	createSprite(sprites.greenButtonPressedBlueGlow);
}

function sprite_blueButtonPressedRedGreenGlow(sprite) {
	console.log("You have pressed the blue button already!")
}

function sprite_greenButton(sprite) {

	var blueButtonRedGlow = document.querySelector(".blueButtonRedGlow");

	if(blueButtonRedGlow){
		clearSprite(sprites.greenButton);
		clearSprite(sprites.blueButtonRedGlow);
		createSprite(sprites.greenButtonPressed);
		createSprite(sprites.blueButtonRedGreenGlow);
	} else {
		clearSprite(sprites.greenButton);
		clearSprite(sprites.blueButton);
		createSprite(sprites.greenButtonPressed);
		createSprite(sprites.blueButtonGreenGlow);	
	}
}

function sprite_greenButtonPressed(sprite) {
	console.log("You have pressed the green button already!")
}

function sprite_greenButtonBlueGlow(sprite) {
	
	var blueButtonPressedRedGlow = document.querySelector(".blueButtonPressedRedGlow");

	if(blueButtonPressedRedGlow){
		clearSprite(sprites.greenButtonBlueGlow);
		clearSprite(sprites.blueButtonPressedRedGlow);
		createSprite(sprites.greenButtonPressedBlueGlow);
		createSprite(sprites.blueButtonPressedRedGreenGlow);
	} else {
		clearSprite(sprites.greenButtonBlueGlow);
		clearSprite(sprites.blueButtonPressed);
		createSprite(sprites.greenButtonPressedBlueGlow);
		createSprite(sprites.blueButtonPressedGreenGlow);	
	}
}

function sprite_greenButtonPressedBlueGlow(sprite) {
	console.log("You have pressed the green button already!")
}

function sprite_room2ClickToProgress(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
	loadRoom3();
}
function sprite_vileDoor(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");

	createMessage(speaker.narrator, "There's a vile smell coming from the other side of this door.");


	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////// WORK IN PROGRESS ////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////


	var counter = 0;
	// start a sequence of events
	setInterval(function(){
		counter += 1;
		if(counter === 1){
			console.log("door counter " + counter);
			clearMessage();	
			createMessage(speaker.creature, "I do not like this smell, it reminds me of a ferocious beast that once chased me through a hall, I didn't see where it went but it is still here somewhere.");						
		} else if(counter === 2){
			console.log("door counter " + counter);
			clearMessage();
			// create and show choice buttons
			createYesNoButtons();			
		}
	}, 3000);

	var confirmationCounter = 0;
	// add click listeners
	yesButton.addEventListener("click", function(){
		sceneBackground.removeChild(choiceBox);
		// start a sequence
		var confirmationSequence = setInterval(function(){
			confirmationCounter += 1
			console.log("confirmation counter" + confirmationCounter)
			if(confirmationCounter === 1){
				clearMessage();
				createMessage(speaker.narrator, "You open the door");
			} else if(confirmationCounter === 2){
				clearMessage();
				createMessage(speaker.narrator, "A beast pulls you into the darkness and slams the door shut behind you.");
			} else if (confirmationCounter === 3){
				clearMessage();
				createMessage(speaker.judge, "Oh that's not going to go down too well. The Razorghast is particularly protective this time of year. Try again!");	
				clearInterval(confirmationSequence);
			}
			
		}, 3000);
	});
	noButton.addEventListener("click", function(){
		sceneBackground.removeChild(choiceBox);
	});	
}
function sprite_smallDoor(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
	createMessage(speaker.narrator, "The door is far too small, there is no way you could fit through this...");
	createMessage(speaker.creature, "I could fit through this door but how would that serve to get you out? Should I take a look anyway?");
	// Narrator “You convince Alba to climb in through the small door.”
	// Judge “Well Done! That was satisfying to watch. You have proved your ability to think before you choose. You may proceed.”
	// Hidden door opens
	// Alba emerges
	// Alba “It was a little tight but I found a button on the other side of the wall which just opened this hidden door!”
	// You can proceed to next room

}
function sprite_hotDoor(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
	createMessage(speaker.narrator, "The handle is hot to the touch, you can hear the sounds of hissing and bubbles on the other side.");
	createMessage(speaker.creature, "This makes me feel unsafe, I'm not sure you should open this door. What if we both boil alive?");
	// Narrator “You reach out to open the door.”
	// Narrator “Before you can open the door you are immediately reduced to a pile of ash.”
	// Judge “What a strange way to let off some steam. Try again.”
	// Restart room

}
function sprite_coldDoor(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
	createMessage(speaker.narrator, "Cold to the touch! You are overcome with an uneasy feeling as you look into the doors surface.");
	createMessage(speaker.creature, "Brrr I feel so cold. My wings would surely freeze if we went through this door.");
	// Narrator “You reach out to open the door.”
	// Narrator “You are overcome by its chilling touch and instantly become frozen. “
	// Judge “Wait! Are you getting cold feet? Try again.”
	// Restart room

}
function sprite_laughingDoor(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
	createMessage(speaker.narrator, "The door laughs at you.");
	createMessage(speaker.door, "You can trust me, come along now, open me and get out of here!");
	createMessage(speaker.creature, "I don't feel comfortable. Something does not feel right here.");
	// Narrator “You open the door”
	// Narrator “The doors laughter turns into a hysterical howl and you’re pulled from your shoes. The door slams shut”
	// Judge “They say laughter can kill. I guess the joke is on you now. Try again.”

}
function sprite_room3ClickToProgress(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_shadow(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_room4ClickToProgress(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_standingPedestal(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_smallCreature(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_waterBowl(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_creatureInBowl(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_deadCreatureInBowl(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_fallenPedestal(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_spill1(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_spill2(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}
function sprite_judge(sprite) {
	console.log("you clicked the " + sprite);
	console.log("now you're in the " + sprite + " function");
}

//================================
// End of sprite action functions
//================================