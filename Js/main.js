var quotesArr = [
    { quote: "“It is better to be hated for what you are than to be loved for what you are not.”", auther: "~Andre Gide~" },
    { quote: "“I am so clever that sometimes I don't understand a single word of what I am saying.”", auther: "~Oscar Wilde~" },
    { quote: "“Without music, life would be a mistake.”", auther: "~Friedrich Nietzsche~" },
    { quote: "“We accept the love we think we deserve.”", auther: "~Stephen Chbosky~" },
    { quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", auther: "~Mahatma Gandhi~" },
    { quote: "“Always forgive your enemies; nothing annoys them so much.”", auther: "~Oscar Wilde~" },
    { quote: "“A friend is someone who knows all about you and still loves you.”", auther: "~Elbert Hubbard~" },
    { quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`, auther: "~C.S. Lewis~" },
    { quote: "“If you tell the truth, you don't have to remember anything.”", auther: "~Mark Twain~" },
];
var oldRandom;
function newQuote() {
    var random = Math.floor(Math.random() * quotesArr.length);    
    while (oldRandom == random) {
        random = Math.floor(Math.random() * quotesArr.length);
    }
    oldRandom = random; 
    document.getElementById("quote").innerText = `${quotesArr[random].quote}`
    document.getElementById("auther").innerText = `${quotesArr[random].auther}`
}