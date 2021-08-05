
$('.above').hover(
    function(){
        $(this).css("background-image", "url('img/5.png')").css("transition", "all .4s ease");
        $(".content").css("color", "white");
        $(".nava").css("color", "white");
        $(".move").css("color", "white");
        $(".dot").css("color", "white");
    },
    function(){
        $(this).css("background-image", "url('img/1.png')").css("transition", "all .4s ease");
        $(".content").css("color", "black");
        $(".nava").css("color", "black");
        $(".move").css("color", "black");
        $(".dot").css("color", "black");
    }
)
$("button").hover(
    function(){
        $(this).css("opacity", "0.5");
    },
    function(){
        $(this).css("opacity", "1")
    }

)
$(".itema").hover(
    function(){
        $(this).css("color", "grey");
    },
    function(){
        $(this).css("color", "white")
    }

)

var vid1 = document.getElementById("video1");
var vid = document.getElementById("video");
var vid2 = document.getElementById("video2");
var num = 2;
var num1 = 1;
var num2 = 3; 
var arr = []
arr[1] = "https://www.youtube.com/embed/1CpoZr6af18"
arr[2] = "https://www.youtube.com/embed/GbE5OxC18TE"
arr[3] = "https://www.youtube.com/embed/yDclftd-QcY"
function next(){
    num1 = num1 + 1;
    num = num + 1;
    num2 = num2 + 1;
    if(num > 3){
        num = 1;
    }
    if(num1 > 3){
        num1 = 1;
    }
    if(num2 > 3){
        num2 = 1;
    }
    vid1.src = arr[num1];
    vid.src = arr[num];
    vid2.src = arr[num2];
    console.log("Video");
}
function prev(){
    num = num - 1;
    num1 = num1 - 1;
    num2 = num2 - 1;
    if(num <= 0){
        num = 3;
    }
    if(num1 <= 0){
        num1 = 3;
    }
    if(num2 <= 0){
        num2 = 3;
    }
    vid.src = arr[num];
    vid1.src = arr[num1];
    vid2.src = arr[num2];
    console.log(num);
}
$(".prev").click(function(){
    next();
})
$(".next").click(function(){
    prev();
})

$(".cont").hover(
    function(){
        $(this).find(".profile").css("opacity", "0.4");
        $(this).find(".overlay").css("opacity", "1")
    },
    function(){
        $(this).find(".profile").css("opacity", "1")
        $(this).find(".overlay").css("opacity", "0");
    }

)


var imag = document.getElementById("img-container");
var num4 = 1;
var arr2 = []
arr2[1] = "img/1.png"
arr2[2] = "img/4 (1).jpg"
arr2[3] = "img/4 (2).jpg"
arr2[4] = "img/4 (3).jpg"
arr2[5] = "img/5.png"
function next2(){
    num4 = num4 + 1;
    if(num4 > 5){
        num4 = 1;
    }
    imag.src = arr2[num4];
    console.log("IMG");
}
function prev2(){
    num4 = num4 - 1;
    if(num4 <= 0){
        num4 = 5;
    }
    imag.src = arr2[num4];
    console.log(num2);
}
$(".indicator-next").click(function(){
    next2();
})
$(".indicator-prev").click(function(){
    prev2();
})