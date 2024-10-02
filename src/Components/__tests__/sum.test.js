import Selection from "../sum"
import {render,fireEvent,screen, getByRole} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
//Syntax to write test case - 

test('Simulates selection', () => {
   const user = userEvent.setup();

   render(<Selection />);
   fireEvent.change(screen.getByRole('combobox'),{target:{value:'USA'}})
   const selectedElement = screen.getByRole('combobox')
   expect(selectedElement).toHaveValue('USA')

   // user.selectOptions(screen.getByRole("combobox"), "USA");

   // expect(("option", { name: "USA" }).selected).toBe(true);
   // let options = getA/llByTestId('selected')
   // expect(options[0].selected).toBeFalsy();
   // expect(options[1].selected).toBeTruthy();
   // expect(options[2].selected).toBeFalsy();
   //...
 })

//__test__ here double underscore stands for dunder.