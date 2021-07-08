import { Footnote1, Body3, Body2, Button, Card, CardBody, CardContent, CardMedia, Col, Row, TextBoxSubTitle } from '@sberdevices/plasma-ui';
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

const Cocktail: React.FC<{ title: string; subTitle?: string; receipt: string; src: string; ratio: string; }> = ({
    title,
    subTitle,
    src,
    ratio,
    receipt,
}) => {
    return (
        <Col sizeS={4} sizeM={4} sizeL={6} sizeXL={8} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Card
                style={{ width: '100%', margin: '2%', marginLeft: '5%' }}
                tabIndex={-1}
                outlined={true}
                scaleOnFocus={false}
            >
                <CardBody>
                    <CardMedia
                        src={src}
                        ratio='2/1'
                    />
                    <CardContent cover={false}>
                        <Row style={{ marginLeft: '1%' }}>
                            {title}
                        </Row>
                        <Row style={{ marginLeft: '1%' }}>
                            <TextBoxSubTitle>{subTitle}</TextBoxSubTitle>
                        </Row>
                        <Row style={{ marginLeft: '1%' }}>
                            {receipt}
                        </Row>
                        <Button
                            text={'Далее'}
                            view='primary'
                            size='s'
                            scaleOnInteraction={false}
                            outlined={true}
                            stretch
                            style={{ marginTop: '1em' }}
                        />
                    </CardContent>
                </CardBody>
            </Card>
        </Col>

    );
};

export default Cocktail;
