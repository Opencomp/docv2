// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Opencomp',
  tagline: 'Dinosaurs are cool',
  url: 'https://doc.opencomp.fr',
  trailingSlash: true,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'opencomp', // Usually your GitHub org/user name.
  projectName: 'docv2', // Usually your repo name.

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/Opencomp/docv2/edit/documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: "/",
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["fr"]
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentation Opencomp',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://my.opencomp.fr/users/login',
            label: 'Se connecter',
          },
          {
            href: 'https://opencomp.fr',
            label: 'Découvrir/essayer',
          },
          {
            href: 'https://opencomp.fr/a-propos/contact',
            label: 'Contacter le support',
            position: 'right',
          },
          {
            href: 'https://status.opencomp.fr',
            label: 'État du système',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: false
        }
      },
      colorMode: {
        disableSwitch: true,
      },
      footer: {
        style: 'dark',
        links: [
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jean Traullé. Documentation générée avec Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
