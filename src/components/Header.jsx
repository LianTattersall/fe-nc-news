import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link to={`/topics/All`}>
          <ListItem>All Articles</ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <nav className="header">
      <div className="menu-icon">
        <MenuIcon onClick={toggleDrawer(true)} />
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <h1>NC News</h1>
    </nav>
  );
}

export default Header;
