class Game { // abstract class
    constructor() {
        console.log("This game is called ")
        if (this.constructor === Game) {
            throw new Error("Cannot instantiate abstract class Game")
        }
    }

    start() {
        throw new Error("Method is not implemented");
    }
    pause() {
        throw new Error("Method is not implemented");
    }
    end() {
        throw new Error("Method is not implemented");
    }
}

class Football extends Game {
    constructor(name) {
        super();
        this.name = name;
    }
    start() {
        console.log("This game is started ")
    }
    pause() {
        console.log("This game is paused ")
    }
    end() {
        console.log("This game is end ")
    }
}

let fb = new Football("Football");
fb.start()
fb.pause()
fb.end()