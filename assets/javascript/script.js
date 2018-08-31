

var db = [
  {
    'question': "Stepping in to your shuttle, Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle,Stepping in to your shuttle, ",
    answers: [
      { title: "Southsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink", response: 1 },
      { title: "NorthSouthsouthstouth no dog goes up the sink Southsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink", response: 2 },
      { title: "WestSouthsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink Southsop the sink", response: 3 },
      { title: "EasSouthsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink Southsouthstouth north the dog goes up the sink Southsouthst", response: 4 }
    ],
    image: 'assets/images/'
  },
  {
    question: "You are in the South, There is one exit",
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
// The window is an object, global vars are properties of this obj, as global functions
// are methods of it, hence the notation.
function printCurrentLocation() {
  // First, print index 0 message & image.
  $(".text").empty();
  $(".text").append("<p>" + db[currentLocation].question + "<p>");
  // $(".img").html = db[currentLocation].image;
  $(".console").empty();
  // Loop through the answers array and create buttons for each, then print them.
  for (i = 0; i < db[currentLocation].answers.length; i++) {
    $(".console").append("<p><button onclick='setLocation(" + db[currentLocation].answers[i].response + ")'>" + db[currentLocation].answers[i].title + "</button></p>");
  }
  }
// Another window.method, update currentLocation, reprint the window.
function setLocation(button) {
  currentLocation = button;
  printCurrentLocation();
}

printCurrentLocation();