module.exports = {
  title: 'Validate-me',
  description: 'Blazing fast validation library',
  base: '/validate-me/',
  themeConfig: {
    repo: 'dimax/validate-me',
    editLinks: true,
    lastUpdated: 'Last updated',
    nav: [
      { text: 'Quick starts', link: '/quick-starts/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'API', link: '/api/core/validateme.html' },
      {
        text: 'Changelog',
        link: 'https://github.com/dimax/validate-me/blob/master/CHANGELOG.md',
      },
      {
        text: 'Roadmap',
        link: 'https://validate-me.canny.io/feature-requests',
      },
    ],
    sidebar: {
      '/guide/': [''],
      '/api/': [
        {
          title: 'Core API',
          collapsable: false,
          children: [
            'core/validateme-rule.html',
            'core/validateme-rules.html',
            'core/validateme-dictionary.html',
            'core/validateme.html',
            'core/validateme-field.html',
          ],
        },
        {
          title: 'Vue API',
          collapsable: false,
          children: ['vue/plugin.html', 'vue/directive.html', 'vue/mixin.html'],
        },
      ],
      '/quick-starts/': ['vanilla.html', 'vue.html'],
    },
  },
};
