const withPlugins = require('next-compose-plugins');
const transpileModules = require('next-transpile-modules')(['@sberdevices/assistant-client']);

const nextConfig = {
    trailingSlash: true,
    assetPrefix: process.env.PUBLIC_URL || '',
    webpack: (config, options) => {
        if (process.env.NODE_ENV === 'development') {
            return config;
        }

        if (!options.isServer) {
            config.externals = {
                ...(config.externals || {}),
                react: 'React',
                'react-dom': 'ReactDOM',
            };
        }

        return config;
    },
};

module.exports = withPlugins([transpileModules], nextConfig);
