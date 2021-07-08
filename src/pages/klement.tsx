import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import Layout from '../components/Layout';
import { Route } from '../consts/routes';

const Klement = () => {

    return (
        <Layout>
            <MyHeader label="Коктейль «Сент-Клемент»" />
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
                                src='/klement_2.jpeg'
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Коктейль «Сент-Клемент»
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>Апельсины — 2 шт.</li>
                                        <li>Лимон — 1 шт.</li>
                                        <li>Сахар — 1 ст. л. (или по вкусу)</li>
                                        <li>Вода — 75 мл (5 ст. л.)</li>
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p> Необходимо хорошо вымыть фрукты и тонко срезать цедру острым ножом (без белой мякоти). Очистить апельсины и лимон.
                                    Положить в кастрюльке цедру, сахар и воду. Помешивать на слабом огне, чтобы сахар растворился. Снять с огня и выдавить цедру ложкой о стенки кастрюли. Накрыть крышкой, остудить.
                                    Достать из приготовленного сахарного сиропа цедру и выбросить. Разомнуть фрукты, залить сахарным сиропом и оставить на 2-3 часа.
                                    Процедить сок, хорошо выдавливая мякоть, и влить его в высокий стакан с измельченным льдом. Украсить апельсиновый коктейль дольками апельсина и лимона. Приятного аппетита
                                    </p>
                                </Row>
                                <Link href={Route.INDEX}>
                                    <Button
                                        text={'Cписок коктейлей'}
                                        view='primary'
                                        size='s'
                                        scaleOnInteraction={false}
                                        outlined={true}
                                        stretch
                                        style={{ marginTop: '1em' }}

                                    />
                                </Link>
                            </CardContent>
                        </CardBody>
                    </Card>
                </Col>


            </Container>
        </Layout>
    );
};

export default Klement;
