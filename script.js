// =======================================
// CONFIG
// =======================================

const PASS_THRESHOLD = 0.8;   // 80% required to pass in Test Mode
const EXAM_LENGTH    = 25;    // DMV exam length
const MODE_TEST      = "test";
const MODE_STUDY     = "study";

const ALL_QUESTIONS = [
  {
    question: "What are the requirements for wearing a helmet?",
    options: [
      "Passengers only are required to wear helmets.",
      "All motorcycle riders and passengers are required to wear helmets at all times.",
      "Helmets are not required while driving on city streets."
    ],
    correctIndex: 1,
    explanation: "California requires all riders and passengers to wear a U.S. DOT–compliant motorcycle safety helmet at all times."
  },
  {
    question: "Grabbing the front brake or jamming down on the rear brake:",
    options: [
      "Can cause the brakes to lock.",
      "Is the best way to stop in an emergency.",
      "Is the best way to slow down when the streets are wet."
    ],
    correctIndex: 0,
    explanation: "Grabbing or jamming the brakes can lock the wheels and cause a skid."
  },
  {
    question: "Passengers on motorcycles should:",
    options: [
      "Put their feet on the ground when the motorcycle is stopped.",
      "Not ride without a backrest.",
      "Sit as far forward as possible without crowding the rider."
    ],
    correctIndex: 2,
    explanation: "Passengers should sit as far forward as possible without crowding you for balance and control."
  },
  {
    question: "When riding with a group of motorcyclists, a staggered formation:",
    options: [
      "Is recommended at all times.",
      "Should not be used when entering or exiting a highway.",
      "Should be used when riding on curves."
    ],
    correctIndex: 1,
    explanation: "Switch to single-file in curves, intersections, and when entering/exiting freeways."
  },
  {
    question: "Eye protection:",
    options: [
      "Is not needed if your motorcycle has a windshield.",
      "Is only needed when riding in bad weather.",
      "Should give a clear view to either side."
    ],
    correctIndex: 2,
    explanation: "Windshields do NOT protect your eyes; eye protection must give clear side vision."
  },
  {
    question: "A primary cause of single-vehicle motorcycle collisions is:",
    options: [
      "Driving too fast for conditions.",
      "Running wide in a curve or turn and colliding with a fixed object.",
      "Running off the road while avoiding a vehicle."
    ],
    correctIndex: 1,
    explanation: "Most single-vehicle crashes happen when riders enter a curve too fast and run wide."
  },
  {
    question: "The best lane position for a motorcycle:",
    options: [
      "Is always the left part of the lane.",
      "Is always the right part of the lane.",
      "Can vary depending on traffic and road conditions."
    ],
    correctIndex: 2,
    explanation: "There is no single best position; it depends on visibility and space."
  },
  {
    question: "When riding at night you should:",
    options: [
      "Move closer to vehicles ahead to use their lights.",
      "Maintain your normal following distance.",
      "Reduce your speed because hazards are harder to see."
    ],
    correctIndex: 2,
    explanation: "Night riding requires slower speeds due to reduced visibility."
  },
  {
    question: "You should operate the engine cutoff switch and pull in the clutch when:",
    options: [
      "The throttle is stuck.",
      "You lose control in a curve.",
      "The motorcycle starts to wobble."
    ],
    correctIndex: 0,
    explanation: "A stuck throttle requires immediately cutting power."
  },
  {
    question: "To operate a moped you must have at least a ____ license.",
    options: ["Class M1", "Class M2", "Class C"],
    correctIndex: 1,
    explanation: "Class M2 covers mopeds and motorized bicycles."
  },
  {
    question: "Upshifting or downshifting in a curve:",
    options: [
      "Should only be done smoothly.",
      "Is better than shifting before the curve.",
      "Is the best way to control speed."
    ],
    correctIndex: 0,
    explanation: "Shifting mid-curve can cause traction loss unless done smoothly."
  },
  {
    question: "To avoid confusing other drivers you should:",
    options: [
      "Increase following distance.",
      "Ensure your turn signal turns off after a turn.",
      "Use your horn in most situations."
    ],
    correctIndex: 1,
    explanation: "Leaving your signal on is a top cause of motorcycle crashes."
  },
  {
    question: "_____ is a major factor in collisions caused by motorcycles.",
    options: [
      "Following too closely.",
      "Lane splitting.",
      "Improper signaling."
    ],
    correctIndex: 0,
    explanation: "Tailgating reduces reaction time and causes many crashes."
  },
  {
    question: "If your motorcycle wanders on metal bridge gratings you should:",
    options: [
      "Downshift.",
      "Ride in a zig-zag pattern.",
      "Relax and ride straight across."
    ],
    correctIndex: 2,
    explanation: "A slight wandering feel is normal; stay relaxed."
  },
  {
    question: "If you must carry a load it should be:",
    options: [
      "Over or in front of the rear axle.",
      "On the handlebars.",
      "Stacked high behind the seat."
    ],
    correctIndex: 0,
    explanation: "Loads must be forward and low for stability."
  },
  {
    question: "What is the best way to stay out of trouble while riding a motorcycle?",
    options: [
      "Avoid all heavy traffic.",
      "Increase your following distance.",
      "Look well ahead to identify hazards early."
    ],
    correctIndex: 2,
    explanation: "Scanning ahead prevents most emergency situations."
  },
  {
    question: "A motorcycle rider has an advantage over cars when passing parked vehicles because:",
    options: [
      "Motorcycles accelerate faster.",
      "Motorcycles can stop quicker.",
      "The rider can position in the left portion of the lane to avoid opening car doors."
    ],
    correctIndex: 2,
    explanation: "Left lane position helps avoid doors and pedestrians."
  },
  {
    question: "Bright, reflective clothing:",
    options: [
      "Should only be worn at night.",
      "Helps make riders more visible.",
      "Is optional since headlights are enough."
    ],
    correctIndex: 1,
    explanation: "Most crashes happen because drivers “didn’t see the motorcycle.”"
  },
  {
    question: "To execute a turn safely a motorcycle rider must:",
    options: [
      "Lean the motorcycle in the direction of the turn.",
      "Brake during the turn for best control.",
      "Keep the motorcycle upright."
    ],
    correctIndex: 0,
    explanation: "Motorcycles must lean to turn safely."
  },
  {
    question: "Vehicle/motorcycle collisions are most common:",
    options: ["On freeways.", "At night.", "At intersections."],
    correctIndex: 2,
    explanation: "Most multi-vehicle motorcycle crashes occur at intersections."
  },
  {
    question: "Following closely to a vehicle ahead:",
    options: [
      "Helps with drafting to save fuel.",
      "Is a major collision factor.",
      "Helps you see traffic better."
    ],
    correctIndex: 1,
    explanation: "Tailgating is one of the biggest rider-caused crash factors."
  },
  {
    question: "In rain or fog you should:",
    options: [
      "Reduce speed and use low beam lights.",
      "Use high beams.",
      "Maintain normal speed."
    ],
    correctIndex: 0,
    explanation: "High beams reflect water droplets and reduce visibility."
  },
  {
    question: "Your motorcycle side mirrors primarily show:",
    options: [
      "Everything behind you.",
      "Only the lane next to you.",
      "Part of the adjoining lane and most of the lane behind you."
    ],
    correctIndex: 2,
    explanation: "Motorcycle mirrors do not eliminate blind spots."
  },
  {
    question: "When carrying loads you should:",
    options: [
      "Keep them low and forward.",
      "Keep them high for visibility.",
      "Place them behind the rear axle."
    ],
    correctIndex: 0,
    explanation: "Low, forward loads improve handling."
  },
  {
    question: "Before changing lanes to the left you should:",
    options: [
      "Check your left mirror and look to the left.",
      "Check only the mirror.",
      "Speed up instead of checking."
    ],
    correctIndex: 0,
    explanation: "Mirror + shoulder check = safe lane change."
  },
  {
    question: "The best way to fight fatigue while riding is to:",
    options: ["Drink energy drinks.", "Ride faster.", "Take frequent breaks."],
    correctIndex: 2,
    explanation: "Breaks and hydration prevent fatigue."
  },
  {
    question: "A motor-driven cycle is defined as having an engine size of:",
    options: ["Under 150cc.", "Under 200cc.", "Under 100cc."],
    correctIndex: 0,
    explanation: "California defines motor-driven cycles as under 150cc."
  },
  {
    question: "When another vehicle is trying to pass you, you should:",
    options: [
      "Move to the center portion of your lane.",
      "Speed up.",
      "Move to the right edge of the lane."
    ],
    correctIndex: 0,
    explanation: "Center positioning maximizes space around both vehicles."
  },
  {
    question: "To predict how a hazard may affect you, you must know its:",
    options: ["Color.", "Size.", "Speed, distance, and direction."],
    correctIndex: 2,
    explanation: "Hazard prediction requires understanding motion."
  },
  {
    question: "To make good judgments in traffic you first need to:",
    options: [
      "Be able to swerve.",
      "Search and scan ahead.",
      "Know how to brake quickly."
    ],
    correctIndex: 1,
    explanation: "Scanning is the foundation of safe riding."
  },
  {
    question: "To spot vehicles beside you before moving left you should:",
    options: [
      "Check your left mirror only.",
      "Slow down.",
      "Turn your head and look to the left."
    ],
    correctIndex: 2,
    explanation: "Blind spots require a shoulder check."
  },
  {
    question: "Motorized bicycles or mopeds are not allowed to:",
    options: [
      "Operate on freeways and expressways.",
      "Exceed 30 mph.",
      "Ride in bike lanes when authorized."
    ],
    correctIndex: 0,
    explanation: "Freeways are prohibited for mopeds."
  },
  {
    question: "The maximum speed at which Class 2 electric bicycles can provide assistance is:",
    options: ["35 mph", "20 mph", "25 mph"],
    correctIndex: 1,
    explanation: "Class 2 e-bikes assist up to 20 mph."
  },
  {
    question: "When preparing for a long ride you should:",
    options: [
      "Carry as much as possible.",
      "Wear tight clothing.",
      "Ensure the motorcycle is in top mechanical condition."
    ],
    correctIndex: 2,
    explanation: "Mechanical reliability is critical for long trips."
  },
  {
    question: "Convex mirrors on motorcycles make vehicles appear:",
    options: [
      "Closer than they are.",
      "Farther than they are.",
      "Actual size."
    ],
    correctIndex: 1,
    explanation: "Convex mirrors distort distance but increase field of view."
  },
  {
    question: "To be effective, eye or face protection must:",
    options: [
      "Permit room for sunglasses or eyeglasses.",
      "Be loose-fitting.",
      "Be tinted."
    ],
    correctIndex: 0,
    explanation: "Eye protection must allow eyewear and ventilate properly."
  },
  {
    question: "If you need to leave the road to handle an emergency you should:",
    options: [
      "Flash your headlights.",
      "Signal and pull off smoothly.",
      "Swerve quickly."
    ],
    correctIndex: 1,
    explanation: "Smooth, predictable movement prevents loss of control."
  },
  {
    question: "How often should you check hydraulic fluid and coolant levels?",
    options: ["Daily", "Weekly", "Monthly"],
    correctIndex: 1,
    explanation: "Coolant and fluid should be checked weekly."
  },
  {
    question: "The main reason riders crash during turns is:",
    options: [
      "Inexperience.",
      "Going too fast.",
      "Bad weather."
    ],
    correctIndex: 1,
    explanation: "Entering a turn too fast is the #1 cause of corner crashes."
  }
];

// =======================================
// STATE VARIABLES
// =======================================

let currentMode  = MODE_TEST;
let questionSet  = [];
let currentIndex = 0;
let score        = 0;
let answered     = false;


// =======================================
// DOM ELEMENTS
// =======================================

const quizCard     = document.getElementById("quiz-card");
const resultCard   = document.getElementById("result-card");
const questionText = document.getElementById("question-text");
const optionsList  = document.getElementById("options-list");
const feedbackEl   = document.getElementById("feedback");
const progressEl   = document.getElementById("progress");
const modeInfoEl   = document.getElementById("mode-info");
const resultTitle  = document.getElementById("result-title");

const checkBtn     = document.getElementById("check-btn");
const nextBtn      = document.getElementById("next-btn");
const scoreText    = document.getElementById("score-text");
const restartBtn   = document.getElementById("restart-btn");

const testModeBtn  = document.getElementById("test-mode-btn");
const studyModeBtn = document.getElementById("study-mode-btn");


// =======================================
// UTILS
// =======================================

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}


// =======================================
// QUIZ INITIALIZATION
// =======================================

function initQuiz(mode) {
  currentMode = mode;

  if (!ALL_QUESTIONS || ALL_QUESTIONS.length === 0) {
    modeInfoEl.textContent = "Error: question bank is empty. Paste your ALL_QUESTIONS array into script.js.";
    quizCard.classList.add("hidden");
    resultCard.classList.add("hidden");
    return;
  }

  if (mode === MODE_TEST) {
    // 25 random questions from the full bank
    questionSet = shuffleArray(ALL_QUESTIONS).slice(0, EXAM_LENGTH);
    modeInfoEl.textContent =
      "Test Mode: 25 randomized questions from the question bank. You must score 80% or higher to pass.";
  } else {
    // All questions in random order
    questionSet = shuffleArray(ALL_QUESTIONS);
    modeInfoEl.textContent =
      "Study Mode: All questions in random order. No pass/fail, but score is shown.";
  }

  currentIndex = 0;
  score        = 0;
  answered     = false;

  quizCard.classList.remove("hidden");
  resultCard.classList.add("hidden");

  renderQuestion();
}


// =======================================
// RENDER QUESTION
// =======================================

function renderQuestion() {
  const q = questionSet[currentIndex];
  const total = questionSet.length;

  progressEl.textContent = `Question ${currentIndex + 1} of ${total}`;
  questionText.textContent = q.question;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  nextBtn.disabled = true;
  answered = false;

  optionsList.innerHTML = "";

  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");

    label.classList.add("option-label");
    input.type = "radio";
    input.name = "option";
    input.value = i;
    input.classList.add("option-input");

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt));
    li.appendChild(label);
    optionsList.appendChild(li);
  });
}


// =======================================
// ANSWER HANDLING
// =======================================

function getSelectedOptionIndex() {
  const inputs = document.querySelectorAll(".option-input");
  for (const input of inputs) {
    if (input.checked) return parseInt(input.value, 10);
  }
  return null;
}

function checkAnswer() {
  if (answered) return;

  const q = questionSet[currentIndex];
  const selectedIndex = getSelectedOptionIndex();

  if (selectedIndex === null) {
    feedbackEl.textContent = "Please select an answer.";
    feedbackEl.className = "feedback incorrect";
    return;
  }

  const labels = document.querySelectorAll(".option-label");

  labels.forEach((label, i) => {
    label.classList.remove("option-correct", "option-incorrect");
    if (i === q.correctIndex) label.classList.add("option-correct");
    if (i === selectedIndex && i !== q.correctIndex) {
      label.classList.add("option-incorrect");
    }
  });

  if (selectedIndex === q.correctIndex) {
    score++;
    feedbackEl.textContent = "Correct. " + (q.explanation || "");
    feedbackEl.className = "feedback correct";
  } else {
    feedbackEl.textContent = "Incorrect. " + (q.explanation || "");
    feedbackEl.className = "feedback incorrect";
  }

  answered = true;
  nextBtn.disabled = false;
}

function goToNext() {
  if (!answered) return;

  currentIndex++;

  if (currentIndex >= questionSet.length) {
    showResults();
  } else {
    renderQuestion();
  }
}


// =======================================
// RESULTS
// =======================================

function showResults() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  const total = questionSet.length;
  const percent = ((score / total) * 100).toFixed(1);

  if (currentMode === MODE_TEST) {
    const passed = (score / total) >= PASS_THRESHOLD;
    resultTitle.textContent = passed ? "PASS" : "FAIL";

    const extra = passed
      ? "You met the 80% passing standard."
      : "You did not reach 80%. Review your weak areas and try again.";

    scoreText.textContent =
      `You scored ${score} out of ${total} (${percent}%).\n${extra}`;
  } else {
    resultTitle.textContent = "Study Mode Complete";
    scoreText.textContent =
      `You answered ${score} out of ${total} correctly (${percent}%).`;
  }
}


// =======================================
// EVENT LISTENERS
// =======================================

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", goToNext);
restartBtn.addEventListener("click", () => initQuiz(currentMode));

testModeBtn.addEventListener("click", () => initQuiz(MODE_TEST));
studyModeBtn.addEventListener("click", () => initQuiz(MODE_STUDY));


// Start app in Test Mode by default
initQuiz(MODE_TEST);
