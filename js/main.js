'use strict'

function onBallClick(el, maxDiameter) {
    var currBallSize = +el.innerText + getRandomInt(20, 60)

    if (currBallSize > maxDiameter) {
        el.style.height = el.style.width = `100px`
        el.innerText = '100'
    }
    else {
        el.style.height = el.style.width = `${currBallSize}px`
        el.innerText = currBallSize
        el.style.backgroundColor = getRandomColor()
    }
}