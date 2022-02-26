// gsap.to(".box-card", { duration: 1, scale: 1, y: 20, });
//////////Type Write/////////////
let i = 0;
let j = 0;
let txt = "Now im working to improve my own skill with Front-End Development and Some other section. Extremely motivated to constantly develop my skills and grow professionally, I am confident in my ability to come up with interesting ideas for developing new things.If you want to see my working progress the feel free to check out my code on Github. Have a great day!";
let txt_head = 'Shahriar Mahmud Anik';
let speed_head = 130;
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