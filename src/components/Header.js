import { AppBar, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
const Header=()=>{
return <>
<div className="header">
        <AppBar>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              A Basic toDoList
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
</>
}
export default Header;