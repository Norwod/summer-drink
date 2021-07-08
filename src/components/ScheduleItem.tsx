import { Footnote1, Body3, Body2 } from '@sberdevices/plasma-ui';
import React from 'react';
import styled from 'styled-components';

import FocusableContainer from './FocusableContainer';

const DivStyled = {
    padding: '24px 0',
};

const StyledBody2 = styled(Body2)`
    margin-top: 16px;
`;

const Description = styled(Footnote1)`
    color: rgba(255, 255, 255, 0.56);
    margin-top: 16px;
`;

const StoryItem: React.FC<{ title: string; subTitle?: string; time: string; place: string }> = ({
    title,
    subTitle,
    time,
    place,
}) => {
    return (
        <FocusableContainer>
            <div style={DivStyled}>
                <Body3>{time}</Body3>
                <StyledBody2>{title}</StyledBody2>
                <Description>{subTitle ?? null}</Description>
                <Description>{place}</Description>
            </div>
        </FocusableContainer>
    );
};

export default StoryItem;
