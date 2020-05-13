import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 4,
  },
 
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
   function st(){
      let search = document.getElementById("search").value;
      sessionStorage.setItem("s",search);
      
   }
   
  return (
    <Paper component="form" className={classes.root}  >
      
      <InputBase
        className={classes.input}
        placeholder="Tìm kiếm sản phẩm"
        inputProps={{ 'aria-label': 'Tìm kiếm sản phẩm' }}
        id = "search"
      />
      <Link to ="/">
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick="st()"  >
        <SearchIcon />
      </IconButton>
      </Link>
      
      
    </Paper>
  );
}