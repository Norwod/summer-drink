import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { detectDevice, deviceScales, isSberBox, isSberPortal } from '@sberdevices/plasma-ui/utils/deviceDetection';

import MyHeader from '../components/MyHeader';
import { GlobalStyles } from '../components/Layout';
import Img from '../components/Img';

const StyledImageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 0;
    position: relative;
    display: block;
    overflow: auto;
`;

const StyledHeader = styled(MyHeader)`
    position: fixed;
    top: 0;
    z-index: 1;
`;

const height = 1000 * deviceScales[detectDevice()];
const ratio = 1.38565;
const width = height * ratio;

const MapSpief = () => {
    const container = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (isSberBox()) {
            return;
        }

        // @ts-ignore
        container.current?.scrollTo({
            top: height * (isSberPortal() ? 0.2 : 0.1),
            left: width * (isSberPortal() ? 0.2 : 0.4),
            behavior: 'auto',
        });
    }, []);

    return (
        <>
            <GlobalStyles />
            <StyledHeader label="Карта" />
            <StyledImageContainer ref={container}>
                {isSberBox() ? (
                    <Img src="/expoforum.jpg" />
                ) : (
                    <img src="/expoforum.jpg" width={width} height={height} alt="" />
                )}
            </StyledImageContainer>
        </>
    );
};

export default MapSpief;
