export type VehicleValues = {
	id: number;
	plateNumber: string;
	year: number    
	brand: string;
    collectedDate: string;
    reason:string;
    location:string;
    fee:string;
    status:string;
    imageUrl: string;
	language: string;
	translations: {
		id: number;
        reason:string;
		location: string;
		language: string;
	}[];
};
export type BusValues={
	id: number;
	from: string;
	to: string;
	toStations:{
		id: number;
		name:string;
	}[]
	sechdule:
	{
		id: number;
		day:string;
		language: string;
		timeTable:{
			id: number;
			goTime:string;
			returnTime:string;
		}[]
		translations:{
			id:number;
			language: string;
			day: string;
		}[]
	}[]

}