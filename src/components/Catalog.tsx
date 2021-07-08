import React, {
    FC,
    memo,
    useReducer,
    useState,
    useRef,
    useEffect,
} from "react";
import {
    Container,
    Row,
    TextBox,
    Col,
    Card,
    CardContent,
    CardBody,
    TextBoxBigTitle,
    Headline2,
    Body1,
    Body3,
} from '@sberdevices/plasma-ui';
import Link from 'next/link';
import styled from 'styled-components';
import { detectDevice, isSberPortal } from '@sberdevices/plasma-ui/utils/deviceDetection';


import {
    createSmartappDebugger,
    createAssistant,
    AssistantAppState,
} from "@sberdevices/assistant-client";

import { Route } from '../consts/routes';

import Img from './Img';
import MyHeader from './MyHeader';

const heightMap = {
    sberPortal: 247,
    sberBox: 336,
    mobile: 165,
};

const StyledCard = styled(Card)`
    margin-bottom: ${detectDevice() === 'mobile' ? 8 : 32}px;

    height: ${heightMap[detectDevice()]}px;
`;

const StyledBody1 = styled(Body1)`
    color: rgba(255, 255, 255, 0.56);
    margin-top: 8px;
    margin-bottom: 2px;
    width: ${isSberPortal() ? '100px' : '100%'};
    display: ${isSberPortal() ? 'inline-block' : 'block'};
`;

const StyledBody3 = styled(Body3)`
    width: ${isSberPortal() ? 'calc(100% - 100px)' : '100%'};
    display: ${isSberPortal() ? 'inline-block' : 'block'};
`;

const MarginTop = styled.div`
    margin-top: 20px;
`;

const paddingLeft = {
    sberPortal: 12,
    sberBox: 52,
    mobile: 0,
};

const RightCol = styled(Col)`
    padding-left: ${paddingLeft[detectDevice()]}px;
`;

const Half: React.FC = ({ children }) => (
    <Col sizeS={4} sizeM={3} sizeL={4} sizeXL={6}>
        {children}
    </Col>
);

const initializeAssistant = (getState: any) => {
    if (process.env.NODE_ENV === "development") {
        return createSmartappDebugger({
            token: process.env.REACT_APP_TOKEN ?? "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxYTk3YzdmZGI2NjdhMDdlNGZlNjJmNTRlZDNhZGI3YzFlZTk2NjdiNzVlYmY3NGI2MjRjYTQzNTIxODI1MzJlNTM5YmU5MjcwMDQyNjI5OCIsImF1ZCI6IlZQUyIsImV4cCI6MTYyNTIyNzMzMCwiaWF0IjoxNjI1MTQwOTIwLCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiOGFmNmNiMjAtYjBmYy00MTBmLWE1MjQtYWY0MWQzMGJmMjg4Iiwic2lkIjoiMjBhMjQ0YzQtNDFlMS00ZDk2LWFkM2MtMjUzMzkxMGViNTcyIn0.pG_uaJ8_tbiMD-7A6tLkgbBM_NdlSc8JqPbkYzwOSiIl_WOWXsyHJJgYEqWVWEddV0WpaLI5PJN-BsQ5Ez7F0AzU7YoqVuuWd5me9N0pGaVKEJsVeDlltwpquJNgabRXkPs64B45OdXH8uzW1EtMUmtumlROt1RfK28FfcXdYHE_cosstzBN8cqsUOcOk5f5wt9trXj2CQB25X26lWeXDIljvckUuP3vEfyCwoF89gG4tOwnlSGP_QbGJRvcyf0fIrAFzqeqSzMn1VjunPrGz2l3XJ-M8aHNj6OgD9O9xeiJxZEsmp6mI6PxNB6rSacDrZQt9I8RYLISXYyJcsxtOii4D8ozz5eUIGeb5t-cfaNvHbEQxAzp-8ra9AEn8XXss18a2fkJxECg44wE3s7DP3nc3QKpm1mPHMTbZBkVMq94B8_Wa3llj9mVsv4OtjG2MuLg9Pewr476SB_oyjM2WqX50fYuRICRIIqmJFt0DnTmZDJBZqG9atxphx7pNO61r-r5IaR2E8KcH69onQOLGP71Wb5BMaywxReKRxDdAHalujigqMYfxRqOx_JW_-xs5QffM1rsxKfc-7r-LEjsw2_ra8F-6ysQtLjEwp3iy6YSnMQvUUg3hxjx3Uj2hM7WOQRdOcyBnQ-LuumCBGzQmM6rZrkoJF7cEJd0dd2-UrY",
            initPhrase: `Запусти мой мохито`,
            getState,
        });
    }

    return createAssistant({ getState });
};

const Catalog = () => {


    const assistantStateRef = useRef<AssistantAppState>();
    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    useEffect(() => {
        assistantRef.current = initializeAssistant(() => assistantStateRef.current);

        assistantRef.current.on("data", ({ action }: any) => {
            if (action) {
                
            }
        });
    }, []);

    return (
        <>
            <MyHeader label="Безалкогольные коктейли" onBack={window.AssistantHost?.close} />

            {/* <Container>{detectDevice() === 'mobile' && <Logo />}</Container> */}

            <Container>
                <Row>
                    <Col sizeS={4} sizeM={4} sizeL={8} sizeXL={8}>
                        <Row>
                            <Half>
                                <Link href={Route.MOHITO}>
                                    <StyledCard outlined scaleOnFocus onChange={() => assistantRef.current?.sendData({ action: { type: 'MOHITO' } })}>
                                        <CardBody>
                                            <Img src={detectDevice() === 'mobile' ? '/mohito.jpg' : '/mohito.jpg'} />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Мохито</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                            <Half>
                                <Link href={Route.TROPICAL}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img src={detectDevice() === 'mobile' ? '/tropical.jpeg' : '/tropical.jpeg'} />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Тропический</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                            <Half>
                                <Link href={Route.ORANGE_LEMONADE}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img src={detectDevice() === 'mobile' ? '/orange_lemonade.jpeg' : '/orange_lemonade.jpeg'} />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Апельсиновый лимонад</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                            <Half>
                                <Link href={Route.MINT_MILK}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img
                                                src={
                                                    detectDevice() === 'mobile' ? '/myatnoe_moloko_1.jpeg' : '/myatnoe_moloko_1.jpeg'
                                                }
                                            />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Мятное молоко</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                        </Row>
                        <Row>
                            <Half>
                                <Link href={Route.ICEBERG}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img
                                                src={
                                                    detectDevice() === 'mobile' ? '/iceverg.jpeg' : '/iceverg.jpeg'
                                                }
                                            />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Айсберг в океане</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                            <Half>
                                <Link href={Route.CHOKOMILK}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img src={detectDevice() === 'mobile' ? '/chokomilk.jpeg' : '/chokomilk.jpeg'} />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Молочно-шоколадный коктейль</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                            <Half>
                                <Link href={Route.SLAD}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img src={detectDevice() === 'mobile' ? '/slad.png' : '/slad.png'} />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Сладкоежка</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                            <Half>
                                <Link href={Route.CHAMP}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img
                                                src={
                                                    detectDevice() === 'mobile' ? '/champ.jpeg' : '/champ.jpeg'
                                                }
                                            />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Фальшивое шампанское</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                        </Row>
                        <Row>
                            <Half>
                                <Link href={Route.ALE}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img
                                                src={
                                                    detectDevice() === 'mobile' ? '/ale.jpeg' : '/ale.jpeg'
                                                }
                                            />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Имбирный эль</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                            <Half>
                                <Link href={Route.KLEMENT}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img src={detectDevice() === 'mobile' ? '/klement.jpeg' : '/klement.jpeg'} />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Сент-Клемент</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                            <Half>
                                <Link href={Route.PROSTUDA}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img src={detectDevice() === 'mobile' ? '/prostuda.jpeg' : '/prostuda.jpeg'} />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Удар по простуде</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                            <Half>
                                <Link href={Route.GOGOL}>
                                    <StyledCard outlined scaleOnFocus>
                                        <CardBody>
                                            <Img
                                                src={
                                                    detectDevice() === 'mobile' ? '/gogol.jpeg' : '/gogol.jpeg'
                                                }
                                            />
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Гоголь-моголь</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>
                                </Link>
                            </Half>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Catalog;
