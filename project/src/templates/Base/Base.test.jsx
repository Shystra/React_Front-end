import { screen } from '@testing-library/react';
import { Base } from '.'
import { renderTheme } from '../styles/render_theme';

describe('<Base />', () => {
    it('should render', () => {
        renderTheme(<Base>Children</Base>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});