import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon} from '@styled-icons/boxicons-regular/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { useState } from 'react';


export const Menu = ({ links = [], logoData }) => {
    const [visible, setVisible] = useState(false);
    
    return (
        <>
        <Styled.Button 
        visible={visible} 
        onClick={() => setVisible(true)} 
        aria-label='Open/Close menu'
        >
        {visible ? (<CloseOutline aria-label='Close menu'/>) : (<MenuIcon aria-label='Open menu'/>)}
        </Styled.Button>
        <Styled.Container visible={visible} onClick={() => setVisible(false)} >
          <SectionContainer>
            <Styled.MenuContainer>
              <LogoLink {...logoData} />
              <NavLinks links={links} />
            </Styled.MenuContainer>
          </SectionContainer>
        </Styled.Container>
      </>
    );
  };
  
Menu.propTypes = {
    ...NavLinks.propTypes,  //Expadir links
    logoData: P.shape(LogoLink.propTypes).isRequired // Cria uma nova chave dentro do logoData
};
