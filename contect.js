function box() {
  document.querySelector(".contect-info").style.display = "block";
  document.querySelector(".contect").style.display = "none";
}

function stop_box() {
  document.querySelector(".contect-info").style.display = "none";
  document.querySelector(".contect2").style.display = "none";
  document.querySelector(".contect").style.display = "block";
}

function box1() {
  document.querySelector(".contect-info").style.display = "none";
  document.querySelector(".contect2").style.display = "block";
}

function box2() {
  document.querySelector(".contect-info").style.display = "block";
  document.querySelector(".contect2").style.display = "none";
}

function box3() {
  document.querySelector(".contect-info").style.display = "block";
  document.querySelector(".contect2").style.display = "none";
}

/* NAV HOVER */
const productsNav = document.querySelector('.products');
const navInfo = document.querySelector('.nav-information');

productsNav.addEventListener('mouseenter', () => {
  navInfo.style.display = 'block';
});

/* MENU CONTENT FUNCTIONS */
function productsMenu() {
  document.querySelector(".menu-item-details").innerHTML = `
      <img src="mobile/bankred.png" style="display:inline-block; width:10%; height:20%; vertical-align:bottom; margin-top:5vh; border:none;">
    <h2 style="display:inline-block;">Administration</h2>

    <p>Admission Automation</p>
    <p>Fee Management</p>
    <p>Human Resource Management</p>
    <p>Asset Management</p>
    <p>Infrastructure & Venue Booking</p>
    <p>Hostel Management</p>
    <p>Mes
    <p>Placement & Internship</p>
    <p>Parent Access</p>
    <p>Procurement Management</p>


         <img src="mobile/learning.jpg" style="display:inline-block; width:10%; height:20%; vertical-align:bottom; margin-top:5vh; border:none;">
    <h2 style="display:inline-block;">Learning</h2>
    <p>Learning Pathways</p>
    <p>Choice - Based Course Registration</p>
    <p>Time Table Management</p>
    <p>Smart Attendance Management</p>
    <p>Learning Management System</p>
    <p>Faculty Feedback</p>
    <p>Outcome Based Education</p>
    <p>Examination Management System</p>
    <p>PhD Management</p>


          <img src="mobile/cap.png" style="display:inline-block; width:10%; height:20%; vertical-align:bottom; margin-top:5vh; border:none;">

    <h2 style="display:inline-block;">Campus Experience</h2>
    <p>Clubs, Chapters & Societies</p>
    <p>Campus Commerce</p>
    <p>1000+ Dynamic Workflows Automation</p>
    <p>Campus Communication Automation</p>
    <p>Student E - Portfolio</p>
    <p>Survey Management</p>




         <img src="mobile/nut.jpg" style="display:inline-block; width:10%; height:20%; vertical-align:bottom; margin-top:5vh;border:none;">
    <h2 style="display:inline-block;">Integrations</h2>
    <p>Admission CRM</p>
    <p>Payment Gateways</p>
    <p>Loan Providers</p>
    <p>Accounting</p>
    <p>Plagiarism Solutions</p>
    <p>Video Conferencing</p>
    <p>Hardware</p>
    <p>Single Sign-On</p>
    <p>Library Management</p>
    <p>Communication Solutions</p>
  `;
}

function solutions() {
  document.querySelector(".menu-item-details").innerHTML = `
    <h2>By Function</h2>
    <p>Finance</p>
    <p>Examinations</p>
    <p>Admissions</p>
    <p>Academics</p>
    <p>Placements</p>
    <p>Human Resources</p>
    <p>Canteen/Mess</p>
    <p>Hostel</p>
  `;
}

function box_mobile() {
  document.querySelector(".menu-item-details").innerHTML = `
    <div class="box">
      <h2>DigiiAI</h2>
      <img src="mobile/100.webp">
      <b>Digii, in partnership with AWS, is revolutionizing AI in education.</b>
    </div>
    <hr>
    <div class="box">
      <h2>Digiiacademy</h2>
      <img src="mobile/ai.webp">
      <b>Capacity-building programs for HEIs.</b>
    </div>
    <hr>
    <div class="box">
      <h2>Digii100 & Digii100x</h2>
      <img src="mobile/ready.webp">
      <b>India’s flagship higher education summit.</b>
    </div>
    <hr>
  `;
}

function company() {
  document.querySelector(".menu-item-details").innerHTML = `
    <h2>Company</h2>
    <p>About Us</p>
    <p>Careers</p>
    <p>Our Team</p>
    <p>Awards & Recognitions</p>
    <p>Partnerships</p>
    <p>Contact Us</p>

    <h2>Resources</h2>
    <p>Blog</p>
    <p>Press Release</p>
    <p>Media Kit</p>
    <p>Whitepapers</p>
  `;
}

  


function validateForm() {
  let isValid = true;

  const fields = document.querySelectorAll(
    ".contect-info input, .contect-info textarea"
  );

  fields.forEach(field => {
    const errorSpan = field.parentElement.querySelector(".error");

    if (field.value.trim() === "") {
      errorSpan.textContent = "This field is required";
      isValid = false;
    } else {
      errorSpan.textContent = "";
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
  }
}









