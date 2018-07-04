const generate = [
    {
        "quoteAuthor": "The 11th Doctor",
        "quoteText": "Everything's got to end sometime. Otherwise nothing would ever get started."
    },
    {
        "quoteAuthor": "The 10th Doctor",
        "quoteText": "Some people live more in twenty years than others do in eighty. It's not the time that matters, it's the person."
    },
    {
        "quoteAuthor": "Wilfred Mott",
        "quoteText": "You're not gonna make the world any better by shouting at it!"
    },
    {
        "quoteAuthor": "Rose Tyler",
        "quoteText": "You don't just give up. You don't just let things happen. You make a stand. You say no. You have the guts to do what's right when everyone else just runs away!"
    },
    {
        "quoteAuthor": "The 4th Doctor",
        "quoteText": "There's no point in being grown up if you can't be childish sometimes."
    },
    {
        "quoteAuthor": "The 11th Doctor",
        "quoteText": "Never run when you're scared."
    },
     {
        "quoteAuthor": "Sarah Jane Smith",
        "quoteText": "The universe has to move forward. Pain and loss, they define us as much as happiness or love. Whether it's a world, or a relationship... Everything has its time. And everything ends."
    },
    {
        "quoteAuthor": "The 3rd Doctor",
        "quoteText": "A straight line may be the shortest distance between two points, but it is by no means the most interesting."
    },
     {
        "quoteAuthor": "The 11th Doctor",
        "quoteText": "The way I see it, every life is a pile of good things and... bad things. The good things don't always soften the bad things, but vice versa, the bad things don't necessarily spoil the good things or make them unimportant"
    },
    {
        "quoteAuthor": "The 4th Doctor",
        "quoteText": "You can't rule the world in hiding. You've got to come out on the balcony sometimes and wave a tentacle."
    },
    {
        "quoteAuthor": "Reinette Poisson",
        "quoteText": "One may tolerate a world of demons for the sake of an angel."
    },
    {
        "quoteAuthor": "The 4th Doctor",
        "quoteText": "One good solid hope's worth a cart-load of certainties."
    },
    {
        "quoteAuthor": "The 3rd Doctor",
        "quoteText": "Superior intelligence and senseless cruelty just do not go together."
    },
    {
        "quoteAuthor": "The 11th Doctor",
        "quoteText": "Letting it get to you. You know what that's called? Being alive. Best thing there is. Being alive right now is all that counts."
    },
    {
        "quoteAuthor": "The 4th Doctor",
        "quoteText": "Just be your natural, horrid self."
    },
     {
        "quoteAuthor": "The 3rd Doctor",
        "quoteText": "Courage isn't just a matter of not being frightened, you know. It's being afraid and doing what you have to do anyway."
    },
    {
        "quoteAuthor": "The 4th Doctor",
        "quoteText": "The very powerful and the very stupid have one thing in common. They don't alter their views to fit the facts. They alter the facts to fit the views. Which can be uncomfortable if you happen to be one of the facts that needs altering"
    },
    {
        "quoteAuthor": "The 4th Doctor",
        "quoteText": "Never be certain of anything. It's a sign of weakness. To the rational mind, nothing is inexplicable; only unexplained."
    },
    {
        "quoteAuthor": "The 11th Doctor",
        "quoteText": "Nobody important? Blimey, that’s amazing. Do you know, in nine hundred years of time and space I’ve never met anyone who wasn’t important before."
    },
    {
        "quoteAuthor": "The 11th Doctor",
        "quoteText": "Nobody important? Blimey, that’s amazing. Do you know, in nine hundred years of time and space I’ve never met anyone who wasn’t important before."
    },
    {
        "quoteAuthor": "The 10th Doctor",
        "quoteText": "There’s a lot of things you need to get across this universe. Warp drive… wormhole refractors… You know the thing you need most of all? You need a hand to hold."
    }
    ]

function randomQuote() { 
    var random = generate[Math.floor(Math.random() * generate.length)];
    quotation.innerText= `“${random.quoteText}”`;
    source.innerText = random.quoteAuthor;
  $('#twitter-share-button').attr('href','https://twitter.com/intent/tweet?text=' + quotation.innerText + ' - ' + random.quoteAuthor);
    };

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote);
//$('#twitter-share-button').attr('href','https://twitter.com/intent/tweet?'+ hell);