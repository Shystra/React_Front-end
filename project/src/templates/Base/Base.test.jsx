import { screen } from '@testing-library/react';
import { Base } from '.'
import { renderTheme } from '../../styles/render_theme';
import { mockBase } from '../Base/mock';

describe('<Base />', () => {
    it('should render Base', () => {
      const {container} = renderTheme(<Base {...mockBase} />);
      expect(container).toMatchSnapshot();
    });
  });