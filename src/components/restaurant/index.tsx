import React from 'react';
import { MapPin, Gem } from 'lucide-react';

interface IRestaurant {
	restaurant: any;
}

const Restaurant: React.FC<IRestaurant> = ({ restaurant }) => {
	return (
		<div className='bg-white  rounded-md shadow-2xl overflow-hidden grid grid-cols-6'>
			<div
				style={{
					backgroundImage: `url(${restaurant.heroImgUrl})`,
				}}
				className='col-span-2 group h-[250px] bg-cover bg-no-repeat bg-center w-full relative overflow-hidden before:content-[""] before:absolute before:top-0 before:left-0 before:bg-primary/20 before:w-full before:bottom-0 transition-all duration-1000 before:opacity-0 group-hover/container:before:opacity-100 group-hover/container:scale-105'
			></div>
			<div className='col-span-4 px-4 py-8 relative flex items-center'>
				{restaurant?.isPremium && (
					<div className='shadow-xl absolute top-0 right-0 bg-primary py-2 px-4 rounded-bl-xl text-white'>
						<p className='flex gap-[4px]'>
							<Gem />
							<span>Premium</span>
						</p>
					</div>
				)}
				<div className='flex flex-col gap-4 items-start'>
					<h1 className='font-light text-primary text-[24px] md:text-[48px] max-w-[540px] leading-none mb-4'>
						{restaurant?.name}
					</h1>
					<p className='flex gap-2'>
						<MapPin />
						<span>{restaurant?.parentGeoName}</span>
					</p>
					{restaurant?.establishmentTypeAndCuisineTags && (
						<div className='flex items-center gap-1'>
							{restaurant?.establishmentTypeAndCuisineTags.map(
								(value: string) => (
									<div
										className='bg-primary px-2 py-[2px] text-[12px] text-white rounded'
										key={value}
									>
										<p>{value}</p>
									</div>
								)
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Restaurant;
