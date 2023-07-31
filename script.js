let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

let pOne=true;

function clickCell(rowNum, columnNum){

    if(getCell(rowNum, columnNum)!="")
        return;

    //console.log("empty");
        
    playerShow(rowNum, columnNum);
    playerToArray(rowNum, columnNum);
    playerSwitch();

    setTimeout(function(){
        checkWin();
    }, 50);
    
}

function getCell(r, c){
    var table = document.getElementById('table');
    return table.rows[r].cells[c].innerHTML;
}

function playerShow(r, c){
    if(pOne)
        table.rows[r].cells[c].innerHTML="X"
    else
        table.rows[r].cells[c].innerHTML="O";
}

function playerToArray(r, c){
    if(pOne)
        arr[r][c]= 1;
    else
        arr[r][c]=10;
}

function playerSwitch(){
    pOne = !pOne;
}

function checkWin(){

    //horizontal check
    for(let r =0; r<3; r++){

        var sumHorizontal = 0;

        for(let c=0; c<3; c++)
            sumHorizontal += arr[r][c];

        if(sumHorizontal == 3 || sumHorizontal == 30)
            break;
    }

    //vertical check
    for(let c=0; c<3; c++){

        var sumVertical = 0;

        for(r=0; r<3; r++)
            sumVertical += arr[r][c];

        if(sumVertical == 3 || sumVertical == 30)
            break;
    }

    //diagonal check
    let sumDiaFromL = arr[0][0] + arr[1][1] + arr[2][2];
    let sumDiaFromR = arr[0][3] + arr[1][1] + arr[2][0]


    if(sumDiaFromL==3 || sumDiaFromR==3 || 
        sumVertical ==3 || sumHorizontal==3)
        showWinner("X");

    if(sumDiaFromL==30 || sumDiaFromR==30 ||
        sumVertical==30 || sumHorizontal==30)
        showWinner("O");
}

function showWinner(player){
    alert(`Player ${player} win!`);
}