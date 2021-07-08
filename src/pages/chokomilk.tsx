import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import Layout from '../components/Layout';
import { Route } from '../consts/routes';

const Chokomilk = () => {
    const [index, setIndex] = React.useState(0);

    return (
        <Layout>
            <MyHeader label="Молочно-шоколадный коктейль" />
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
                                src='/chokomilk.jpeg'
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Молочно-шоколадный коктейль
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>Какао-порошок — 1 ст. л.</li>
                                        <li>Сахар — 2 ½ ст. л.</li>
                                        <li>Вода кипящая — 1 ст. л.</li>
                                        <li>Молоко обезжиренное, очень холодное — ½ стакана</li>
                                        <li>Вода газированная (чистая, без добавок) — 1 ½ стакана</li>
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p>В маленькой чашке требуется смешать какао и сахар. Добавить горячую воду и хорошо перемешать.
                                    Влить молоко в высокий бокал. Понемногу влить газированную воду. Аккуратно перемешать.
                                    Очень медленно и осторожно добавить шоколадный сироп так, чтобы не исчезла пена.
                                    Аккуратно перемешать коктейль длинной ложечкой. Молочно-шоколадный коктейль будет шоколадно-коричневый снизу и светло-пенистый сверху. Приятного аппетита!
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

export default Chokomilk;
