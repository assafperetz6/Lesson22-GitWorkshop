'use strict'

function onBallClick(el) {
    var currBallSize = +el.innerText + getRandomInt(20, 60)

    if (currBallSize > 400) {
        el.style.height = el.style.width = `100px`
        el.innerText = '100'
    }
    else {
        el.style.height = el.style.width = `${currBallSize}px`
        el.innerText = currBallSize
        el.style.backgroundColor = getRandomColor()
    }
}