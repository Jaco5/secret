

var db = [
  {
    question: "You are in your cabin, having just awoken from rest. As usual your throat is dry and you feel cramped, the slightly thin air smells like              ozone.",
    answers: [
      { title: "Exit", response: 1 },
    ],
    image: 'assets/images/'
  },
  {
    question: "You are in the hallway",
    answers: [
      { title: "North", response: 0 }
    ],
    image: 'assets/images/'

  },
  {
    question: "You are in the North, There is one exit",
    answers: [
      { title: "South", response: 0 }
    ],
    image: 'assets/images/'
  },
  {
    question: "You are in the West, There are two exits.",
    answers: [
      { title: "East", response: 0 },
      { title: "West", response: 5 }
    ],
    image: 'assets/images/'
  },
  {
    question: "You are in the East, There is one exit",
    answers: [
      { title: "West", response: 0 }
    ],
    image: 'assets/images/'
  },
  {
    question: "You are the winner!",
    answers: [
      { title: "Start Over", response: 0 }
    ],
    image: 'assets/images/'
  }
];

var currentLocation = 0;

function printCurrentLocation() {

  $(".text").empty();
  $(".text").append("<p>" + db[currentLocation].question + "<p>");
  // $(".img").html = db[currentLocation].image;
  $(".console").empty();
  for (i = 0; i < db[currentLocation].answers.length; i++) {
    $(".console").append("<p><button onclick='setLocation(" + db[currentLocation].answers[i].response + ")'>" + db[currentLocation].answers[i].title + "</button></p>");
  }
}

function setLocation(button) {
  currentLocation = button;
  printCurrentLocation();
}

printCurrentLocation();