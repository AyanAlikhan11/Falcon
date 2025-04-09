function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  }
  
  function showQuizSection() {
    document.getElementById("quiz-section").scrollIntoView({ behavior: "smooth" });
  }
  
  function calculateScore() {
    checkAnswer("quiz1", "A", "quiz-result-1");
    checkAnswer("quiz2", "B", "quiz-result-2");
    checkAnswer("quiz3", "B", "quiz-result-3");
    checkAnswer("quiz4", "C", "quiz-result-4");
  }
  
  function checkAnswer(quizName, correctValue, resultId) {
    const answer = document.querySelector(`input[name="${quizName}"]:checked`);
    const result = document.getElementById(resultId);
  
    if (!answer) {
      result.textContent = "Please select an answer.";
      result.style.color = "orange";
    } else if (answer.value === correctValue) {
      result.textContent = "Correct!";
      result.style.color = "lightgreen";
    } else {
      result.textContent = "Incorrect. Try again!";
      result.style.color = "tomato";
    }
  }
  