function timeToWords(time) {
  const hours = parseInt(time.slice(0, 2));
  const minutes = parseInt(time.slice(3));

  const hourWords = [
    "midnight", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten", "eleven", "noon"
  ];

  const minuteWords = [
    "oh", "one", "two", "three", "four", "five", "six", "seven",
    "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  function convertMinutes(minutes) {
    if (minutes === 0) {
      return "o'clock";
    } else if (minutes <= 20 || (minutes % 10 === 0)) {
      return minuteWords[minutes];
    } else {
      const tens = Math.floor(minutes / 10) * 10;
      const ones = minutes % 10;
      let result = tens !== 0 ? minuteWords[tens] : '';
      if (ones !== 0) {
        result += ` ${minuteWords[ones]}`;
      }
      return result;
    }
  }

  let period = "am";
  let adjustedHours = hours;

  if (hours >= 12) {
    period = "pm";
    adjustedHours = hours > 12 ? hours - 12 : hours;
  }

  const hourWord = hourWords[adjustedHours];
  const minuteWord = convertMinutes(minutes);

  return `${hourWord} ${minuteWord} ${period}`;
}


// Test cases
console.log(timeToWords("00:00")); 
console.log(timeToWords("00:12")); 
console.log(timeToWords("01:00")); 
console.log(timeToWords("06:01"));
console.log(timeToWords("06:10"));
console.log(timeToWords("06:18")); 
console.log(timeToWords("06:19")); 
console.log(timeToWords("10:34")); 
console.log(timeToWords("12:00")); 
console.log(timeToWords("12:09")); 
console.log(timeToWords("23:23"));
