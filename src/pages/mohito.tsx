import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import { Route } from '../consts/routes';
import Layout from '../components/Layout';

const Mohito = () => {

    return (
        <Layout>
            <MyHeader label="Мохито" />
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
                                src="https://www.edim.tv/img/large/mojito-trio.jpg"
                                ratio='2/1'
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Мохито
                                </Row>
                                <Row style={{ marginLeft: '1%' }}>
                                    <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                        <ul>
                                            <li>Свежая мята - 10 г</li>
                                            <li>Спрайт - 150 мл</li>
                                            <li>Лед - 8 кусков</li>
                                            <li>Тростниковый сахар - 1 чайная ложка</li>
                                        </ul>
                                    </TextBoxSubTitle>
                                </Row>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p>На дно стакана положить дольку лимона или лайма, листики мяты.
                                    Добавить 1 чайную ложку сахара и немного растереть ложкой, чтобы раскрыть аромат.
                                    Залить спрайтом до уровня чуть выше половины стакана. Заполнить стакан до верху кубиками льда.
                                    Украсить коктейль "Мохито" листиками мяты. И оствежающий напиток готов!</p>
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

export default Mohito;
