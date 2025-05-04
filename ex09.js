const logInStudent = (username, password) => {
    return new Promise((resolve,reject)=>{
      if(username === "Ali" && password === 1234) {
        resolve({username,password})
      } else {
        reject("Invalid username or password")
      }
    })
  }
  
  const fetchAvailableExams = () => {
          return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(["Maths", "Physics", "Chemistry"])
            },2000)
          })
  }
  
  const startExam = (username,subject) => {
    return new Promise((resolve,reject)=>{
              if(subject) {
                setTimeout(()=>{
                  resolve(`${username} has started ${subject} exam`)
                },2000)
                
              } else {
                reject(`The Exam doesn't Exist in the List`)
              }
    })
  }
  
  const submitExam = (username, subject) => {
    return new Promise((resolve)=> {
      setTimeout(()=>{
        resolve(`${username} has submitted ${subject} exam`)
      },1000)
    })
  }
  const logMajor = async () => {
    try{
      const logIn = await logInStudent("Ali",1234);
      console.log(logIn);
      const getCourses = await fetchAvailableExams();
      console.log(getCourses);
      const startExm = await startExam(logIn.username,getCourses[3])
      console.log(startExm)
      const submitExm = await submitExam(logIn.username,getCourses[0])
      console.log(submitExm)
    }
    catch(error) {
      console.log(error)
    }
  }

  logMajor();