import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Youtube from '@material-ui/icons/YouTube';
import { useStyles } from './style';
import SearchBar from '../SearchBar';
import { useNavigate } from 'react-router-dom';
import AuthButtons from '../AuthButtons';
export default function Navbar() {

  const classes = useStyles();
  const navigate = useNavigate();


  const navigateToVideos = () => {
    navigate('/videos')
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Youtube />
          </IconButton>
          <Typography onClick={navigateToVideos} className={classes.title} variant="h6" noWrap>
            Videos
          </Typography>
          <SearchBar />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <AuthButtons />
          </div>
        </Toolbar>
      </AppBar>
      {/* <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <NavMenu anchorEl={anchorEl} menuId={menuId} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} /> */}
    </div>
  );
}
