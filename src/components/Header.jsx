import {Grid, Button} from "@mui/material";
// import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}>
      <Grid item md={2}>
        <img src={Logo} style={{width: "131px", height: "38px"}} />
      </Grid>
      <Grid item display='flex' justifyContent={"space-between"} md={6}>
        <Button
          sx={{
            textDecoration: "none",
            color: "#29294b",
            background: "inherit",
            alignContent: "center",
            alignItems: "center",
          }}>
          <ExpandMoreIcon />
          HomePages
        </Button>
        <Button
          sx={{
            textDecoration: "none",
            color: "#29294b",
            background: "inherit",
            alignContent: "center",
            alignItems: "center",
          }}>
          <ExpandMoreIcon />
          Featurs
        </Button>
        <Button
          sx={{
            textDecoration: "none",
            color: "#29294b",
            background: "inherit",
          }}>
          About
        </Button>
        <Button
          sx={{
            textDecoration: "none",
            color: "#29294b",
            background: "inherit",
          }}>
          Contacts
        </Button>
      </Grid>
      <Grid item display='flex' justifyContent={"space-evenly"} md={4}>
        <Button variant='text' color='default'>
          search
        </Button>
        <Button>Dark/Light</Button>
        <Button variant='text' color='default'>
          Buy Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
