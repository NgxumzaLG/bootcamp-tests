describe('this greet' , function(){
    it('should returns a greeting message correct' , function(){
        assert.equal('Hello, Vasco', greet('Vasco'));
    });
    it('should returns a greeting message correct' , function(){
        assert.equal('Hello, Lusanda', greet('Lusanda'));
    });

});