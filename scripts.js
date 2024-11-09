var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    // Gather form data
    var resumeData = {
        personalInfo: {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
        },
        education: {
            degree: document.getElementById("degree").value,
            school: document.getElementById("school").value,
            graduationYear: document.getElementById("graduationYear").value,
        },
        workExperience: {
            jobTitle: document.getElementById("jobTitle").value,
            company: document.getElementById("company").value,
            workDates: document.getElementById("workDates").value,
            jobDescription: document.getElementById("jobDescription").value,
        },
        skills: document.getElementById("skills")
            .value.split(",")
            .map(function (skill) { return skill.trim(); }),
    };
    // Call function to display the generated resume
    displayResume(resumeData);
});
// Function to generate and display the resume
function displayResume(data) {
    resumeOutput.innerHTML = "\n    <h2>Generated Resume</h2>\n    <div>\n      <h3>".concat(data.personalInfo.name, "</h3>\n      <p><strong>Email:</strong> ").concat(data.personalInfo.email, "</p>\n      <p><strong>Phone:</strong> ").concat(data.personalInfo.phone, "</p>\n      <p><strong>Address:</strong> ").concat(data.personalInfo.address, "</p>\n    </div>\n\n    <div>\n      <h3>Education</h3>\n      <p><strong>").concat(data.education.degree, "</strong>, ").concat(data.education.school, " (").concat(data.education.graduationYear, ")</p>\n    </div>\n\n    <div>\n      <h3>Work Experience</h3>\n      <p><strong>").concat(data.workExperience.jobTitle, "</strong> at ").concat(data.workExperience.company, " (").concat(data.workExperience.workDates, ")</p>\n      <p>").concat(data.workExperience.jobDescription, "</p>\n    </div>\n\n    <div>\n      <h3>Skills</h3>\n      <ul>\n        ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n      </ul>\n    </div>\n  ");
    resumeOutput.style.display = "block"; // Make sure the output is visible
}
