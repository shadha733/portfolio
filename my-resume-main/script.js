document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();

    let navLinks = document.querySelectorAll(".nav-item");

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {

    // Select elements you want to animate
    const animatedElements = document.querySelectorAll(".skill, .project, .contact-info, .contact-form");

    function revealOnScroll() {
        let windowHeight = window.innerHeight;

        animatedElements.forEach(el => {
            let elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);

    // run once on load
    revealOnScroll();
});


// Form validation using jQuery

$(document).ready(function () {
    $("#contactForm").submit(function (e) {

        e.preventDefault(); // Prevent form from submitting immediately


        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();


        let isValid = true;
        // Clear previous errors
        $(".error").text("");
        // Validate name
        if (name === "") {
            $("#nameError").text("Name is required.");
            isValid = false;
        }
        // Validate email
        if (email === "") {
            $("#emailError").text("Email is required.");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#emailError").text("Please enter a valid email.");
            isValid = false;
        }
        // Validate message
        if (message === "") {
            $("#messageError").text("Message is required.");
            isValid = false;
        }

         // STOP HERE if invalid
        if (!isValid) return;

        // AJAX ONLY IF VALID
        $.ajax({
            url: "https://formspree.io/f/mvzdzbky",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function () {
                $("#formSuccess")
                    .text("Message sent successfully!")
                    .fadeIn();

                $("#contactForm")[0].reset();

                setTimeout(() => {
                    $("#formSuccess").fadeOut();
                }, 4000);
            },
            error: function () {
                $("#formSuccess")
                    .text("Something went wrong. Please try again.")
                    .css("background", "#e74c3c")
                    .fadeIn();
            }
        });

    });
});
setTimeout(() => {
    document.querySelector(".html").style.width = "95%";
    document.querySelector(".css").style.width = "90%";
    document.querySelector(".js").style.width = "85%";
    document.querySelector(".python").style.width = "75%";
    document.querySelector(".java").style.width = "65%";
    document.querySelector(".testing").style.width = "90%";
    document.querySelector(".sql").style.width="70%"
}, 300);
$(window).on("scroll", function () {
    $(".technical-skills").addClass("show");
});

$(document).ready(function () {

    // 🔹 Load saved mode
    let mode = localStorage.getItem("mode");
    if (mode === "dark") {
        $("body").addClass("dark");
        $("#toggleMode").text("☀️ Light Mode");
    } else {
        $("body").removeClass("dark");
        $("#toggleMode").text("🌙 Dark Mode");
    }

    // 🔹 Toggle on click
    $("#toggleMode").on("click", function () {
        $("body").toggleClass("dark");

        if ($("body").hasClass("dark")) {
            $(this).text("☀️ Light Mode");
            localStorage.setItem("mode", "dark");   // save
        } else {
            $(this).text("🌙 Dark Mode");
            localStorage.setItem("mode", "light");  // save
        }

    });


    // download message part 
$("#downloadResume").on("click" , function(){
      $("#downloadMessage").text(("📄 Resume downloaded successfully!")).css("background", "#28a745") // green)
      .fadeIn();

      setTimeout(() => {
        $("#downloadMessage").fadeOut();

      }, 700);


});
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".sidebar");

if(toggle && nav){
    toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    document.body.classList.toggle("no-scroll"); // 🔥 lock scroll
});


}
document.querySelectorAll('.project').forEach(project => {
    const video = project.querySelector('.project-video');

    project.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();
    });

    project.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
      // 📱 Mobile (tap)
    project.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    
});

});
});
$(window).on("scroll", function () {
    $(".technical-skills").addClass("show");
});