import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

function Header() {
  const [open, setOpen] = React.useState(false);
  const [topics, setTopics] = React.useState([]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  React.useEffect(() => {
    getTopics().then((data) => {
      setTopics(data.topics);
    });
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link to={`/topics`} key={"all"}>
          <ListItem>All Articles</ListItem>
        </Link>
        {topics.map((topic) => {
          return (
            <Link to={`topics/${topic.slug}`} key={topic.slug}>
              <ListItem>{topic.slug}</ListItem>
            </Link>
          );
        })}
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
