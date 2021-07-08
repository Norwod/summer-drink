import { useLayoutEffect } from 'react';

export const useFocus = () => {
    useLayoutEffect(() => {
        const focusable = document.querySelectorAll('[tabindex]:not([tabindex="-1"])')[0];

        // @ts-ignore
        focusable?.focus();
    }, []);
};
