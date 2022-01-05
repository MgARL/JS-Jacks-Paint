//Initial Commit
//Getting an Array of all Images
let images = document.querySelectorAll('img');
//other Global Variables
let colorNames = ['Lime Green', 'Medium Brown', 'Royal Blue', 'Solid Red', 'Solid White', 'Solid Black', 'Solid Cyan', 'Solid Purple', 'Solid Yellow'];
let prices = [14.99, 11.14, 22.99, 13.42, 21.98, 4.99, 8.22, 11.99, 14.99]

//configuring the listeners 
function configureListeners(){
    //for loop to add event listeners
    for (let i = 0; i < images.length; i++){
        document.querySelector(`#${images[i].id}`).addEventListener('mouseover', reduceOpacity);
        document.querySelector(`#${images[i].id}`).addEventListener('mouseout', removeOpacity);
    }
}
//Defining the functions we need.
//Getting the Name Function

function reduceOpacity(event){
    let img = event.target;
    img.setAttribute('class', 'dim');
    let elementID = event.target.id;
    getColorInfo(elementID);
}

function removeOpacity(event){
    let img = event.target;
    // console.log(img.classList)
    img.classList.remove('dim');
    removeInfo()

}

function getColorInfo(elementID) {
    // console.log(event.target.id)
    let colorName = null;
    let price = null;

    switch(elementID){
        case 'pn1':
            colorName = colorNames[0];
            price = prices[0];
            console.log(colorName, price)
            break;
        case 'pn2':
            colorName = colorNames[1];
            price = prices[1];
            console.log(colorName, price)
            break;
        case 'pn3':
            colorName = colorNames[2];
            price = prices[2];
            console.log(colorName, price)
            break;
        case 'pn4':
            colorName = colorNames[3];
            price = prices[3];
            console.log(colorName, price)
            break;
        case 'pn5':
            colorName = colorNames[4];
            price = prices[4];
            console.log(colorName, price)
            break;
        case 'pn6':
            colorName = colorNames[5];
            price = prices[5];
            console.log(colorName, price)
            break;
        case 'pn7':
            colorName = colorNames[6];
            price = prices[6];
            console.log(colorName, price)
            break;
        case 'pn8':
            colorName = colorNames[7];
            price = prices[7];
            console.log(colorName, price)
            break;
        case 'pn9':
            colorName = colorNames[8];
            price = prices[8];
            console.log(colorName, price)
            break;
    }
    console.log(colorName,price)
    displayInfo(colorName, price)
}

function displayInfo(colorName, price) {
    let colorH1 = document.querySelector('#color');
    colorH1.textContent = colorName;
    let priceH1 = document.querySelector('#ppg');
    priceH1.textContent = price;
}

function removeInfo() {
    let colorH1 = document.querySelector('#color');
    colorH1.textContent = null;
    let priceH1 = document.querySelector('#ppg');
    priceH1.textContent = null;
}
