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

export interface IRecipe {
	canonical_id: string;
	country: 'US';
	created_at: number;
	description: string;
	id: number;
	inspired_by_url: null;
	instructions: { [key: string]: any };
	keywords: string;
	language: string;
	name: string;
	num_servings: number;
	nutrition: { [key: string]: any };
	original_video_url: string;
	price: {
		consumption_portion: number;
		consumption_total: number;
		portion: number;
		total: number;
	};
	slug: string;
	thumbnail_alt_text: string;
	thumbnail_url: string;
	video_id: number;
	video_url: string;
}
