import React, { useState } from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './style';
import { useDispatch } from 'react-redux';
import { videosAction } from '../../actions/videos';

export default function SearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={searchTerm}
        onChange={(e) => {
          //async
          setSearchTerm(e.target.value)
          dispatch(videosAction(e.target.value))
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}
