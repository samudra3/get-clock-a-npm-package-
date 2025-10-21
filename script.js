function getTime(isRunning){
      const current= new Date();

      const dayArray=['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];
      const monthArray=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let hours= current.getHours().toString().padStart(2,'0');
      let minutes= current.getMinutes().toString().padStart(2,'0');
      let seconds= current.getSeconds().toString().padStart(2,'0');
      const day= current.getDay();

      function timing(){

            let prepand= hours>=12?'PM':'AM';

      hours= hours>=12?hours-12:hours;

      if(hours===0 && prepand==='PM'){
            hours=12;
            if(minutes===0 && seconds===0){
                  prepand ='NOON';
            }
      }
      if(hours===0 && prepand==='AM'){
            hours=12;
            if(minutes===0 && seconds===0){
                  prepand ='MIDNIGHT';
            }
      }
      return `${hours}:${prepand} ${minutes} ${seconds}`;
      }
      const dateObj= {
            month:monthArray[current.getMonth()],
            year:current.getFullYear(),
            day:dayArray[day],
            date:current.getDate()
      }
      dateObj.time=timing
     if(isRunning)
      { console.log(`Today is: ${dayArray[day]}\n Time is ${timing()}`)
      setTimeout(()=>getTime(true),1000);}

      else return dateObj;
}


module.exports=getTime;
