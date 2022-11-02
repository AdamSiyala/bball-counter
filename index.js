let scoreOneEl = document.getElementById("score1")
let scoreTwoEl = document.getElementById("score2")


let oneHome = document.getElementById("home-one")
let twoHome = document.getElementById("home-two")
let threeHome = document.getElementById("home-three")

let oneAway = document.getElementById("away-one")
let twoAway = document.getElementById("away-two")
let threeAway = document.getElementById("away-three")

let score1 = 0
let score2 = 0

function plusOneHome() {
    score1 +=1
    scoreOneEl.textContent = score1
}
function plusTwoHome() {
    score1 +=2
    scoreOneEl.textContent = score1
}
function plusThreeHome() {
    score1 +=3
    scoreOneEl.textContent = score1
}

//

function plusOneAway() {
    score2 +=1
    scoreTwoEl.textContent = score2
}
function plusTwoAway() {
    score2 +=2
    scoreTwoEl.textContent = score2
}
function plusThreeAway() {
    score2 +=3
    scoreTwoEl.textContent = score2
}

