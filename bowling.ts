class BowlingGame {
    private rolls: number[] = [];
  
    roll(pins: number): void {
        console.log("inside array" + pins);
      this.rolls.push(pins);
      //console.log("array is ***"+this.rolls);
    }
  
    score(): number {
        console.log("inside score()")
      let score = 0;
      let rollIndex = 0;
      
      for (let frame = 0; frame < this.rolls.length-1; frame++) {
        console.log("arralength"+ this.rolls.length);
        //console.log("ARRAY "+ this.rolls);
        if (this.isStrike(rollIndex)) {
          score += 10 + this.strikeBonus(rollIndex);
          rollIndex += 1;
        } else if (this.isSpare(rollIndex)) {
          score += 10 + this.spareBonus(rollIndex);
          rollIndex += 2;
        } else {
          score += this.frameScore(rollIndex);
          rollIndex += 2;
          console.log("role index "+rollIndex);
        }
      }
      //console.log("((("+score);
      return score;
    }
  
    private isStrike(rollIndex: number): boolean {
      return this.rolls[rollIndex] === 10;
    }
  
    private isSpare(rollIndex: number): boolean {
      return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
  
    private strikeBonus(rollIndex: number): number {
      return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
  
    private spareBonus(rollIndex: number): number {
      return this.rolls[rollIndex + 2];
    }
  
    private frameScore(rollIndex: number): number {
      return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
  }
  
  // Example usage:
  const game = new BowlingGame();
  
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
  let score1=game.score(); // => Total score for the game
  console.log("overall score " +score1);