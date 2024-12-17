document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const correctAnswers = {
        q1: "Pac-Man",
        q2: "Minecraft",
        q3: "PlayStation 2",
        q4: "Fortnite",
        q5: "The Legend of Zelda",
        q6: "PlayStation Portable (PSP)",
        q7: "Crash Team Racing",
        q8: "Mario",
        q9: "Angry Birds",
        q10: "Sonic"
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    for (const question in correctAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption?.value === correctAnswers[question]) {
            score++;
        }
    }
    
    const resultDiv = document.querySelector('.answers-section div');
    resultDiv.innerHTML = `<h2>Votre score est : ${score} / ${totalQuestions}</h2>`;
    resultDiv.style.fontSize = "1.5rem";
    resultDiv.style.marginTop = "20px";
    resultDiv.style.textAlign = "center"
    resultDiv.style.color="white";
});
