import { useImperativeHandle, forwardRef, useState, ReactNode } from 'react';
import { XCircle } from 'lucide-react';

export interface IModalRef {
	display: () => void;
	close: () => void;
}

interface Props {
	children: ReactNode;
	title?: string;
}

const AppModal = (props: Props, ref: any) => {
	const [isDisplay, setDisplay] = useState<boolean>(false);
	const closeModal = () => setDisplay(false);
	useImperativeHandle(
		ref,
		() => ({
			display: () => setDisplay(true),
			close: closeModal,
		}),
		[]
	);

	if (isDisplay) {
		return (
			<div className='bg-gray-500/40 top-0 left-0 h-full w-full z-50 fixed flex items-center justify-center transition-all duration-300'>
				<div className='bg-white max-w-[540px] w-full rounded-md p-4'>
					<div
						className={`flex items-center ${
							props?.title ? 'justify-between' : 'justify-end'
						} mb-4`}
					>
						{props.title && (
							<h1 className='font-semibold text-2xl'>{props.title}</h1>
						)}
						<button onClick={closeModal}>
							<XCircle className='text-red-500' size={32} />
						</button>
					</div>
					<div>{props.children}</div>
				</div>
			</div>
		);
	}

	return null;
};

export default forwardRef(AppModal);
