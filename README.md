# Incremental note names for Obsidian

This is a script to help generate incrementally numbered note names, such as:
- `ADR 013 - Use AWS SQS`
- `RFC862 Echo Protocol`
- `[BUG-1348] Splines not reticulated`

## Requirements

- [QuickAdd](obsidian://show-plugin?id=quickadd)
- [DataView](obsidian://show-plugin?id=dataview)

## Setup

1. Drop the `Incremental.js` file from this repository into your vault.
2. Create a QuickAdd **macro** (under "Manage Macros").
3. Add the user script as a macro step.
4. Configure the user script step. The query should at least filter by the target folder (remember that DataView wants folder names to be quoted). If your target folder contains other types of files that you don't want to be counted, you can add additional conditions such as tags.
5. Add a template macro step. Use the variables exposed by the user script to format the file name you want. Make sure the target folder matches your query expression.
6. Set up your template as you want. Here you can also use the variables exposed by the user script; see [the example template](Template.md).

The user script also exposes the `FileName` function that you can use with the QuickAdd `{{MACRO:}}` syntax, but it is less flexible and less convenient than the setup above. In this case, the macro name chosen in step 2 is significant and must match the expression.
