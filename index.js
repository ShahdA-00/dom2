const products =[
    {

    id: 1,
    title:"Foster Farms Takeout Crispy Classic",
    description:"Crabs are decapod crustaceans of the infraorder Brachyura, which typically have a very short projecting “tail”",
    image:"./assets/product-4-1-768x768.jpg",
    label:{
        value:"Sale",
        color:"#ea7d1e"
    }
},

    {

    id: 2,
    title:"Blue Almonds Lightly Salted Vegetables",
    description:"Crabs are decapod crustaceans of the infraorder Brachyura, which typically have a very short projecting “tail”",
    image:"./assets/product-5-1-768x768.jpg",
    label:{
        value:"New",
        color:"#1b8ed1"
    }
    
},

    {

    id: 3,
    title:"Chobani Complete Vanilla Greek Yogurt",
    description:"Crabs are decapod crustaceans of the infraorder Brachyura, which typically have a very short projecting “tail”",
    image:"./assets/product-9-1-768x768.jpg",
    label:{
        value:"Hot",
        color:"#c1193d"
    }
},

];

const productContainer = document.querySelector(".product-cards");
const layer = document.querySelector(".layer");
const close = document.querySelector(".close");
const galleryImg = document.querySelector(".imges img");
products.forEach((product) => productContainer.innerHTML+= ` 
            <div class=" product-card shadow-lg rounded-lg p-3">
          <div onclick="OPenPopUp(${product.id})" class=" rounded-xl overflow-hidden h-auto relative">
          <div class="bg-[${product.label.color}] rounded-br-2xl top-0 left-0 text-white absolute px-2 py-1">${product.label.value}</div>
            <img src="${product.image}" alt="img1" class=" img-1 w-full h-full object-cover">
        </div>  

          <div class=" details">
            <h3 class="font-medium  text-md my-1">${product.title}</h3>
            <p class="text-gray-400 text-xs ">${product.description}</p>
          </div>
        
    </div>`);

    function OPenPopUp(ProductId){
       const product = products.find(product => product.id === ProductId)
       const currentproduct = products.findIndex((product) => product.id === ProductId);
       layer.classList.remove("opacity-0" , "pointer-events-none")
       galleryImg.src = product.image
       CurrentImage=currentproduct
    }
    
    function remove() {
        layer.classList.add("opacity-0" , "pointer-events-none")
    }
    
    function nextbutton(){
        if(CurrentImage >= products.length-1)
            {
                CurrentImage=0
                galleryImg.src=products[CurrentImage].image;
            }
            else{
                CurrentImage++
                galleryImg.src=products[CurrentImage].image;
            }     
    }

    function perv(){
        if(CurrentImage===0){
            CurrentImage =products.length-1
            galleryImg.src=products[CurrentImage].image;
            
        }
        
        else{
            CurrentImage--
            galleryImg.src=products[CurrentImage].image;
            
        }
    }
    