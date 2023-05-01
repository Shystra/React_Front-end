import { screen } from '@testing-library/react';
import { Menu } from '.'
import { renderTheme } from '../styles/render_theme';

describe('<Menu />', () => {
    it('should render', () => {
        renderTheme(<Menu>Children</Menu>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});