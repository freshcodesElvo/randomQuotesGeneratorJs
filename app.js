let quote = document.getElementById('quote');
let btn = document.getElementById("newQuote");
 let url = 'https://dummyjson.com/quotes'
 let author = document.querySelector(".author");
 let random_number;

 let generate_quote = async () => {
    random_number = Math.floor(Math.random() * 30) + 1;
    fetch(url).then(response => response.json()).then(item =>{
        quote.textContent =`${item.quotes[random_number].quote} `;
        author.textContent = `${item.quotes[random_number].author}`
    })
 }
 btn.addEventListener("click", ()=>{
    generate_quote()
 })
