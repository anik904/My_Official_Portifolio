// gsap.to(".box-card", { duration: 1, scale: 1, y: 20, });
// Type Write
let i = 0;
let j = 0;
let txt = "Now im working to improve my own skill with Front-End Development and Some other section. Extremely motivated to constantly develop my skills and grow professionally, I am confident in my ability to come up with interesting ideas for developing new things.If you want to see my working progress the feel free to check out my code on Github. Have a great day!";
let txt_head = 'Shahriar Mahmud Anik';
let speed_head = 50;
let speed_paragraph = 40;


function typeWriter() {
    if (i < txt.length) {
        document.getElementById("about_me").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed_paragraph);
    }
}

// function typeSpan() {
//     if (i < txt.length) {
//         document.getElementById("hd_span").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeSpan, speed_paragraph);
//     }
// }

function typeHead() {
    if (j < txt_head.length) {
        document.getElementById("head").innerHTML += txt_head.charAt(j);
        j++;
        setTimeout(typeHead, speed_head);
    }
}


//end typeWrite
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

//for dark mode

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
//back to top
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}