// função para salvar o produto no localstorage
// localstorage é o espaço em nuvem disponível no navegador 
function saveProduct(product, storageType){
    let products = JSON.parse(localStorage.getItem(storageType))||[];
    products.push(product);
    localStorage.setItem(storageType, JSON.stringify(products));
}

// função para receber a entrada do dado
document.getElementById('productForm').addEventListener('submit',(e) => {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    const productDate = document.getElementById('productDate').value;
    const storageType = document.getElementById('storageType').value;

    const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
        date: productDate
    }
    saveProduct(product, storageType);
    alert(`produto ${product} adicionado em ${storageType}`);

    document.getElementById('productForm', reset());


});

// função para simular uma API externa
function fetchAnimals (){
    return new Promise((resolve,reject) => 
        fetch('https://jsonplaceholder.typicode.copm/users') //API ficticisa 
        .then (response =>  {
            if (!response.ok) {
                throw new console.error('erro ao carregar dados.')   
            } 
          return response.json();  
        }
    )
}

// função para exibir dados 
document.getElementById('fetchAnimals').addEventListener('click',() {
    fetchAnimals()
    .then(animals => {
        const animaList = document.getElementById('animaList');
        animaList.appendChild(li);

    });
})

