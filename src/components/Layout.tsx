import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { sberBox, sberPortal, mobile } from '@sberdevices/plasma-tokens/typo/index';
import { background, body1, gradient, text } from '@sberdevices/plasma-tokens';
import { darkSber } from '@sberdevices/plasma-tokens/themes/darkSber';
import { detectDevice, deviceScales, isSberBox } from '@sberdevices/plasma-ui/utils/deviceDetection';

import { useFocus } from '../hooks/useFocus';

const map = {
    sberPortal,
    sberBox,
    mobile,
};

// создаем react-компонент c глобальными стилями типографики
const TypoScale = createGlobalStyle(map[detectDevice()]);

// создаем react-компонент для подложки
const DocStyles = createGlobalStyle`
    /* stylelint-disable-next-line selector-nested-pattern */
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
        /** необходимо залить градиентом всю подложку */
        min-height: 100vh;
    }

    /* stylelint-disable-next-line selector-nested-pattern */
    body {
        margin: 0;
        ${!isSberBox() && '--plasma-colors-button-focused: transparent'};
    }
`;

// создаем react-компонент для персонажа
const Theme = createGlobalStyle(darkSber);

const StyledLayout = styled.div<{ noPadding: boolean }>`
    padding: 0 0 ${({ noPadding }) => (noPadding ? 0 : 80 * deviceScales[detectDevice()])}px;
    ${body1}
`;

export const GlobalStyles = () => (
    <>
        <TypoScale />
        <DocStyles />
        <Theme />
    </>
);

export const Layout: React.FC<{ noPadding?: boolean }> = ({ noPadding = false, children, ...props }) => {
    useFocus();

    return (
        <StyledLayout noPadding={noPadding} {...props}>
            <GlobalStyles />
            {children}
        </StyledLayout>
    );
};

export default Layout;
