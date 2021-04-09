describe('this countAllPaarl' , function(){
    var regNumber = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
    var regNumber1 = "CJ 345 123, CK 345, CJ 123"
    it('should return 3 which represent only the number of Paarl registrations passed from the parameter' , function(){
        assert.equal(countAllPaarl(regNumber),3);
    });
    it('should return 2 which represent only the number of Paarl registrations passed from the parameter' , function(){
        assert.equal(countAllPaarl(regNumber1),2);
    });

});