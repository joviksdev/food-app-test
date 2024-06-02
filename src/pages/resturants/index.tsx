import { useRestaurantServices } from '../../api';
import { AppContainer, Restaurant, Spinner } from '../../components';

const Resturants = () => {
	const { restaurants, isLoadingRestaurants } = useRestaurantServices({
		locationId: '189117',
	});

	console.log(restaurants);

	if (isLoadingRestaurants) return <Spinner />;

	if (restaurants && Object.keys(restaurants).length > 0) {
		return (
			<AppContainer className=' pt-4 pb-10'>
				<div className=' app-container flex gap-3 items-center mb-4'>
					<h1 className='all-recipes font-semibold text-2xl  whitespace-nowrap'>
						Resturants
					</h1>
					<div className='bg-gray-200 h-[1px] w-full' />
				</div>
				<div className='grid gap-4'>
					{restaurants.map((restaurant: any, key: number) => (
						<Restaurant key={key} restaurant={restaurant} />
					))}
				</div>
			</AppContainer>
		);
	}

	return null;
};

export default Resturants;
