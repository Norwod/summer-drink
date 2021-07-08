import React from 'react';
import { Container, TabItem } from '@sberdevices/plasma-ui';

import MyHeader from '../components/MyHeader';
import StoryItem from '../components/StoryItem';
import Layout from '../components/Layout';
import Tabs from '../components/Tabs';

const history = [
    {
        year: 2019,
        text:
            'На своем стенде Сбербанк представил решения, которые могут быть использованы в создании «умных городов», а также инвестиционную P2B-платформы «Сберкредо» и цифровые бизнес-карты с телемедициной. Состоялись собственные мероприятия Сбербанка: пленарная сессия на тему «Трансформация в быстро меняющемся мире: государства, компании, люди» и деловой завтрак Сбербанка «Россия 2024: как совместить стабильность и реформы», где участники дискуссии обсудили проблемы и перспективы реализации национальных проектов.',
    },
    {
        year: 2018,
        text:
            'Сбербанк на ПМЭФ-2018 выступил организатором нескольких дискуссий, выходящих далеко за рамки банковской сферы: состоялись пленарная сессия «Транзитный мир. Что завтра?» и деловой завтрак на тему «Новая экономическая повестка (НЭП): что, как, кто» с участием членов правительства, депутатов, глав регионов. В рамках выставочного пространства были представлены технологичные новинки, такие как Best of Business Partners, SberB2B от Сбербанк-АСТ, система биометрической идентификации от Vision Lab, а также уникальная электронная торговая система Sberbank Markets.',
    },
    {
        year: 2017,
        text:
            'В сессии «Победить в конкурентной борьбе: факторы успеха в 21 веке» принял участие профессор Стэндфордского университета и вице-президент Google Никлас Лундблад. В рамках Улицы Сбербанка были представлены: решение VoiceOver — для людей с нарушениями зрения, интернет-сервис DocDoc.ru, система электронной торговли активами Sberbank Markets и продукт «Деловой среды» — бизнес-симуляция для обучения предпринимателей с использованием технологии виртуальной реальности. Состоялся деловой завтрак на тему «Что ожидать после мая 2018 года?»',
    },
    {
        year: 2016,
        text:
            'Сбербанк провёл сессию «Технологии завтра. Изменись или умри» и деловой завтрак «Жизнь после нефти». Спикерами мероприятий выступили заместитель Председателя Правительства РФ Аркадий Дворкович, министр финансов Антон Силуанов и министр энергетики Александр Новак. На инновационном стенде «Цифровой мир – мир будущего» гостей приветствовал робот, который способен поддержать разговор о продуктах Банка, а также представлены новые инструменты для частных клиентов и предпринимателей, формирующие надёжную цифровую экосистему.',
    },
    {
        year: 2015,
        text:
            'Сбербанк провел сессию «Актуальные вопросы антикризисной политики: реформа государственного управления», на которой выступил премьер-министр Великобритании Тони Блэр, и деловой завтрак «Кризис: мифы и реальность. Что делать?». На стенде «Инновационность в развитии» организовали квест, где можно было ознакомиться с сервисами банка в интерактивном игровом формате. Посетителей стенда встречал робот.',
    },
    {
        year: 2014,
        text:
            'Представлена Стратегия развития до 2018 года. На сессии Сбербанка «Новая конкурентоспособность: альтернативы и перспективы» обсуждалось, что нужно изменить в российской экономической политике, чтобы добиться успеха? Банк представил программу «Новая индустриализация», ее цель — сделать финансирование для производителей более доступным. Было подписано 19 соглашений с рядом министерств и регионов РФ.',
    },
    {
        year: 2013,
        text:
            'Сессия Сбербанка «Центральные банки — последний оплот экономического роста» и Деловой завтрак на тему «Инвестиции в человеческий капитал: после семи уже поздно?», посвященный развитию системы образования, впервые транслировались в прямом эфире на телеканале «Россия 24», а также онлайн. Сбербанк представил на Форуме свой новый стенд, основная идея которого — «Синергия смелых решений».',
    },
    {
        year: 2012,
        text:
            'Представлено уникальное решение для малого и среднего бизнеса «Деловая среда»: программа создания удобной и доступной инфраструктуры для ведения бизнеса. Сбербанк провел деловой завтрак с 8 членами Правительства РФ, панельную дискуссия на тему «Выход из управленческого тупика: мудрость толпы или авторитарный гений?», подписал 11 соглашений как с российскими, так и с иностранными компаниями. ',
    },
    {
        year: 2011,
        text:
            '«Лидерство, отраженное в гранях истории» — стенд Сбербанка посвящен 170-летию банка. Ключевой инновацией стала интерактивная витрина, которая идентифицирует клиента, составляет его психологический портрет и в соответствии с ним предлагает ему продукты и услуги. Совместно со Всемирным экономическим форумом Сбербанк также провел Круглый стол «Конкурентоспособная Россия: миссия (не)выполнима?».',
    },
    {
        year: 2010,
        text:
            'На стенде «Инновации. Развитие. Будущее» Сбербанк продемонстрировал уникальный мультисервис-терминал, позволяющий перевести розничные услуги банка в удаленные каналы самообслуживания. Широко обсуждалось использование Сбербанком технологии идентификации клиентов по биометрии. Также был представлен спортивно-туристический комплекс «Горная карусель» в рамках спонсорства XXII Олимпиады 2014 в Сочи.',
    },
    {
        year: 2009,
        text:
            'Сбербанк поделился своими разработками. «Менеджер предпочтений клиентов», позволяющий определить заинтересованность клиента в банковской услуге, узнал Президента РФ и персонально его поприветствовал. «РЕГИСТРАТОР потоков в офисе» показал, как производит регистрацию посетителей и сбор информации, фиксируя пол и возраст. Были представлены новый дизайн и функционал интернет-банка «Сбербанк Онлайн».',
    },
    {
        year: 2008,
        text:
            'Начиная с 2008 года Сбербанк — Генеральный партнер Петербургского международного экономического форума. Экспозицию Сбербанка, где была представлена модель нового офиса — Банка Будущего — с безбумажными технологиями и возможностью видеосвязи с клиентом, посетил Президент РФ Дмитрий Медведев. Были достигнуты договоренности о взаимодействии в финансировании проектов Зимней Олимпиады в Сочи в 2014 г.',
    },
];

const Story = () => {
    const [index, setIndex] = React.useState(0);

    return (
        <Layout>
            <MyHeader label="История" />
            <Container>
                <Tabs>
                    {history.map((val, i) => (
                        <TabItem
                            key={`item:${i}`}
                            isActive={i === index}
                            onClick={() => {
                                setIndex(i);
                            }}
                            tabIndex={0}
                        >
                            {val.year}
                        </TabItem>
                    ))}
                </Tabs>
                <StoryItem
                    title={history[index].text}
                    images={[1, 2, 3, 4, 5].map(
                        (i) =>
                            `https://a840caa5-a44d-4464-848a-92afa31cd309.selcdn.net/img/Photos/${history[index].year}/${i}.jpg`,
                    )}
                />
            </Container>
        </Layout>
    );
};

export default Story;
