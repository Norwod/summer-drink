import React from 'react';
import { isSberPortal } from '@sberdevices/plasma-ui/utils/deviceDetection';

import '@sberdevices/spatial-navigation';

import { useAssistant } from '../hooks/useAssistant';

import Catalog from './Catalog';
import Layout from './Layout';

export const Root = () => {
    useAssistant();

    return (
        <Layout noPadding={isSberPortal()}>
            <Catalog />
        </Layout>
    );
};

export default Root;
