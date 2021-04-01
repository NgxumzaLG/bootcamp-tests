
function mostProfitableDepartment(salesData){
    //console.log(salesData);
    const departmentMap = {};
    
    for (var i in salesData){
      const departmentData = salesData[i];
      
      departmentMap[departmentData.department] = 0;
      
    }
    
      for (var i in salesData){
      const departmentData = salesData[i];
      var currentTotalDep = departmentMap[departmentData.department];
        
      currentTotalDep += departmentData.sales;
      departmentMap[departmentData.department] = currentTotalDep;
      
    }
    var currentMaxDep = 0;
    var currentDep = "";
    
    for ( const salesDep in departmentMap){   
      const currentTotalDepSales = departmentMap[salesDep];
      //console.log(salesDep);
      if (currentTotalDepSales > currentMaxDep){
        currentMaxDep = currentTotalDepSales;
        currentDep = salesDep;
        
      }
    }
    //console.log(departmentMap[salesDep])
    //console.log(currentMaxDep);
    return currentDep;
  }