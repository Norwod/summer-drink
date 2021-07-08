import React, { useEffect, useState } from 'react';
import { Container, TabItem } from '@sberdevices/plasma-ui';

import Tabs from '../components/Tabs';
import MyHeader from '../components/MyHeader';
import ScheduleItem from '../components/ScheduleItem';
import Layout from '../components/Layout';

const Sessions: React.FC<{ day: { time: string; rus: { label: string; speaker?: string; hall: string } }[] }> = ({
    day,
}) => (
    <>
        {day.map((session) => (
            <ScheduleItem
                time={session.time}
                title={session.rus.label}
                subTitle={session.rus.speaker}
                place={session.rus.hall}
            />
        ))}
    </>
);

const Schedule = () => {
    const [index, setIndex] = React.useState(0);
    const [days, setDays] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://534526.selcdn.ru/Sber%20on%20SPIEF%202021/sessions.json')
            .then((response) => response.json())
            .then(({ programme }) => programme[0])
            .then(Object.values)
            .then(setDays);
    }, []);

    return (
        <Layout>
            <MyHeader label="Расписание" />
            <Container>
                <Tabs>
                    {days.map((_, i) => (
                        <TabItem
                            key={`item:${i}`}
                            isActive={i === index}
                            onClick={() => {
                                setIndex(i);
                            }}
                            tabIndex={0}
                        >
                            {`${i + 2} Июня`}
                        </TabItem>
                    ))}
                </Tabs>

                {days[index] && <Sessions day={days[index]} />}
            </Container>
        </Layout>
    );
};

export default Schedule;
