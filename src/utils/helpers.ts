export const cleanText = (text: string) => {
	if (!text) return;

	return text.replace(/_/g, ' ');
};
