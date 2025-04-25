let users = [
  { fullName: "   Aliyi Nur   ", age: 20, email: " aliyinur@gmail.com  " },
  { fullName: " Fatima Yassin", age: 17, email: "fatima@example.org" },
  { fullName: " Omar    ", age: 22, email: "omar@gmail.com" }
];

let trimmedName = users.map((user)=>user.fullName.trim());
let trimmedEmail = users.map((user)=>user.email.trim());

let splitted = users.map((user)=>user.fullName.trim().split(/\s+/))

console.log(splitted)

let checkAt = users.map((user)=>user.email.includes("@"));
console.log(checkAt)

let acceptedUserList = users.filter((user)=>user.age > 18);
console.log(acceptedUserList)

let upperCase = acceptedUserList.map((list)=> list.fullName.trim().toUpperCase())

console.log(upperCase)

let endwithCom = users.filter((com)=>com.email.trim().endsWith(".com"))
console.log(endwithCom)

let count = users.reduce((acc,curr)=> {
     curr.age > 18 ? acc+=1 : acc
     return acc
},0)
console.log(count)