// import exp from "constants"
// import { AppBar, Toolbar, Typography,Button } from "@mui/material";
// import { Link } from 'react-router-dom';
// import{logo} from '../components/constants/constant'

// //function component returns tsx (looks like html)
// const Header: React.FC = () => { // React.FC is a datatype for functional components in React
//     return(                                   //static aligns the elements one after one
//         <AppBar color="transparent"  position="static" > 
//             <Toolbar>
//                 <img src={logo} alt="Logo" style={{ width: 30, marginRight:10}} />
//                 <p>EverNote</p>
//             </Toolbar>
//         </AppBar>
//     )
// }
// export default Header;


import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../constants/constant';

const Header: React.FC = () => {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <img src={logo} alt="Logo" style={{ width: 30, marginRight: 10 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EverNote
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
