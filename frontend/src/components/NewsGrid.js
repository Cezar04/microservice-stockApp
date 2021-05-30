import Article from './Article';
import BASE_URL, { API_KEY } from '../BASE_URL';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Carrousel from './Carrousel';

const Newsgrid = () => {
	const [articles, setArticles] = useState([]);

	const fetchArticles = () => {
		axios
			.get(`${BASE_URL}&token=${API_KEY}`)
			.then((response) => {
				setArticles(response.data);
			})
			.catch((error) => {
				// TODO: implement error handling
				console.log(error.response);
			});
	};

	useEffect(() => {
		fetchArticles();
	}, []);

	return (
		<>
		<Carrousel/>
		<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
			<div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
				{articles?.map((article) => {
					return <Article key={article.id} {...article} />;
				})}
			</div>
		</div>
	</>	
	);
};

export default Newsgrid;
