// // case increase and decrease

function updateProductNumber(product,price,isIncrease){
    const inputProduct = document.getElementById(product + '-number')
    const inputCaseText = inputProduct.value
    let inputProductNumber = parseInt(inputCaseText)
    if (isIncrease){
        inputProduct.value = parseInt(inputProductNumber) + 1
        inputProductNumber = inputProductNumber + 1
    }
    else if(inputProductNumber > 0){
        inputProduct.value = parseInt(inputProductNumber) - 1
        inputProductNumber = inputProductNumber - 1
    }

    // udate the case price

    const totalProductPrice = document.getElementById(product + '-total')
    let totalProductPriceSet = totalProductPrice.innerText = price * inputProductNumber


    // Update subtotal

    const subTotal = document.getElementById('sub-total')
    subTotal.innerText = totalProductPriceSet


    calcTotal()

    

    
    


}

// -------------------------------calculation subtotal


function calcTotal(){
    const inputTextPhone = document.getElementById('phone-number')
    const inputNumberPhone =parseInt(inputTextPhone.value)
    const inputTextCase = document.getElementById('case-number')
    const inputNumberCase =parseInt(inputTextCase.value)
    const totalPhoneAmount = inputNumberPhone * 1219
    const totalCaseAmount = inputNumberCase * 59
    const totalAmount  = totalCaseAmount + totalPhoneAmount
    const tax = totalAmount / 10
    const total = totalAmount + tax

    // calc subtotal
    document.getElementById('sub-total').innerText = totalAmount
    // Update Tax
    document.getElementById('tax-amount').innerText = tax
    // update total 
    document.getElementById('total-price').innerText = total
    
}


//--------------------------------------------- Handle the case price
// case increase
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true)
})
// case decrease
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false)
})


//--------------------------------------------- Handle the phone price
// Increase phone price
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true)
})
// Decrease phone price
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false)
})








