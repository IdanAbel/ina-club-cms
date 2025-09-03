export default {
    name: 'banner',
    title: 'Banners',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Banner Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Banner Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'link',
        title: 'Link (optional)',
        type: 'url',
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        description: 'Sorting order for displaying banners',
      },
    ],
  }
  