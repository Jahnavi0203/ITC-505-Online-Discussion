const story = {
    start: {
        text: "You find yourself in a mysterious forest. There are two paths ahead. Which one will you choose?",
        choices: [
            { text: "Take the left path", consequence: "leftPath" },
            { text: "Take the right path", consequence: "rightPath" }
        ],
        image: "images/start.jpg",
        width:"100%"
    },
    leftPath: {
        text: "You encounter a wild animal. Do you run or try to fight?",
        choices: [
            { text: "Run", consequence: "run" },
            { text: "Fight", consequence: "fight" }
        ],
        image: "images/leftpath.jpg",
         width:"100%"
    },
    run: {
        text: "You run back to the start.",
        choices: [
            { text: "Start over", consequence: "start" }
        ],
        image: "images/run.jpg",
         width:"100%"
    },
    fight: {
        text: "You fought bravely and scared the animal away. You can now continue your journey.",
        choices: [
            { text: "Continue", consequence: "exploreFurther" }
        ],
        image: "images/fight.jpg",
         width:"100%"
    },
    rightPath: {
        text: "You find a treasure chest. What do you do?",
        choices: [
            { text: "Open the chest", consequence: "openChest" },
            { text: "Leave the chest", consequence: "leaveChest" }
        ],
        image: "images/rightpath.jpg",
         width:"100%"
    },
    openChest: {
        text: "You found gold in the chest! You can now explore further.",
        choices: [
            { text: "Explore further", consequence: "exploreFurther" }
        ],
        image: "images/openchest.jpg",
         width:"100%"
    },
    leaveChest: {
        text: "You decide to leave the chest and explore further.",
        choices: [
            { text: "Explore further", consequence: "exploreFurther" }
        ],
        image: "images/leavechest.jpg",
         width:"100%"
    },
    exploreFurther: {
        text: "You discover an abandoned castle. Do you enter or go around?",
        choices: [
            { text: "Enter the castle", consequence: "enterCastle" },
            { text: "Go around the castle", consequence: "goAroundCastle" }
        ],
        image: "images/explorefurther.jpg",
         width:"100%"
    },
    enterCastle: {
        text: "Inside the castle, you find a sleeping dragon guarding treasure. What do you do?",
        choices: [
            { text: "Steal the treasure", consequence: "stealTreasure" },
            { text: "Quietly leave", consequence: "quietlyLeave" }
        ],
        image: "images/entercastle.jpg",
         width:"100%"
    },
    goAroundCastle: {
        text: "You find a hidden garden with magical plants. What do you do?",
        choices: [
            { text: "Take the plants", consequence: "takePlants" },
            { text: "Leave the plants", consequence: "leavePlants" }
        ],
        image: "images/goaroundcastle.jpg",
         width:"100%"
    },
    stealTreasure: {
        text: "You stole some treasure but woke up the dragon! You barely escaped with your life.",
        choices: [
            { text: "Start over", consequence: "start" }
        ],
        image: "images/stealtreasure.jpg",
    },
    quietlyLeave: {
        text: "You quietly leave the castle without disturbing the dragon.",
        choices: [
            { text: "Continue", consequence: "newPath" }
        ],
        image: "images/quietlyleave.jpg",
    },
    takePlants: {
        text: "The plants give you magical powers. What do you do?",
        choices: [
            { text: "Use powers", consequence: "usePowers" },
            { text: "Keep moving", consequence: "keepMoving" }
        ],
        image: "images/takeplants.jpg",
    },
    leavePlants: {
        text: "You decide to leave the plants and continue your journey.",
        choices: [
            { text: "Continue", consequence: "newPath" }
        ],
        image: "images/leaveplants.jpg",
    },
    newPath: {
        text: "You find a hidden village. What do you do?",
        choices: [
            { text: "Explore the village", consequence: "exploreVillage" },
            { text: "Keep moving", consequence: "keepMoving" }
        ],
        image: "images/newpath.jpg",
    },
    usePowers: {
        text: "Using your new powers, you fly out of the forest and reach safety.",
        choices: [
            { text: "Start over", consequence: "start" }
        ],
        image: "images/usepowers.jpg",
    },
    exploreVillage: {
        text: "The villagers welcome you and you decide to stay.",
        choices: [
            { text: "Start over", consequence: "start" }
        ],
        image: "images/explorevillage.jpg",
    },
    keepMoving: {
        text: "You find a way out of the forest and reach a sunny meadow.",
        choices: [
            { text: "Start over", consequence: "start" }
        ],
        image: "images/keepmoving.jpg",
    }
};

function startGame() {
    showStoryPart("start");
}

function showStoryPart(part) {
    const storyPart = story[part];

    document.getElementById("story-text").textContent = storyPart.text;
    document.getElementById("story-image").src = storyPart.image;
    document.getElementById("image").style.backgroundImage = `url(${storyPart.background})`;

    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";

    storyPart.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.addEventListener("click", () => showStoryPart(choice.consequence));
        choicesElement.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", startGame);
