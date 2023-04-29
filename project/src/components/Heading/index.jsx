import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ 
  children, 
  corlorDark = true, 
  as = 'h1', 
  size = 'big',
  uppercase = false,

}) => {
   
  return <Styled.Title 
    corlorDark={corlorDark} 
      as={as} 
        size={size}
          uppercase={uppercase}
        
        
          >{children}
        </Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  corlorDark: P.bool.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: P.oneOf(['small', 'medium', 'huge', 'big']).isRequired,
  uppercase: P.bool.isRequired,
};