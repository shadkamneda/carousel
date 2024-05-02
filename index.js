
const backgroundImagesArray = ['assets/images/DSC09545-244x365.jpg', 'assets/images/DSC09570-244x365.jpg', 'assets/images/DSC09650-244x365.jpg'] ;

let currentIndex = 0;
    document.getElementById("container").style.backgroundImage = `url('${backgroundImagesArray[currentIndex]}')`


function increase() {
    currentIndex++;
    document.getElementById("container").style.backgroundImage = `url('${backgroundImagesArray[currentIndex]}')`
}

function decrease() {
    currentIndex--;
    document.getElementById("container").style.backgroundImage = `url('${backgroundImagesArray[currentIndex]}')`

}





function x(number) {
    currentIndex++;
    document.getElementById("container").style.backgroundImage = `url('${backgroundImagesArray[currentIndex]}')`
}
