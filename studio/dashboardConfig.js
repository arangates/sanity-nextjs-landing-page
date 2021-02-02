export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601935f98363b473210500ce',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-q7s8wryy',
                  apiId: '1e731d7e-5476-4aa4-9bd5-6859a1af6943'
                },
                {
                  buildHookId: '601935f99bb7d170c09b2680',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-ddjzf7m8',
                  apiId: '828716b0-8e51-4985-982a-691aeb984f52'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arangates/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-ddjzf7m8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
