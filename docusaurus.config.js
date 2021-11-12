// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Opencomp',
  tagline: 'Dinosaurs are cool',
  url: 'https://opencomp.github.io',
  trailingSlash: true,
  baseUrl: '/docv2/',
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
        language: ["fr"],
        translations: {
          "search_placeholder": "Rechercher",
          "see_all_results": "Voir tous les résultats",
          "no_results": "Aucun résultat",
          "search_results_for": "Résultats de la recherche pour \"{{ keyword }}\"",
          "search_the_documentation": "Rechercher dans la documentation",
          "count_documents_found": "{{ count }} document trouvé",
          "count_documents_found_plural": "{{ count }} documents trouvés",
          "no_documents_were_found": "Aucun document n'a été trouvé"
        }
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
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
