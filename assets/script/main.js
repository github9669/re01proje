const indexImg = document.getElementsByClassName('indexImg')[0]
const showMe = document.getElementsByClassName('showMe')[0]
let count = 0;
let countEvent = function (e) {
    if (count === 0) {
        this.children[1].classList.add('maskShow')
        setTimeout(() => {
            count++;
        }, 500);

    } else {
        this.style.opacity = '0'
        showMe.classList.add('showMeUp')
    }
}
indexImg.addEventListener('mousewheel', countEvent)
indexImg.addEventListener('touchmove', countEvent)

const headImg = document.getElementsByClassName('headImg')[0]
const jokeItem = document.getElementsByClassName('jokeItem')[0]
const jokeList = document.getElementsByClassName('jokeList')[0]
function getRandom(min, max) { return parseInt(Math.random() * (max - min + 1)) + min; }
headImg.addEventListener('click', function (e) {
    jokeList.classList.add('jokeShow')
    var xhr = new XMLHttpRequest()
    xhr.open('get', 'https://api.gugudata.com/news/joke/demo')
    xhr.send(null)
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log(JSON.parse(this.responseText))
            let jokeData = JSON.parse(this.responseText).Data
            let jokeRand = getRandom(0, jokeData.length)
            jokeItem.innerHTML = jokeData[jokeRand].Content
        }
    }
})
