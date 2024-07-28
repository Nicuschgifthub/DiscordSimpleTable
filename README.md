# DiscordSimpleTable by Nicusch

DiscordSimpleTable provides a way to create and format tables for display in Discord messages.
It allows customization of column headers, row data, and table appearance,
including options for adding index columns and vertical bars.

```js
// Other imports...
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
  { label: 'Count', key: 'count' },
];

const tableString = new DiscordSimpleTable(columns)
  .setJsonArrayInputs(data)  // Defines the data
  .setStringOffset(2)  // Adds an offset to the words (class default is 0)
  .addVerticalBar()  // Adds a vertical bar
  .setIndexLabel('#')  // Sets the index column label (class default is "#")
  .addIndex(1)  // Adds an index column starting at 1
  .build();  // Builds the table

// Note: .addIndex(1) should be called after .setJsonArrayInputs(data)
// because .addIndex(param) adds another data entry. Otherwise, .setJsonArrayInputs(data) would replace the entire data.

// "const tableString" is now ready to be used
// as an example in Discord.js Api

new Embed()
  .setColor(config.embeds.colors.info)
  .setDescription(tableString)
  .interactionResponse(interaction);

// Note Embed is my own custom class
```
As an Discord Embed it looks like this:

![Discord Table Example1](https://raw.githubusercontent.com/Nicuschgifthub/DiscordSimpleTable/master/images/example1.png)


You can also leave out the ".addVerticalBar()" and ".addIndex(1)"
```js
//...

  const tableString = new DiscordSimpleTable(columns)
    .setJsonArrayInputs(data)
    .setStringOffset(2)
    .build();

//...
```

![Discord Table Example2](https://raw.githubusercontent.com/Nicuschgifthub/DiscordSimpleTable/master/images/example2.png)

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