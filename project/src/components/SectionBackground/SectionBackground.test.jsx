import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render_theme';

describe('<SectionBackground />', () => {
    it('should render', () => {
        const { container } = renderTheme(<SectionBackground background={true}><h1>Children</h1></SectionBackground>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should render with backgroud light', () => {
        const { container } = renderTheme(
            <SectionBackground>
                <h1>Children</h1>
            </SectionBackground>,
        );
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })    
});