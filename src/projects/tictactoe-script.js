var main = function() {
  var board = [[0,0,0], [0,0,0],[0,0,0]];
  var lines = [];
  var playerStarts = true;
  var computerSymbol;
  var humanSymbol;

  
 /* ------- game functions---------- 
 **************************************/   
   
  function calculateBoard(){ // get all 8 possibilies to make a winning line 
    lines[0] = [board[0][0],board[0][1],board[0][2]];
    lines[1] = [board[1][0],board[1][1],board[1][2]];
    lines[2] = [board[2][0],board[2][1],board[2][2]];
    lines[3] = [board[0][0],board[1][0],board[2][0]];
    lines[4] = [board[0][1],board[1][1],board[2][1]];
    lines[5] = [board[0][2],board[1][2],board[2][2]];
    lines[6] = [board[0][0],board[1][1],board[2][2]];
    lines[7] = [board[0][2],board[1][1],board[2][0]];
  }
  
  function emptyBoard(){
    board = [[0,0,0], [0,0,0],[0,0,0]];
    $(".cell").html("");
    $(".gameStatus").html("");
    $("#popup").dialog("open");
  }
  
  function evaluateBoard(){ //evaluate after each move if the game is finished
    var fullBoard = board[0].concat(board[1], board[2]);
    
    for (var i=0; i<8; i++) {
      if (lines[i].join()=='H,H,H') {
         return "won";
      } else if (lines[i].join()=="C,C,C") { 
          return "lost";
      }   
    }

    if (fullBoard.indexOf(0)==-1) {
        return "full";
    }

    return "ok";
  }
    
  function displayResult(){ //opens pop-ups when a game ends
    var checkBoard = evaluateBoard();

    if (checkBoard == "won") {
      $("#youWon").dialog("open");
    }
    if (checkBoard == "lost"){
      $("#youLost").dialog("open");
    }
    if (checkBoard == "full") {
      $("#draw").dialog("open");
    }
  }
  
  /* More functions: Computer game strategy ******
  **********************************************/
  
  function randomComputerMove() {
    var a = Math.floor(Math.random() * 3);
    var b = Math.floor(Math.random() * 3);
      
      if (board[a][b] == 0) {
      play(a,b);
    } else {
      randomComputerMove();
    };

  }
  
  function findDangerousLine() {  //finds a line where 2 cells are taken by Human and blocks the 3rd cell
    
    for (var i=0; i<8; i++) {
      var HCount = lines[i].filter(function(x){return x=="H"}).length;

      if (HCount == 2) {
        for (var j=0; j<3; j++) {
          if (lines[i][j] == 0){
            switch (i) {
              case 0:
              case 1:
              case 2:
                return [i,j];
                break;
              case 3:
              case 4:
              case 5:
                return [j, i%3];
                break;
              case 6:
                return [j,j];
                break;
              case 7:
                return [j, 2-j];
                break;
            }
          }
        }     
      }
    }
    return false;
  }
  
  function findWinningCell()  { //finds a line where 2 cells are taken by Computer and takes the 3rd cell
    
    for (var i=0; i<8; i++) {
      var CCount = lines[i].filter(function(x){return x=="C"}).length;

      if (CCount == 2) {
        for (var j=0; j<3; j++) {
          if (lines[i][j] == 0){
            switch (i) {
              case 0:
              case 1:
              case 2:
                return [i,j];
                break;
              case 3:
              case 4:
              case 5:
                return [j, i%3];
                break;
              case 6:
                return [j,j];
                break;
              case 7:
                return [j, 2-j];
                break;
            }
          }
        }     
      }
    }
    return false;
  }
    
 function findGoodMove() { // finds lines where Computer has already taken 1 cell
   
   for (var i=0; i<8; i++) {
      var CCount = lines[i].filter(function(x){return x=="C"}).length;
      var HCount = lines[i].filter(function(x){return x=="H"}).length;
      if (CCount == 1 && HCount==0) {
        for (var j=0; j<3; j++) {
          if (lines[i][j] == 0){
            switch (i) {
              case 0:
              case 1:
              case 2:
                return [i,j];
                break;
              case 3:
              case 4:
              case 5:
                return [j, i%3];
                break;
              case 6:
                return [j,j];
                break;
              case 7:
                return [j, 2-j];
                break;
            }
          }
        }     
      }
    }
    return false;
  }
   
  function barrTrickyMove(){ // blocks one particular vulnerable situation 
    if (lines[1].join()=="0,C,H" && lines[2].join()=="0,H,0") {
      console.log("tricky");
      return true;
    }
    return false;
  }
  
  function barrMiddleX(){ //takes the middle cell if it's empty
    if (board.join() == "0,0,0,0,H,0,0,0,0") {
      console.log("middlex");  
      return true;
    } 
    return false;
  }
  
  function play(x,y) { //actual filling of a cell and reevaluation of the board after the move
      board[x][y]="C";
      setTimeout(function() {$("#cell"+x+y).html(computerSymbol);}, 100);
      calculateBoard();
      evaluateBoard();
      displayResult();
  }
  
  function choseMove(){ //combines all play strategy functions in order of priority to decide where to place the next move
    var checkBoard = evaluateBoard();
       
    if (checkBoard == "full" || checkBoard == "won" || checkBoard == "lost" ) {
      return;
    };
      
    var winningCell = findWinningCell();  
    if (winningCell) {
        play(winningCell[0],winningCell[1]);
        return;
    };
    
    var dangerousCell = findDangerousLine();   
    if (dangerousCell) {
        play(dangerousCell[0],dangerousCell[1]);
        return;
    };
    
    if (board[1][1]==0) {
        play (1,1);
        return;
    };
    
    if (barrMiddleX()) {
        play(0,2);
        return;
    };
    
    if (barrTrickyMove()) {
        play(2,2);
        return;
    };
    
    var goodCell  = findGoodMove();
    if (goodCell){
        play(goodCell[0],goodCell[1]);
        return;
    }; 
    
    if (checkBoard =="ok"){  
    var randomMove = randomComputerMove();
    play(randomMove[0],randomMove[1]);
    return;
    }
  }  
  
  function setWhoStarts(){  //displays X for first player and O for second player
   if (playerStarts) {
      computerSymbol = "O";
      humanSymbol = "X";
    } else {
      computerSymbol = "X";
      humanSymbol = "O";
      calculateBoard();
      evaluateBoard();
      displayResult();
      choseMove();
    }
 }
  
  
  /* ----playing the game: clicking on the cells and button----
  *****************************************************/ 
     
  $(".cell").click(function (){
    var id = $(this).attr("id"); 
    var cell = board[id[4]][id[5]];
    calculateBoard();
    var checkBoard = evaluateBoard();
    console.log(checkBoard);
    if (checkBoard == "full" || checkBoard == "won" || checkBoard == "lost" ) {
        return;
    };
    if (cell==0) {
      $(this).html(humanSymbol);
      board[id[4]][id[5]]="H";
      calculateBoard();
      evaluateBoard();
      displayResult();
      choseMove();
    } else {
      return;
    }
  })
 
  
  $(".resetButton").click(emptyBoard);

  /* Dialogs and popups *****
  **************************************/
  $("#popup").dialog({
       autoOpen: false,
    dialogClass:"no-close",
    draggable: true,
    modal:true,
    width:'auto',
    position: { my: "center", at: "center", of: window },
    closeOnEscape:false,
  
       title: 'Who starts the game?',
        buttons: {
          Me: function() {

            console.log("me");
            playerStarts = true;
            setWhoStarts();
            $(this).dialog("close");
          },
          "The Computer": function() {

            console.log("computer");
            playerStarts = false;
            setWhoStarts();
            $(this).dialog("close");
           }
        }
  })
  
  $("#youWon").dialog({
    autoOpen: false,
    draggable: true,
    modal:true,
    closeOnEscape:true,
    title:"End of game",
    buttons: [
    { text: "Ok",
      click: function() {
        $(this).dialog( "close" );
      }
    }]
  })
  $("#youLost").dialog({
    autoOpen: false,
    draggable: true,
    title:"End of game",
    closeOnEscape:true,
    modal:true,
    buttons:[
    { text: "Ok",
      click: function() {
        $(this).dialog( "close" );
      }
    }]
  })
  $("#draw").dialog({
    autoOpen: false,
    draggable: true,
    modal:true,
    
    closeOnEscape:true,
    title:"End of game",
    buttons:[
    { text: "Ok",
      click: function() {
        $(this).dialog( "close" );
      }
    }]
  })
  
  $("#popup").dialog("open");
};
$(document).ready(main)