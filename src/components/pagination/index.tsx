import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReactPaginate from 'react-paginate';

interface IProps {
	onPageChange: (value: { selected: number }) => void;
	pageCount: number;
	pageRangeDisplayed?: number;
	forcePage?: number;
}

const Pagination = ({
	onPageChange,
	pageCount = 1,
	pageRangeDisplayed = 3,
	forcePage,
}: IProps) => {
	return (
		<div>
			<ReactPaginate
				className='flex items-center gap-2'
				nextClassName='border border-gray-400 p-2 rounded-md'
				previousClassName='border border-gray-400 p-2 rounded-md'
				pageClassName='border  border-gray-400 w-10 h-10 flex items-center justify-center rounded-md'
				breakClassName='border  border-gray-400 w-10 h-10 flex items-center justify-center rounded-md'
				activeClassName='border border-[#a028f0] text-primary w-10 h-10 flex items-center justify-center rounded-md'
				breakLabel='...'
				nextLabel={<ChevronRight />}
				onPageChange={onPageChange}
				pageRangeDisplayed={pageRangeDisplayed}
				pageCount={pageCount}
				previousLabel={<ChevronLeft />}
				renderOnZeroPageCount={null}
				forcePage={forcePage}
			/>
		</div>
	);
};

export default Pagination;
