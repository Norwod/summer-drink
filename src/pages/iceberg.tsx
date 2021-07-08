import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import Layout from '../components/Layout';
import { Route } from '../consts/routes';

const Iceberg = () => {

    return (
        <Layout>
            <MyHeader label="Айсберг в океане" />
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
                                src='/iceverg.jpeg'
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Айсберг в океане
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>Сливочное мороженое - 100 г</li>
                                        <li>Пастеризованное молоко - 120 г</li>
                                        <li>Вишневый сироп - 20 г</li>
                                        <li>Яичный желток - 1 шт.</li>                                        
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p>Молоко охлаждаем. Добавляем в него вишневый сироп (можно заменить вареньем, только без ягод), сырой яичный желток, 2 ст. ложки мороженого и взбиваем миксером в течение 2 минут так, чтобы смесь хорошо запенилась.
                                    Готовую смесь переливаем в бокал.
                                    Оставшееся мороженое разминаем вилкой и осторожно добавляем в коктейль.
                                    Такой коктейль «Айсберг в океане» можно приготовить из клубники или малины.
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

export default Iceberg;
