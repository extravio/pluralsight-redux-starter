import expect from 'expect';
import {authorsFormatterForDropdown} from './selectors.js';

describe('Author Selectors', () => {
  describe('authorsFormatterForDropdown', () => {
    it('should return author data formatted for use in dropdown', () => {
      const authors = [
          { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
          { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' }
      ];
      const expected = [
          { value: 'cory-house', text: 'Cory House' },
          { value: 'scott-allen', text: 'Scott Allen' }
      ];
      expect(authorsFormatterForDropdown(authors)).toEqual(expected);
    });
  });
});
