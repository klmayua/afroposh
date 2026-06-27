// Sanity CMS — Product Schema
// Joyce uses this to add/edit products from her dashboard

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Bubu Dress', value: 'bubus' },
          { title: 'Ankara Fabric', value: 'fabrics' },
          { title: 'Accessories', value: 'accessories' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'First image is the cover. Drag to reorder.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'priceNGN',
      title: 'Retail Price (₦ NGN)',
      type: 'number',
      description: 'All other currency prices are calculated from this.',
      validation: (Rule: any) => Rule.required().min(1000),
    },
    {
      name: 'wholesalePriceNGN',
      title: 'Wholesale Price (₦ NGN)',
      type: 'number',
      description: 'Leave empty if not available wholesale.',
    },
    {
      name: 'moq',
      title: 'Minimum Order Quantity',
      type: 'string',
      description: 'e.g. "6 yards" or "5 units"',
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Wholesale', value: 'wholesale' },
          { title: 'None', value: '' },
        ],
      },
    },
    {
      name: 'available',
      title: 'Available to Buy',
      type: 'boolean',
      description: 'Show as In Stock on the store',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      description: 'Show in New Arrivals section',
      initialValue: false,
    },
    {
      name: 'wholesaleEnabled',
      title: 'Wholesale Available',
      type: 'boolean',
      description: 'Show bulk pricing and MOQ',
      initialValue: false,
    },
    {
      name: 'madeToOrder',
      title: 'Made to Order',
      type: 'boolean',
      description: 'Not in stock — made upon order',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'images.0',
    },
  },
};
