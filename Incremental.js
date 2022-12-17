module.exports = {
	settings: {
		name: "Incremental",
		author: "Valeri Sokolov",
		options: {
			prefix: {
				type: "input",
				defaultValue: ""
			},
			pad: {
				type: "input",
				defaultValue: "3"
			},
			query: {
				type: "input",
				placeholder: "dataview source expression"
			}
		},
	},
	entry: Incremental,
	FileName,
};

async function Incremental(ctx, settings) {
	const dataview = ctx.app.plugins.plugins.dataview.api;

	let index = 1;
	if(settings.query != "") {
		index = dataview.pages(settings.query).length + 1;
	}

	let padLength = parseInt(settings.pad);
	if(isNaN(padLength) || padLength < 0) {
		padLength = 0;
	}

	ctx.variables["prefix"] = settings.prefix;
	ctx.variables["index"] = index;
	ctx.variables["paddedIndex"] = index.toString().padStart(padLength, '0');
	ctx.variables["title"] = await ctx.quickAddApi.inputPrompt("Note title");

	return null;	
}

async function FileName(ctx, settings) {
	await Incremental(ctx, settings);

	let result = ctx.variables.paddedIndex + " - " + ctx.variables.title;

	if(settings.prefix != "") {
		result = settings.prefix + result;
	}

	return result;
}
