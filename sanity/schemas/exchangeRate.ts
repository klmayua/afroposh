// Sanity CMS — Exchange Rate Schema
// Joyce updates these manually to control margins

export default {
  name: 'exchangeRate',
  title: 'Exchange Rates',
  type: 'document',
  fields: [
    {
      name: 'currency',
      title: 'Currency Code',
      type: 'string',
      options: {
        list: [
          { title: 'USD (US Dollar)', value: 'USD' },
          { title: 'GBP (British Pound)', value: 'GBP' },
          { title: 'FCFA (CFA Franc)', value: 'FCFA' },
          { title: 'GHS (Ghanaian Cedi)', value: 'GHS' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ratePerNaira',
      title: 'Rate per Naira',
      type: 'number',
      description: 'How much 1 NGN converts to in this currency.',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'diasporaMarkup',
      title: 'Diaspora Markup %',
      type: 'number',
      description: 'Extra margin for USD/GBP markets (e.g. 10 = +10%)',
      initialValue: 0,
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
    },
  ],
};
