import { screen } from '@testing-library/react';
import { Heading } from "."
import {renderTheme} from '../styles/render_theme';
import { theme } from "../styles/theme";


describe('<Heading />', () => {
    it('should render with default values', () => {
        const { debug } = renderTheme(<Heading>texto</Heading>);
        debug();
        
        });
    });
