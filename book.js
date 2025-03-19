const getRemoteBooks = function(){
    fetch('https://striveschool-api.herokuapp.com/books',{

    })
.then((response) =>{
    if(response.ok){
        console.log('books?',response)
     return response.json()
    }else{
        throw new Error('Il server non ha risposto correttamente')
    }
})
.then((data)=>{
    console.log('boh',data)
    data.forEach((books) => {
        const img = books.img
        const title = books.title
        const price = books.price
        const cardContainer = document.getElementById('forBook');

        //Creo card
        const forCard= document.createElement('div')
        forCard.classList.add('col',);
        const card = document.createElement('div');
        card.classList.add('card', 'border','border-2', 'border-dark','position-relative','h-100');
        forCard.append(card)
        
        //Immagine
        const newImg=document.createElement('img')
        newImg.classList.add('card-img-top','h-auto')
        newImg.src = img
        card.appendChild(newImg)


        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body','d-flex','flex-wrap','justify-content-end');
    
        //Prezzo e titolo
        const newTitle = document.createElement('h5')
        newTitle.classList.add('card-title','flex-grow-1')
        newTitle.innerText = title
        cardBody.appendChild(newTitle)
        const newPrice = document.createElement('p')
        newPrice.classList.add('card-text','fs-italic','mb-4')
        newPrice.innerText = price + '$'
        cardBody.appendChild(newPrice)
         
        const remove = document.createElement('button')
        remove.classList.add('btn','btn-danger','position-absolute','bottom-0','end-0')
        remove.innerText = 'DELETE'
        cardBody.appendChild(remove)
        const removeBook = function(){
        remove.addEventListener('click',function(){
            forCard.classList.add('d-none')
        })
        } 
        removeBook()
        card.appendChild(cardBody);
        cardContainer.appendChild(forCard);
        
    });
})
.catch((err) => {
    console.log('uffa!', err)
  })
}
getRemoteBooks()