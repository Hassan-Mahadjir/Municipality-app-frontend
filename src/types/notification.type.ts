export type NotificationVaules = {
	id: number;
	body: string;
	langauge: string;
	sendAt: string;
	translations: {
		id: number;
		body: string;
		langauge: string;
	}[];
};
