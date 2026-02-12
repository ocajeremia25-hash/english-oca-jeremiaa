// Data Pertanyaan Quiz
const questions = [
    {
        question: "She ____ to school every day.",
        answers: ["go", "goes", "went", "going"],
        correct: 1
    },
    {
        question: "They ____ football yesterday.",
        answers: ["play", "plays", "played", "playing"],
        correct: 2
    },
    {
        question: "I ____ breakfast this morning.",
        answers: ["eat", "eats", "ate", "eating"],
        correct: 2
    },
    {
        question: "He ____ to the gym every Monday.",
        answers: ["go", "goes", "went", "going"],
        correct: 1
    },
    {
        question: "We ____ a movie last night.",
        answers: ["watch", "watches", "watched", "watching"],
        correct: 2
    },
    {
        question: "She ____ fluent English.",
        answers: ["speak", "speaks", "spoke", "speaking"],
        correct: 1
    },
    {
        question: "They ____ in this city for 5 years.",
        answers: ["live", "lives", "lived", "living"],
        correct: 0
    },
    {
        question: "I ____ my homework yesterday.",
        answers: ["do", "does", "did", "doing"],
        correct: 2
    },
    {
        question: "She ____ to London next week.",
        answers: ["go", "goes", "will go", "is going"],
        correct: 2
    },
    {
        question: "He ____ very tall.",
        answers: ["is", "are", "am", "be"],
        correct: 0
    },
    {
        question: "You ____ a great student.",
        answers: ["is", "are", "am", "be"],
        correct: 1
    },
    {
        question: "We ____ already finished our project.",
        answers: ["has", "have", "had", "having"],
        correct: 1
    },
    {
        question: "She ____ reading when I arrived.",
        answers: ["is", "was", "were", "been"],
        correct: 1
    },
    {
        question: "The cat ____ under the table.",
        answers: ["sit", "sits", "sat", "sitting"],
        correct: 1
    },
    {
        question: "I ____ to Paris three times.",
        answers: ["go", "goes", "have gone", "went"],
        correct: 2
    },
    {
        question: "She ____ her keys yesterday.",
        answers: ["lose", "loses", "lost", "losing"],
        correct: 2
    },
    {
        question: "They ____ happy about the news.",
        answers: ["is", "are", "am", "be"],
        correct: 1
    },
    {
        question: "What ____ you doing tomorrow?",
        answers: ["is", "are", "am", "be"],
        correct: 1
    },
    {
        question: "He ____ to learn English.",
        answers: ["want", "wants", "wanted", "wanting"],
        correct: 1
    },
    {
        question: "The dogs ____ in the park.",
        answers: ["run", "runs", "ran", "running"],
        correct: 0
    },
    {
        question: "I ____ never seen snow before.",
        answers: ["have", "has", "had", "having"],
        correct: 0
    },
    {
        question: "She ____ drinking coffee when you called.",
        answers: ["is", "was", "were", "been"],
        correct: 1
    },
    {
        question: "They ____ married last year.",
        answers: ["get", "gets", "got", "getting"],
        correct: 2
    },
    {
        question: "He ____ a new job next month.",
        answers: ["start", "starts", "started", "starting"],
        correct: 1
    },
    {
        question: "We ____ to go to the beach tomorrow.",
        answers: ["plan", "plans", "planned", "planning"],
        correct: 0
    },
    {
        question: "She ____ three languages.",
        answers: ["speak", "speaks", "spoke", "speaking"],
        correct: 1
    },
    {
        question: "I ____ my best to help you.",
        answers: ["do", "does", "did", "doing"],
        correct: 0
    },
    {
        question: "They ____ singing in the shower.",
        answers: ["is", "are", "am", "be"],
        correct: 1
    },
    {
        question: "He ____ a famous author.",
        answers: ["is", "are", "am", "be"],
        correct: 0
    },
    {
        question: "You ____ the winner of the contest.",
        answers: ["is", "are", "am", "be"],
        correct: 1
    },
    {
        question: "She ____ her sister last week.",
        answers: ["visit", "visits", "visited", "visiting"],
        correct: 2
    },
    {
        question: "I ____ ice cream every summer.",
        answers: ["eat", "eats", "ate", "eating"],
        correct: 0
    },
    {
        question: "They ____ working on this project for months.",
        answers: ["is", "are", "has been", "have been"],
        correct: 3
    },
    {
        question: "She ____ to buy new clothes tomorrow.",
        answers: ["go", "goes", "will go", "going"],
        correct: 2
    },
    {
        question: "He ____ football since childhood.",
        answers: ["play", "plays", "played", "has played"],
        correct: 3
    },
    {
        question: "We ____ the movie yesterday evening.",
        answers: ["watch", "watches", "watched", "watching"],
        correct: 2
    },
    {
        question: "They ____ lived in the same house.",
        answers: ["have", "has", "had", "having"],
        correct: 0
    },
    {
        question: "I ____ my homework when you called.",
        answers: ["do", "does", "was doing", "did"],
        correct: 2
    },
    {
        question: "She ____ learning Spanish now.",
        answers: ["is", "are", "am", "be"],
        correct: 0
    },
    {
        question: "He ____ to the doctor yesterday.",
        answers: ["go", "goes", "went", "going"],
        correct: 2
    },
    {
        question: "You ____ responsible for this mistake.",
        answers: ["is", "are", "am", "be"],
        correct: 1
    },
    {
        question: "They ____ arrived yet.",
        answers: ["hasn't", "haven't", "didn't", "don't"],
        correct: 1
    },
    {
        question: "I ____ never eaten sushi.",
        answers: ["have", "has", "had", "having"],
        correct: 0
    },
    {
        question: "She ____ to finish her work by 5 PM.",
        answers: ["plan", "plans", "will plan", "planned"],
        correct: 1
    },
    {
        question: "The flowers ____ beautiful in spring.",
        answers: ["is", "are", "am", "be"],
        correct: 1
    },
    {
        question: "He ____ been working here for 10 years.",
        answers: ["has", "have", "had", "having"],
        correct: 0
    },
    {
        question: "We ____ go to the concert next weekend.",
        answers: ["will", "are", "am", "be"],
        correct: 0
    },
    {
        question: "She ____ singing louder than her sister.",
        answers: ["is", "are", "am", "be"],
        correct: 0
    },
    {
        question: "I ____ my keys on the table.",
        answers: ["put", "puts", "putted", "putting"],
        correct: 0
    },
    {
        question: "They ____ finished their exams successfully.",
        answers: ["has", "have", "had", "having"],
        correct: 1
    },
    {
        question: "He ____ interested in playing chess.",
        answers: ["is", "are", "am", "be"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        let btn = document.createElement("button");
        btn.innerText = answer;
        btn.className = "answer-btn";
        btn.onclick = () => checkAnswer(index, btn);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(index, button) {
    // Disable all buttons
    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.disabled = true;
    });

    if (index === questions[currentQuestion].correct) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
        // Highlight the correct answer
        document.querySelectorAll(".answer-btn")[questions[currentQuestion].correct].classList.add("correct");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("score").innerText = 
            "Your Score: " + score;
        localStorage.setItem("quizScore", score);
    }
}

loadQuestion();
