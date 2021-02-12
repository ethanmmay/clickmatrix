

let cash = 0
let programs = 0
let programValue = 25
let passivePrograms = 0.0

let botOne = {
    price: 250,
    quantity: 0,
    passiveProgram: 1
}

let botTwo = {
    price: 750,
    quantity: 0,
    passiveProgram: 4
}

let botThree = {
    price: 3000,
    quantity: 0,
    passiveProgram: 15
}

let hackOne = {
    price: 100,
    quantity: 0,
    programMod: 1.2
}

let hackTwo = {
    price: 500,
    quantity: 0,
    programMod: 1.5
}

let hackThree = {
    price: 1000,
    quantity: 0,
    programMod: 2
}


let botUpgrades = [botOne, botTwo, botThree]
let hackUpgrades = [hackOne, hackTwo, hackThree]

function makeProgram() {
    programs++
    cash += programValue

    update()
}

function update() {
    document.getElementById("programsArea").innerText = "x" + programs
    document.getElementById("cashAmount").innerText = "$" + cash
    document.getElementById("programValueArea").innerText = "$" + programValue
    document.getElementById("ppsArea").innerText = "" + passivePrograms
    for (let i = 0; i < 3; i++) {
        document.getElementById("botPrice" + i).innerText = "$" + botUpgrades[i].price
        document.getElementById("botQuan" + i).innerText = "x" + botUpgrades[i].quantity
        document.getElementById("hackPrice" + i).innerText = "$" + hackUpgrades[i].price
        document.getElementById("hackQuan" + i).innerText = "x" + hackUpgrades[i].quantity
    }
}

function addBot(botNum) {
    let currentBot = botUpgrades[botNum]
    if (cash >= currentBot.price) {
        cash -= currentBot.price
        currentBot.price *= 1.5
        passivePrograms += currentBot.passiveProgram
        currentBot.quantity++
        update()
    } else {
        alert("You cannot afford this upgrade.")
    }
}

function addHack(hackNum) {
    let currentHack = hackUpgrades[hackNum]
    if (cash >= currentHack.price) {
        cash -= currentHack.price
        currentHack.price *= 1.5
        programValue *= currentHack.programMod
        currentHack.quantity++
        update()
    } else {
        alert("You cannot afford this upgrade.")
    }
}