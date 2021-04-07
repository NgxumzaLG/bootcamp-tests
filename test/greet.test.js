describe('this greet' , function(){
    it('should returns a greeting message correct' , function(){
        assert.equal(greet('Vasco'), 'Hello, Vasco');
    });
    it('should returns a greeting message correct' , function(){
        assert.equal(greet('Lusanda'), 'Hello, Lusanda');
    });

});