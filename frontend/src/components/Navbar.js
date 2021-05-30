import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='bg-gray-600'>
			<div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<div className='relative flex items-center justify-between'>
					<a
						href='/'
						aria-label='Company'
						title='Company'
						className='inline-flex items-center'
					>
						<svg
							className='w-8 red-400'
							viewBox='0 0 24 24'
							strokeLinejoin='round'
							strokeWidth='2'
							strokeLinecap='round'
							strokeMiterlimit='10'
							stroke='currentColor'
							fill='none'
						>
							<rect x='3' y='1' width='7' height='12' />
							<rect x='3' y='17' width='7' height='6' />
							<rect x='14' y='1' width='7' height='6' />
							<rect x='14' y='11' width='7' height='12' />
						</svg>
						<span className='ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase'>
							Stock Trader
						</span>
					</a>
					<ul className='flex items-center space-x-8 lg:flex'>
						<li>
							<Link to='/portfolio'
								className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-gray-900 focus:shadow-outline focus:outline-none'
								aria-label='My Portfolio'
								title='My Portfolio'
							>
								My Portfolio
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
