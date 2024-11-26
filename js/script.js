//CRUDS ===> create retireve update delete serach

var productName = document.getElementById('productName'); //input
var productPrice = document.getElementById('productPrice'); //input
var productImage = document.getElementById('productImage');
var productCat = document.getElementById('productCat');
var productDesc = document.getElementById('productDesc');
var dataRow = document.getElementById('dataRow');
var searchInput = document.getElementById('searchInput');
var productList = []
if(localStorage.getItem('products')!==null)
{
 productList= JSON.parse(localStorage.getItem('products'))
 display() 
}

//optinal chaning
function addProduct()
{
   var productObj  = {
    pName:productName.value,
    pPrice:productPrice.value,
    pCat:productCat.value,
    pDesc:productDesc.value,
    pImage:(productImage.files[0])?'./img/'+productImage.files[0]?.name:'https://placehold.co/600x400'

   }
   productList.push(productObj)
   clearForm()
   display()
   localStorage.setItem('products',JSON.stringify(productList))
}

function display()
{
    var box = ''
    for(var i=0;i<productList.length;i++)
    {
     box+=`
      <div class="col-md-3">
               <div class="product">
                <img src="${productList[i].pImage}" class="w-100" alt="">
                <h2 class="h3">${productList[i].pName}</h2>
                <div class="d-flex justify-content-between">
                
                    <h3 class="h5">price <span class="text-danger">${productList[i].pPrice} </span></h3>
                    <h3 class="h5"> Category ${productList[i].pCat} </h3>
                </div>
                <p class="lead">${productList[i].pDesc}</p>
                <button class="btn btn-outline-warning">update<i class="fa-solid fa-edit"></i></button>
                <button  onclick="deleteBox(${i})" class="btn btn-outline-danger">delete<i class="fa-solid fa-trash"></i></button>
               </div>
            </div>
     `
    }
    dataRow.innerHTML = box

}

function clearForm()
{
    
   productName.value = null;
   productDesc.value = null;
   productCat.value = null;
   productPrice.value = null;
   productImage.value =null

}
function deleteBox(index)
{
   productList.splice(index,1)
   localStorage.setItem('products',JSON.stringify(productList))
   display()
}
function searchFun(){
  console.log(searchInput.value);
}