import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import { Route } from '../consts/routes';
import Layout from '../components/Layout';

const OrangeLemonade = () => {

    return (
        <Layout>
            <MyHeader label="Апельсиновый лимонад" />
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
                                src="/orange_lemonade_2.jpeg"
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Апельсиновый лимонад
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>газированная минеральная вода – 1,5 л</li>
                                        <li>апельсины – 1,5 кг + 1 шт. для подачи</li>
                                        <li>лимоны – 4 шт. + 1 шт. для подачи</li>
                                        <li>жидкий мед – 2-3 ст. л.</li>
                                        <li>мята – 4 веточки</li>
                                        <li>кубики льда – по вкусу</li>
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p>Минеральную воду для приготовления лимонада из апельсинов следует тщательно охладить.
                                    Поэтому за 1–2 часа перед началом процесса уберите ее в холодильник. Апельсины и лимоны тщательно вымойте теплой проточной водой. Каждый плод разрежьте пополам и выжмите сок в большую миску. Процедите его через частое сито, чтобы избавить от косточек.
                                    Свежевыжатые апельсиновый и лимонный соки перелейте в большой кувшин. Добавьте жидкий мед и тщательно перемешайте, чтобы он растворился. Уберите в холодильник примерно на 2 часа.
                                    Достаньте кувшин и минеральную воду из холодильника. Соедините и перемешайте ложкой. Разлейте по высоким бокалам, в которых вы планируете подавать лимонад на стол.
                                    Оставшиеся цитрусовые тщательно вымойте, обсушите и нарежьте кружочками или ломтиками. Добавьте в лимонад из апельсинов вместе со льдом. Украсьте листочками мяты и подайте.
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

export default OrangeLemonade;
