import { useQuery } from '@tanstack/react-query';
import weatherService from '../weather-service';

export const useWeatherService = (
	lat: number,
	lon: number,
	lang: string = 'en'
) => {
	// default to 'en'
	const { data: weatherData, ...props } = useQuery({
		queryKey: ['weather', lat, lon, lang], // Include lang in the query key
		queryFn: () => weatherService.getWeatherByLocation(lat, lon, lang), // Pass lang to service
		enabled: !!lat && !!lon, // Only fetch if lat and lon are provided
	});

	return { weatherData, ...props };
};
