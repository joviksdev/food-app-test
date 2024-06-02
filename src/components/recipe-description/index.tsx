import { useRef, useState } from 'react';
import { AppModal, IModalRef } from '../common';
import { IConversion, INutritionalInformation } from '../../utils';
import { useGetForexPrice } from '../../api';

const RecipeDescription = ({
	description,
	price = 0,
}: {
	description: INutritionalInformation;
	price: number;
}) => {
	const modalRef = useRef<IModalRef | null>(null);
	const { convert } = useGetForexPrice();
	const [dollarPrice, setDollarPrice] = useState<number>(0);

	const handleDisplayPrice = () => {
		if (convert && convert.result) {
			if (modalRef?.current) modalRef.current.display();
			const dollarPrice = (
				price / (convert as IConversion)?.result['NGN']
			).toPrecision(4);
			setDollarPrice(parseFloat(dollarPrice));
		} else {
			alert('Conversion not available');
		}
	};

	return (
		<>
			<AppModal ref={modalRef} title='Recipe Amount'>
				<p>Price: NGN {price}</p>
				<p>Dollar Price: $ {dollarPrice}</p>
			</AppModal>
			<div className='border border-gray-300 rounded-md bg-white w-full py-4 sticky top-[100px]'>
				<div className='border-b pb-3 px-4'>
					<h2 className='font-semibold'>Nutritional Information</h2>
				</div>
				<div className='grid gap-4 px-4 my-4'>
					{description &&
						Object.keys(description).map((item) => (
							<p className='capitalize' key={item}>
								{item}: {(description as any)[item]}g
							</p>
						))}
				</div>
				<div className='flex gap-4 items-center pt-3 px-4'>
					<p>
						Price:{' '}
						<span className='font-semibold'>
							{'  '}NGN {price}
						</span>
					</p>
					<button
						onClick={handleDisplayPrice}
						className='border px-5 py-2 text-[12px] rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500'
					>
						View Price in USD
					</button>
				</div>
			</div>
		</>
	);
};

export default RecipeDescription;
