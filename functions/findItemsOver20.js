
function findItemsOver20(itemList){
    //console.log(itemList);
    var result = []
    for (var i=0; i < itemList.length; i++){
      if (itemList[i].qty > 20){
        result.push(itemList[i]);
      }
        
    }
    return result;
  }