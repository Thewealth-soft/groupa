// Function to handle the quiz
function startQuiz() {
  const question = document.querySelector(".question");
  const options = document.querySelectorAll(".quiz-options div");
  const playBtn = document.getElementById("playBtn");
  const exitBtn = document.getElementById("exitBtn");
  const scoreElement = document.getElementsByClassName("score");

  let score = 0;
  let currentQuestionIndex = 0;

  const quizData = [
    {
      question:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, reprehenderit?",
      answers: ["Answer1 lorem10", "Answer2", "Answer3", "Answer4"],
      correctAnswer: 0,
    },
    {
      question: "What is the country in the world",
      answers: ["Answer1 lorem10", "Answer2", "Answer3", "Answer4"],
      correctAnswer: 1,
    },
    // Add more questions here
  ];

  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    question.textContent = currentQuestion.question;
    options.forEach((option, index) => {
      option.textContent = currentQuestion.answers[index];
    });
  }

  function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
      score++;
      scoreElement.textContent = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      // End of the quiz
      question.textContent = "Quiz completed! Your final score is " + score;
      const quizOptions = document.querySelector(".quiz-options");
      quizOptions.style.display = "none";
      playBtn.style.display = "block";
    }
  }

  playBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    showQuestion();
    const quizOptions = document.querySelector(".quiz-options");
    quizOptions.style.display = "grid";
    playBtn.style.display = "none";
  });

  exitBtn.addEventListener("click", () => {
    const quizOptions = document.querySelector(".quiz-options");
    quizOptions.style.display = "none";
    playBtn.style.display = "block";
    question.textContent = "Quiz exited. Your final score is " + score;
  });

  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      checkAnswer(index);
    });
  });
}

// Call the startQuiz function to initialize the quiz functionality
startQuiz();



// // Function to handle the quiz
// function startQuiz() {
//   // Your quiz logic here
//   // ...
// }

// Function to handle sign-in and start the quiz
function signInAndStartQuiz(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Please enter a valid username.");
    return;
  }

  // Save the username in local storage for later use
  localStorage.setItem("username", username);

  // Redirect to the quiz page (quiz.html)
  window.location.href = "/quiz-template.html";
}

// Check if the user is on the index.html page
if (window.location.pathname === "/index.html") {
  // Add an event listener to the sign-in form
  const signinForm = document.getElementById("signinForm");
  signinForm.addEventListener("submit", signInAndStartQuiz);
} else if (window.location.pathname === "/quiz.html") {
  // Load the saved username from local storage
  const username = localStorage.getItem("username");

  if (!username) {
    // If no username is found, redirect back to index.html
    window.location.href = "index.html";
  } else {
    // If the username is found, display the quiz
    // startQuiz();
  }
}











