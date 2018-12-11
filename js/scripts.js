$(document).ready(function() {
  $("#submit ").click(function() {
    $(".panel").hide();


    var radio = [];


    radio.push($("input:radio[name= q1]:checked").val());
    radio.push($("input:radio[name= q2]:checked").val());
    radio.push($("input:radio[name= q3]:checked").val());
    radio.push($("input:radio[name= q4]:checked").val());
    radio.push($("input:radio[name= q5]:checked").val());

    var correct = 0;

    if (radio[0] == "ECMAScript") {
      correct++;
    }
    if (radio[1] == "script-tag") {
      correct++;
    }
    if (radio[2] == "var x") {
      correct++;
    }
    if (radio[3] == "c
      correct++;
      if (radio[4] == "interaction") {
        correct++;
      }
    }

    $("p#results").html(correct + "correct");
    $("p#results").show();
  });
});