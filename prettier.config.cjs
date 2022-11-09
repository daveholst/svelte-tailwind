module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.cjs',
    // plugins: 'prettier-plugin-tailwindcss',
    arrowParens: 'avoid',
    bracketSpacing: false,
    singleQuote: true,
    svelteSortOrder: 'options-scripts-markup-styles',
    trailingComma: 'none',
    tabWidth: 2
};
