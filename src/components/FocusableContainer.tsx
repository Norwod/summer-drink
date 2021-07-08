import React from 'react';
import styled, { css } from 'styled-components';
import { addFocus, applyRoundness, FocusProps, RoundnessProps } from '@sberdevices/plasma-core/mixins';
import { isSberBox } from '@sberdevices/plasma-ui/utils/deviceDetection';

const Container = styled.div<FocusProps & RoundnessProps>`
    outline: none;
    ${isSberBox() &&
    css`
        margin-left: -24px;
        padding-left: 24px;
        width: calc(100% + 48px);
        ${addFocus};
    `}

    &::before {
        ${applyRoundness}
    }
`;

export const FocusableContainer: React.FC = ({ children, ...props }) => {
    return (
        <Container tabIndex={0} roundness={16} {...props}>
            {children}
        </Container>
    );
};

export default FocusableContainer;
