import {sum} from "../sum"
//Syntax to write test case - 

test("Sum function should calculate sum of two numbers",()=>{
   const result = sum(3,4)


   //Assertion
   expect(result).toBe(7)
});

//__test__ here double underscore stands for dunder.