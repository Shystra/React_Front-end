import styled, {css} from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-bottom: ${theme.colors.mediumGray}; 
    
    `}
`;

export const MenuContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media ${theme.media.lteMedium} {
            display: block;
            text-align: center;
            /* padding: ${theme.spacings.xxlarge}; */
        }
    
    `}
`;
export const Button = styled.button`
    ${({ theme }) => css`
        
    
    `}
`;
