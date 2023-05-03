import { screen } from '@testing-library/react';
import { Menu } from '.'
import { renderTheme } from '../styles/render_theme';
import linksMock from '../NavLinks/mock';

const logoData = { 
    text: 'Logo',
    link: '#target',
};


describe('<Menu />', () => {
    it('should render Logo and Main Menu Nav', () => {
        const {contianer} = renderTheme(<Menu links={linksMock} logoData={logoData}/>);

        expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
        expect(screen.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument();

        expect (contianer).toMatchSnapshot();


    });
});