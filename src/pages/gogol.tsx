import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import Layout from '../components/Layout';
import { Route } from '../consts/routes';

const Gogol = () => {

    return (
        <Layout>
            <MyHeader label="Гоголь-моголь" />
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
                                src='/gogol.jpeg'
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Гоголь-моголь
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>Яйцо куриное (желток) - 1 шт.</li>
                                        <li>Сахар - 1-2 ст. ложки</li>
                                        <li>Молоко - 0,75 стакана</li>
                                        <li>Соль - 1 щепотка</li>
                                        <li>Лимон - 1 ломтик</li>
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p> Отделить белок от желтка. Желток взбить венчиком, добавить 1-2 ст. ложки сахара, немного соли.
                                    Все тщательно взбить. Затем влить 0,75 стакана кипяченого и охлажденного молока и перемешать. 
                                    Подавать гоголь-моголь в холодном виде с ломтиком лимона.
                                    Приятного аппетита!
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

export default Gogol;
