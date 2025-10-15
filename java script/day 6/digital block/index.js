 
 const setdatetime=()=>{
 const now= new Date();
 console.log(now);

const date= now.toLocaleDateString({hourCycle:"h12"})
console.log(date);
 const time=now.toLocaleTimeString({hourCycle:"h24"});
 console.log(time)
 document.getElementById("time").textContent= `Time: ${time}`;
 document.getElementById("date").textContent= `Date: ${date}`;
 };
 setdatetime();
 setInterval(setdatetime,1000)