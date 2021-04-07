describe('this countAllFromTown' , function(){
    var regNumber = "CL 124,CY 567,CL 345, CJ 456,CL 341"
    it('should return only the number of registration from the town passed in the second parameter' , function(){
        assert.equal(countAllFromTown(regNumber,'CL'),3);
    });
    it('should return only the number of registration from the town passed in the second parameter' , function(){
        assert.equal(countAllFromTown(regNumber,'CY'),1);
    });
});