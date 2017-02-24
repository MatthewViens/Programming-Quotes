var quote = {};
var quoteDisplay = document.querySelector('.quote');
var authorDisplay = document.querySelector('.author');
var quoteButton = document.querySelector('button');
var twitterLink = document.querySelector('.tweet a');

quoteButton.addEventListener('click', function(){
  getNewQuote();
});

function getNewQuote(){
  var quoteXHR = new XMLHttpRequest();
  quoteXHR.open('GET', 'http://quotes.stormconsultancy.co.uk/random.json');
  quoteXHR.send();
  quoteXHR.onreadystatechange = function(){
    if(quoteXHR.readyState === 4 && quoteXHR.status === 200){
      quote = JSON.parse(quoteXHR.responseText);
      quoteDisplay.innerHTML = '‟' + quote.quote + '”<br><br>-' + quote.author;
      twitterLink.setAttribute("href",
      "https://twitter.com/intent/tweet?hashtags=programmerquotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + quote.quote + '" -' + quote.author));
    }
  }
}

getNewQuote();
