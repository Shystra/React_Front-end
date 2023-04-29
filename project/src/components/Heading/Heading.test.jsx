import { screen } from '@testing-library/react';
import { Heading } from "."
import {renderTheme} from '../styles/render_theme';
import { theme } from "../styles/theme";


describe('<Heading />', () => {
    it('should render with default values', () => {
        const { debug } = renderTheme(<Heading>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });
        

        expect(heading).toHaveStyle({
            'color': theme.colors.primaryColor,
            'font-size': theme.font.sizes.huge,
            'text-transform': 'none',
        });        
    });
    it('should render with white color', () => {
        const { debug } = renderTheme(<Heading corlorDark={false}>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });
        

        expect(heading).toHaveStyle({
            color: theme.colors.white,
        })      
    });
    it('should render correct heading sizes', () => {
        const { debug } = renderTheme(<Heading size='small'>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto'});
          
        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.medium,
        });
    });

    it('should render correct heading sizes in big', () => {
        const { debug } = renderTheme(<Heading size='big'>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto'});
          
        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.xlarge,
        });
    });
    it ('should render correct heading sizes in huge', () => {
        const { debug } = renderTheme(<Heading size='huge'>children</Heading>);
        const heading = screen.getByRole('heading', { name:'children' });

        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.huge,
        });
    });


});
