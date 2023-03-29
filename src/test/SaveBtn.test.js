import { render, fireEvent, screen } from '@testing-library/react';
import SaveBtn from '../components/SaveBtn';
import docsModel from '../models/docs';

// When user fills in document name and text
// and clicks a "Save as new" button,
// the function will be called to save a new document 
// with the name and text

jest.mock('../models/docs', () => ({
    saveDoc: jest.fn(),
}));
  
test('calls save function when the button is clicked', () => {
    const newname = 'Test Name';
    const value = 'Test value';
    const email = 'Test editor';
    const { getByText } = render(<SaveBtn props={{newname, value, email}} />);

    //const button = getByText('Save as new');
    const button = screen.getByRole("button", {name: /save as new/i});

    fireEvent.click(button);

    expect(docsModel.saveDoc).toHaveBeenCalledTimes(1);
    expect(docsModel.saveDoc).toHaveBeenCalledWith({ name: newname, text: value, editor: email});
});
