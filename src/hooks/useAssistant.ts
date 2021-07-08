import { useEffect } from 'react';
import { createAssistant } from '@sberdevices/assistant-client';
import Router from 'next/router';

import { Route } from '../consts/routes';

const initialize = (getState = () => ({})) => {
    return createAssistant({ getState });
};

const processMessage = (message: any) => {
    const map = {
        // eslint-disable-next-line
        goto_catalog: Route.INDEX,    
        // eslint-disable-next-line    
        goto_mohito: Route.MOHITO,
        // eslint-disable-next-line
        goto_tropical: Route.TROPICAL,
        // eslint-disable-next-line
        goto_orangelemonade: Route.ORANGE_LEMONADE,
        // eslint-disable-next-line
        goto_mintmilk: Route.MINT_MILK,
        // eslint-disable-next-line
        goto_iceberg: Route.ICEBERG,
        // eslint-disable-next-line
        goto_chokomilk: Route.CHOKOMILK,
        // eslint-disable-next-line
        goto_slad: Route.SLAD,
        // eslint-disable-next-line
        goto_champ: Route.CHAMP,
        // eslint-disable-next-line
        goto_ale: Route.ALE,
        // eslint-disable-next-line
        goto_klement: Route.KLEMENT,
        // eslint-disable-next-line
        goto_prostuda: Route.PROSTUDA,
        // eslint-disable-next-line
        goto_gogol: Route.GOGOL,
    };

    // @ts-ignore
    const route = map[message?.action?.type];

    if (route) {
        Router.router?.push(route);
        
    }
};

export const useAssistant = () => {
    useEffect(() => {
        const assistant = initialize();

        assistant.on('data', processMessage);
    }, []);
};
