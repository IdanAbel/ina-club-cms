export default {
    name: 'company',
    title: 'Companies',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Company Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'banner',
        title: 'Banner',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'websiteUrl',
        title: 'Website URL',
        type: 'url',
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
      },
    ],
  }
  