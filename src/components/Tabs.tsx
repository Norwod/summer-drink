import React from 'react';
import { Tabs as PlasmaTabs } from '@sberdevices/plasma-ui';
import styled from 'styled-components';

const StyledTabs = styled(PlasmaTabs)`
    margin: 26px 0;
    overflow-y: auto;

    /* stylelint-disable */
    &::after {
        content: '';
        display: block;
        min-width: 1px;
        height: 100%;
    }

    li::before {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    ::-webkit-scrollbar {
        display: none;
    }
    /* stylelint-enable */
`;

const Tabs: React.FC = ({ children }) => {
    return (
        <StyledTabs size="s" view="secondary" stretch scaleOnPress tabIndex={-1}>
            {children}
        </StyledTabs>
    );
};

export default Tabs;
