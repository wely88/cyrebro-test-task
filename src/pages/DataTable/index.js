import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

//Components
import { DataGrid } from '@material-ui/data-grid';
import { TextField, InputAdornment } from '@material-ui/core';
import { Loader } from '../../components/Loader';
import SearchIcon from '@material-ui/icons/Search';

//Redux
import { allUsersSelector, filteredUsersSelector } from '../../redux/store/users/selectors';
import { loadingSelector, errorSelector } from '../../redux/store/system/selectors';
import { getAllUsers, setSearch, setOrder } from "../../redux/store/users/actions";

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
	const dispatch = useDispatch();
  const allUsers = useSelector(allUsersSelector);
	const filteredUsers = useSelector(filteredUsersSelector);
	const error = useSelector(errorSelector);
	const loading = useSelector(loadingSelector);
	const [isSearchActive, setIsSearchActive] = useState(false);

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch])

	const handleSortColumn = (GridSortModelParams) => {
		dispatch(setOrder(GridSortModelParams));
	}

	const handleSearch = (event) => {
		if (event.target.value.length) {
			dispatch(setSearch(event.target.value));
			setIsSearchActive(true);
		} else {
			setIsSearchActive(false);
		}
	}

  return (
    <>
			{
				loading ? 
				<div className="loader-wrapper">
					<Loader />
				</div>
				:
				error ? 
				<div className="error-wrapper">Something went wrong...</div>
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
							)
						}} 
						onChange={(event) => handleSearch(event)}
					/>
					</div>
					<div className="table__data">
						<DataGrid
							rows={isSearchActive ? filteredUsers : allUsers} 
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
