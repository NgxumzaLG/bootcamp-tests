describe('this regCheck' , function(){
    it('should return true if the registration number passed from the first parameter is from the town passed in the second parameter' , function(){
        assert.equal(regCheck('DC 55 YU GP','GP'),true);
    });
    it('should return true if the registration number passed from the first parameter is from the town passed in the second parameter' , function(){
        assert.equal(regCheck('ERT 123 EC','EC'),true);
    });
    it('should return false if the registration number passed from the first parameter is from the town passed in the second parameter' , function(){
        assert.equal(regCheck('ERT 123 EC','GP'),false);
    });
});