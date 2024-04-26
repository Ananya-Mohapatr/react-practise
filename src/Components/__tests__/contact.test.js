import {render,screen} from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'


describe("Contact Us Page Test Cases" , ()=>{      //describe is used to group the test cases


//to test my heading Contact Us is loaded or not
test('should load contact us component', () =>{
    render (<Contact/>)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
})

// to test my button is loaded or not by finding button
test('should load button inside contact component', () =>{
    render (<Contact/>)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
})

// to test my button is loaded or not by finding text
test('should load button inside contact component', () =>{
    render (<Contact/>)
    const button = screen.getByText("Submit")  // in our button we added text as Submit
    expect(button).toBeInTheDocument()
})

// to test my input tag is loaded or not by finding placeholder name
//test can be writen as 'it'
it('should load input name inside contact component', () =>{
    render (<Contact/>)
    const inputName = screen.getByPlaceholderText("name")  // in our input placeholder is name
    expect(inputName).toBeInTheDocument()
})

it('should load 2 input boxes on contact component', () =>{
    render (<Contact/>)
    const inputBox = screen.getAllByRole("textbox")  // there are multiple items then use all,this line will return jsx elements
    // expect(inputName).toBeInTheDocument()
    // console.log('inputBox',inputBox) //inputBox will be input tag which is js object
    // expect(inputBox.length).not.toBe(2)
    expect(inputBox.length).toBe(2)
})
})