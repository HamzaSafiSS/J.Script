
let PersonalInfo = []

console.log(`
   1.List of registered Persons.
   2.Add New Person.
   3.Remove persons from the List.
   4.Edit the Existing Persons Info.
   5.Sort by Name.
   6.Sort by age.
   7.Sort by Priority
   `)
   let select = Number(prompt("Please Select what you want."))
      while(select) {
   switch (select) {
      case 1:
         console.log(`------------Personal Information-----------`)
         console.log(JSON.stringify(PersonalInfo,null,2))
         select = Number(prompt("Please Select what you want. or 0 to exit"))
         while(isNaN(select) || select < 0 || select > 7 ) {
            select = Number(prompt("Please Select what you want. or 0 to exit"))
         }
         break;
      case 2:
         {
            let fName = prompt("Please enter your first Name").trim();
            while(fName === "" || fName.length < 3) {
               fName = prompt("Please enter your first Name").trim();
            }
            let lName = prompt("Please enter your last Name").trim();
            while(lName === "" || lName.length < 3) {
               lName = prompt("Please enter your last Name").trim();
            }
            let age = Number(prompt("Please enter your age"));
             while(isNaN(age) || age < 0 || age > 200) {
                age = Number(prompt("Please enter Valid age"));
             }
            let help = prompt("please write what should we help you").trim();
            while(help === "" || help.length < 10) {
               help = prompt("please write what should we help you").trim();
            }
            let priority = prompt(`Please enter "low" "medium" or "high" priority level`).trim().toLowerCase();
            while(priority !== "low" && priority !== "medium" && priority !== "high") {
               priority = prompt(`Please enter "low" "medium" or "high" priority level`).trim().toLowerCase();
            }
            let uniqueId = prompt("Please enter your ID Number").trim();
            while(uniqueId.length  > 10 || uniqueId.length < 3 || 
               PersonalInfo.some((person)=>person.uniqueId === uniqueId)
            ) {
               uniqueId = prompt("Please enter valid valid ID Number.").trim();
            }
            PersonalInfo.push({fName,lName,age,uniqueId,help,priority});
            select = Number(prompt("Please Select what you want."))
         }
         break;
      case 3:
       const removeID = prompt("Please enter the ID of the person you wanna remove.")
        PersonalInfo = PersonalInfo.filter((person)=>person.uniqueId !==removeID)
       console.log(`------------Removed Person Information-----------`)
       console.log(PersonalInfo)
       select = Number(prompt("Please Select what you want."))
       break;
      case 4 :
         const editID = prompt("Please enter the ID Number of personal info you wanna edit");
         PersonalInfo = PersonalInfo.map((person)=> {
           if(person.uniqueId.toLowerCase() === editID.toLowerCase()) {
            let fName = prompt("Please enter your first Name").trim();
            while(fName === "" || fName.length < 3) {
               fName = prompt("Please enter your first Name").trim();
            }
            let lName = prompt("Please enter your last Name").trim();
            while(lName === "" || lName.length < 3) {
               lName = prompt("Please enter your last Name").trim();
            }
            let age = Number(prompt("Please enter your age"));
             while(isNaN(age) || age < 0) {
                age = Number(prompt("Please enter your age"));
             }
            let help = prompt("please write what should we help you").trim();
            while(help === "" || help.length < 10) {
               help = prompt("please write what should we help you briefly").trim();
            }
            let priority = prompt(`Please enter "low" "medium" or "high" priority level`).trim().toLowerCase();
            while(priority !== "low" && priority !== "medium" && priority !== "high") {
               priority = prompt("Please enter low medium or high priority level").trim().toLowerCase();
            }
            
            return {
               fName:fName,
               lName:lName,
               age:age,
               help:help,
               priority:priority
               }
           }
   })
   console.log(`------------Edited Information-----------`)
   console.log(PersonalInfo);
   select = Number(prompt("Please Select what you want."))
   break;
   case 5:
   const sortedName = PersonalInfo.sort((a,b)=> a.fName.localeCompare(b.fName))
   console.log(`------------Sorted by First Name Information-----------`)
   console.log(sortedName);
   select = Number(prompt("Please Select what you want."))
         break;
         case 6:
            const sortedByAge = PersonalInfo.sort((a,b)=> a.age - b.age);
   console.log(`------------Sorted by Age-----------`)

            console.log(sortedByAge)
   select = Number(prompt("Please Select what you want."))
            break;
         case 7:
            const sortedByPriority = PersonalInfo.sort((a,b)=> {
               const sortedValue = (priority) => {
                  priority = priority.toLowerCase();
                  if(priority === "high") return 1
                  if(priority === 'medium') return 2
                  if(priority === "low") return 3
                  return 4
               }
               return sortedValue(a.priority) - sortedValue(b.priority)
            })
   console.log(`------------Sorted by Priority-----------`)

            console.log(sortedByPriority)
       select = Number(prompt("Please Select what you want."))

            break;

   }
}
