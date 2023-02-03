import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "brown",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
    marginTop: "5%",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "7%",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
  tpenam: {
    marginLeft: theme.spacing(10),
  },
  drawer: {
    width: drawerWidth,
  },

  drawerPaper: {
    width: drawerWidth,
  },

  type: {
    display: "flex",
    justifyContent:'space-between'
  },
  items: {
    marginLeft: "60%",
  },
  updateFoods: {
    padding: "2%",
    borderRadius: "10px",
  },
  cartModalParent: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    zIndex: "100%",
  },
  cardGrid1: {
    padding: "20px 0",
    marginTop: "5%",
  },

  card1: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  btnGroup: {
    marginLeft: "70%",
  },
  type2: {
    display: "flex",
    padding:'10px'
  },
  cardGrid2: {
    marginTop: "8%",
   
  },
  ok:
  {
    display:'flex',
   marginLeft:'160px'
  },
  

  
  carts:
  {
    display:'flex',
    justifyContent:'space-between',
    marginTop:'5px'
   
  },
  
 btn:
 {
   marginBottom:'2%'
 },
  increese:
  {
    display:'flex',
    justifyContent:'space-between',
  },
  
  
}));
export default useStyles;
