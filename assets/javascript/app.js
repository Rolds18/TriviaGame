$("#start").on('click',function(){
  game.start()
})

$(document).on('click','#end',function(){
  game.done();
})


var questions =[{ 
  
  question:"Which country has beaver as the national emblem?",
  answers:["Turkey","Peru","Canada", "Russia"],
  correctAnswer: "Canada",

}, {
  question:"Which is the hottest planet?",
  answers:["Venus","Mercury","Saturn", "Jupiter"],
  correctAnswer: "Venus",

}, {
  question:"What are the tallest trees on Earth?",
  answers:["Coast Redwood","Coast Douglas Fir","Giant Sequoia", "Sitka Spruce"],
  correctAnswer: "The Coast Redwood",

}, {
  question:"Which war caused the greatest loss of life for Americans?",
  answers:["WW1","WW2","Vietnam", "The Civil War"],
  correctAnswer: "The Civil War",

}, {
  question:"Which country employed the first police woman?",
  answers:["England","USA","France", "Australia"],
  correctAnswer: "USA",

}, {
  question:"What was the first full-length CGI movie?",
  answers:["A Bug's Life","Monster Inc.","Toy Story", "The Lion King"],
  correctAnswer: "Toy Story",

}, {
  question:"What is the world’s most venomous fish?",
  answers:["Scorpion Fish","Lion Fish","Stonefish", "Toadfish"],
  correctAnswer: "Stonefish",

}, {
  question:"What was the name of Robert De Niro’s character in Taxi Driver?", 
  answers:["Jimmy Bickle","Travis Bickle","Virgil Bickle", "Harry Bickle"],
  correctAnswer: "Travis Bickle",

}]; 

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
          console.log("Time is Up!");
          game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<questions.length; i++){
          $('#subwrapper').append('<h2>' + "<font color=lightblue>" +questions[i].question + '</h2>');
          for(var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+ " '>"+questions[i].answers[j])
          }
        } 
        $('#subwrapper').append('<br><button id="end">DONE</button>')
    },
    done: function(){
      $.each($("input[name='question-0']:checked"),function(){
      if($(this).val()==questions[0].correctAnswer){ 
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"),function(){
      if($(this).val()==questions[1].correctAnswer){ 
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"),function(){
      if($(this).val()==questions[2].correctAnswer){ 
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"),function(){
      if($(this).val()==questions[3].correctAnswer){ 
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"),function(){
      if($(this).val()==questions[4].correctAnswer){ 
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"),function(){
      if($(this).val()==questions[5].correctAnswer){ 
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"),function(){
      if($(this).val()==questions[6].correctAnswer){ 
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"),function(){
      if($(this).val()==questions[7].correctAnswer){ 
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>")
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>")
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
         
    }

  }
