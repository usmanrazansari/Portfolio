// Define the structure of the form data
interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  education: {
    degree: string;
    school: string;
    graduationYear: string;
  };
  workExperience: {
    jobTitle: string;
    company: string;
    workDates: string;
    jobDescription: string;
  };
  skills: string[];
}

const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;

resumeForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Gather form data
  const resumeData: ResumeData = {
    personalInfo: {
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      phone: (document.getElementById("phone") as HTMLInputElement).value,
      address: (document.getElementById("address") as HTMLInputElement).value,
    },
    education: {
      degree: (document.getElementById("degree") as HTMLInputElement).value,
      school: (document.getElementById("school") as HTMLInputElement).value,
      graduationYear: (document.getElementById("graduationYear") as HTMLInputElement).value,
    },
    workExperience: {
      jobTitle: (document.getElementById("jobTitle") as HTMLInputElement).value,
      company: (document.getElementById("company") as HTMLInputElement).value,
      workDates: (document.getElementById("workDates") as HTMLInputElement).value,
      jobDescription: (document.getElementById("jobDescription") as HTMLTextAreaElement).value,
    },
    skills: (document.getElementById("skills") as HTMLInputElement)
      .value.split(",")
      .map((skill) => skill.trim()),
  };

  // Call function to display the generated resume
  displayResume(resumeData);
});

// Function to generate and display the resume
function displayResume(data: ResumeData) {
  resumeOutput.innerHTML = `
    <h2>Generated Resume</h2>
    <div>
      <h3>${data.personalInfo.name}</h3>
      <p><strong>Email:</strong> ${data.personalInfo.email}</p>
      <p><strong>Phone:</strong> ${data.personalInfo.phone}</p>
      <p><strong>Address:</strong> ${data.personalInfo.address}</p>
    </div>

    <div>
      <h3>Education</h3>
      <p><strong>${data.education.degree}</strong>, ${data.education.school} (${data.education.graduationYear})</p>
    </div>

    <div>
      <h3>Work Experience</h3>
      <p><strong>${data.workExperience.jobTitle}</strong> at ${data.workExperience.company} (${data.workExperience.workDates})</p>
      <p>${data.workExperience.jobDescription}</p>
    </div>

    <div>
      <h3>Skills</h3>
      <ul>
        ${data.skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    </div>
  `;
  
  resumeOutput.style.display = "block"; // Make sure the output is visible
}
