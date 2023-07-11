(
fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
    let con=document.getElementById('container')
    console.log(data)
    data.products.forEach(value => {
        con.innerHTML += ` 
        
  <div class="col-sm-6 col-lg-3 col-md-4">
    <div class="card" style='height='300px'>
      <img src="${value.images[0]}" class="card-img-top" height='200px' alt="...">
      <div class="card-body">
        <h5 class="card-title">${value.title}</h5>
        <p class="card-text">${value.description}</p>
      </div>
    </div>
  </div>
  
  
    
  
`
    });
})
)()