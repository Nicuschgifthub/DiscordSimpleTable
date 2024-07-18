# SimpleTable
<<<<<<< HEAD

In Progress

Can be used for Discord to make tables

```js
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
    .setJsonArrayInputs(data)
    .setStringOffset(2)
    .addVerticalBar()
    .addIndex(1)
    .build();

  // Note .addIndex(1) needs to be called after .setJsonArrayInputs(data)
  // This will be changed later to be called without needing structure

  new Embed()
    .setColor(config.embeds.colors.info)
    .setDescription(tableString)
    .interactionResponse(interaction);
```

This could looks like this

![Discord Table Example](https://raw.githubusercontent.com/Nicuschgifthub/SimpleTable/master/images/example1.png)
=======

Can be used for Discord to make tables

```js
const columns = [
    { label: lang.getText('username'), key: 'name' },
    { label: lang.getText('level'), key: 'lvl' },
    { label: lang.getText('xp'), key: 'xp' }
];

const table = new SimpleTable(columns);

table.setJsonArrayInputs(data);
table.setStringOffset(2);
table.addVerticalBar();
table.addIndex(1);

const string = await table.build();
```

The this looks like this


>>>>>>> 5089539425218e25d55dde28887acdf90d583e6e