// gsap.to(".box-card", { duration: 1, scale: 1, y: 20, });
//////////Type Write/////////////
let i = 0;
let j = 0;
let txt = "Now im working to improve my own skill with Front-End Development and Some other section. Extremely motivated to constantly develop my skills and grow professionally, I am confident in my ability to come up with interesting ideas for developing new things.If you want to see my working progress the feel free to check out my code on Github. Have a great day!";
let txt_head = 'Shahriar Mahmud Anik';
let speed_head = 60;
let speed_paragraph = 40;


function typeWriter() {
    if (i < txt.length) {
        document.getElementById("about_me").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed_paragraph);
    }
}

function typeHead() {
    if (j < txt_head.length) {
        document.getElementById("head").innerHTML += txt_head.charAt(j);
        j++;
        setTimeout(typeHead, speed_head);
    }
}


//////////end typeWrite/////////////
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 1000
    });
///////////////
// Initiate an Ajax request on button click
// $(document).on("click", "button", function() {
//     // Adding timestamp to set cache false
//     $.get("" + $.now(), function(data) {
//         $("body").html(data);
//     });
// });

// // Add remove loading class on body element depending on Ajax request status
// $(document).on({
//     ajaxStart: function() {
//         $("body").addClass("loading");
//     },
//     ajaxStop: function() {
//         $("body").removeClass("loading")
//     }
// });
$(document).ready(function() {
    $("button").click(function() {
        $("#div1").load("demo_test.txt");
    });
});