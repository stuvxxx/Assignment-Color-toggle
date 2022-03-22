// VARIA // 

let menu = document.getElementById("burgerMenu")
let colorMenu = document.getElementById("colorMenu")
let mySecretBlock = document.getElementById("secretBlock")
let home = document.getElementById("home")
let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")
let orange = document.getElementById("orange")
let purple = document.getElementById("purple")
let body = document.getElementById("body")



// MOUSE-OVER //

menu.addEventListener("pointerover", function() {
    colorMenu.style.transform = "translateX(0px)"
});

mySecretBlock.addEventListener("pointerover", function() {
    colorMenu.style.transform = "translateX(-230px)"
});

colorMenu.addEventListener("pointerleave", function() {
    colorMenu.style.transform = "translateX(-230px)"
});

// TOEWIJZING EIGENSCHAPPEN //

//body//
home.classList.add('white')

//home//
home.classList.add('grey', 'yesBorder', 'noBotBorder')


home.addEventListener("click", function() {
    styleHome();
});

addEventListener("keydown", function(e) {
    if (e.key === "1") {2
        styleHome()
    }
})

let styleHome = function() {
    colorMenu.style.transform = "translateX(-230px)";
    body.style.background = "white";   
    document.getElementById("radioRed").checked = false;
    document.getElementById("radioYellow").checked = false;
    document.getElementById("radioGreen").checked = false;
    document.getElementById("radioOrange").checked = false;
    document.getElementById("radioPurple").checked = false;
    document.getElementById("p").innerHTML = "";
}

//red//
red.classList.add('red', 'yesBorder', 'noBotBorder')

red.addEventListener("click", function() {
    styleRed();
});

addEventListener("keydown", function(e) {
    if (e.key === "2") {
        styleRed()
    }
})

let styleRed = function() {
    body.style.background = "red";   
    colorMenu.style.transform = "translateX(-230px)"
    document.getElementById("radioRed").checked = true;
    document.getElementById("p").innerHTML = "red";
}

//yellow//
yellow.classList.add('yellow', 'yesBorder', 'noBotBorder')

yellow.addEventListener("click", function() {
    styleYellow();
});

addEventListener("keydown", function(e) {
    if (e.key === "3") {
        styleYellow()
    }
})

let styleYellow = function() {
    body.style.background = "yellow";   
    colorMenu.style.transform = "translateX(-230px)"
    document.getElementById("radioYellow").checked = true;
    document.getElementById("p").innerHTML = "yellow";
}
//green//
green.classList.add('green', 'yesBorder', 'noBotBorder')

green.addEventListener("click", function() {
    styleGreen();
});

addEventListener("keydown", function(e) {
    if (e.key === "4") {
        styleGreen()
    }
})

let styleGreen = function() {
    body.style.background = "green";   
    colorMenu.style.transform = "translateX(-230px)"
    document.getElementById("radioGreen").checked = true;
    document.getElementById("p").innerHTML = "green";
}
//orange//
orange.classList.add('orange', 'yesBorder', 'noBotBorder')

orange.addEventListener("click", function() {
    styleOrange();
});

addEventListener("keydown", function(e) {
    if (e.key === "5") {
        styleOrange()
    }
})

let styleOrange = function() {
    body.style.background = "orange";   
    colorMenu.style.transform = "translateX(-230px)"
    document.getElementById("radioOrange").checked = true;
    document.getElementById("p").innerHTML = "orange";
}
//purple//
purple.classList.add('purple', 'yesBorder')

purple.addEventListener("click", function() {
    stylePurple();
});

addEventListener("keydown", function(e) {
    if (e.key === "5") {
        stylePurple()
    }
})

let stylePurple = function() {
    body.style.background = "purple";   
    colorMenu.style.transform = "translateX(-230px)"
    document.getElementById("radioPurple").checked = true;
    document.getElementById("p").innerHTML = "purple";
}









