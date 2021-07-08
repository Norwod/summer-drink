import React from 'react';
import { Container, Header } from '@sberdevices/plasma-ui';
import { body1 } from '@sberdevices/plasma-tokens';
import { detectDevice, isSberPortal } from '@sberdevices/plasma-ui/utils/deviceDetection';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Logo from './Logo';

const StyledHeader = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    ${body1};
    /* stylelint-disable */
    background: ${detectDevice() === 'mobile'
        ? '#000'
        : `
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.6) 20%,
            rgba(0, 0, 0, 0.5) 40%,
            rgba(0, 0, 0, 0.35) 60%,
            rgba(0, 0, 0, 0.1) 80%,
            rgba(0, 0, 0, 0) 100%
        )
    `};
    /* stylelint-enable */
`;

const MyHeader: React.FC<{ label: string; onBack?: () => void }> = ({ label, onBack, ...props }) => {
    const router = useRouter();
    const back = detectDevice() === 'mobile' || ((isSberPortal() && !onBack) as any);

    return (
        <StyledHeader {...props}>
            <Container>
                <Header style={body1} back={true} onBackClick={onBack ?? router.back} title={label}>
                    {/* {detectDevice() !== 'mobile' && <Logo />} */}
                </Header>
            </Container>
        </StyledHeader>
    );
};

export default MyHeader;
