import React from 'react';
import { deviceScales, detectDevice, isSberBox } from '@sberdevices/plasma-ui/utils/deviceDetection';
import styled from 'styled-components';

import Img from './Img';

const Split = styled.div`
    height: ${isSberBox() ? 42 : 18 * deviceScales[detectDevice()]}px;
    width: 0;
    display: inline-block;
    margin-left: 12px;
    margin-right: 12px;
    border: ${deviceScales[detectDevice()]}px solid rgba(255, 255, 255, 0.28);
    border-radius: ${deviceScales[detectDevice()]}px;
`;

const Logos = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${detectDevice() === 'mobile' ? '24px 0' : 0};
`;

const Logo: React.FC = () => {
    return (
        <Logos>
            <Img
                src="/sberDevices.svg"
                width={isSberBox() ? 346 : 143 * deviceScales[detectDevice()]}
                height={isSberBox() ? 46 : 19 * deviceScales[detectDevice()]}
            />
            <Split />
            <Img
                src="/spief.svg"
                width={isSberBox() ? 228 : 94 * deviceScales[detectDevice()]}
                height={isSberBox() ? 46 : 19 * deviceScales[detectDevice()]}
            />
        </Logos>
    );
};

export default Logo;
