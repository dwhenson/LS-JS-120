const READLINE = require("readline-sync");

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = RPSGame.VALID_CHOICES;
      let randomIndex = Math.floor(Math.random() * choices.length);
      let compMove = RPSGame.KEY_TO_CHOICE[choices[randomIndex][0]];
      if (compMove === RPSGame.human.move) {
        if (RPSGame.assistComputer()) {
          return this.choose();
        } else {
          return (this.move = compMove);
        }
      }
      return (this.move = compMove);
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log(
          ">>> Please choose rock (r), paper (p), scissors (s), lizard (l), spock (k):\n"
        );
        choice = READLINE.question();
        if (Object.keys(RPSGame.KEY_TO_CHOICE).includes(choice)) break;
        console.log(">>> Sorry, invalid choice.\n");
      }

      this.move = RPSGame.KEY_TO_CHOICE[choice];
    },
  };

  return Object.assign(playerObject, humanObject);
}

/* ====================================================
   Game Object
   ==================================================== */
const RPSGame = {
  /* Properties
  /* ==================================================== */
  VALID_CHOICES: ["rock (r)", "paper (p)", "scissors (s)", "lizard (l)", "spock (k)"],
  KEY_TO_CHOICE: {
    r: "rock",
    p: "paper",
    s: "scissors",
    l: "lizard",
    k: "spock",
  },
  WINNING_COMBOS: {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  },
  ASSIST_COMPUTER: 0.6,
  TOURNAMENT_WIN: 5,

  human: createHuman(),
  computer: createComputer(),
  score: {
    human: 0,
    computer: 0,
  },
  moveHistory: {
    humanMoves: [],
    computerMoves: [],
  },

  /* Helper functions
  /* ==================================================== */
  assistComputer() {
    if (this.moveHistory.humanMoves.length < 2) return false;
    return (
      Number(this.score.human / this.moveHistory.humanMoves.length) > this.ASSIST_COMPUTER
    );
  },

  reset() {
    this.score = {
      human: 0,
      computer: 0,
    };
    this.moveHistory = {
      humanMoves: [],
      computerMoves: [],
    };
  },

  /* Game functions
  /* ==================================================== */
  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
    console.log(
      `The first player to win ${this.TOURNAMENT_WIN} rounds wins the tournament.\n`
    );
  },

  playerWins(choice, computerChoice) {
    return this.WINNING_COMBOS[choice].includes(computerChoice);
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`>>> Round ${this.moveHistory.humanMoves.length + 1}`);
    console.log("------------");
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    this.moveHistory.humanMoves.push(humanMove);
    this.moveHistory.computerMoves.push(computerMove);

    if (this.playerWins(humanMove, computerMove)) {
      this.score.human += 1;
      console.log(">>> You win!\n");
    } else if (humanMove === computerMove) {
      console.log(">>> It's a tie\n");
    } else {
      this.score.computer += 1;
      console.log(">>> Computer wins!\n");
    }
  },

  displayScore() {
    console.log(
      `The current scores are: Human: ${this.score.human}, Computer ${this.score.computer}`
    );
    console.log("---------------------------------------------\n");
  },

  checkTournamentWinner() {
    if (this.score.computer === this.TOURNAMENT_WIN) {
      console.log(">>> Computer wins the tournament!! <<<");
      console.log("--------------------------------------\n");
      this.reset();
      return false;
    }
    if (this.score.human === this.TOURNAMENT_WIN) {
      console.log(">>> You win the tournament!! <<<");
      console.log("--------------------------------\n");
      this.reset();
      return false;
    }
    return true;
  },

  playAgain() {
    console.log(">>> Would you like to play again? (y/n)\n");
    let answer = READLINE.question();
    while (!["y", "n"].includes(answer)) {
      console.log(">>> Sorry, invalid choice.");
      answer = READLINE.question();
    }
    if (answer.toLowerCase()[0] === "y") {
      console.clear();
      return true;
    }
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Rock, Paper, Scissors. Lizard, Spock.\nGoodbye!\n");
  },

  /* Procedure
  /* ==================================================== */
  play() {
    this.displayWelcomeMessage();

    while (true) {
      while (true) {
        this.human.choose();
        this.computer.choose();
        this.displayWinner();
        this.displayScore();
        if (!this.checkTournamentWinner()) break;
      }
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

/* ====================================================
   Inits and Event Listeners
   ==================================================== */
RPSGame.play();
