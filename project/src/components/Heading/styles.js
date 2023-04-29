import styled, { css } from 'styled-components';



const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};`,

  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};`,

  

  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    
  `,

  big: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};`,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xhuge};
    background: purple;
    
  }
`;


const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;



export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;