import { Card, Col, Row, CardBody, Footnote1, TextBox } from '@sberdevices/plasma-ui';
import React from 'react';
import { detectDevice } from '@sberdevices/plasma-ui/utils/deviceDetection';
import styled from 'styled-components';

import Img from '../components/Img';

const heightMap = {
    sberBox: 452,
    sberPortal: 270,
    mobile: 165,
};

const StyledCol = styled(Col)`
    margin-bottom: 0.3rem;
    margin-top: ${detectDevice() === 'mobile' ? '12px' : 0};
`;

const StyledItem = styled.div`
    display: flex;
    align-items: center;

    /* stylelint-disable */
    a {
        color: #fff;
        text-decoration: none;
    }
    /* stylelint-enable */
`;

const StyledImg = styled.img`
    margin-right: 10px;
`;

const Item: React.FC<{ src: string }> = ({ src, children, ...props }) => (
    <StyledItem style={{ marginBottom: '0.3rem' }} {...props}>
        <StyledImg src={src} height={18} width={18} />
        <Footnote1> {children} </Footnote1>
    </StyledItem>
);

export const Restaurant: React.FC<{
    src: string;
    title: string;
    subTitle: string;
    where: string;
    time: string;
    phone?: string;
    web?: string;
}> = (props: any) => {
    return (
        <Row style={{ marginBottom: '1rem' }}>
            <Col sizeM={2.5} sizeS={4} sizeXL={5}>
                <Card tabIndex={0} outlined style={{ height: `${heightMap[detectDevice()]}px` }}>
                    <CardBody>
                        <Img src={props.src} />
                    </CardBody>
                </Card>
            </Col>
            <StyledCol sizeM={3.5} sizeS={4} sizeXL={7}>
                {/* @ts-ignore */}
                <TextBox size="m" subTitle={props.subTitle} title={props.title} style={{ marginBottom: '1rem' }} />
                <Item src="/locator.svg"> {props.where} </Item>
                {props.phone && (
                    <Item src="/phone.svg">
                        <a tabIndex={-1} href={`tel:${props.phone.replace(/[\s()]/g, '')}`}>
                            {props.phone}
                        </a>
                    </Item>
                )}
                <Item src="/clock.svg"> {props.time} </Item>
                {props.web && (
                    <Item src="/world.svg">
                        <a tabIndex={-1} href={`https://${props.web}`}>
                            {props.web}
                        </a>
                    </Item>
                )}
            </StyledCol>
        </Row>
    );
};

export default Restaurant;
