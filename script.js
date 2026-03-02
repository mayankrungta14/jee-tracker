let scores = [];
let correctTotal = 0;
let attemptedTotal = 0;

function addTest() {
    let score = Number(document.getElementById("score").value);
    let attempted = Number(document.getElementById("attempted").value);
    let correct = Number(document.getElementById("correct").value);
    let changedWrong = Number(document.getElementById("changedWrong").value);

    scores.push(score);
    correctTotal += correct;
    attemptedTotal += attempted;

    let avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    let accuracy = (correctTotal / attemptedTotal) * 100;

    document.getElementById("avgScore").innerText = avgScore.toFixed(2);
    document.getElementById("accuracy").innerText = accuracy.toFixed(2);

    if (changedWrong > 2) {
        document.getElementById("status").innerText = "STOP CHANGING ANSWERS";
        document.getElementById("status").style.color = "red";
    } else {
        document.getElementById("status").innerText = "Stable";
        document.getElementById("status").style.color = "lightgreen";
    }
}
