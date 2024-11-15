var pressQuote = document.getElementById("pressQuote");

var quoteOutput=document.getElementById("quoteOutput");
var quoteAuthor=document.getElementById("quoteAuthor");



function generateQuote() {

    var quotes = [{ quote: `“Be yourself; everyone else is already taken.”`, author: `― Oscar Wilde` },
    {quote: `"You miss 100% of the shots you don't take."`, author: `― Wayne Gretzy` },
    { quote: `“So many books, so little time.”`, author: `― Frank Zappa` },
    { quote: `“You only live once, but if you do it right, once is enough.”`, author: `― Mae West` },
    { quote: `“A room without books is like a body without a soul.”`, author: `― Marcus Tullius Cicero` },
    { quote: `“We accept the love we think we deserve.”`, author: `― Stephen Chbosky, The Perks of Being a Wallflower` },
    ]

    var random = Math.trunc(Math.random() * quotes.length);

     quoteOutput.innerHTML=quotes[random].quote;
    authorOutput.innerHTML=quotes[random].author;
}

pressQuote.addEventListener("click", generateQuote);