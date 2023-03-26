"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingGame = void 0;
//last condition cover
var bowling_1 = require("./bowling");
var BowlingGame = /** @class */ (function () {
    function BowlingGame() {
        this.rolls = [];
        this.score = 0;
        this.scoreScenarios = new bowling_1.ScoreLogic();
        //11 considered as spare 
        // 12 considred as strike
        this.rolls = [1, 4, 4, 5, 6, 11, 5, 11, 12, 0, 1, 7, 11, 6, 11, 12, 2, 11, 6];
    }
    //to calculate the total score 
    BowlingGame.prototype.totalScoreValue = function () {
        this.scoreScenarios.totalRolls(this.rolls);
        var total = this.scoreScenarios.score();
        console.log("Final Total Score " + total);
        return total;
    };
    return BowlingGame;
}());
exports.BowlingGame = BowlingGame;
var mainClass = new BowlingGame();
mainClass.totalScoreValue();
