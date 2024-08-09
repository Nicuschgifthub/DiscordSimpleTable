class DiscordSimpleTable {
    /**
     * Creates a new DiscordSimpleTable instance.
     * @param {Array} columns - An array of column objects, each with `label` and `key` properties.
     * @param {string} [spaceString=' '] - A string used for spacing in the table.
     */
    constructor(columns, spaceString = ' ') {
        this._columns = columns;
        this._items = [];

        this._stringOffset = 0;
        this._widthForKeys = {};

        this._verticalBar = false;
        this._spaceString = spaceString;
        this._indexLabel = '#';

        this._indexStartValue = null;
    }

    /**
     * Sets the string offset for spacing.
     * @param {number} [offset=2] - The number of spaces to offset.
     * @returns {DiscordSimpleTable} The current instance for chaining.
     */
    setStringOffset(offset = 2) {
        this._stringOffset = offset;
        return this;
    }

    /**
     * Sets the label for the index column.
     * @param {string} label - The label for the index column.
     * @returns {DiscordSimpleTable} The current instance for chaining.
     */
    setIndexLabel(label) {
        this._indexLabel = label;
        return this;
    }

    /**
     * Adds an index column to the table.
     * @param {number} [startValue=1] - The starting value for the index.
     * @returns {DiscordSimpleTable} The current instance for chaining.
     */
    addIndex(startValue = 1) {
        this._indexStartValue = startValue;
        return this;
    }

    /**
     * Sets the input data for the table from a JSON array.
     * @param {Array} jsonArray - The JSON array of data objects.
     * @returns {DiscordSimpleTable} The current instance for chaining.
     */
    setJsonArrayInputs(jsonArray) {
        jsonArray.forEach((row) => this._items.push(row));

        if (jsonArray.length > 0) {
            const keys = Object.keys(jsonArray[0]);
            keys.forEach((key) => {
                if (!(key in this._widthForKeys)) {
                    this._widthForKeys[key] = 0;
                }
            });
        }
        return this;
    }

    /**
     * Adds or removes a vertical bar between rows.
     * @param {boolean} [add=true] - Whether to add a vertical bar.
     * @returns {DiscordSimpleTable} The current instance for chaining.
     */
    addVerticalBar(add = true) {
        this._verticalBar = add;
        return this;
    }

    /**
     * Updates the width for each key based on the data and column labels.
     * @private
     */
    _updateWidthForKeys() {
        for (let key in this._widthForKeys) {
            const maxLength = Math.max(
                ...this._items.map(item => item[key].toString().length)
            );
            const columnLabelLength = this._columns.find(col => col.key === key)?.label.length || 0;
            this._widthForKeys[key] = Math.max(this._widthForKeys[key], maxLength, columnLabelLength) + this._stringOffset;
        }
    }

    /**
     * Adds extra spaces to a string to meet the desired length.
     * @param {string} string - The input string.
     * @param {number} count - The desired length.
     * @returns {string} The input string padded with extra spaces.
     */
    extraSpaces(string, count) {
        const spacesToAdd = Math.max(0, count - string.length);
        return this._spaceString.repeat(spacesToAdd);
    }

    /**
     * Appends extra spaces to a string to meet the desired length.
     * @param {string} string - The input string.
     * @param {number} count - The desired length.
     * @returns {string} The input string appended with extra spaces.
     */
    stringExtraSpaces(string, count) {
        const spacesToAdd = Math.max(0, count - string.length);
        return string + this._spaceString.repeat(spacesToAdd);
    }

    /**
     * Creates the top header row of the table.
     * @private
     * @returns {string} The formatted top header row.
     */
    _makeTopHeader() {
        let header = "`";

        this._columns.forEach(element => {
            header += `${this.stringExtraSpaces(element.label, this._widthForKeys[element.key])}`;
        });

        const headerLength = header.length;

        header += "`";

        if (this._verticalBar) {
            header += "\n`";
            header += "―".repeat(headerLength - 1);
            header += "`";
        }

        return header;
    }

    /**
     * Creates the entries rows of the table.
     * @private
     * @returns {string} The formatted entries rows.
     */
    _makeEntries() {
        let string = "";

        this._items.forEach(dataItem => {
            let row = "\n`";

            this._columns.forEach(column => {
                const columnKey = column.key;
                row += `${this.stringExtraSpaces(dataItem[columnKey].toString(), this._widthForKeys[columnKey])}`;
            });

            row += "`";
            string += row;
        });

        return string;
    }

    /**
    * Adds an index column to the beginning of the table.
    * @returns {void} This method does not return a value.
    */
    _addIndex() {
        this._items = this._items.map((item, index) => {
            return { ...item, index: this._indexStartValue + index };
        });

        this._columns.unshift({ label: this._indexLabel, key: 'index' });
        this._widthForKeys['index'] = 0;
        return;
    }

    /**
     * Builds the complete table as a string.
     * @returns {string} The formatted table as a string.
     */
    build() {
        if (this._indexStartValue !== null) {
            this._addIndex();
        }

        this._updateWidthForKeys();

        let string = this._makeTopHeader();
        string += this._makeEntries();

        return string;
    }
}


module.exports = DiscordSimpleTable;