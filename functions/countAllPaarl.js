
function countAllPaarl(regNumber){
  var regString = regNumber.split(', ');
  var totalReg = 0;
  
  for (var i = 0; i < regString.length; i++){
    //var regPaarl = regString[i];
    if (regString[i].startsWith('CJ')){
      totalReg ++;
    }
  }
   return totalReg;
  
}