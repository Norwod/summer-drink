import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import { Route } from '../consts/routes';
import MyHeader from '../components/MyHeader';
import Layout from '../components/Layout';
import Link from 'next/link';

const Ale = () => {

    return (
        <Layout>
            <MyHeader label="Безалкогольный имбирный эль" />
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
                                src='/ale.jpeg'
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Безалкогольный имбирный эль
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>Имбирь свежий — 150 г</li>
                                        <li>Вода питьевая — 250 мл</li>
                                        <li>Сахар — 100 г</li>
                                        <li>Вода газированная — 0,5 л</li>
                                        <li>Лайм — 80 г (1 шт.)</li>
                                        <li>Листья мяты - по вкусу</li>
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p> Все продукты необходимо немного охладить перед приготовлением.
                                    Необходимо очистить и нарезать тонкими пластинками корень имбиря.
                                    Нарезанный имбирь залить стаканом воды и поставить на средний огонь. Довести до кипения.
                                    Кипятить на медленном огне 5 минут, затем снять с огня, накрыть и дать настояться около 1 часа.
                                    Процедить жидкость через сито. Вареный имбирь можно выбросить. Жидкость поместить в кастрюлю, засыпать сахаром и нагреть до полного растворения сахара.
                                    Снять с огня сироп и охладить. Перелить в баночку или бутылочку с крышкой и хранить в холодильнике.
                                    Для приготовления имбирного эля поместите в стакан лед и листья мяты (примерно 3-4 листика в каждый стакан).
                                    Выдавить сок половинки лайма.
                                    Затем налить в бокал имбирный сироп и газированную воду в таком соотношении: 1 часть сока лайма, 2 части имбирного сиропа и 3 части сильно газированной воды.
                                    Украсить имбирный эль листьями мяты и подавайте. Освежающий безалкогольный имбирный эль на минеральной воде готов.
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

export default Ale;
