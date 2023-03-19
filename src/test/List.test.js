import { render } from '@testing-library/react';

//import docsModel from '../models/docs';
import List from '../components/List';


describe("List module", () => {
    it('renders a form and select element', () => {
        const { container } = render(<List />);
        const formElement = container.querySelector('form');
        const selectElement = container.querySelector('select');
        expect(formElement).not.toBeNull();
        expect(selectElement).not.toBeNull();
    });
    
    it('renders an option element with value', () => {
        const { container } = render(<List />);
        const optionElement = container.querySelector('option');
        expect(optionElement.value).toBeDefined();
    });

});
