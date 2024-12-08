import { useQuery } from '@tanstack/react-query';
import municipalityService from '../municipality-service';

export const useDepartment = () => {
	const { data: departmentData, ...props } = useQuery({
		queryFn: () => municipalityService.getDepartments(),
		queryKey: ['departments'],
	});

	return { departmentData, ...props };
};

export const useGetDepartment = (id: number) => {
	const { data: departmentData, ...props } = useQuery({
		queryFn: () => municipalityService.getDepartment(id),
		queryKey: ['department', id],
	});

	return { departmentData, ...props };
};
