let cash = 0
let programs = 0
let programValue = 25
let passivePrograms = 0
let botTemplate = ""
let botsAmount = 0
let botImages = true
let backgroundGIF = true
let colorblindMode = false
setInterval(collectAutoUpgrades, 1000)

let botOne = {
    price: 250,
    quantity: 0,
    passiveProgram: 1
}

let botTwo = {
    price: 400,
    quantity: 0,
    passiveProgram: 2
}

let botThree = {
    price: 550,
    quantity: 0,
    passiveProgram: 3
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
    document.getElementById("cashAmount").innerText = "$" + Math.round(cash)
    document.getElementById("programValueArea").innerText = "$" + Math.round(programValue)
    document.getElementById("ppsArea").innerText = "" + passivePrograms
    document.getElementById("botsAmountArea").innerText = "x" + botsAmount
    for (let i = 0; i < 3; i++) {
        document.getElementById("botPrice" + i).innerText = "$" + Math.round(botUpgrades[i].price)
        document.getElementById("botQuan" + i).innerText = "x" + botUpgrades[i].quantity
        document.getElementById("hackPrice" + i).innerText = "$" + Math.round(hackUpgrades[i].price)
        document.getElementById("hackQuan" + i).innerText = "x" + hackUpgrades[i].quantity
        checkAffordable(i)
    }
}

function addBot(botNum) {
    let currentBot = botUpgrades[botNum]
    if (cash >= currentBot.price) {
        cash -= currentBot.price
        currentBot.price *= 1.5
        passivePrograms += currentBot.passiveProgram
        currentBot.quantity++
        for (let i = 0; i < botUpgrades[botNum].passiveProgram; i++) {
            botsAmount++
            botTemplate += `<img src="https://robohash.org/${Math.round(Math.random()*9999)}?set=set3" alt="Bot" width="150px" class="bot-img">`
        }
        if (botImages) {
            document.getElementById("botArea").innerHTML = botTemplate
        }
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


function collectAutoUpgrades() {
    if (passivePrograms > 0) {
        programs += passivePrograms
        cash += programValue * passivePrograms
        update()
    }
}

function toggleBotImages() {
    if (botImages) {
        botImages = false
        document.getElementById("botImageButton").innerText = "Turn on New Bot Images"
        document.getElementById("botImageButton").classList.remove("btn-hacker")
        document.getElementById("botImageButton").classList.add("btn-hacker-off")
    } else {
        botImages = true
        document.getElementById("botImageButton").innerText = "Turn off New Bot Images"
        document.getElementById("botImageButton").classList.remove("btn-hacker-off")
        document.getElementById("botImageButton").classList.add("btn-hacker")
    }
}

function toggleBackground() {
    if (backgroundGIF) {
        backgroundGIF = false
        document.getElementById("bgGIFButton").innerText = "Turn on Background GIF"
        document.getElementById("bodyTag").classList.remove("background-GIF")
        document.getElementById("bgGIFButton").classList.remove("btn-hacker")
        document.getElementById("bgGIFButton").classList.add("btn-hacker-off")
    } else {
        backgroundGIF = true
        document.getElementById("bgGIFButton").innerText = "Turn off Background GIF"
        document.getElementById("bodyTag").classList.add("background-GIF")
        document.getElementById("bgGIFButton").classList.remove("btn-hacker-off")
        document.getElementById("bgGIFButton").classList.add("btn-hacker")
    }
}

function checkAffordable(upgradeIndex) {
    if (cash < botUpgrades[upgradeIndex].price) {
        document.getElementById("botPriceButton" + upgradeIndex).classList.remove("btn-hacker")
        document.getElementById("botPriceButton" + upgradeIndex).classList.add("btn-hacker-off")
    } else {
        document.getElementById("botPriceButton" + upgradeIndex).classList.remove("btn-hacker-off")
        document.getElementById("botPriceButton" + upgradeIndex).classList.add("btn-hacker")
    }
    if (cash < hackUpgrades[upgradeIndex].price) {
        document.getElementById("hackPriceButton" + upgradeIndex).classList.remove("btn-hacker")
        document.getElementById("hackPriceButton" + upgradeIndex).classList.add("btn-hacker-off")
    } else {
        document.getElementById("hackPriceButton" + upgradeIndex).classList.remove("btn-hacker-off")
        document.getElementById("hackPriceButton" + upgradeIndex).classList.add("btn-hacker")
    }

}

function toggleDeuteranopiaMode() {
    if (colorblindMode) {
        colorblindMode = false
        for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
            document.getElementsByClassName("card")[i].classList.remove("card-deuteranopia")
        }
        for (let i = 0; i < document.getElementsByClassName("btn-hacker").length; i++) {
            document.getElementsByClassName("btn-hacker")[i].classList.remove("btn-hacker-deuteranopia")
        }
        for (let i = 0; i < document.getElementsByClassName("btn-hacker-off").length; i++) {
            document.getElementsByClassName("btn-hacker-off")[i].classList.remove("btn-hacker-off-deuteranopia")
        }
        document.getElementById("clickerArea").innerHTML = `<img src="program.png" alt="make program image"
                            class="position-absolute clicker-item" onclick="makeProgram()" width="300px">`
    } else {
        colorblindMode = true
        for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
            document.getElementsByClassName("card")[i].classList.add("card-deuteranopia")
        }
        for (let i = 0; i < document.getElementsByClassName("btn-hacker").length; i++) {
            document.getElementsByClassName("btn-hacker")[i].classList.add("btn-hacker-deuteranopia")
        }
        for (let i = 0; i < document.getElementsByClassName("btn-hacker-off").length; i++) {
            document.getElementsByClassName("btn-hacker-off")[i].classList.add("btn-hacker-off-deuteranopia")
        }
        document.getElementById("clickerArea").innerHTML = `<img src="program-deuteranopia.png" alt="make program image"
                            class="position-absolute clicker-item" onclick="makeProgram()" width="300px">`
    }
}

update()