let studentName = prompt("please enter student Name");
let = sub1 = Number(prompt("Enter the first subject score"))
let = sub2 = Number(prompt("Enter the second subject score"))
let = sub3 = Number(prompt("Enter the third subject score"))
let grade = null
const average = (s1,s2,s3) => {
    return (s1 + s2 + s3)/3
}
const result = average(sub1,sub2,sub3);

const Grade = (r) => {
    
    if(r >=90 && r <=100 ) {
        grade = "A";
    }
    else if(r >= 80 && r < 90 ) {
        grade = "B";
    }
    else if(r >=70 && r < 80 ) {
        grade = "C";
    }
    else if(r >=60 && r < 70 ) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    switch (grade) {
        case "A":
          console.log("You are eligible for full Scholarship")
          break;
        case "B":
          console.log("You are eligible for a partial scholarship.")
          break;
        case "C":
        case "D":
          console.log("You are not eligible, but keep trying.")
          break;
        case "F":
        console.log("You need to work much harder.")
        break;
        default:
            console.log("Invalid Input")
    }
}

Grade(result);