# DiscordSimpleTable by Nicusch

DiscordSimpleTable provides a way to create and format tables for display in Discord messages.
It allows customization of column headers, row data, and table appearance,
including options for adding index columns and vertical bars.

```javascript
const DiscordSimpleTable = require('discord-simpletable');

const data = [
  { name: "Nicusch", sizetype: "Big", count: 20 },
  { name: "Noner", sizetype: "Medium", count: 13 },
  { name: "Don", sizetype: "Extralarge", count: 55 },
  { name: "Han", sizetype: "ExtraMediumLarge", count: 33 },
];

const columns = [
  { label: 'Username', key: 'name' },
  { label: 'Bucket Size', key: 'sizetype' },
  { label: 'Count', key: 'count' }
];

const tableString = new DiscordSimpleTable(columns)
  .setJsonArrayInputs(data) // Set the data for the table
  .setStringOffset(2) // Add an offset to align column headers
  .addVerticalBar() // Add a vertical bar between columns
  .setIndexLabel('#') // Set the label for the index column (default is "#")
  .addIndex(1) // Add an index column starting at 1
  .build(); // Build the table

// "const tableString" is now ready to be used
// as an example in Discord.js Api

new Embed()
  .setColor(config.embeds.colors.info)
  .setDescription(tableString)
  .interactionResponse(interaction);

// Note Embed is my own custom class
```
As an Discord Embed it looks like this:

![discord-simpletable](https://raw.githubusercontent.com/Nicuschgifthub/DiscordSimpleTable/master/images/1.png)


You can also leave out the ".addVerticalBar()" and ".addIndex(1)"
```js
//...

  const tableString = new DiscordSimpleTable(columns)
    .setJsonArrayInputs(data)
    .setStringOffset(2)
    .build();

//...
```

![discord-simpletable](https://raw.githubusercontent.com/Nicuschgifthub/DiscordSimpleTable/master/images/2.png)

The rows and columns will have proper spacing, regardless of word length.
For Discord.js, very long rows may not display well on all devices due to differences in screen sizes.


Example to change empty space to '-' 

```js
//...
  const tableString = new DiscordSimpleTable(columns, '-')
//...
```

## Install
```bash
npm install discord-simpletable
```


## More Examples For Easy Understanding

```javascript
const DiscordSimpleTable = require('discord-simpletable');

const data = [
  { name: "Nicusch", sizetype: "Big", count: 20 }
]

const columns = [
  { label: 'Username', key: 'name' },
  { label: 'Bucket Size', key: 'sizetype' },
  { label: 'Count', key: 'count' }
];

const tableString = new DiscordSimpleTable(columns)
  .setJsonArrayInputs(data)
  .setStringOffset(1) // only using one space looks stupid.
  .build();

```
![discord-simpletable](https://raw.githubusercontent.com/Nicuschgifthub/DiscordSimpleTable/master/images/3.png)

```javascript
const DiscordSimpleTable = require('discord-simpletable');

const data = [
  { name: "Nicusch", sizetype: "Big", count: 20 },
  { name: "Noner", sizetype: "Medium", count: 13 },
  { name: "Don", sizetype: "Extralarge", count: 55 },
  { name: "Han", sizetype: "ExtraMediumLarge", count: 33 },
];

const columns = [
  { label: 'Username', key: 'name' },
  { label: 'Bucket Size', key: 'sizetype' },
  { label: 'Count', key: 'count' }
];

const tableString = new DiscordSimpleTable(columns, '-') // you can add other spacing chars like '-'
  .setJsonArrayInputs(data)
  .setStringOffset(2)
  .build();

```
![discord-simpletable](https://raw.githubusercontent.com/Nicuschgifthub/DiscordSimpleTable/master/images/4.png)

