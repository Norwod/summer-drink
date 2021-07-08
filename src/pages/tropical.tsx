import React from 'react';
import { Button, Card, CardBody, CardContent, CardMedia, Col, Container, Row, TabItem, TextBoxSubTitle } from '@sberdevices/plasma-ui';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import Layout from '../components/Layout';
import { Route } from '../consts/routes';
import { createAssistant, createSmartappDebugger } from '@sberdevices/assistant-client';


const Tropical = () => {  

    return (
        <Layout>
            <MyHeader label="Тропический" />
            <Container>
                <Col sizeS={4} sizeM={5} sizeL={8} sizeXL={8} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Card
                        style={{ width: '100%', margin: '2%', marginLeft: '5%' }}
                        tabIndex={-1}
                        outlined={true}
                        scaleOnFocus={false}
                    >
                        <CardBody>
                            <CardMedia
                                src="https://img1.russianfood.com/dycontent/images_upl/63/big_62485.jpg"
                                ratio="2/1"
                            />
                            <CardContent cover={false}>
                                <Row style={{ marginLeft: '1%' }}>
                                    Тропический
                                </Row>
                                <TextBoxSubTitle style={{ color: "#E9967A" }}>
                                    <ul>
                                        <li>400 мл апельсинового сока</li>
                                        <li>1 столовая ложка сахара</li>
                                        <li>400 мл молока</li>
                                        <li> 4 банана</li>
                                    </ul>
                                </TextBoxSubTitle>
                                <Row style={{ marginLeft: '1%' }}>
                                    Приготовление:
                                    <p>Все ингредиенты помещаем в блендер и перемешиваем.
                                    Добавляем несколько кубиков льда и взбиваем пока лёд не станет крошкой.
                                    Подавать в высоких бокалах, украсив долькой апельсина. И вкусный коктейль готов!</p>
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

export default Tropical;
