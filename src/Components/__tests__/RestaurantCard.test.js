import {render, screen} from "@testing-library/react"
import ResCardComponent from "../../Modal/ResCardComponent"
import MOCK_DATA from "../../mockData/resCardMock.json"    // Mock Data for testing
import "@testing-library/jest-dom"
it("Should render RestaurantCard component with props Data", () => {

    render(<ResCardComponent resData={MOCK_DATA} />)  // as rescardcomponent recieves props so we also need to pass resdata to our test. In resdata we need to pass the mock data similra to data which is coming in the API.

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();

})