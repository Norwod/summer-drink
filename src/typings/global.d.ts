import { AssistantWindow } from '@sberdevices/assistant-client';

export type AssistantData = Record<string, object | string | number>;

export declare global {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Window extends AssistantWindow {
        appInitialData: Array<AssistantData | any>;
    }

    declare module '*.svg';
}

declare namespace NodeJS {
    interface Process {
        browser: boolean;
    }
}

declare module '*.png' {
    const value: any;
    export = value;
}
