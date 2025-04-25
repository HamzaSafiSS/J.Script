let rawStudents = [
  "  ali ahmed  - 75 ",
  "  ZARA taye - 88",
  " jonas  kebede-59",
  "MahiD turkey- 90 ",
  "aiman  musa -  82 ",
  "  leya tAfese- 44 "
];

 const newStudents = rawStudents.map((student)=> {
  let [name,score] = student.trim().split("-");
 let fName = name.split(/\s+/).map((word)=> 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
      return {
        name:fName.trim(),
        score:Number(score)
      }
})
console.log(newStudents);

let greaterthan_60 = newStudents.filter((student)=> student.score > 60)
console.log(greaterthan_60);

let check = greaterthan_60.some(one=> one.score === 100)
console.log(check)

let check2 = newStudents.every( one=> one.score > 60)
console.log(check2)

let reduced = greaterthan_60.reduce((acc,curr) => 
      curr.score >= acc ? acc = curr.score : acc = acc
      
,0)
console.log(reduced)

let onlyName = newStudents.map((student)=>student.name.split(/\s+/).join(" ")
)
console.log(onlyName)


const reversedName = onlyName.map(student => {
  // Split by hyphen and reverse the resulting array
  return student.split(/\s+/).reverse().join(" ");
});

console.log(reversedName);

const pushed = (name,score)=> {
  newStudents.push({name,score});
}
pushed("Hamzi Safi",99);

const unshifted = (name,score)=> {
  newStudents.unshift({name,score});
}
unshifted("Hassen Bullo",99);

const spliced = (a,b,name,score)=> {
  newStudents.splice(a,b,{name,score});
}   
spliced(2,0,"Akrem Akmel",99);

let oName = onlyName.map((fName)=> fName.split(/\s+/).splice(1,1).join(","));
console.log(oName)

newStudents.forEach((student)=>{
  console.log(`${student.name} passed with ${student.score}`)
  if(student.score > 60 && student.score < 70) {
    console.log("⭐️⭐️")
  }
  else if(student.score > 70 && student.score < 80) {
    console.log("⭐️⭐️⭐️")
  }
  else if(student.score > 80 && student.score < 90 ){
    console.log("⭐️⭐️⭐️⭐️")
  }

  else if(student.score > 90){
    console.log("⭐️⭐️⭐️⭐️⭐️")
  }
  else {
    console.log("⭐️")
  }
})

let totalStudents = newStudents.length;
let passed = greaterthan_60.length;
let averageScore = greaterthan_60.score/greaterthan_60.length;
let topScorer = reduced;
console.log(`Total-Students: ${totalStudents}`)
console.log(`passed: ${passed}`)
console.log(`AverageScore : ${averageScore }`)
console.log(`Top-Scorer: ${topScorer}`)




