import { addition } from "./firstFunction"

xdescribe('test addition',()=>{

    it('testing addition function',()=>{
        expect(addition(10,20)).toBe(30);
    });
});