'use strict'

function onBallClick(el) {
    var currBallSize = +el.innerText + 50

    if (currBallSize > 400) {
        el.style.height = el.style.width = `100px`
        el.innerText = '100'
    }
    else {
        el.style.height = el.style.width = `${currBallSize}px`
        el.innerText = currBallSize
    }
    console.log(currBallSize);
}