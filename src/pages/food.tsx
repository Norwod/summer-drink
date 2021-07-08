import React from 'react';
import { Container, Row, Col, Body1 } from '@sberdevices/plasma-ui';
import { detectDevice } from '@sberdevices/plasma-ui/utils/deviceDetection';

import MyHeader from '../components/MyHeader';
import Restaurant from '../components/Restaurant';
import Layout from '../components/Layout';

const Food = () => {
    return (
        <Layout>
            <MyHeader label="Питание" />
            <Container>
                <Row style={{ marginBottom: '26px', marginTop: detectDevice() === 'mobile' ? '26px' : 0 }}>
                    <Col sizeS={4} sizeM={6} sizeL={8} sizeXL={12}>
                        <Body1>Обслуживание в ресторанах на площадке форума платное</Body1>
                    </Col>
                </Row>
                <Restaurant
                    src="/Forum.jpg"
                    title="Ресторан «ФОРУМ»"
                    subTitle="Кухня: русская, паназиатская, итальянская."
                    where="Конгресс-центр, 1-й этаж (вход со стороны Пассажа)"
                    time="11:30 до 17:30 "
                    phone="+7 (925) 663 5376"
                />
                <Restaurant
                    src="/Rest-memo.jpg"
                    title="Ресторан МЕМО"
                    subTitle="Кухня: авторская средиземноморская кухня, мясной ресторан, халяль"
                    where="Внутренний двор G"
                    time="08:00 до 20:00"
                    phone="+7 (911) 973 2323"
                    web="memo.rest"
                />
                <Restaurant
                    src="/MeMoMoscowDine.jpg"
                    title="MeMo Moscow Dine & Bar"
                    subTitle="Кухня: морепродукты, европейская, азиатская"
                    where="Конгресс-центр, 7-й этаж"
                    time="08:00 до 20:00 "
                    phone="+7(916) 224 8626"
                    web="memobar.ru"
                />
                <Restaurant
                    src="/Kuban.jpg"
                    title="Инвестиционный ресторан «Кубань»"
                    subTitle="Кухня: европейская, кубанская"
                    where="Внутренний двор Н"
                    time="09:00 до 20:00 "
                    phone="8-800-505-02-23"
                />
                <Restaurant
                    src="/Parc.jpg"
                    title="Ресторан PARC"
                    subTitle="Кухня: европейская"
                    where="Hilton Saint Petersburg ExpoForum, 1-й этаж"
                    time="12:00 до 15:00 "
                    phone="+7 (812) 647 7484"
                />
                <Restaurant
                    src="/Gril.jpg"
                    title="Ресторан GRIL’"
                    subTitle="Кухня: современная европейская"
                    where="Hilton Saint Petersburg ExpoForum, 1-й этаж"
                    time="11:30 до 22:00"
                    phone="+7 (812) 647 7484"
                />
                <Restaurant
                    src="/TheLightBar.jpg"
                    title="The Light Bar"
                    subTitle="Кухня: европейская"
                    where="Hilton Saint Petersburg ExpoForum, 1-й этаж"
                    time="09:00 до 23:00"
                />
                <Restaurant
                    src="/Hampton.jpg"
                    title="Ресторан отеля Hampton by Hilton Saint Petersburg ExpoForum"
                    subTitle="Кухня: европейская"
                    where="Hilton Saint Petersburg ExpoForum, 1-й этаж"
                    time="12:00 до 22:00 "
                />
            </Container>
        </Layout>
    );
};

export default Food;
