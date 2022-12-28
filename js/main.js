const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const slides = document.querySelectorAll(".slick")


let sildew = slides.length - 1
let length = slides.length
let ss = 1


function left() {
    // slides.forEach((slide, index) => {
    //     // console.log(slide, index)
    //     slide.style.transform = `translateX(${(index - ss) * 100}%)`
    // })

    if (ss === 0) {
        ss = length

        console.log("left1", ss)
        if (ss === length) {
            ss -= 1
            console.log("left44", ss)
        }
    }
    // else if(sildew!==0){
    // sildew--
    // console.log("2",sildew)
    // }
    else {
        ss--
        console.log("left3", ss)
    }
    console.log(ss)
    slides.forEach((slide, index) => {
        // console.log(slide, index)
        slide.style.transform = `translateX(${(index - ss) * 100}%)`
    })

    rightBtn.addEventListener("click", () => {

    })
}
console.log(left())
leftBtn.addEventListener("click", left)

// setInterval(left,3000)
ss = 0
// let sildew2 = -1
function rightbutton() {

    if (ss === length - 1) {
        ss = 0
        // sildew++
        console.log("right1", ss)
    }
    else {
        ss++
        console.log("right2", ss)
    }
    console.log(ss)


    slides.forEach((slide, index) => {
        // console.log(slide, index)
        slide.style.transform = `translateX(${(index - ss) * 100}%)`
    })

    // console.log(slides)
}
rightBtn.addEventListener("click", rightbutton)


const slick2 = document.querySelectorAll(".slick2")
const leftBtn2 = document.querySelector(".left2")
const rightBtn2 = document.querySelector(".right2")
let saygac = 3
let length2 = slick2.length
let length3 = slick2.length

function slickfunction() {



    if (saygac === 0) {
        saygac = length2
        console.log("left1", saygac)

        if (saygac === length2) {
            saygac -= 3
        }
    }
    else {
        saygac = saygac - 3
        console.log("left2", saygac)
    }

    slick2.forEach((slide2, index2) => {
        // if(index2===-1){
        //     slide2.style.transform = `translateX(${(index2 - sildew2) * 100*(-1)}%)`
        // }
        slide2.style.transform = `translateX(${(index2 - saygac) * 100}%)`
        // console.log(index2)

    })
    rightBtn2.addEventListener("click", () => {

    })

}
console.log(slickfunction())
leftBtn2.addEventListener("click", slickfunction)
// console.log(slickfunction()) 

saygac = 0
function slickfunction2() {

    if (saygac === length2 - 3) {
        saygac = 0
        console.log("right1", saygac)
    }
    // else if(sildew3===6){
    //     sildew3=0
    // console.log("1",sildew3)
    // }
    else {
        saygac += 3
        console.log("right2", saygac)
    }
    slick2.forEach((slide2, index2) => {
        // if(index2===-1){
        //     slide2.style.transform = `translateX(${(index2 - sildew2) * 100*(-1)}%)`
        // }
        slide2.style.transform = `translateX(${(index2 - saygac) * 100}%)`
        // console.log(index2)

    })
    console.log(length3)
}
// slickfunction2()

rightBtn2.addEventListener("click", slickfunction2)

// rightBtn2.addEventListener("click", () => {


//     if (sildew2 === length2) {

//         sildew2 = 0
//     }
//     else {
//         sildew2++
//     }
//     console.log(sildew)

//     slick2.forEach((slide2, index2) => {
//         console.log(slide2, index2)
//         slide2.style.transform = `translateX(${(index2 - sildew2) * 100}%)`
//     })

//     console.log(slick2)
// })



const single3 = document.querySelectorAll(".slick3")
const rightBtn3 = document.querySelector(".right3")
const leftBtn3 = document.querySelector(".left3")
let container = 1
let length4 = single3.length

function slick3() {



    if (container === 0) {
        container = length4 - 3

    }
    else {
        container--

    }
    single3.forEach((slide4, index4) => {

        slide4.style.transform = `translateX(${(index4 - container) * 100}%)`

    })

    rightBtn3.addEventListener("click", () => {

    })
}
slick3()
leftBtn3.addEventListener("click", slick3)

container = 0

function slickright() {

    if (container === length4 - 3) {
        container = 0
        // console.log("sass", say)
    }
    else {
        container++
        // console.log("sss", say)
    }

    single3.forEach((slide4, index4) => {

        slide4.style.transform = `translateX(${(index4 - container) * 100}%)`
    })


}

rightBtn3.addEventListener("click", slickright)

function set() {

    setInterval(slickright, 3000)
}
// set()
leftBtn3.addEventListener("click", set())


let single4 = document.querySelectorAll(".slick4")
const rightBtn4 = document.querySelector(".right4")
const leftBtn4 = document.querySelector(".left4")
let div = document.querySelectorAll(".single_4-container4")
let list = 1
let length5 = single4.length


function slick4() {
    if (list === 0) {
        list = length5 - 1

    }
    else {
        list--

    }
    single4.forEach((slide5, index5) => {

        slide5.style.transform = `translateX(${(index5 - list) * 110}%)`

    })

    rightBtn4.addEventListener("click", () => {

    })

   
hover()
}
slick4()
leftBtn4.addEventListener("click", slick4)

function slick5() {
    
    if (list === length5 - 1) {
        list = 0
        // console.log("sass", say)
    }
    else {
        list++
        // console.log("sss", say)
    }
    single4.length = 6
    single4.forEach((slide5, index5) => {

        slide5.style.transform = `translateX(${(index5 - list) * 110}%)`
    })
    // console.log(single4.length)
    // console.log("ssaas", list)
    hover()

    
}

rightBtn4.addEventListener("click", slick5)



function hover(){
    if (list === 0) {
        single4.forEach(list => {
            list.classList.remove("slic")
            if (list.textContent.includes("1")) {
                list.classList.add("slic")
            }
        })
        // console.log("sssss", list)
    } else if (list === 1) {
        single4.forEach(list => {
            list.classList.remove("slic")
            if (list.textContent.includes("2")) {
                list.classList.add("slic")
            }
        })
    }
    else if (list === 2) {
        single4.forEach(list => {
            list.classList.remove("slic")
            if (list.textContent.includes("3")) {
                list.classList.add("slic")
            }
        })
    }
    else if (list === 3) {
        single4.forEach(list => {
            list.classList.remove("slic")
            if (list.textContent.includes("4")) {
                list.classList.add("slic")
            }
        })
    } else if (list === 4) {
        single4.forEach(list => {
            list.classList.remove("slic")
            if (list.textContent.includes("5")) {
                list.classList.add("slic")
            }
        })
    }
    else if (list === 5) {
        single4.forEach(list => {
            list.classList.remove("slic")
            if (list.textContent.includes("6")) {
                list.classList.add("slic")
            }
        })
    }
    else if (list === 6) {
        single4.forEach(list => {
            list.classList.remove("slic")
            if (list.textContent.includes("7")) {
                list.classList.add("slic")
            }
        })
    }
    else if (list === 7) {
        single4.forEach(list => {
            list.classList.remove("slic")
            if (list.textContent.includes("8")) {
                list.classList.add("slic")
            }
        })
    }
    else if (list === 8) {
        single4.forEach(list => {
            list.classList.remove("slic")
            if (list.textContent.includes("9")) {
                list.classList.add("slic")
            }
        })
    }
    
}
