import {
    Col,
    Row,
    Card,
    CardBody,
    Footnote1,
    CarouselGridWrapper,
    Carousel,
    CarouselCol,
} from '@sberdevices/plasma-ui';
import React from 'react';
import styled from 'styled-components';
import { detectDevice } from '@sberdevices/plasma-ui/utils/deviceDetection';

import FluidImg from './FluidImg';

const StyledText = styled.div`
    margin-bottom: 26px;
`;

const MarginCol = styled(Col)`
    margin-bottom: 8px;
`;

const StoryItem: React.FC<{ title: string; images: string[] }> = ({ title, images }) => {
    return (
        <>
            <StyledText>
                <Footnote1>{title}</Footnote1>
            </StyledText>

            {detectDevice() === 'mobile' ? (
                <Row>
                    {images.map((image) => (
                        <MarginCol sizeS={2}>
                            <Card outlined>
                                <CardBody>
                                    <FluidImg src={image} />
                                </CardBody>
                            </Card>
                        </MarginCol>
                    ))}
                </Row>
            ) : (
                <CarouselGridWrapper>
                    <Carousel as={Row} axis="x" index={0} scrollSnapType="mandatory" detectActive detectThreshold={0.5}>
                        {images.map((image) => (
                            <CarouselCol sizeS={4} sizeM={2} sizeL={2} sizeXL={4}>
                                <Card outlined>
                                    <CardBody>
                                        <FluidImg src={image} />
                                    </CardBody>
                                </Card>
                            </CarouselCol>
                        ))}
                    </Carousel>
                </CarouselGridWrapper>
            )}
        </>
    );
};

export default StoryItem;
