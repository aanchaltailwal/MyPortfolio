// Function to show project description in a modal
function showDescription(projectId) {
    let descriptions = {
        project1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus error eos suscipit culpa, impedit cum corporis dignissimos porro quae deleniti. Mollitia blanditiis, doloremque eius voluptas nam labore eligendi maiores in sed pariatur odit provident qui ad est similique iste.",
        project2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus dolore aperiam ullam praesentium molestias ipsam recusandae sunt, exercitationem, rerum tempore voluptates quam excepturi laborum maxime fugit iure sed eius neque culpa. Eligendi nostrum fugiat rerum! Magnam molestias a aspernatur?",
        project3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quod in ea, molestiae commodi necessitatibus optio, placeat eos impedit temporibus distinctio maxime illum saepe assumenda vero culpa atque et! Magnam eos eaque error voluptatem pariatur quae. Molestiae aperiam labore enim."
    };
    
    document.getElementById('modal-description').innerText = descriptions[projectId];
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Function to send mail using emailjs
function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        email_sender: document.getElementById("emailSender").value,
        subject_sender: document.getElementById("subjectSender").value,
        message_sender: document.getElementById("message").value,
    };
    emailjs.send('{{SERVICE ID}}','{{TEMPLATE ID}}',tempParams)
     .then(function(res){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mail Sent Successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
     });
}

// Document ready function to handle scrolling and typing animations
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation script
    var typed = new Typed(".typing", {
        strings: ["final year B.Tech CSE student, I'm keen to dive into the world of software engineering, hungry for hands-on experience to complement my academic journey","Passionate about coding, I'm ready to dive into real-world projects and sharpen my skills","Driven by a thirst for knowledge,With a strong foundation in computer science, I'm eager to tackle challenges and grow professionally through real-world exposure. "],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Passionate","Determine","Resilient","Eager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // Scroll to top button script
    const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
});
