import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import Layout from '../components/Layout';
import { Route } from '../consts/routes';

const Champ = () => {

    return (
        <Layout>
            <MyHeader label="Фальшивое шампанское" />
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
                                src='/champ.jpeg'
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Фальшивое шампанское
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>Вода - 1 литр</li>
                                        <li>Мед - 150 г</li>
                                        <li>Сахар - 150 г</li>
                                        <li>Лавровый лист - 2 шт.</li>
                                        <li>Корица - 5 г</li>
                                        <li>Гвоздика - 5 г</li>
                                        <li>Кардамон - 5 г</li>
                                        <li>Имбирь - 5 г</li>
                                        <li>Мускатный орех - 5 г</li>
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p> Воду вскипятить.Добавить пряности, мед, сахар и варить еще 10-15 минут.
                                    Остудить и дать настояться напитку.
                                    Разлить будущее шампанское по стеклянным бутылкам, добавить в каждую по несколько изюминок.
                                    Бутылки плотно закупорить и убрать в холодильник настаиваться на 2-3 недели.
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

export default Champ;
