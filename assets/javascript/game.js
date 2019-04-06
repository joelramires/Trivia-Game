$("document").ready(function(){
  //  question bank
  var questions = [
    {
      question: 'What color is Yoda’s lightsaber in Attack of the Clones and Revenge of the Sith? ',
      answer: 'Green',
      choices: ['Green ', "Blue", "Red", "Purple"],
      userAnswer: ""
    },
    {
      question: 'What is Count Dooku’s Sith name?',
      answer: 'Darth Tyranus',
      choices: ['Darth Tyranus ', "Darth Nihilus ", "Darth Maul", "Darth Sidious"],
      userAnswer: ""
    },
    {
      question: 'What do Han and Luke ride in the Snow on Hoth',
      answer: 'Tauntaum',
      choices: ['Tauntaum', "Dewback", "Blurrg", "Bantha"],
      userAnswer: ""
    },
    {
      question: 'What planet is home to Chewbacca?',
      answer: 'Kashyyk',
      choices: ['Kashyyk', "Tatooine", "Naboo", "Dagobah"],
      userAnswer: ""
    },
    {
      question: 'R2-D2 is classified as what type of droid?',
      answer: 'Astromech',
      choices: ['Labor droid', "Battle droid ", "Protocol droid", "Astromech"],
      userAnswer: ""
    },
    {
      question: 'How much total does Obi-Wan Kenobi agree to pay Han Solo for safe passage to Alderaan?',
      answer: '17,000 credits ',
      choices: ['23,000 credits', "2,000 credits ", "10,000 credits", "17,000 credits"],
      userAnswer: ""
    },
    {
      question: 'While serving as a stormtrooper, Finn was known as?',
      answer: 'FN-2187',
      choices: ['FN-2187', "FN-2199 ", "FN-2000", "FN-2003"],
      userAnswer: ""
    },
    {
      question: 'Approximately how many forms of communication does C-3P0 know?',
      answer: '6 Million',
      choices: ['6 Million', "3 Million ", "1 Million", "10 Million"],
      userAnswer: ""
    },
    {
      question: 'What is the name of Boba Fett’s Ship?',
      answer: 'Slave 1',
      choices: ['Ravager', "Ebon Hawk", "Tantive IV", "Slave 1 "],
      userAnswer: ""
    },
    {
      question: 'How old was Yoda when he died?',
      answer: '900',
      choices: ['900', "600", "800", "700"],
      userAnswer: ""
    },
   

  ];
  
  // variables
  var correct;
  var incorrect;
  var answer;

  var currentQuestion = {
    question: "",
    answer: '',
    choices: [], 
  }

  
  // function to print all questions to page
  function renderQuestions() {
    // clear out form
    $("#quiz-form").empty();

  

    // Loop through questions array
    questions.forEach(function (question, index) {
      // create div to hold question
      var $question = $("<div>").addClass("form-group");
        // <div class="form-group"></div>
      
      // add question to div
      var $label = $("<h4>")
        .text(question.question)
        .appendTo($question);
          
            // <div class="form-group"> 
            //   <h4>Question 1</h4> 
            // </div>
          

      // shuffle choices
      question.choices = question.choices.sort(function() {
        return .5 - Math.random();
      });

      // create a loop to iterate through question's choices and create radio buttons for each one
      for (var i = 0; i < question.choices.length; i++) {
        // create a div for choice and add bootstrap classes
        var $choice = $('<div>');
        $choice.addClass('form-check form-check-inline');
        
        // create an input tag for the radio button
        var $radio = $('<input>');

        // add attributes to provide the answer choice
        // the "name" attribute is super important, all radio buttons per question need to have the same "name" so they know which question it applies to
        $radio
          .attr({
            type: "radio",
            value: question.choices[i],
            name: index,
            class: "form-check-input"
          })
          .appendTo($choice);
        
        // create label to actually print the choice to the page
        var $choiceLabel = $('<label>');
        $choiceLabel
          .text(question.choices[i])
          .addClass('form-check-label')
          .appendTo($choice);
        
        // add whole radio button choice to question
        $choice.appendTo($question);
      }
      // when done making all of the choices, add whole question to the page
      $("#quiz-form").append($question);
    });
  }
   

  // create on "change" listener for all radio buttons but bind them to quiz-form since it's permanently on the page
  $("#quiz-form").on("change", ".form-check-input", function() {
    console.log(this);
    
    // GET question index out of "name" attribute so we know what question you answered
    var questionIndex = $(this).attr("name");

    console.log(questions[questionIndex]);

    // get value out of radio button you selected
    var answer = $(this).val();

    // set answer to question's userAnswer property
    questions[questionIndex].userAnswer = answer;
    
  });

  renderQuestions();

})

    
  