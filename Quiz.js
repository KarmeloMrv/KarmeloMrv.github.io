const questions = [
    {
      question: "Which setting appeals to you the most?",
      answers: [
        { option: "Modern urban environments", score: 3 },
        { option: "Tropical islands", score: 1 },
        { option: "African savanna", score: 2 },
        { option: "Himalayan mountains", score: 4 },
        { option: "Post-apocalyptic wasteland", score: 5 }
      ]
    },
    {
      question: "What's your preferred playstyle?",
      answers: [
        { option: "Stealth and tactical", score: 3 },
        { option: "Open-world exploration", score: 2 },
        { option: "Fast-paced action", score: 1 },
        { option: "Story-driven narrative", score: 4 },
        { option: "Survival and crafting", score: 5 }
      ]
    },
    {
      question: "Which theme interests you the most?",
      answers: [
        { option: "Survival and primal instincts", score: 5 },
        { option: "Sci-fi and cyberpunk", score: 4 },
        { option: "Political intrigue", score: 3 },
        { option: "Historical or ancient cultures", score: 2 },
        { option: "Exploration and discovery", score: 1 }
      ]
    },
    {
      question: "What's your preferred antagonist type?",
      answers: [
        { option: "Complex and charismatic villains", score: 3 },
        { option: "Military and paramilitary adversaries", score: 1 },
        { option: "Supernatural or monstrous foes", score: 4 },
        { option: "Environmental or societal threats", score: 2 },
        { option: "Corrupt government or organization", score: 5 }
      ]
    },
    {
      question: "Which gameplay feature appeals to you?",
      answers: [
        { option: "Animal companions and hunting", score: 5 },
        { option: "Retro-futuristic gadgets and abilities", score: 4 },
        { option: "Base-building and survival elements", score: 3 },
        { option: "Weapon customization and varied combat", score: 2 },
        { option: "Dynamic weather and day-night cycle", score: 1 }
      ]
    },
    {
      question: "What's your preferred visual style?",
      answers: [
        { option: "Bright and colorful landscapes", score: 1 },
        { option: "Gritty and atmospheric environments", score: 3 },
        { option: "Vibrant and surreal settings", score: 5 },
        { option: "Realistic and immersive worlds", score: 2 },
        { option: "Unique art style", score: 4 }
      ]
    },
    {
      question: "Which game feature excites you the most?",
      answers: [
        { option: "Innovative narrative and branching choices", score: 4 },
        { option: "Dynamic and emergent gameplay", score: 3 },
        { option: "Unique characters and interactions", score: 2 },
        { option: "Epic scale and massive open worlds", score: 1 },
        { option: "Role-playing and decision-making", score: 5 }
      ]
    },
    {
      question: "Which character type resonates with you?",
      answers: [
        { option: "Lone survivor in a hostile environment", score: 2 },
        { option: "Hero facing overwhelming odds", score: 1 },
        { option: "Outsider exploring unfamiliar territory", score: 3 },
        { option: "Adventurer seeking new challenges", score: 4 },
        { option: "Complex and morally ambiguous characters", score: 5 }
      ]
    },
    {
      question: "What's your favorite game element out of these?",
      answers: [
        { option: "Unique vehicles and transportation", score: 2 },
        { option: "Non-linear story progression", score: 3 },
        { option: "Legendary and mythical encounters", score: 4 },
        { option: "Challenging enemies and bosses", score: 1 },
        { option: "Hidden secrets and easter eggs", score: 5 }
      ]
    },
    {
      question: "Which gameplay mechanic would you enjoy the most?",
      answers: [
        { option: "Survival crafting and resource management", score: 4 },
        { option: "Stealth and guerrilla tactics", score: 3 },
        { option: "Customizable arsenal and combat strategies", score: 2 },
        { option: "Exploration and discovery of hidden secrets", score: 1 },
        { option: "Dynamic multiplayer and co-op gameplay", score: 5 }
      ]
    }
  ];
  
  
      // Initialize quiz variables
      let currentQuestion = 0;
      let totalScore = 0;
      const quizContainer = document.getElementById('quiz');
      const submitButton = document.getElementById('submit');
      const resultsContainer = document.getElementById('results');
  
      // Function to display current question
      function displayQuestion() {
        const currentQuiz = questions[currentQuestion];
        const answersHTML = currentQuiz.answers.map(answer =>
          `<label><input type="radio" name="answer" value="${answer.score}"> ${answer.option}</label><br>`
        ).join('');
        quizContainer.innerHTML = `
          <div class="question">${currentQuiz.question}</div>
          <div class="answers">${answersHTML}</div>
        `;
      }

      function hideQuestion(){
        quizContainer.innerHTML = '';
      }
  
      // Function to calculate total score and suggest a game
      function showResults() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
          alert('Please select an answer before submitting.');
          return;
        }
        totalScore += parseInt(selectedAnswer.value);
        currentQuestion++;
  
        if (currentQuestion < questions.length) {
          displayQuestion();
        } else {
            hideQuestion();
          let suggestedGame;
          let gameLink;
          if (totalScore <= 10) {
            suggestedGame = "Far Cry 1";
            gameLink = "<a href='FarCry1.html'>Far Cry 1 Game Link</a>";
          } else if (totalScore <= 20) {
            suggestedGame = "Far Cry 2";
            gameLink = "<a href='FarCry2.html'>Far Cry 2 Game Link</a>";
          } else if (totalScore <= 30) {
            suggestedGame = "Far Cry 3";
            gameLink = "<a href='FarCry3.html'>Far Cry 3 Game Link</a>";
          } else if (totalScore <= 40) {
            suggestedGame = "Far Cry 4";
            gameLink = "<a href='FarCry4.html'>Far Cry 4 Game Link</a>";
          } else if (totalScore <= 50) {
            suggestedGame = "Far Cry 5";
            gameLink = "<a href='FarCry5.html'>Far Cry 5 Game Link</a>";
          } else if (totalScore <= 60) {
            suggestedGame = "Far Cry 6";
            gameLink = "<a href='FarCry6.html'>Far Cry 6 Game Link</a>";
          } else if (totalScore <= 70) {
            suggestedGame = "Far Cry Primal";
            gameLink = "<a href='FarCryP.html'>Far Cry Primal Game Link</a>";
          } else if (totalScore <= 80) {
            suggestedGame = "Far Cry 3: Blood Dragon";
            gameLink = "<a href='FarCryBD.html'>Far Cry 3: Blood Dragon Game Link</a>";
          } else {
            suggestedGame = "Far Cry New Dawn";
            gameLink = "<a href='FarCryND.html'>Far Cry New Dawn Game Link</a>";
          }
          
          resultsContainer.innerHTML = `
            <h2>Your suggested Far Cry game: ${suggestedGame}</h2>
            <p>Based on your preferences, we suggest starting with ${suggestedGame}.</p>
            <p> Check it out here: ${gameLink}.</p>
          `;
          submitButton.style.display = 'none';
        }
      }
  
      // Event listener for submit button
      submitButton.addEventListener('click', showResults);
  
      // Initial display of the first question
      displayQuestion();