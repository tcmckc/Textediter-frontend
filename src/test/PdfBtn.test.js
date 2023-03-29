import { render, screen, fireEvent } from '@testing-library/react';
import PdfBtn from '../components/PdfBtn';
import docsModel from '../models/docs';


jest.mock('../models/docs', () => ({
  pdfDoc: jest.fn(),
}));

//Test that the SaveBtn component renders a button"
test('renders export pdf button', () => {
  const handlePdfMock = jest.fn();

  render(<PdfBtn props={{ value: '<p>test</p>', name: 'test', email: 'test', onClick:{handlePdfMock}}} />);

  const button = screen.getByRole("button", {name: /export pdf/i});
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('EXPORT PDF');
});


//Test that the handlePdf function is called when the button is clicked
test('calls handlePdf function when button is clicked', () => {
  render(<PdfBtn props={{ value: '<p>test</p>', name: 'test', email: 'test'}} />);
  
  const button = screen.getByRole("button", {name: /export pdf/i});

  fireEvent.click(button);

  expect(docsModel.pdfDoc).toHaveBeenCalledTimes(1);
});
