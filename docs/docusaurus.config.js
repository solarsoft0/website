// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fonoster',
  tagline: 'The Open Source Twilio Alternative',
  url: 'https://fonoster.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fonoster', // Usually your GitHub org/user name.
  projectName: 'fonoster', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/fonoster/website/edit/beta/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/fonoster/website/edit/beta/docs/blog/',
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
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',
        disableSwitch: false,
  
        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: false,
  
        // Dark/light switch icon options
        switchConfig: {
          // Icon for the switch while in dark mode
          darkIcon: '  ',
          darkIconStyle: {
            marginTop: '1px',
          },
          lightIcon: '  ',
          lightIconStyle: {
            marginTop: '1px',
          },
        },
      },
      navbar: {
        logo: {
          alt: 'Fonoster Logo',
          src: '/img/logo-light.svg',
          srcDark: '/img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Learn',
          },
          { to: '/docs/guides/voice', label: 'Guides', position: 'left' },
          { to: '/docs/reference/overview', label: 'Reference', position: 'left' },
          {
            href: 'https://github.com/fonoster/fonoster',
            className: 'navbar-item-github',
            position: 'right',
          },
          {
            href: 'https://twitter.com/fonoster',
            className: 'navbar-item-twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'VoIP Net',
                to: 'docs/getting_started/voipnet',
              },
              {
                label: 'Voice Applications',
                to: 'docs/getting_started/voice',
              }
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Support',
                href: '/docs/support',
              },
              {
                label: 'Github Discussions',
                href: 'https://github.com/fonoster/fonoster/discussions',
              },
              {
                label: 'Slack Community',
                href: 'https://form.typeform.com/to/CvQqk9',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
              {
                label: 'API Reference',
                href: '/docs/reference/overview',
              },
              {
                label: 'Guides',
                href: '/docs/guides/voice',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'DEV',
                href: 'https://dev.to/t/fonoster',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fonoster, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;
