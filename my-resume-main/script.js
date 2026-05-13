document.addEventListener("DOMContentLoaded", function () {
      const navLinks = document.querySelectorAll(".nav-item");

    let currentPage = window.location.pathname.toLowerCase();

    // normalize homepage
    if (currentPage === "/" || currentPage === "") {
        currentPage = "/index.html";
    }

    navLinks.forEach(link => {

        let linkHref = link.getAttribute("href").toLowerCase();

        // skip non html links (pdf etc.)
        if (!linkHref.includes(".html")) return;

        // normalize both sides
        if (currentPage.endsWith(linkHref)) {
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

      const skills = {
        html: "95%",
        css: "90%",
        js: "85%",
        python: "75%",
        java: "65%",
        testing: "90%",
        sql: "70%"
    };

    Object.keys(skills).forEach(cls => {
        const el = document.querySelector("." + cls);
        if (el) el.style.width = skills[cls];
    });

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
     if (!video) return;

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
 let lastScrollTop = 0;
 let scrollUpAmount = 0;

  $(window).on('scroll', function () {
    if ($(window).width()<= 768) {
        const currentScrollTop = $(this).scrollTop();
         // ignore tiny movements
  if (Math.abs(currentScrollTop - lastScrollTop) <= 20) {
    return;
  }
  // scrolling down
    if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
      $('.menu-toggle').fadeOut(200);
      

    scrollUpAmount = 0;
    
    } 
     // SCROLLING UP
  else if (currentScrollTop < lastScrollTop) {

    scrollUpAmount += lastScrollTop - currentScrollTop;

    // only show after enough upward scrolling
    if (scrollUpAmount > 80) {

      $('.menu-toggle').fadeIn(200);

    }
  }

  lastScrollTop = currentScrollTop;
}
  });
  // SIDEBAR SCROLL
let lastSidebarScroll = 0;
let sidebarScrollUpAmount = 0;

$('.sidebar').on('scroll', function () {

  const currentSidebarScroll = $(this).scrollTop();

  // scrolling down
  if (currentSidebarScroll > lastSidebarScroll && currentSidebarScroll > 80) {

    $('.menu-toggle').fadeOut(200);

    sidebarScrollUpAmount = 0;
  }

  // scrolling up
  else if (currentSidebarScroll < lastSidebarScroll) {

    sidebarScrollUpAmount += lastSidebarScroll - currentSidebarScroll;

    // show only after enough upward scrolling
    if (sidebarScrollUpAmount > 80) {

      $('.menu-toggle').fadeIn(200);

    }
  }

  lastSidebarScroll = currentSidebarScroll;

});


    
    
});
