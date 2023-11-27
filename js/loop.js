var subjectObject = {
  "Front-end": {
    "HTML": ["Links", "Images", "Tables", "Lists"],
    "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
    "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
  },
  "Back-end": {
    "PHP": ["Variables", "Strings", "Arrays"],
    "SQL": ["SELECT", "UPDATE", "DELETE"]
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}

//Function to control quiz modules

function getResults1() {
  var amountCorrect = 0;

  for (var i = 1; i <= 3; i++) {
    var radiosName = document.getElementsByName('answer' +i);

  for (var j = 0; j < radiosName.length; j++) {
    var radiosValue = radiosName[j];
    if (radiosValue.checked) {
      if (radiosValue.value == "correct") {
        amountCorrect++;
        radiosValue.nextSibling.style.color = "green";
      } else {
        radiosValue.nextSibling.style.color = "red";
      }
    } else {
      radiosValue.nextSibling.style.color = "";
    }
  }

    }
  document.getElementById('results1').innerHTML = "Correct Answers: " + amountCorrect
}

function getResults2() {
  var amountCorrect = 0;

  for (var i = 4; i <= 6; i++) {
    var radiosName = document.getElementsByName('answer' +i);

  for (var j = 0; j < radiosName.length; j++) {
    var radiosValue = radiosName[j];
    if (radiosValue.checked) {
      if (radiosValue.value == "correct") {
        amountCorrect++;
        radiosValue.nextSibling.style.color = "green";
      } else {
        radiosValue.nextSibling.style.color = "red";
      }
    } else {
      radiosValue.nextSibling.style.color = "";
    }
  }

    }
  document.getElementById('results2').innerHTML = "Correct Answers: " + amountCorrect
}
