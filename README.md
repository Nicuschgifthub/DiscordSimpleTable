# SimpleTable by Nicusch

Can be used for Discord to make tables

```js
  // Other imports...
  const { SimpleTable } = require('../models/SimpleTable');

  const data = [
    { name: "Nicusch", sizetype: "Big", count: 20 },
    { name: "Noner", sizetype: "Medium", count: 13 },
    { name: "Don", sizetype: "Extralarge", count: 55 },
    { name: "Han", sizetype: "ExtraMediumLarge", count: 33 },
  ]

  const columns = [
    { label: 'Username', key: 'name' },
    { label: 'Bucket Size', key: 'sizetype' },
    { label: 'Count', key: 'count' }
  ];

  const tableString = await new SimpleTable(columns)
    .setJsonArrayInputs(data) // defines the data
    .setStringOffset(2) // adds an offset to the words like 2 means "Username  Bucket Size"
    .addVerticalBar() // adds an vertical Bar
    .addIndex(1) // adds a new column called index and represented as "#" the argumnet "1" defines the start count like 1,2,3,...
    .build(); // builds the table (async)

  // Note .addIndex(1) needs to be called after .setJsonArrayInputs(data)
  // Reason is that .addIndex(param) is the function which adds another data entry. Otherwise .setJsonArrayInputs(data) would replace the entire data
  // This will be changed later to be called without needing structure

  new Embed()
    .setColor(config.embeds.colors.info)
    .setDescription(tableString)
    .interactionResponse(interaction);
```

This could looks like this:

![Discord Table Example1](https://raw.githubusercontent.com/Nicuschgifthub/SimpleTable/master/images/example.png)


You can also leave out the ".addVerticalBar()" and ".addIndex(1)"
```js
//...

  const tableString = await new SimpleTable(columns)
    .setJsonArrayInputs(data)
    .setStringOffset(2)
    .build();

//...
```

![Discord Table Example1](https://raw.githubusercontent.com/Nicuschgifthub/SimpleTable/master/images/example2.png)

The best thing is that the rows and columns will have good spaceing no matter which word on name is longer etc.
Quick Note for Discord.js really long rows are not the best option as they differ from devices.