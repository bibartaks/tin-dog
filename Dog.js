// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div id="res" class="hidden">
                <img class="likePic" src="/images/badge-like.png">
            </div>
            <div id="resNope" class="hidden">
                <img class="NopePic" src="/images/badge-nope.png">
            </div>
            <img src="${avatar}">
            <div class="dog-details">
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>
            </div>
        `
    }
}

export default Dog