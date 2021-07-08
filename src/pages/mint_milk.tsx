import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import Layout from '../components/Layout';
import { Route } from '../consts/routes';

const MintMilk = () => {
    const [index, setIndex] = React.useState(0);

    return (
        <Layout>
            <MyHeader label="Мятное молоко" />
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
                                src='/myatnoe_moloko.jpeg'
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Мятное молоко
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>Молоко - 500 мл</li>
                                        <li>Сахар - 2 ст.л</li>
                                        <li>Мята - 2-3 веточки</li>
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p>В кастрюлю влить молоко, добавить сахар. Мяту помыть и слегка перетереть в руках.
                                    Добавить мяту в молоко и поставить кастрюлю на огонь. Довести молоко с мятой до кипения, прокипятить 2 минуты на медленном огне. Важно, чтобы молоко не убежало.
                                    Снять молоко с огня и оставить остывать на 30 минут. Затем процедить молоко и убрать его в холодильник.
                                    Пока молоко охлаждается, необходимо подготовить стаканчики для подачи. На водяной бане растопить пару долек шоколада. На плоскую тарелку высыпать цветную посыпку.
                                    Обмакнуть край стаканчиков в растопленный шоколад, а затем обмакнуть в цветную посыпку. Поставить стаканчики в холодильник на пару минут.
                                    Разлить охлаждённое мятное молоко по стаканчикам, добавить маршмеллоу и подать с трубочкой. Приятного аппетита!
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

export default MintMilk;
