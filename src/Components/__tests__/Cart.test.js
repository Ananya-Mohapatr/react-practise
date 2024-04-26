import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import '@testing-library/jest-dom'
import MOCK_DATA from '../../mockData/MockRestaurantMenu.json'
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Cart from "../Cart";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>Promise.resolve(MOCK_DATA)
    })
})
it("should load restaurant menu component",async () =>{

    await act (async () => render(
    <BrowserRouter><Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>))
    const accordionHeader = screen.getByText('Recommended (20)')
    fireEvent.click(accordionHeader)
    const foodItemsList = screen.getAllByTestId("foodItems")
    expect(foodItemsList.length).toBe(20)
    const addBtn = screen.getAllByRole("button" , {name : "Add+"});
    fireEvent.click(addBtn[0])
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument()
    expect(screen.getAllByTestId("foodItems").length).toBe(21) // Here 21 represents 20 items from RestaurantMenu component and 1 from Cart Component
    fireEvent.click(screen.getByRole("button",{name : "Clear Cart"} ))
    expect(screen.getAllByTestId("foodItems").length).toBe(20)  // Existing added item is removed ,20 is the total length present inside RestaurantMenu component

    expect(screen.getByText("Cart is empty,Add items to cart")).toBeInTheDocument()


})

