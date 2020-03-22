var turn;
var clicked=["!","@","$","%","^","#","&","*","~"];
var numOfMoves=0;
var gameEnded=0;
jQuery(document).ready(function(){
    gameStart();
});
function gameStart()
{
    var startTurn = prompt("Choose First Turn", "Type X or O").toUpperCase();
    switch (startTurn) 
    {
        case "X":
            turn = 1;
        break;
        case "O":
            turn = 0;
        break;
        case null:
            alert("Wrong!.Please type X or O");
            window.location.reload(true);
        break;
        default:
            alert("Wrong!.Please type X or O");
            window.location.reload(true);
        break;
    }
    const cells = document.querySelectorAll('td');
    for (var i = 0; i < cells.length; i++)
    {
        cells[i].addEventListener('click', function(e){clickedCell(e);}); 
    }
}
function clickedCell(e)
{
    if(gameEnded==1)
    {
        alert("the Game ended click restart the game to play!");
        return;
    }
    if(clicked[e.target.id]=="0"||clicked[e.target.id]=="1")
    {
        alert("This cell is clicked choose another cell!");
        return;
    }
    numOfMoves++;
    if (turn==1)
    {
        clicked[e.target.id]=1;
        let x=document.getElementById(e.target.id);
        x.style.color='red';
        x.innerHTML += "X";
        if(numOfMoves>=5){setTimeout(checkWinner,100,"X");}
    }
    if (turn==0)
    {
        clicked[e.target.id]=0;
        let o=document.getElementById(e.target.id)
        o.style.color='blue';
        o.innerHTML += "O";
        if(numOfMoves>=5){setTimeout(checkWinner,100,"O");}
    }
    turn^=1;
    console.log(clicked);
}
function checkWinner(turnOf)
{
    if(clicked[0]==clicked[1]&&clicked[0]==clicked[2])
    {
        gameEnded=1;
        alert(turnOf + " Win The Game!");
    }
    else if(clicked[0]==clicked[3]&&clicked[0]==clicked[6])
    {
        gameEnded=1;
        alert(turnOf + " Win The Game!");
    }
    else if(clicked[0]==clicked[4]&&clicked[0]==clicked[8])
    {
        gameEnded=1;
        alert(turnOf + " Win The Game!");
    }
    else if(clicked[1]==clicked[4]&&clicked[1]==clicked[7])
    {
        gameEnded=1;
        alert(turnOf + " Win The Game!");
    }
    else if(clicked[2]==clicked[5]&&clicked[2]==clicked[8])
    {
        gameEnded=1;
        alert(turnOf + " Win The Game!");
    }
    else if(clicked[3]==clicked[4]&&clicked[3]==clicked[5])
    {
        gameEnded=1;
        alert(turnOf + " Win The Game!");
    }
    else if(clicked[2]==clicked[4]&&clicked[2]==clicked[6])
    {
        gameEnded=1;
        alert(turnOf + " Win The Game!");
    }
    else if(clicked[6]==clicked[7]&&clicked[6]==clicked[8])
    {
        gameEnded=1;
        alert(turnOf + " Win The Game!");
    }
    else if(numOfMoves==9)
    {
        gameEnded=1;
        alert("Game Ended Draw!");
    }
}
function restartGame()
{
    clicked=["!","@","$","%","^","#","&","*","~"];
    numOfMoves=0;
    gameEnded=0;
    for (var i = 0; i <9; i++)
    {
        document.getElementById(i).innerHTML="";
    }
    gameStart();
}