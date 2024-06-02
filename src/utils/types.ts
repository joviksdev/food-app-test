export interface IFood {
	[key: string]: {
		category: string;
		img_url: string;
		nutritional_information: INutritionalInformation;
	};
}

export interface INutritionalInformation {
	calories: string;
	carbs: string;
	protein: string;
	fat: string;
	sodium: string;
	sugar: string;
}

export interface IConversion {
	base: string;
	result: {
		NGN: number;
	};
	updated: string;
	ms: number;
}
