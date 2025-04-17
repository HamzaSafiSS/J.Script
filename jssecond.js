
let names = prompt("Please enter your name:");
let department = prompt("Please enter your department.");
let gpa = Number(prompt("Please enter your GPA."));
let type = null;
console.log(`Hello ${names} from ${department} department`)

const Department = (dept) => {
    if(dept === "CS") {
        console.log("Course List:\n")
        console.log("CS101, CS102, CS103")
    }
    else if(dept === "SE") {
        console.log("Course List:\n")
        console.log("SE101, SE102, SE103")
    }
    else {
        console.log("Course List:\n")
        console.log("COM101, COM102, COM103")
    }

   if(gpa >= 3.5) {
    type ="advanced"
    console.log("Course Level: Advanced Courses");    
    }

   else if(gpa >= 2.5 && gpa <3.5) {
    type ="normal"
    console.log("Course Level: Normal Courses");
}
   else {
    type ="remedial"
    console.log("Course Level: Remdial  Courses");
}

switch (type) {
    case "advanced":
        console.log("You are Excellent");
        break;
    case "normal":
        console.log("You are very good");
        break;
    case "remedial":
        console.log("You are not bad");
} 
}
Department(department);