describe('this countRegNumber' , function(){
    var regNumberList = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
    var regNumberList1 = "CJ 345 123, CK 345, CJ 123"
    it('should return the number of registrations passed from the parameter' , function(){
        assert.equal(countRegNumber(regNumberList),5);
    });
    it('should return the number of registrations passed from the parameter' , function(){
        assert.equal(countRegNumber(regNumberList1),3);
    });

});