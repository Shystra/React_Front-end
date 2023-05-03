import { fireEvent, screen } from '@testing-library/react';
import { Menu } from '.'
import { renderTheme } from '../styles/render_theme';
import linksMock from '../NavLinks/mock';
import { theme } from '../styles/theme';
import { Container } from './styles';

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


    it('should render menu mobile and buttom for open and close the menu', () => {
        const { contianer } = renderTheme(
            <Menu links={linksMock} logoData={logoData} />,
        );

        // AriaLabel(open close menu)
        const button = screen.getByLabelText('Open/Close menu');
        // Pegar o irmao mais proximo do button
        const menuContainer = button.nextSibling;

        // Quando o botao for carregado, nao deverá exibir
        expect(button).toHaveStyleRule('display', 'none');
        // Testando quando a tela esta menor
        expect(button).toHaveStyleRule('display', 'flex', {
            media: theme.media.lteMedium,
        });

        // Quando a tela for menor a 768px a opacidade tem que ser 0
        expect(menuContainer).toHaveStyleRule('opacity', '0', {
            media: theme.media.lteMedium,
        });

        // se a opacidade estiver 0 o button tem que estar open
        expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

        //quando dar um clique no button o menu devera ser exibido
        fireEvent.click(button);
        expect(menuContainer).toHaveStyleRule('opacity', '1', {
            media: theme.media.lteMedium,
        });
        expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

        //quando clicar no botao novamente o menu devera fechar
        fireEvent.click(menuContainer);
        expect(menuContainer).toHaveStyleRule('opacity', '0', {
            media: theme.media.lteMedium,
        });
        expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    });


    it('should not render links', () => {
        const { container } = renderTheme(<Menu logoData={logoData} />);
        expect(
            screen.queryByRole('navigation', { name: 'Main menu'}).firstChild,
        ).not.toBeInTheDocument();

        expect( container ).toMatchSnapshot();
    });
});