import {FlexBox} from "../components/FlexBox";
import {Box} from "../components/Box";
import {Button} from "../components/Button";
import { Link } from "react-router-dom";
const styleClasses = {
  header:{
    padding:'0.25rem 0 1rem 1rem'
  },
  button:{
    margin:'0 1rem'
  },
  links:{
    borderBottom:"1px solid",
    paddingBottom:'1rem',
    justifyContent:"space-between"
  },
  backLinks: {
    justifyContent:'flex-end'
  }
};

function HButton({children, to, ...props}){
  return <Link to={to}><Button style={styleClasses.button} {...props}>{children}</Button></Link>
}

function Header({}){
  const {header, links} = styleClasses;
  return (
    <Box style={header}>
      <Link to='/'><h1>Wrestling Wrastler</h1></Link>
      <FlexBox style={links}>
        <FlexBox>
          <HButton to='/team'>Team</HButton>
          <HButton to='/league'>League</HButton>
          <HButton to='/matches'>Matches</HButton>
          <HButton to='/tournements'>Tournements</HButton>
        </FlexBox>
        <FlexBox>
            <HButton to='/account'>My Account</HButton>
            <HButton to='/generate'>Generate Data</HButton>
        </FlexBox>
      </FlexBox>
    </Box>
  )
}
export default Header;