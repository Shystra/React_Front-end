import P from 'prop-types';
import * as Styled from './styles';
import { ArrowUpwardOutline } from "@styled-icons/evaicons-outline/ArrowUpwardOutline"

export const GoTop = () => {
    return (
        <Styled.Container href="#" aria-label='Go to top' title='Go to top'>
            <ArrowUpwardOutline />
        </Styled.Container>
    );
};


