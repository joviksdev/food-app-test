import { Utensils, Forward } from 'lucide-react';

const PopularRecipeItem = ({
	text,
	onClick,
}: {
	text: string;
	onClick?: () => void;
}) => {
	return (
		<div
			onClick={onClick}
			style={{
				backgroundImage: `url(/images/pizza.jpg)`,
			}}
			className='group select-none cursor-pointer group h-[100px] [&>img]:w-full bg-cover bg-center relative overflow-hidden before:content-[""] before:absolute before:top-0 before:left-0 before:bg-black/60 before:w-full before:bottom-0 transition-all duration-1000 before:z-0 px-4 py-3 flex flex-col justify-center'
		>
			<div className='bg-primary absolute top-0 right-0 flex items-center justify-center text-white h-10 w-10 translate-x-[50px] group-hover:translate-x-0 transition-all duration-500'>
				<Forward size={28} />
			</div>
			<Utensils size={32} className='text-white relative text-3xl mb-2' />
			<h2 className='!text-white z-10 relative font-semibold capitalize text-[12px]'>
				{text.replace(/_/g, ' ')}
			</h2>
		</div>
	);
};

export default PopularRecipeItem;
