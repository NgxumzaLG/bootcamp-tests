
function totalPhoneBill(sentBill){
    //console.log(sentBill);
    var billMade = sentBill.split(', ')
    var totalCall = 0;
    var totalSms = 0;
    var perCall = 2.75; //* totalcall;
    var perSms = 0.65; //* totalSms;
    
    for (var i = 0; i < billMade.length; i++){
      if (billMade[i].startsWith("call")){
       totalCall++;
        //perCall *= totalCall;
      
      } else if (billMade[i].startsWith("sms")){
        totalSms++;
        //perSms *= totalSms;
        
      }
    }
    
    perCall *= totalCall;
    perSms *= totalSms;
    var totalBill = perCall + perSms;
    
    return "R" + totalBill.toFixed(2);
        
  }