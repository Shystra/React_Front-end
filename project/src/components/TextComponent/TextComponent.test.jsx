import { screen } from '@testing-library/react';
import { TextComponent } from '.'
import { renderTheme } from '../styles/render_theme';

describe('<TextComponent />', () => {
    it('should render', () => {
        renderTheme(<TextComponent>Children</TextComponent>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});