import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../utils';
import {
	foodsController,
	foodController,
	similarFoodsController,
	dollarToNgn,
} from './controllers';

export const useFoodsServices = (key: string = QUERY_KEYS.Foods) => {
	const { data, isLoading } = useQuery({
		queryKey: [key],
		queryFn: () => foodsController(),
	});

	return {
		isLoadingFood: isLoading,
		foods: data,
	};
};

export const useFoodServices = (slug: string) => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.Food, slug],
		queryFn: () => foodController(slug),
		enabled: !!slug,
	});

	return {
		isLoadingFood: isLoading,
		dataFood: data,
	};
};

export const useSimilarFoodsServices = (category: string) => {
	const { data, isLoading } = useQuery({
		queryKey: [category],
		queryFn: () => similarFoodsController(category),
		enabled: !!category,
	});

	return {
		isLoadingSimilarFoods: isLoading,
		dataSimilarFoods: data,
	};
};

export const useGetForexPrice = () => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.ForexConvert],
		queryFn: () => dollarToNgn({ from: 'USD', to: 'NGN' }),
		refetchOnWindowFocus: false,
	});

	return {
		isLoadingConvert: isLoading,
		convert: data,
	};
};
