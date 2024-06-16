'use strict'

function onBallClick(el) {
    var currBallSize = +getComputedStyle(el).height.slice(0, -2);
    el.style.height = `${currBallSize + 50}px`
    el.style.width = `${currBallSize + 50}px`
}