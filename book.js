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
        const card = document.createElement('div');
        card.classList.add('col-3', 'border','border-2', 'border-dark','me-2','position-relative');
        
        //Immagine
        const newImg=document.createElement('img')
        console.log('IMG?',img)
        newImg.classList.add('card-img-top')
        newImg.src = img
        card.appendChild(newImg)


        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body',);
    
        //Prezzo e titolo
        const newTitle = document.createElement('h5')
        newTitle.classList.add('card-title')
        newTitle.innerText = title
        cardBody.appendChild(newTitle)
        const newPrice = document.createElement('p')
        newPrice.classList.add('card-text')
        newPrice.innerText = price
        cardBody.appendChild(newPrice)
         
        const remove = document.createElement('button')
        remove.classList.add('btn','btn-danger','position-absolute','bottom-0','end-0')
        remove.innerText = 'DELETE'
        cardBody.appendChild(remove)
        const removeBook = function(){
        remove.addEventListener('click',function(){
            card.classList.add('d-none')
        })
        } 
        removeBook()
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
        
    });
})
.catch((err) => {
    console.log('uffa!', err)
  })
}
getRemoteBooks()