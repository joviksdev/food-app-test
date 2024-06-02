import React, { ReactNode, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const AppContainer: React.FC<Props> = ({ children, className, ...rest }) => {
	return (
		<div {...rest} className={`max-w-[1200px] m-auto px-[15px]  ${className}`}>
			{children}
		</div>
	);
};

export default AppContainer;
