import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink} from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
 
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
 
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}) );

const SearchIconWrapper = styled('div')(({ theme,e }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  width:"9px",
  position: 'absolute',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor:"pointer",

}),

);

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '90%',
  
  marginLeft:"10%",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({searchRecpie}) {
  const[value, Setvalue] = React.useState("");
  
  const handleSearchRecipe = () =>{
    
    Setvalue("");
    value ?
    searchRecpie(value)
   :
   searchRecpie("random")
  }
  return (
    <Box sx={{ flexGrow: 1, position:"fixed", top:"0px", marginBottom:"100px",  width:"100%", zIndex:"2", paddingBottom: "60px"}}
    style={{marginBottom:"50px"}}
    >
      <AppBar  position='fixed'>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' },
              fontVariant:"h7",
          }}
          >
           <NavLink to={"/"} style={{textDecoration:"none", color:"white"}}>
           RECIPEtttttt
            </NavLink> 
          </Typography>
          <Search sx={{ width:{sm: "250px", xs : "180px" }  }} >
            <SearchIconWrapper onClick={handleSearchRecipe} sx={[
              {
                cursor:"pointer"
              }
            ]}  >
              <SearchIcon sx={[{
                cursor:"pointer"
              }]} style={{cursor:"pointer", }}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Recipe..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={ (e)=>{Setvalue(e.target.value)}}
              value={value}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}