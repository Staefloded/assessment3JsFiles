function sendMail(id=200) {
  let evenUserID = [];
  let oddUserID= [];

  for (let i = 1; i <= id; i++) {
    if (i % 2 === 0) {
        evenUserID.push(i)
     } else{
         oddUserID.push(i)
     }
  }
  return {
    evenUserID:evenUserID, oddUserID: oddUserID
  }
}

console.log(sendMail())