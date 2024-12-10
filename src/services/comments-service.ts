import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { CommentValues } from '@/types/comments.type';

class CommentService extends BaseService {
	async getComments(type:string, serviceid:number) {
		const response = await http.get<AppResponse<CommentValues>>(
			`comment/${type}/${serviceid}`
		);
		return response;
	}
}
    export default new CommentService();