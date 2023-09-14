const quotes = [
    "The only way to do great work is to love what you do...",
    "Life is 10% what happens to us and 90% how we react to it...",
    "In three words I can sum up everything I've learned about life: it goes on...",
    "Success is not final, failure is not fatal: It is the courage to continue that counts...",
    "The best time to plant a tree was 20 years ago. The second best time is now...",
    "Believe you can and you're halfway there...",
    "If you obey all the rules, you miss all the fun...",
    "You were born to be a player...",
    "Life is not what you alone make it...",
    "When you reach the end of your rope, tie a knot and hang out...",
    "Never regret anything that made you smile..."
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

newQuoteButton.addEventListener('click', function () {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
});

// Display initial quote
quoteElement.textContent = getRandomQuote();