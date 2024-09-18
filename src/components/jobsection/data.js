import job1 from "../../Images/miletap.webp";
import job2 from "../../Images/NSF.png";

const getDaysWorked = (startDate) => {
  const currentDate = new Date();
  let totalDaysWorked = 0;

  // Loop through each day between start date and current date
  for (let date = new Date(startDate); date <= currentDate; date.setDate(date.getDate() + 1)) {
    const dayOfWeek = date.getDay();
    // Exclude Saturdays (6) and Sundays (0)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      totalDaysWorked++;
    }
  }

  return totalDaysWorked;
};

const startDate = new Date("2024-03-04"); // Initial start date
const daysWorked = getDaysWorked(startDate);

const getMonthsDifference = (startDate) => {
  const currentDate = new Date();
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Calculate the difference in years and months
  let monthsDifference = (currentYear - startYear) * 12 + (currentMonth - startMonth);

  // Optionally, you can include partial months if needed
  if (currentDate.getDate() < startDate.getDate()) {
    monthsDifference--;
  }

  return monthsDifference;
};

const monthsWorked = getMonthsDifference(startDate);

const startDateNSF = new Date("2024-06-03"); // Start date for Nayee Subah Foundation
const daysWorkedNSF = getDaysWorked(startDateNSF);
const monthsWorkedNSF = getMonthsDifference(startDateNSF);

// Now you can update the `projectdata` dynamically
export const projectdata = [
  {
    id: 1,
    projectpicture: job1,
    projectname: "Miletap",
    projectdesc:
      "I am currently working as a Frontend Developer at Miletap. I work with ReactJS, Redux, and Ant Design.",
    projectlanguage1: "Junior ReactJS Developer",
    projectlanguage2: `${monthsWorked}+ months`, // Updated months
    daysWorked: `${daysWorked} days`, // Total days worked excluding weekends
    code: "https://github.com/MuhammadZohaib28/React-Portfolio-Website",
    live: "https://muhammadzohaibportfolio.vercel.app/",
    rowreverse: false,
    livedemo: true,
    hover: true,
    live: true,
    companyEmail: "muhammad.zohaib@miletap.com"
  },
  {
    id: 1,
    projectpicture: job2,
    projectname: "Nayee Subah Foundation",
    projectdesc:
      "I am currently working as a ReactJS trainer at Nayee Subah Foundation. I teach and introduce young and beginner students about HTML5, CSS3, JavaScript and ReactJS.",
    projectlanguage1: "ReactJS Trainer",  
    projectlanguage2: `${monthsWorkedNSF}+ months`, // Updated months
    daysWorked: `${daysWorkedNSF} days`, // Total days worked excluding weekends
    code: "https://github.com/MuhammadZohaib28/React-Portfolio-Website",
    live: "https://muhammadzohaibportfolio.vercel.app/",
    rowreverse: true,
    livedemo: true,
    hover: true,
    live: true,

  }
];