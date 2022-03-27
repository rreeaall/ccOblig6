export default {
  title: 'Actor',
  name: 'actor',
  type: 'document',
  fields: [
    {
      title: 'Navn',
      name: 'Name',
      type: 'string',
      description: 'navnet til skuespiller er'
    },{
      type: 'slug',
      name: 'slugName',
      title: 'slugTitle',
      description: 'info om skuespiller'
    },{
      title: 'Fact',
      name: 'fact',
      type: 'string',
      description: 'fakta om skuespiller'
    }
  ],
}










// Før: (Det over er etter)
// const actor = {
//     title: 'actor',
//     name: 'actor',
//     type: 'document',
//     fields: [
//     {
//     fullName: 'string',
//     name: 'slug',
//     type: 'slug',
//     current: 'Dwayne Johnson',
//     }
//   ]
// }

// export default actor;
