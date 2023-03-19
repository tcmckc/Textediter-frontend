import { render, fireEvent, act } from '@testing-library/react';
import Name from '../components/Name';

// When a user fills in document name
// 

describe('Name Module', () => {
    it('changes value of input element', () => {
      const onChange = jest.fn();

      const { container } = render(<Name onChange={onChange} />);

      const inputElement = container.querySelector('input');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'Test document' } });
      });
  
      expect(inputElement.value).toEqual('Test document');
    });
  });
