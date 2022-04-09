const [swithDivContain] = document.getElementsByClassName('swithDivContain')
const [indexImgDiv] = document.getElementsByClassName('indexImg')
const [showMeDiv] = document.getElementsByClassName('showMe')

const swithDiv = (e) => {
    console.log(e.wheelDelta);
    if (e.wheelDelta < 0) {
        indexImgDiv.classList.add('indexImgMoveup')
        showMeDiv.classList.add('showMeMoveup')
    } else if (e.wheelDelta > 0) {
        indexImgDiv.classList.remove('indexImgMoveup')
        showMeDiv.classList.remove('showMeMoveup')
    }
}

setTimeout(() => {
    swithDivContain.addEventListener('mousewheel', swithDiv)
    swithDivContain.addEventListener('touchend', swithDiv)
}, 2000);

