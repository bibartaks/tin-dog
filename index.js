import dogs from './data.js'
import Dog from './Dog.js'

let isWaiting = false


function getNewDog() {
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

let dog = getNewDog()

document.getElementById('btn-heart').addEventListener('click', () => {
    if(!isWaiting) {
    document.getElementById('res').classList.remove('hidden')
    isWaiting = true
    if(dogs.length > 0) {
        setTimeout(() => {
            dog = getNewDog()
            render()
            isWaiting = false
        }, 2000)
    } else {
        endMessage()
    }
}
})

document.getElementById('btn-cross').addEventListener('click', () => {
    if(!isWaiting) {
    document.getElementById('resNope').classList.remove('hidden')
    isWaiting = true
    if(dogs.length > 0) {
        setTimeout(() => {
            dog = getNewDog()
            render()
            isWaiting = false
        }, 2000)
    } else {
        endMessage()
    }
}
})

function endMessage() {
    setTimeout(() => {
        document.getElementById('app-container').innerHTML = `<h1 class="end-message">Sorry There Is No More Dog In Your Area🥲</h1>
        `
    }, 2000)
}



function render() {
    document.getElementById('app-container').innerHTML = dog.getDogHtml()
}

render()