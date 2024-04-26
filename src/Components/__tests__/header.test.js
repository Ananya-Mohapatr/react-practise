
import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import appStore from '../../utils/appStore'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

it('should load Header component with login button', () => {

    //We wrote broserRouter as we have defined Link inside Header component and 'test' doesnot understand Link component which is in Header component which is a part of react-router-dom
    //We wrote 'Provider' because test does not understand redux.Since we  used redux in header component,
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>)

    //   const loginButton = screen.getByRole('button') //method-1
    //   const loginButton = screen.getByText('Login')   //method-2
    const loginButton = screen.getByRole("button", { name: "Login" });  //Method-3


    expect(loginButton).toBeInTheDocument()
})
it('should render header component with a cart items 0', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)
    const cartItems = screen.getByText("Cart (0 items)");  //Method-3


    expect(cartItems).toBeInTheDocument()
})
it('should render header component with a cart item', () => {   //when cart items are not fix
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)
    const cartItems = screen.getByText(/Cart/);  // we can use regex to get any number of cart items


    expect(cartItems).toBeInTheDocument()
})


it('should change Login button to Logout on click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);     // fireEvent is used in case of any event happening

    const logoutButton = screen.getByRole("button", { name: "LogOut" });
    expect(logoutButton).toBeInTheDocument()
})