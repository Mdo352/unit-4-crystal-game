$(document).ready(function(){
    var targetScore = Math.floor(Math.random() * 102) + 19;
    var runningScore = 0;
    var gameWin = 0;
    var gamelose = 0;
    var round = 1;

    
    var crystalObj = {
    one : Math.floor(Math.random() * 12) + 1,
    two : Math.floor(Math.random() * 12) + 1,
    three : Math.floor(Math.random() * 12) + 1,
    four : Math.floor(Math.random() * 12) + 1};
    
    function resetGame(){
        crystalObj = {
            one : Math.floor(Math.random() * 12) + 1,
            two : Math.floor(Math.random() * 12) + 1,
            three : Math.floor(Math.random() * 12) + 1,
            four : Math.floor(Math.random() * 12) + 1};

        targetScore = Math.floor(Math.random() * 102) + 19;
        runningScore = 0;
        $('#targetScore').text(targetScore);
        $('#currentScore').text(runningScore);
    }

    function game(){
        if (targetScore == runningScore){
            gameWin++;
            $('#win').text(gameWin);
            resetGame();
            round++;
        }
    
        if (runningScore > targetScore){
            gamelose++;
            $('#lose').text(gamelose);
            resetGame();
        }
    }


    console.log(crystalObj.two);

    
    $('#targetScore').text(targetScore);

    $('#crystal1').on('click', function(event){
        runningScore = runningScore + crystalObj.one;
        $('#currentScore').text(runningScore);
        game();
    })
    $('#crystal2').on('click', function(event){
        runningScore = runningScore + crystalObj.two;
        $('#currentScore').text(runningScore);
        game();
    })
    $('#crystal3').on('click', function(event){
        runningScore = runningScore + crystalObj.three;
        $('#currentScore').text(runningScore);
        game();
    })
    $('#crystal4').on('click', function(event){
        runningScore = runningScore + crystalObj.four;
        $('#currentScore').text(runningScore);
        game();
    })


});