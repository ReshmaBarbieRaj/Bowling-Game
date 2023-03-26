export class ScoreLogic {
  
    private rolls : number []=[];
    public  rollIndex : number=0;
    public flag : number =0;
     totalRolls(pins: number[]): void {
        this.rolls=pins;
      }
      score(): number {
        console.log("inside score()")
        let score = 0;

        //to traverse through the frame
        for (this.rollIndex=0; this.rollIndex<this.rolls.length ;this.rollIndex++){
          console.log("index in loop" +this.rollIndex);
          
          //To check the Strike 
           if (this.rolls[this.rollIndex]===12 ){
              score+=this.strikeBonus();
              if(this.flag===1) break;
          }

          //to check the spare
          else if( this.rolls[this.rollIndex+1] ===11){
            score += this.spareBonus();
            if(this.flag===1) break;
          }

          //to checkl the normal Score 
          else {
              score += this.normalScore();
          }
        }
        return score;
  
      }
  
      //To calculate the strike and strike bonus
      strikeBonus () : number {
        let referenceScore= 10;

        //last frame scenario strike, spare 
          if(this.rollIndex=== this.rolls.length-3 && this.rolls[this.rollIndex+2]===11) {
            console.log("x v /");
            referenceScore+= 10;
            this.flag =1;
          }
          //last frame scenario strike, strike, score
          else if (this.rollIndex=== this.rolls.length-3 && this.rolls[this.rolls.length-1]!=11 && this.rolls[this.rolls.length-1]!=12)
          {
            console.log("x x v");
            referenceScore=referenceScore+10+this.rolls[this.rolls.length-1];
            this.flag =1;
          }
          //last frame scenario strike,strike, strike
          else if (this.rollIndex=== this.rolls.length-3 && this.rolls[this.rolls.length-2]===12 && this.rolls[this.rolls.length-1]===12)
          {
            console.log("x x x");
            referenceScore=referenceScore+10+10;
            this.flag =1;
          }
          //Normal Condition follwed by spare
          else if(this.rolls[this.rollIndex+2]===11 || this.rolls[this.rollIndex+1]===12) referenceScore+=10;
          
          //Normal Condition follwed by value
          else referenceScore+= this.rolls[this.rollIndex+1] + this.rolls[this.rollIndex+2];
          return referenceScore;
      }
  
      //To calculate the spare and spare bonus
      spareBonus () : number{
        let referenceScore=10;

        //last frame scenario strike or  value
        if(this.rolls[this.rolls.length-1]!=11 && this.rolls[this.rolls.length-1]!=12 && this.rollIndex=== this.rolls.length-3) {
          // console.log("inside 74 line --------");
          // console.log("the val"+this.rolls[this.rolls.length-1]);
          this.flag =1;
          
          //last frame scenario spare value
          if(this.rolls[this.rollIndex+2]!=11 ||this.rolls[this.rollIndex+2]!=12) referenceScore+=this.rolls[this.rollIndex+2];
          
          //last frame scenario spare strike
          else if(this.rolls[this.rollIndex+2]===12) referenceScore+=10;
        }
        
        //To calculate the normal frame score 
        else if(this.rolls[this.rollIndex+2]===11 || this.rolls[this.rollIndex+2]===12) referenceScore+=10;
        else referenceScore+=this.rolls[this.rollIndex+2]
        this.rollIndex++;
        return referenceScore;
      }
  
      //normal score calculation
      normalScore () : number{         
              let nextIndex=this.rollIndex+1;
              let referenceScore = this.rolls[this.rollIndex]+this.rolls[nextIndex];
              this.rollIndex++;
              console.log("normal score" +this.rollIndex);
              return referenceScore;
      }
  
   }
 


//possible scenarios for last frame 
/**
vv =fb ----
v / v ---10 + v  break
v / x --- 10+ 10 break
x v / ---- 10 + 10 break 12 2 11 137
x x v --- 10 + 10 = v break  12 12 2 = 139
x x x  ---- 10 + 10 + 10 break 12 12 12 =147
**/
