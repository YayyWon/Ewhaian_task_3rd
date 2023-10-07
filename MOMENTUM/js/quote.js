const quotes = [
    {
        quote: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는 자에게는 능치 못할 일이 없느니라 하시니",
        author: "마가복음 9:23",
    },
    {
        quote: "네가 보거니와 믿음이 그의 행함과 함께 일하고 행함으로 믿음이 온전케 되었느니라",
        author: "야고보서 2:22",
    },
    {
        quote: "가로되 내가 모태에서 적신이 나왔사온즉 또한 적신이 그리로 돌아 가올찌라 주신 자도 여호와시요 취하신 자도 여호와시오니 여호와의 이름이 찬송을 받으실찌니이다 하고",
        author: "욥기 1: 21"
    },
    {
        quote: "이것을 너희에게 이르는 것은 너희로 내 안에서 평안을 누리게 하려 함이라 세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 이기었노라",
        author: "요한복음 16:33"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//랜덤으로 뽑기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//명언 출력
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;