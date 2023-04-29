import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ 
  children, 
  corlorDark = true, 
  as = 'h1', 
  size = 'huge',
  uppercase = false,

}) => {
   
  return <Styled.Title 
    colorDark={corlorDark} 
      as={as} 
        size={size}
          uppercase={uppercase}
        
        
          >{children}
        </Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  corlorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'huge', 'big']),
  uppercase: P.bool,
};