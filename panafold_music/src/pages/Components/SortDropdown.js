import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
const options = [
  'Sorting Options:',
  'Sort By Artist ',
  'Sort By Album Name',
  'Sort By Release Date',
];

export default function SearchBar({selectedIndex, setSelectedIndex, sortDirection, setSortDirection}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleButton = () => {
    setSortDirection(!sortDirection);
  }

  return (
    <div className='flex w-full mb-5'>
      <List className='w-52 '
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={options[selectedIndex]}

          />
        </ListItem>
      </List>
      <Menu className='w-6/12 '
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            disabled={index === 0}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
        
      </Menu>
      
      <Button className='bg-color-grey' variant="hidden" onClick={handleButton}> <p className='text-4xl	 text-black	'>
      { sortDirection ? "⤒" :
      "⤓"
      
      }
      
      </p>  </Button>
    </div>
  );
}