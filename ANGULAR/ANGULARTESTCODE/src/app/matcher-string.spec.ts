xdescribe('matcher string test suite' ,()=>{

    it('Testing the below string with "toBe" for matcher ===' , ()=>{
        let str = 'Hello World!';
        expect(str).toBe('Hello World!');
    });

    it('Testing the below String with "toEqual" for matcher == ',()=>{
        let str1 = 'Hello Humans!';
        expect(str1).toEqual('Hello Humans!');
    });

     //-ve test case
    it('Testing the below String with ".not.toEqual" for matcher == ', () => {
        let str1 = 'Hello Humans!';
        expect(str1).not.toEqual('Hello Humans! 2');
    });

    it('Testing string,"toContain" checks if the substring present in the string',()=>{
        let str2 = 'Testing the string with Jasmine';
        expect(str2).toContain('Jasmine');
    });

    it('Testing string,"toMatch" is for regular expression',()=>{
        let str3 = 'This is the 5th lane of wallstreet';
        //regular exp checks if string contains number
        expect(str3).toMatch(/\d+/);
        expect(str3).toMatch("wallstreet");
    });

});