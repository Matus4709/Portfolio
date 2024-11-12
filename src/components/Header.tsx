import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Drawer, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Ikona hamburger menu

const Header: React.FC = () => {
  const [open, setOpen] = useState(false); // Stan kontrolujący otwarcie menu

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <AppBar position="sticky" className="!bg-transparent !mx-auto mt-4" style={{ width: "50%" }}>
      <Toolbar className="flex justify-between items-center px-3 py-1 !rounded-full lg:border">
        {/* Logo lub tytuł */}
        <div className="text-white text-2xl font-bold tracking-wider">
          My Portfolio
        </div>

        {/* Nawigacja - na desktopie */}
        <div className="space-x-6 hidden lg:flex items-center">
          <Button
            color="inherit"
            className="hover:bg-white hover:text-indigo-600 !font-bold transition-all duration-300 px-6 py-2 rounded-lg"
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            color="inherit"
            className="hover:bg-white hover:text-indigo-600 !font-bold transition-all duration-300 px-6 py-2 rounded-lg"
            component={Link}
            to="/about"
          >
            About
          </Button>
          <Button
            color="inherit"
            className="hover:bg-white hover:text-indigo-600 !font-bold transition-all duration-300 px-6 py-2 rounded-lg"
            component={Link}
            to="/projects"
          >
            Projects
          </Button>
          <Button
            color="inherit"
            className="hover:bg-white hover:text-indigo-600 !font-bold transition-all duration-300 px-6 py-2 rounded-lg"
            component={Link}
            to="/contact"
          >
            Contact
          </Button>
        </div>

        {/* Ikona hamburgera dla wersji mobilnej */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          className="lg:!hidden md:!hidden 2xl:!hidden"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer (menu boczne) dla wersji mobilnej */}
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <div className="p-4 space-y-4 w-64">
          <Button
            color="inherit"
            className="w-full text-left hover:bg-white hover:text-indigo-600 !font-bold transition-all duration-300"
            component={Link}
            to="/"
            onClick={() => toggleDrawer(false)}
          >
            Home
          </Button>
          <Button
            color="inherit"
            className="w-full text-left hover:bg-white hover:text-indigo-600 !font-bold transition-all duration-300"
            component={Link}
            to="/about"
            onClick={() => toggleDrawer(false)}
          >
            About
          </Button>
          <Button
            color="inherit"
            className="w-full text-left hover:bg-white hover:text-indigo-600 !font-bold transition-all duration-300"
            component={Link}
            to="/projects"
            onClick={() => toggleDrawer(false)}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            className="w-full text-left hover:bg-white hover:text-indigo-600 !font-bold transition-all duration-300"
            component={Link}
            to="/contact"
            onClick={() => toggleDrawer(false)}
          >
            Contact
          </Button>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Header;
