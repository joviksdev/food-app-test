import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
	AppContainer,
	RecipeItem,
	Spinner,
	Pagination,
} from '../../components';
import { QUERY_KEYS, LINKS } from '../../utils';
import { useRecipesServices } from '../../api';

const handleScroll = () => {
	const el = document.querySelector('.outlet');
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
	}
};

const parseQuery = (query: string) => {
	const result = {} as any;
	const splitQuery = query.substring(1).split('&');

	splitQuery.forEach((value) => {
		const split = value.split('=');
		result[split[0]] = split[1];
	});

	return result;
};

const AllRecipe = () => {
	const { search } = useLocation();
	const navigate = useNavigate();
	const total = useRef<number>(0);
	const maxRecord = useRef<number>(20);

	const query = parseQuery(search);

	const [pageCount, setPageCount] = useState<number>(10);
	const [currentPage, setCurrentPage] = useState<number>(
		Number(query?.page) - 1 || 0
	);

	const { recipes, isLoadingRecipes, totalCount, refetchRecipes } =
		useRecipesServices({
			key: `${QUERY_KEYS.Recipes}-${currentPage}`,
			params: {
				from: currentPage * maxRecord.current,
				size: '20',
			},
		});

	total.current = totalCount || 0;

	const onPageChange = ({ selected }: { selected: number }) => {
		handleScroll();
		setCurrentPage(selected);
		if (selected !== currentPage) {
			if (selected === 0) {
				navigate(`${LINKS.Recipes}`);
				return;
			}
			const page = selected + 1;
			navigate(`${LINKS.Recipes}?page=${page}`);
			refetchRecipes();
		}
	};

	useEffect(() => {
		if (totalCount && typeof totalCount === 'number') {
			const pageCount = Math.ceil(Number(totalCount) / maxRecord.current);
			setPageCount(pageCount);
		}
	}, [totalCount, pageCount]);

	return (
		<AppContainer className=' pt-4 pb-10'>
			<div className=' app-container flex gap-3 items-center mb-4'>
				<h1 className='all-recipes font-semibold text-2xl  whitespace-nowrap'>
					All Recipes
				</h1>
				<div className='bg-gray-200 h-[1px] w-full' />
			</div>

			{isLoadingRecipes ? (
				<Spinner />
			) : (
				recipes &&
				Array.isArray(recipes) && (
					<>
						{
							<div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
								{recipes.map((value, key) => {
									return (
										<RecipeItem key={`${value.id}-${key}`} recipe={value} />
									);
								})}
							</div>
						}
						<div className='mt-6 '>
							<Pagination
								forcePage={currentPage}
								pageCount={pageCount}
								onPageChange={onPageChange}
							/>
						</div>
					</>
				)
			)}
		</AppContainer>
	);
};

export default AllRecipe;
