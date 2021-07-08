/* eslint-disable */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="The best apps built for SmartMarket platform" />
                    <link
                        rel="stylesheet"
                        href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.1.0.css"
                    />
                </Head>
                <body>
                    {process.env.NODE_ENV !== 'development' && (
                        <>
                            <script src="https://cdn-app.sberdevices.ru/shared-static/0.0.0/js/react/react.16.13.1.min.js"></script>
                            <script src="https://cdn-app.sberdevices.ru/shared-static/0.0.0/js/react-dom/react-dom.16.13.1.min.js"></script>
                        </>
                    )}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
/* eslint-enable */
