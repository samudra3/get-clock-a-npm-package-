This is the package that facilitate you with mulitple
date related properties that you can use it in your code with ease.
To install - npm i get-clock
* How to use?
  1. const time = require('get-time');
  2. To have a running clock in your terminal call this function
      code snippet:
         time(true);
  3. To use it normally to get the properties like year,month,day,date,time see in
      below code snippet.
        const date = time() // give you the object
        date.year // get the year
        date.month // will give you the month
        date.time() // give you the current time
        date.day // give you the day name of the today
        date.date // give you the date value
