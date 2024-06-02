import { AppContainer } from '../../common';

const AppFooter = () => {
	return (
		<div className='text-white'>
			<div className='bg-gray-900 py-4'>
				<AppContainer>
					<p className='text-[13px]'>
						&copy; Copyright 2014 by FoodApp. All Rights Reserved.
					</p>
				</AppContainer>
			</div>
		</div>
	);
};

export default AppFooter;
