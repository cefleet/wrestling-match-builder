import {FlexBox} from "../components/FlexBox";
import {Box} from "../components/Box";
import {Button} from "../components/Button";
import {RiUser3Fill, RiSettings5Fill} from "react-icons/ri"
import { Link } from "react-router-dom";
const styleClasses = {
  header:{
    padding:'0.25rem 0 1rem 0'
  },
  button:{
    margin:'0 .5rem'
  },
  icon:{
    margin:'0 .5rem',
    padding:'0.25rem 1rem'
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

function IHButton({children, to, ...props}){
  return <Link to={to}><Button style={styleClasses.icon} {...props}>{children}</Button></Link>
}

function Header({}){
  const {header, links} = styleClasses;
  return (
    <Box style={header}>
      <Link to='/'><h1>Wrestling Wrastler</h1></Link>
      <FlexBox style={links}>
        <FlexBox>
          <HButton to='/team'>My Team</HButton>
          <HButton to='/league'>League</HButton>
          <HButton to='/matches'>Matches</HButton>
          <HButton to='/tournements'>Tournements</HButton>
        </FlexBox>
        <FlexBox>
          <IHButton to='/account'><RiUser3Fill size={'2.55rem'}  /></IHButton >
          <IHButton to='/settings'><RiSettings5Fill size={'2.55rem'}  /></IHButton >
        </FlexBox>
      </FlexBox>
    </Box>
  )
}
export default Header;