import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Components
import { DataGrid } from '@material-ui/data-grid';
import { TextField, InputAdornment } from '@material-ui/core';
import { Loader } from '../../components/Loader';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

//Styles
import './index.scss';

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.4, disableColumnMenu: true },
  { field: 'name', headerName: 'Name', flex: 0.8, disableColumnMenu: true },
  { field: 'username', headerName: 'Username', flex: 1, disableColumnMenu: true },
  { field: 'email', headerName: 'E-mail', flex: 1, disableColumnMenu: true },
	{ field: 'phone', headerName: 'Phone', flex: 1,	disableColumnMenu: true},
	{ field: 'website', headerName: 'Website', flex: 1, disableColumnMenu: true },
];

export const DataTable = () => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then((res) => {
				setData(res.data)
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			})
	}, [])

	const handleSortColumn = (GridSortModelParams) => {
		const column = GridSortModelParams.sortModel.length ? GridSortModelParams.sortModel[0]?.field : 'id';
		const order = GridSortModelParams.sortModel[0]?.sort;
	
		const sortedData = order === 'desc' ?
			data.slice().sort((a,b) => (b[column] > a[column]) ? 1 : ((a[column] > b[column]) ? -1 : 0))
			:
			data.slice().sort((a,b) => (a[column] > b[column]) ? 1 : ((b[column] > a[column]) ? -1 : 0))

		setData(sortedData)
	}

  return (
    <>
			{
				loading ? 
				<div className="loader-wrapper">
					<Loader />
				</div>
				:
				<div className="table">
					<h2 className="table__header">Table Data</h2>
					<div className="table__search">
					<TextField 
						variant="outlined" 
						id="search" 
						name="search" 
						label="Search" 
						placeholder="Type here..."
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="end">
									<CloseIcon/> 
								</InputAdornment> 
							),
						}} 
						//onChange={(event) => handleSearch(event)}
					/>
					</div>
					<div className="table__data">
						<DataGrid
							rows={data} 
							columns={columns} 
							autoHeight={true}
							sortingMode={'server'}
							pageSize={5}
							onSortModelChange={(GridSortModelParams) => handleSortColumn(GridSortModelParams)}
						/>
					</div>
				</div>
			}
    </>
  );
}
