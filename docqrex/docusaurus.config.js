// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Docqrex',
    tagline: 'Dinosaurs are cool',
    url: 'https://qwertyvipul.github.io',
    baseUrl: process.env.BASE_URL ?? `/`,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'qwertyvipul',
    projectName: 'docqrex',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: '../docs',
                    sidebarPath: require.resolve('../docs/sidebars.js'),
                    breadcrumbs: false,
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: '@docqrex',
                logo: {
                    // <a href="https://www.freepik.com/free-vector/cute-dinosaur-playing-guitar-music-cartoon-vector-icon-illustration-animal-technology-icon-isolated_25864840.htm#query=logo%20dinosaur&position=8&from_view=search&track=sph">Image by catalyststuff</a> on Freepik
                    alt: 'Docqrex Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'index',
                        position: 'left',
                        label: 'Docs',
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
