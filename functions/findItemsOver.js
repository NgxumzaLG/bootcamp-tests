
function findItemsOver(itemList, threshold){
    //console.log(itemList);
    var result = []
    for (var i=0; i < itemList.length; i++){
      if (itemList[i].qty > threshold){
        result.push(itemList[i]);
      }
        
    }
    return result;
  }