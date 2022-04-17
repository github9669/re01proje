const [swithDivContain] = document.getElementsByClassName('swithDivContain')
const [longCanvas] = document.getElementsByClassName('longCanvas')

const swithDiv = (e) => {
    if (e.wheelDelta < 0) {
        longCanvas.style.transform = 'translateY(-100vh)'
    } else if (e.wheelDelta > 0) {
        longCanvas.style.transform = 'translateY(0)'
    }
}

const swithDivTouch = (e1) => {
    console.log(e1.changedTouches[0].screenY);
    swithDivContain.addEventListener('touchend', (e2) => {
        if (e2.changedTouches[0].screenY < e1.changedTouches[0].screenY) {
            longCanvas.style.transform = 'translateY(-100vh)'
        } else if (e2.changedTouches[0].screenY > e1.changedTouches[0].screenY) {
            longCanvas.style.transform = 'translateY(0)'
        }
    })
}

setTimeout(() => {
    swithDivContain.addEventListener('mousewheel', swithDiv)
    swithDivContain.addEventListener('touchstart', swithDivTouch)
}, 2000);

