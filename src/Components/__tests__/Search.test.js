import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../../mockData/mockRestaurantData.json'
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'


//We try to make api call with mock fetch a promise based function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
// declare (()=>{
beforeAll(()=>{
    console.log("Before all------------")
})
beforeEach(()=>{
    console.log("before each ")
})
afterAll (() =>{
    console.log("after all")
})
afterEach (()=>{
    console.log("after each")
})

//execution hyrarchy of above 4 functions - Before all -->Before Each ---->After Each ----->Before Each --->After Each --->After All
it('should render body component',async ()=>{
    await act(async () => render(
    <BrowserRouter><Body/></BrowserRouter>));

    const searchBtn = screen.getByRole('button',{ name : "Search"});
    expect (searchBtn).toBeInTheDocument()
    
}) 
it('should render onChange of input field in body component',async ()=>{
    await act(async () => render(
    <BrowserRouter><Body/></BrowserRouter>));
    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(20)


    const searchInput = screen.getByTestId('searchId');
    const searchBtn = screen.getByRole("button",{name : "Search"})
    fireEvent.change(searchInput,{target : {value : "Pizza"}})
    fireEvent.click(searchBtn)
    const cardsAfterSearch = screen.getAllByTestId("resCard")
    expect(cardsAfterSearch.length).toBe(3)
    // expect (searchInput).toBeInTheDocument()

    
}) 
it('should render top rated restaurants ',async ()=>{
    await act(async () => render(
    <BrowserRouter><Body/></BrowserRouter>));

    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(20)
    const topRatedButton = screen.getByRole("button", {name : "Top Rated Resturants"})
    fireEvent.click(topRatedButton)
    const cardsAfterFilter = screen.getAllByTestId("resCard")
    expect(cardsAfterFilter.length).toBe(17)
    // const 
    
}) 
// })