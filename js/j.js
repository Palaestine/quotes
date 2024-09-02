

let quote = document.getElementById("quote");
let author = document.getElementById("author");

const newQuoteBtn = document.getElementById("newQuote");
const tweetBtn = document.querySelector(".tweet");

const apiUrl = "https://api.quotable.io/random";



async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(apiUrl);


newQuoteBtn.addEventListener("click" , ()=>{
    getQuote(apiUrl);

});

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "                  " +  `"--${author.innerHTML}--"` , "tweet Window" , "width=600 , height=600");
}
tweetBtn.addEventListener("click" , ()=>{

    tweet();
});
   


