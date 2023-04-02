//<div class="time-countdown">
                    
/* <p>1 ngày</p>
<p id = "hour">12</p>
<p>:</p>
<p id = "min">30</p>
<p>:</p>
<p id = "second">22</p>

</div> */

var hour = parseInt(document.querySelector('#hour').innerHTML)
var min = parseInt(document.querySelector('#min').innerHTML)
var second =parseInt(document.querySelector('#second').innerHTML)

var hour1 = parseInt(document.querySelector('#hour1').innerHTML)
var min1 = parseInt(document.querySelector('#min1').innerHTML)
var second1 =parseInt(document.querySelector('#second1').innerHTML)

var hour2 = parseInt(document.querySelector('#hour2').innerHTML)
var min2 = parseInt(document.querySelector('#min2').innerHTML)
var second2 =parseInt(document.querySelector('#second2').innerHTML)

var hour3 = parseInt(document.querySelector('#hour3').innerHTML)
var min3 = parseInt(document.querySelector('#min3').innerHTML)
var second3 =parseInt(document.querySelector('#second3').innerHTML)




timeout = setInterval(function(){
    second--;
    second1--;
    second2--;
    second3--;
    start();
}, 1000);


function start() {
    document.querySelector('#second').innerHTML = second
    document.querySelector('#second1').innerHTML = second1
    document.querySelector('#second2').innerHTML = second2
    document.querySelector('#second3').innerHTML = second3

    if(second == 0) {
        second = 60
        min -= 1
        document.querySelector('#min').innerHTML = min
       
    }

    if(min == 0) {
        min =60
        hour -= 1
        document.querySelector('#hour').innerHTML = hour
    }

    if(second1 == 0) {
        second1 = 60
        min1 -= 1
        document.querySelector('#min1').innerHTML = min
       
    }

    if(min1 == 0) {
        min1 =60
        hour1 -= 1
        document.querySelector('#hour1').innerHTML = hour
    }

    if(second2 == 0) {
        second2 = 60
        min2 -= 1
        document.querySelector('#min2').innerHTML = min
       
    }

    if(min2 == 0) {
        min2 =60
        hour2 -= 1
        document.querySelector('#hour2').innerHTML = hour
    }

    if(second3 == 0) {
        second3 = 60
        min3 -= 1
        document.querySelector('#min3').innerHTML = min
       
    }

    if(min3 == 0) {
        min3 =60
        hour3 -= 1
        document.querySelector('#hour3').innerHTML = hour
    }
  
}