function transform() {
    var imgBoxes = document.getElementsByClassName("imgBox");
    if (imgBoxes.length > 0) {
        imgBoxes[0].style.transform = "rotateY(-180deg)";
    } else {
        console.error("No elements with class 'imgBox' found.");
    }
    
    
    var imgBoxElement = document.querySelector(".imgBox");

    if (imgBoxElement) {
        var childElements = imgBoxElement.children;

        for (var i = 0; i < childElements.length; i++) {
            childElements[i].style.opacity = "0";
        }
    }

    var cardElement = document.querySelector(".card");
    if (cardElement) {
        cardElement.style.boxShadow = "inset 20vh 0 3vh rgba(0, 0, 0, 0.5), 2vh 0 6vh rgba(0, 0, 0, 0.5)";
        cardElement.style.background = "#e0e1dc";
    }

}