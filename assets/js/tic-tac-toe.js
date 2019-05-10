var turn = 1;

function move(id) {
    var button = document.getElementById(id);
    if (turn < 10) {
        if (turn % 2 == 1) {
            button.innerHTML = "X";
        } else {
            button.innerHTML = "0";
        }
        getWinner();
        turn++;
    }
}

function reset() {
    for (var id = 1; id <= 9; ++id) {
        var button = document.getElementById(id);
        button.innerHTML = "#";
        button.classList.remove("winner");
    }
    turn = 1;
    document.getElementById("result").innerHTML = "Tic Tac Toe";
}

function getWinner() {
    for (var id = 1; id <= 9; id += 3) {
        var left = document.getElementById(id);
        var mid = document.getElementById(id+1);
        var right = document.getElementById(id+2);
        if (left.innerHTML == mid.innerHTML && mid.innerHTML == right.innerHTML && right.innerHTML != "#") {
            document.getElementById("result").innerHTML = "Winner is: " + left.innerHTML;
            left.classList.add("winner");
            mid.classList.add("winner");
            right.classList.add("winner");
            return;
        }
    }
    for (var id = 1; id <= 3; id++) {
        var left = document.getElementById(id);
        var mid = document.getElementById(id+3);
        var right = document.getElementById(id+6);
        if (left.innerHTML == mid.innerHTML && mid.innerHTML == right.innerHTML && right.innerHTML != "#") {
            document.getElementById("result").innerHTML = "Winner is: " + left.innerHTML;
            left.classList.add("winner");
            mid.classList.add("winner");
            right.classList.add("winner");
            return;
        }
    }
    var left = document.getElementById(1);
    var mid = document.getElementById(5);
    var right = document.getElementById(9);
    if (left.innerHTML == mid.innerHTML && mid.innerHTML == right.innerHTML && right.innerHTML != "#") {
        document.getElementById("result").innerHTML = "Winner is: " + left.innerHTML;
        left.classList.add("winner");
        mid.classList.add("winner");
        right.classList.add("winner");
        return;
    }
    var left = document.getElementById(3);
    var mid = document.getElementById(5);
    var right = document.getElementById(7);
    if (left.innerHTML == mid.innerHTML && mid.innerHTML == right.innerHTML && right.innerHTML != "#") {
        document.getElementById("result").innerHTML = "Winner is: " + left.innerHTML;
        left.classList.add("winner");
        mid.classList.add("winner");
        right.classList.add("winner");
        return;
    }

}


