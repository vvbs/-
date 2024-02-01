const quizData = [
    {
      question: "お酢に卵を殻ごと入れるとどうなるだろうか",
      choices: ["透明な卵になる", "鏡のようになる", "石のように固くなる", "溶けてなくなる"],
      correctAnswer: 0
    },
    {
      question: "しゃっくりはどんな調味料を舐めると治るか",
      choices: ["お酢", "砂糖", "醤油", "塩"],
      correctAnswer: 1
    },
    {
      question: "お坊さんが木魚を叩くのはなぜ",
      choices: ["お経にリズムをつけるため", "亡くなった人が天国に行けるようにするため", "眠くならないようにするため", "悪い霊を寄せ付けないようにするため"],
      correctAnswer: 2
    },
     {
      question: "氷が長持ちする作り方は",
      choices: ["塩をいれた水で氷を作る", "沸騰した水を入れて氷を作る", "砂糖を入れた水を入れて氷を作る", "お酢を入れた水を入れて氷を作る"],
      correctAnswer: 1
    },
     {
      question: "ナメクジがかけられると溶けるのは塩と",
      choices: ["醤油", "砂糖", "小麦粉", "片栗粉"],
      correctAnswer: 1
    },
  


    // 他の質問を追加する
  ];
  
  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');
  const resultsContainer = document.getElementById('results');
  
  function buildQuiz() {
    const output = [];
  
    quizData.forEach((questionData, questionIndex) => {
      const choices = [];
  
      questionData.choices.forEach((choice, choiceIndex) => {
        choices.push(
          `<label>
            <input type="radio" name="question${questionIndex}" value="${choiceIndex}">
            ${choice}
          </label>`
        );
      });
  
      output.push(
        `<div class="question">${questionData.question}</div>
        <div class="choices">${choices.join('')}</div>`
      );
    });
  
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.choices');
    let score = 0;
  
    quizData.forEach((questionData, questionIndex) => {
      const answerContainer = answerContainers[questionIndex];
      const selected = answerContainer.querySelector(`input[name="question${questionIndex}"]:checked`);
  
      if (selected) {
        const selectedAnswer = parseInt(selected.value);
        if (selectedAnswer === questionData.correctAnswer) {
          score++;
        }
      }
    });
  
    resultsContainer.innerHTML = `正解数: ${score} / ${quizData.length}`;
  }
  
  submitButton.addEventListener('click', showResults);
