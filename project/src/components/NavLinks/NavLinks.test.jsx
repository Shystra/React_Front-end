import { screen } from '@testing-library/react';
import { NavLinks } from '.'
import { renderTheme } from '../styles/render_theme';
import mock from './mock';

describe('<NavLinks />', () => {
    it('should render links', () => {
        renderTheme(<NavLinks links={mock} />);
        expect(screen.getAllByRole('link')).toHaveLength(mock.length);
    });

    it('should not render links', () => {
        renderTheme(<NavLinks />);
        expect(screen.queryAllByAltText(/links/i)).toHaveLength(0);
    });

    it('should match snapshot', () => {
        renderTheme(<NavLinks links={mock} />);
        expect(screen.getAllByRole('link')).toMatchSnapshot();
    });
});