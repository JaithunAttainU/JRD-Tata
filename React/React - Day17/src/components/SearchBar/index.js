import React, { useState, useEffect } from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './style';
import { useDispatch } from 'react-redux';
import { videosAction } from '../../actions/videos';
import { debounce } from '@material-ui/core';
import { useRef } from 'react';

export default function SearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  const inputEleRef = useRef()
  const materialInputRef = React.createRef()

  const debounce = (callback, delay) => {
    let timerId;
    return function (searchTerm) {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        callback(searchTerm)
      }, delay)
    }
  }


  useEffect(() => {
    // console.log(document.getElementById('inputText'))
    // document.getElementById('inputText').focus()
    inputEleRef.current.focus()
    // inputEleRef.current.style.backgroundColor = 'green'

    materialInputRef.current.children[0].focus()
    // console.log()
  }, [])


  // let timerId;
  // const debounce = (delay, searchTerm) {
  //   clearTimeout(timerId)
  //   timerId = setTimeout(() => {
  //     setSearchTerm(searchTerm)
  //     dispatch(videosAction(searchTerm))
  //   }, 1000)
  // }


  const update = debounce((searchTerm) => {
    setSearchTerm(searchTerm)
    dispatch(videosAction(searchTerm))
  }, 1000)


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
        ref={materialInputRef}
        onChange={(e) => {
          update(e.target.value)
          // debounce(1000, e.target.value)
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <input type={'text'} placeholder="Enter here.." id="inputText" ref={inputEleRef} />
    </div>
  )
}


// i) Debouncing
// ii) Throttling


// h - api Call - h
// e - api call - he
// l -api call - hel

// h - Timer, 1000 - clearTimer
// e - Timer, 1000 - clearTimer
// l - Timer, 1000 - clearTimer
// l - Timer,1000 - then a api call is made


// Two seconds - api 
// Two seconds - api

// 1 - 5 - api hello bed cat
// 5 - 10 - api