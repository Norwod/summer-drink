import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';

import MyHeader from '../components/MyHeader';
import Layout from '../components/Layout';

const Prostuda = () => {

    return (
        <Layout>
            <MyHeader label="Коктейль «Удар по простуде»" />
            <Container>
                <Col sizeS={4} sizeM={5} sizeL={6} sizeXL={8} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Card
                        style={{ width: '100%', margin: '2%', marginLeft: '5%' }}
                        tabIndex={-1}
                        outlined={true}
                        scaleOnFocus={false}
                    >
                        <CardBody>
                            <CardMedia
                                src='/prostuda.jpeg'
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Коктейль «Удар по простуде»"
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>Молоко - 250 мл</li>
                                        <li>Малиновое варенье - 2 ст. л.</li>
                                        <li>Какао-масло - 1/2 ч. л.</li>
                                        <li>Корица - 1/2 ч. л.</li>
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p> На дно насыпаем 2 ст. л. малинового варенья.
                                    Заливаем теплым молоком. Немного перемешиваем.
                                    Добавляем пол чайной ложки какао-масла.
                                    После того, как масло растворится, сверху посыпаем корицей.
                                    Коктейль готов.
                                    </p>
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


            </Container>
        </Layout>
    );
};

export default Prostuda;
