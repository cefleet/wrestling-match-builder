import {FlexBox} from "../components/FlexBox";
import {Box} from "../components/Box";
import {Button} from "../components/Button";

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

function HButton({children, ...props}){
  return <Button style={styleClasses.button} {...props}>{children}</Button>
}

function Header({}){
  const {header, links} = styleClasses;
  return (
    <Box style={header}>
      <h1>Wrestling Wrastler</h1>
      <FlexBox style={links}>
        <FlexBox>
          <HButton>Team</HButton>
          <HButton>League</HButton>
          <HButton>Matches</HButton>
          <HButton>Tournements</HButton>
        </FlexBox>
        <FlexBox>
            <HButton>My Account</HButton>
            <HButton>Generate Data</HButton>
        </FlexBox>
      </FlexBox>
    </Box>
  )
}
export default Header;