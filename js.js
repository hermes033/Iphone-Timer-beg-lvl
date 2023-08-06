var saat = document.querySelector(".saat")
var deqiqe = document.querySelector(".deqiqe")
var saniye = document.querySelector(".saniye")
var logG = document.querySelector(".log")
var st = 0
var dq = 0
var sn = 0
var count = 0

var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var btn3 = document.querySelector(".btn3")
var btn4 = document.querySelector(".btn4")
btn1.onclick = () => {
    var s = setInterval(() => {
        sn++
        if (sn == 60) {
            dq++
            sn = 0
        }
        if (dq == 60) {
            st++
            dq = 0
        }
        saniye.innerText = sn
        deqiqe.innerText = dq
        saat.innerText = st
        btn1.style.display = "none"
        btn3.style.display = "inline-block"

    }, 100)
    btn2.onclick = () => {
        count++
        var h4 = document.createElement('h4')
        h4.innerText = `${count}.Tur : ${st} : ${dq} : ${sn}`
        logG.prepend(h4)
    }
    btn3.onclick = () => {
        clearInterval(s)
        btn2.style.display = "none"
        btn4.style.display = "inline-block"
        btn3.style.display = "none"
        btn1.style.display = "inline-block"
    }
    btn4.onclick = () => {
        var s = setInterval(() => {
            sn++
            if (sn == 60) {
                dq++
                sn = 0
            }
            if (dq == 60) {
                st++
                dq = 0
            }
            saniye.innerText = sn
            deqiqe.innerText = dq
            saat.innerText = st
        }, 100)
        btn4.style.display = "none"
        btn2.style.display = "inline-block"
    }
}
