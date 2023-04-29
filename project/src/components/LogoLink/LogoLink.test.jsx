import { screen } from '@testing-library/react';
import { LogoLink } from '.'
import { renderTheme } from '../styles/render_theme';

describe('<LogoLink />', () => {
    it('should render', () => {
        renderTheme(<LogoLink>Children</LogoLink>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});