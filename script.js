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
  document.getElementById("signinForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Signed in successfully!");
    bootstrap.Modal.getInstance(document.getElementById("signinModal")).hide();
  });
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Logged in successfully!");
    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
  });
  function calculateScore() {
    let score = 0;
  
    if (document.querySelector('input[name="quiz1"]:checked')?.value === "A") score++;
    if (document.querySelector('input[name="quiz2"]:checked')?.value === "B") score++;
    if (document.querySelector('input[name="quiz3"]:checked')?.value === "B") score++;
    if (document.querySelector('input[name="quiz4"]:checked')?.value === "C") score++;
  
    // Set score in modal
    document.getElementById("scoreValue").innerText = score;
  
    // Show modal
    const scoreModal = new bootstrap.Modal(document.getElementById("scoreModal"));
    scoreModal.show();
  }
  function askAITutor() {
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const question = input.value.trim();
  
    if (question === "") return;
  
    // Append user message
    const userMsg = document.createElement('div');
    userMsg.innerHTML = `<strong>You:</strong> ${question}`;
    chatBox.appendChild(userMsg);
  
    // Simulated AI reply
    const botReply = document.createElement('div');
    botReply.innerHTML = `<strong>AI Tutor:</strong> ${generateFakeResponse(question)}`;
    botReply.classList.add('mt-2');
    chatBox.appendChild(botReply);
  
    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Clear input
    input.value = '';
  }
  
  function generateFakeResponse(question) {
    // You can improve this with real logic or connect to OpenAI later
    if (question.toLowerCase().includes("html")) return "HTML stands for HyperText Markup Language.";
    if (question.toLowerCase().includes("css")) return "CSS is used to style HTML elements.";
    if (question.toLowerCase().includes("python")) return "Python is a beginner-friendly language used for data science, AI, and web development.";
    return "That's a great question! Here's what I think: [This is a simulated response. You can connect me to an AI API for real answers!]";
  }
  
  function scrollToAITutor() {
    const aiSection = document.getElementById("ai-tutor");
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  async function askAITutor() {
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const question = input.value.trim();
    if (!question) return;

    const userMsg = document.createElement('div');
    userMsg.innerHTML = `<strong>You:</strong> ${question}`;
    chatBox.appendChild(userMsg);

    const loadingMsg = document.createElement('div');
    loadingMsg.innerHTML = `<strong>AI Tutor:</strong> <em>Thinking...</em>`;
    chatBox.appendChild(loadingMsg);

    try {
      const res = await fetch('http://localhost:3000/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });

      const data = await res.json();
      loadingMsg.innerHTML = `<strong>AI Tutor:</strong> ${data.reply}`;
    } catch (err) {
      loadingMsg.innerHTML = `<strong>AI Tutor:</strong> Error connecting to AI.`;
    }

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = '';
  }