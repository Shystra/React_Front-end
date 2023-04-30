import { screen } from '@testing-library/react';
import { SectionContainer } from '.'
import { renderTheme } from '../styles/render_theme';

describe('<SectionContainer />', () => {
    it('should render', () => {
        renderTheme(<SectionContainer>Children</SectionContainer>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});