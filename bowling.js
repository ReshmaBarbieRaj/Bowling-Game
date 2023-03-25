var BowlingGame = /** @class */ (function () {
    function BowlingGame() {
        this.rolls = [];
    }
    BowlingGame.prototype.roll = function (pins) {
        console.log("inside array" + pins);
        this.rolls.push(pins);
        //console.log("array is ***"+this.rolls);
    };
    BowlingGame.prototype.score = function () {
        console.log("inside score()");
        var score = 0;
        var rollIndex = 0;
        for (var frame = 0; frame < this.rolls.length - 1; frame++) {
            console.log("arralength" + this.rolls.length);
            //console.log("ARRAY "+ this.rolls);
            if (this.isStrike(rollIndex)) {
                score += 10 + this.strikeBonus(rollIndex);
                rollIndex += 1;
            }
            else if (this.isSpare(rollIndex)) {
                score += 10 + this.spareBonus(rollIndex);
                rollIndex += 2;
            }
            else {
                score += this.frameScore(rollIndex);
                rollIndex += 2;
                console.log("role index " + rollIndex);
            }
        }
        console.log("(((" + score);
        return score;
    };
    BowlingGame.prototype.isStrike = function (rollIndex) {
        return this.rolls[rollIndex] === 10;
    };
    BowlingGame.prototype.isSpare = function (rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    };
    BowlingGame.prototype.strikeBonus = function (rollIndex) {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    };
    BowlingGame.prototype.spareBonus = function (rollIndex) {
        return this.rolls[rollIndex + 2];
    };
    BowlingGame.prototype.frameScore = function (rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    };
    return BowlingGame;
}());
// Example usage:
var game = new BowlingGame();
game.roll(1);
game.roll(4);
//...
//    game.roll(4); 
//    game.roll(5);
//   //...
//   game.roll(6); 
//   game.roll(5); //spare
//   // ...
//   game.roll(5); 
//   game.roll(5); //spare
//''''
//game.roll(10); // strike
//console.log("array.."+ this.rolls);
var score1 = game.score(); // => Total score for the game
console.log("overall score " + score1);
