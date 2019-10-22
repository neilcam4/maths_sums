describe('MATHS SUMS', function(){
    let string;
    it('should return 2 from  a string 1+1', function(){
        string = '1 + 1';
        let result = mathsSums(string)
        expect(result).toEqual(2)
    })
    it('should return 13 from 12+1 string', function(){
        string = '12 + 1'
        let result = mathsSums(string)
        expect(result).toEqual(13)
    })
    it('should return 11 from 12 - 1', function(){
        string = '12 - 1'
        let result = mathsSums(string)
        expect(result).toEqual(11)
    })
    it('should return 11 from 12 - 1', function(){
        string = '543 - 43'
        let result = mathsSums(string)
        expect(result).toEqual(500)
    })
    it('should return 21 from 7 x 3', function(){
        string = '7 x 3'
        let result = mathsSums(string)
        expect(result).toEqual(21)
    })
    it('should return 5 from 35 / 7', function(){
        string = '35 / 7'
        let result = mathsSums(string)
        expect(result).toEqual(5)
    })
})