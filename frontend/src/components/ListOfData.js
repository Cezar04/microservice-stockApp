import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import SubmitUser from './SubmitUser';
import {useState, useEffect} from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.primary,
		
	},
}));

export default function DataList({...userName}) {
	const [userData, setUserData] = useState([])
	console.log(userName)
	console.log(userData)
	const classes = useStyles();

	useEffect(()=>{
		axios.get(`http://localhost:8301/rest/stock/${userName}`)
		.then(res=>setUserData(res.data))
	},[userData])



const stockData= userData.userData
	return (
		<>

		<div className='p-8 px-64 bg-white rounded shadow-sm'>
			<div className='p-8 px-48 py-30 m-8 bg-gray-300 border rounded shadow-sm'>
				<Grid container spacing={3}>
				{   
        			userData && userData.map((data, index) => ( 
						
					<Grid item xs={12} key={index}>
						<Paper className={classes.paper}>{data.quote} {data.price} $</Paper>
					</Grid>
                	
        ))
        }	
				</Grid>
			</div>
		</div>
		</>
	);
}
