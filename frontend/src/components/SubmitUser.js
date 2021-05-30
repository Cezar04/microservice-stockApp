import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListOfData from './ListOfData'

const ADD_USER_URL = 'http://localhost:8300/rest/db/add';

export default function SubmitForm() {
	const [userName, setUsername] = useState('');
	const [quotes, setQuotes] = useState(['']);

	const handleFormSubmit = (e) => {
		// FIXME: Index submit not properly uploading
		e.preventDefault();
		console.log(userName, quotes);
		setQuotes([...quotes, e.target.index.value]);
		setUsername(e.target.name.value);
		console.log(userName, quotes);
		axios
			.post(
				ADD_USER_URL,
				{ userName, quotes },
				{ headers: { 'Access-Control-Allow-Origin': '*' } }
			)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
		<div className='p-8 px-96 bg-white rounded shadow-sm'>
			<div>
				<form
					className='p-8 m-3 bg-gray-300 border flex justify-evenly rounded shadow-sm'
					onSubmit={handleFormSubmit}
				>
					<div>
						<label htmlFor='name'>Name: </label>
						<input id='name' placeholder='Your Name' />
					</div>
					<div>
						<label htmlFor='index'>Index: </label>
						<input id='index' placeholder='Your Index' />
					</div>

					<div>
						<button
							type='submit'
							className='bg-gray-800 hover:bg-gray-600 text-white font-bold px-4 rounded'
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>

		<ListOfData userName={userName}/>
		</>
	);
}
