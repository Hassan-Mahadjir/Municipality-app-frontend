import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { VehicleValues } from '@/types/vehicle.type';

class VehicleService extends BaseService {
	async getVehicles() {
		const response = await http.get<AppResponse<VehicleValues[]>>(
			'/collected-vehicle',
		
		);
		return response;
	}
    async getOneVehicle(id:number){
    const response= await http.get<AppResponse<VehicleValues>>(
        `/collected-vehicle/${id}`,
    );
    return response
    }
	
}

export default new VehicleService();
