function validation() {
    const input = document.getElementById('subscribe__input').value;
    const result = document.getElementById('result')
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.match(pattern)) {
        result.textContent = 'Your email is correct'
        result.style.color = '#00ff00'

    } else {
        result.textContent = 'Please enter a valid email address'
        result.style.color = '#ff0000'
    }
    if (input === "") {
        result.textContent = ""
    }

}

// window.onscroll = function () {
//     myFunction()
// }

// let navbar = document.getElementById('nav')
// let sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add('sticky')
//     } else {
//         navbar.classList.remove('sticky')
//     }
// }

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('nav').style.top = '0'
    } else {
        document.getElementById('nav').style.top = "-30px"
    }
    prevScrollpos = currentScrollPos;
}
