import React from 'react';

const Article = ({
	category,
	datetime,
	headline,
	image,
	summary,
	url,
	source,
}) => {
	const formatDateTime = (timestamp) => {
		let date = new Date(timestamp * 1000);
		let time = date.toLocaleTimeString(navigator.language, {
			hour: '2-digit',
			minute: '2-digit',
		});
		return `${date.getDate()}/${
			date.getMonth() + 1
		}/${date.getFullYear()} ${time}`;
	};

	return (
		<div className='p-8 bg-white border rounded shadow-sm flex flex-col justify-evenly'>
			<p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
				<a
					href='/'
					className='transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
					aria-label='Category'
				>
					{category?.toUpperCase()}
				</a>{' '}
				<span className='text-gray-600'>— {formatDateTime(datetime)}</span>
			</p>
			<a
				href={url}
				aria-label='Article'
				title=''
				className='inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400'
			>
				{headline}
			</a>
			<p className='mb-5 text-gray-700'>{summary}</p>
			<div className='flex items-center'>
				<a href='/' aria-label='Author' title='Author' className='mr-3'>
					<img
						src={image}
						alt='avatar'
						className='object-cover w-10 h-10 rounded-full shadow-sm'
					/>
				</a>
				<div>
					<p className='text-sm font-medium leading-4 text-gray-600'>Source</p>
					<a
						href='/'
						aria-label='Author'
						title='Author'
						className='font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400'
					>
						{source}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Article;
