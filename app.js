document.querySelectorAll('.product button')
    .forEach(el => {
        el.addEventListener('click', (event) => {
            const descricao = event.target.parentElement.querySelector('p').innerText;
           
            const titulo = event.target.parentElement.querySelector('h3').innerText;

            const price = event.target.parentElement.querySelector('#price').innerText;

           
          
            document.querySelector('#shoppingCart').append(titulo,price)
            
          
           
            localStorage.setItem('shopping Cart', titulo);
            console.log(event.target.value);
        })
    })

eval(price);
console.log(eval);

