/* The following program is a random quote generator that will cycle through quotes
if the button is pressed, or will change naturally on a set interval.
*/


// The following is an array containing objects, the quotes, and properties.
var quotes = [
  {
    phrase: 'Give me liberty, or give me death!',
    source: 'Patrick Henry',
    citation: 'Sketches of the Life and Character of Patrick Henry',
    year: '1775',
    state: 'Virginia'
  },
  {
    phrase: 'I don\'t agree with what you say but I will defend to the death your right to say it',
    source: 'Evelyn Beatrice Hall',
    citation: 'The Life of Voltaire',
    year: '1906',
    state: 'Ille-de-France'
  },
  {
    phrase: 'Those who would give up essential liberty, to purchase a little temporary safety, deserve neither Liberty nor safety',
    source: 'Benjamin Franklin',
    citation: 'Poor Richard\'s Almanac',
    year: '1755',
    state: 'Pennsylvania'
  },
  {
    phrase: 'The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants.',
    source: 'Thomas Jefferson',
    citation: 'Jefferson\'s Tree of Liberty',
    year: '1787',
    state: 'Virginia'
  },
  {
    phrase: 'Those who epect to reap the blessings of freedom, must, like men, undego the fatigue of supporting it',
    source: 'Thomas Paine',
    citation: 'The American Crisis',
    year: '1777',
    state: 'New York'
  },
];


// The getRandomQuote function will obtain a random number, it then uses that number to obtain a quote object.
function getRandomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

/* The printQuote calls the getRandomQuote and uses the information to obtain that quote's properties
it then displays those properties in the program's html.  It should also be noted that if they citation, year, or
state properties are not present, the program will present nothing for those properties within the html accordingly.*/

function printQuote(){
  var answer = getRandomQuote();
  var message = '<p class="quote">' + answer.phrase + '</p>';
  message += '<p class="source">' + answer.source ;
    if ( answer.citation ) {
    message += '<span class="citation">' + answer.citation + '</span>';
    }
    if ( answer.year ) {
    message += '<span class="year">' + answer.year + '</span>';
    }
    if ( answer.state ) {
    message += '<span class="tag">' + ', ' + answer.state + '</span>';
    }
  message += '</p>';

// The code below returns the message to html, changes the background color when the quote changes, and then logs that quote to the console.
  document.getElementById('quote-box').innerHTML = message;
  document.body.style.backgroundColor = getRandomColor();
  console.log(answer);
}

// The getRandomColor function obtains a randomly generated color.
function getRandomColor(){
  return rgbColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

/* The printQuote is called, the setInterval changes the quote and background color on a time interval, and the last line activates the change of the quote through the use of the html button. */
printQuote();
setInterval(printQuote, 4000);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
