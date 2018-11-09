
document.addEventListener("DOMContentLoaded", function () {

    var words = ["america", "world", "russia"]
    var ranDom = Math.floor(Math.random() * words.length);
    var choosenWord = words[ranDom]
    var underScore = [];
    var rightWord = [];
    var wrongWord = [];
    var tries = 8;

    for (var i = 0; i < choosenWord.length; i++) {
        underScore.push("__");
        underScore.toString();
        document.getElementById("underscores").innerHTML = underScore.join(" ");
    }

    document.addEventListener("keypress", function (event) {
        if (tries === 0) {
            return
        }
        var keychar = String.fromCharCode(event.keyCode);
        var charIndexes = [];
        var charIndex = choosenWord.indexOf(keychar);

        while (charIndex > -1) {
            charIndexes.push(charIndex);
            charIndex = choosenWord.indexOf(keychar, charIndex + 1);
        }

        if (charIndexes.length > 0) {
            rightWord.push(keychar)

            for (var ci in charIndexes) {
                underScore[charIndexes[ci]] = keychar;
            }

            document.getElementById("underscores").innerHTML = underScore.join(" ");
            if (underScore.join("") == choosenWord) {
                document.getElementById("status").innerHTML = "You are the winner!"
            }
        } else {
            wrongWord.push(keychar);
            tries--;
            if (tries === 0) {
                document.getElementById("status").innerHTML = "GAME OVER"
            }
        }
        document.getElementById("rightGuess").innerHTML = rightWord.join(" ");
        document.getElementById("wrongGuess").innerHTML = wrongWord.join(" ");
        document.getElementById("triesLeft").innerHTML = tries;
        document.getElementById("imageFace").className = "face" + tries;
    });
});