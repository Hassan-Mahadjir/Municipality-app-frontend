export type NotificationVaules = {
	id: number;
	body: string;
	language: string;
	sendAt: string;
	translations: {
		id: number;
		body: string;
		language: string;
	}[];
};

export type postNotificationVaules = {
	body: string;
	language: string;
	reportId?: number;
	animalId?: number;
	requestId?: number;
	appointmentId?: number;
};
