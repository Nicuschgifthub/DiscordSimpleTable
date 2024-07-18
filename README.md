# SimpleTable

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

