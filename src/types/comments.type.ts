export type CommentValues = {
	id: number;
	name: string;
	language: string;
	historicalPlaceComments: {
		id: number;
		body: string;
		createAt: string;
		language: string;
		user: {
			id: number;
			email: string;
			profile: {
				id: number;
				firstName: string;
				lastName: string;
				avatar: string;
			};
		};
	}[];

};
export type PostcommValues={
    historicalPlaceId?: number;
    restaurantId?: number;
    body: string;
    commentedOn:string;
    recommenation:number;
}
