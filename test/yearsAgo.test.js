describe('this yearsAgo' , function(){
    it('should return the difference between the year passed in the parameter and the current year.' , function(){
        assert.equal(yearsAgo('1974'),47);
    });
    it('should return the difference between the year passed in the parameter and the current year.' , function(){
        assert.equal(yearsAgo('2000'),21);
    });

});