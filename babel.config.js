module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: ['.ts', '.tsx', '.js', '.json'],
                alias: {
                    '@assets': './assets',
                    '@component': './src/components',
                    '@screen': './src/screens',
                    '@hook': './src/hooks',
                    '@util': './src/utils',
                },
            },
        ],
    ],
};
