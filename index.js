// script tags in <head>
// $(document).ready(function (){
//     $("h1").css("color", "red");
// })
// Check the document ready then it's going to call this code
// we waited until the jQuery library has finished loading and then we access the h1
// the ready method in this case == the script tags put inside the body tags at the end of the website


//document.queryselector
// document.querySelector("h1");
// document.querySelectorAll("h1");
// //==
// $("h1"); //select all h1 tag


//Manipulating Styles with jQuery
// $("h1").css("color", "green");
// console.log($("h1").css("color"));
// $("h1").addClass("big-title");
// $("h1").addClass("big-title margin-50");// add multiple class

//Manipulating Text with jQuery
// $("h1").text("Bye");
// $("button").text("Don't click me");
// $("button").html("<em>Hey</em>");

//Manipulating Attributes with jQuery
// $("img").attr("src");// getting value of the attribute
// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.google.com/")

//Adding Event Listeners with jQuery

// $("h1").click(function (){
//     $("h1").css("color", "purple")
// })

//in JS
// for (let i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function (){
//         document.querySelector("h1").style.color = "purple";
//     });
// }
//in jQuery
// $("button").click(function (){
//     $("h1").css("color", "purple")
// })
//challenge: press a key inside a website and change h1 tag
// $(document).keypress(function (event){
//     $("h1").text(event.key);
// })

// Method .on()
// $("h1").on("mouseover", function (){
//     $("h1").css("color", "purple");
// })

//Adding and Removing elements with jQuery
// $("h1").before("<button>Before</button>");
// $("h1").after("<button>After</button>");
// $("h1").prepend("<button>Prepend</button>");
// $("h1").append("<button>Append</button>");
//Removing
// $("button").remove();

// Website Animations with jQuery
//hide the h1 by click button
// $("button").on("click", function (){
//     $("h1").hide();
// })
//show
// $("h1").show();
//toggle show - hide
// $("button").on("click", function (){
//     $("h1").toggle();
// })

//hide the h1 but fadeout - fadeIn - fadeToggle
// $("button").on("click", function (){
//     $("h1").fadeOut();
// })

// $("button").on("click", function (){
//     $("h1").fadeToggle();
// })

// collapse: slideUp - slideDown - slideToggle
// $("button").on("click", function (){
//     $("h1").slideToggle();
// })

//custom with animate
// $("button").on("click", function (){
//     $("h1").animate({opacity: 0.5});
// })

//Chain the methods together
// $("button").on("click", function (){
//     $("h1").slideUp().slideDown().animate({opacity: 0.5});
// })
