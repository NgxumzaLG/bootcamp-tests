
function isWeekday(inWeekday){
  console.log(inWeekday);
    var notWeekday = inWeekday.startsWith("M") || inWeekday.startsWith("T") || inWeekday.startsWith("W") || inWeekday.startsWith("F");
    return notWeekday;
  }