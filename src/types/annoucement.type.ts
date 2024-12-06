export type AnnoucementValues = {
	id: number;
	title: string;
	header: string;
	body: string;
	createAt: string;
	language: string;
	location: string;
	images: { id: number; imageUrl: string }[];
	translations: {
		id: number;
		header: string;
		body: string;
		title: string;
		language: string;
		location: string;
	}[];
};
