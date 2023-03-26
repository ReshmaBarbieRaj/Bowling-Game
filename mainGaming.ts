//last condition cover
import { ScoreLogic } from "./bowling";

export class BowlingGame {
   private rolls : number []=[];
   private scoreScenarios : ScoreLogic;
   private score =0;
     constructor(){
     this.scoreScenarios = new ScoreLogic();
     //11 considered as spare 
     // 12 considred as strike
      this.rolls = [1,4,4,5,6,11,5,11,12,0,1,7,11,6,11,12,2,11,6];
     }

     //to calculate the total score 
       totalScoreValue () : number{
        this.scoreScenarios.totalRolls(this.rolls);
        let total =this.scoreScenarios.score();
        console.log("Final Total Score " + total);
         return total;
       }
         
  
}

const mainClass = new BowlingGame();
mainClass.totalScoreValue();

