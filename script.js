let currentDate = new Date();

function countTheDateOfRoast(date) {
  /**
   * Implement hours in the week in the 168 format. And count current hour with formula behind.
  */
  let absoluteHours = currentDate.getDay() * 24 - 24 + currentDate.getHours();

  /**
   * The date this function will return.
  */
  let roastDate = new Date();

  /**
   * Then create if else statments to define in which time sector current time is.
   * After that return the string with hardtyped name of the day (because we know which day of the week we need for each time sector).
   * And in the end of the string count day and mounth. This is a hardest part of the script. 
   *  Because you have to many conditions and special casees (as 30 31-th days, 28 29 in februarry, New Year etc.).
   *  So it's dificult to hardtype it with just conditional statements. So I used absolute time that provides with the .getTime() method of Date class.
   *  It gives you a number of miliseconds since January 1, 1970.
   *  So I just plus this time and the diference between the next roast day and current time in milliseconds. 
   *  And then set up this value to the returning Date variable with the method .setTime().
   * 
   *
  */

  if (absoluteHours >= 6 && absoluteHours < 30) {
    return `Order now, we roast &amp; mail on Tue ${(() => {
      roastDate.setTime(
        new Date(currentDate).getTime() + (30 - absoluteHours) * 3600000
      );
      return (roastDate.getMonth() + 1) + "/" + roastDate.getDate() ;
    })()}`;
  } else if (absoluteHours >= 30 && absoluteHours < 54) {
    return `Order now, we roast &amp; mail on Wed ${(() => {
      roastDate.setTime(
        new Date(currentDate).getTime() + (54 - absoluteHours) * 3600000
      );
      return (roastDate.getMonth() + 1) + "/" + roastDate.getDate() ;
    })()}`;
  } else if (absoluteHours >= 54 && absoluteHours < 102) {
    return `Order now, we roast &amp; mail on Fri ${(() => {
      roastDate.setTime(
        new Date(currentDate).getTime() + (102 - absoluteHours) * 3600000
      );
      return (roastDate.getMonth() + 1) + "/" + roastDate.getDate() ;
    })()}`;
  } else if (absoluteHours >= 102 && absoluteHours < 168) {
    return `Order now, we roast &amp; mail on Mon ${(() => {
      roastDate.setTime(
        new Date(currentDate).getTime() + (168 - absoluteHours) * 3600000
      );
      return (roastDate.getMonth() + 1) + "/" + roastDate.getDate() ;
    })()}`;
  } else if (absoluteHours < 6) {
    return `Order now, we roast &amp; mail on Mon ${(() => {
      roastDate.setTime(
        new Date(currentDate).getTime() + (6 - absoluteHours) * 3600000
      );
      return (roastDate.getMonth() + 1) + "/" + roastDate.getDate();
    })()}`;
  } else {
    return "somthing wrong";
  }
}

document.querySelector("#lblProductStatus").innerHTML = countTheDateOfRoast(currentDate);
console.log(countTheDateOfRoast(currentDate));