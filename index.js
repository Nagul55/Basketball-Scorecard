let homeEl = document.getElementById("home-el")
let home =0 
let awayEl = document.getElementById("away-el")
let away=0

function hIncrementByOne(){
    home += 1
    homeEl.textContent = home
}

function hIncrementByTwo(){
    home += 2
    homeEl.textContent = home
}

function hIncrementByThree(){
    home += 3
    homeEl.textContent = home
}

function aIncrementByOne(){
    away += 1
    awayEl.textContent = away
}

function aIncrementByTwo(){
    away += 2
    awayEl.textContent = away
}

function aIncrementByThree(){
    away += 3
    awayEl.textContent = away
}

function newel(){
    home=0
    homeEl.textContent=home
    away=0
    awayEl.textContent=away
}