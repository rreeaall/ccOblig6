export default {
  type: 'document',
  name: 'movie',
  title: 'Film',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Tittel',
      description: 'Fyll inn filmtittel',
    },
    {
      type: 'image',
      name: 'poster',
      title: 'Plakat',
      description: 'Legg plakatbildet inn',
    },
    {
      type: 'array',
      name: 'actor',
      title: 'Skuespiller',
      description: 'Hent skuespillere',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'actor'
            },
          ]
        },
      ],
    },
  ],
}


// const movie = {
//   name: 'movie',
//   title: 'Movie',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     },
//     {
//       name: 'Actor',
//       title: 'Actor',
//       type: 'reference',
//       to: [{type: actor}]
//     }
//   ]
// }

// export default movie;