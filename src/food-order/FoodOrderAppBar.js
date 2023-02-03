import React, { useState ,useEffect} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./FoodOrderStyles";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@mui/material/Menu";
import { styled,alpha } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box'
import LogIn from '../auth/LogIn'
import CircularProgress from '@mui/material/CircularProgress';

import {
  ButtonGroup,
  Button,
  Modal,
  
  Container,
  Grid,
  Card,
  CardContent,
  Icon,
  Avatar,
} from "@material-ui/core";
// useEffect(() => {
//   console.log();
//   if (!localStorage.getItem("AppBar")) navigate('/foodOrder') ;
  
// });

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const menu = styled(Box)(({ theme }) => ({
  display: "",
  alignItem: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const Icons=styled(Box)(({theme})=>(
  {
  
  
  display:'flex',

  [theme.breakpoints.up('sm')]:
  {
     display:'none'
  }
  }))
  

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const FoodOrderAppBar = ({
  children,
  FoodDetail,
  cartLength,
  placeOrderDetails,
}) => {

  // useEffect(() => {
  //   console.log();
  //   if (localStorage.setItem("AppBar")) ;
    
  // });
   const navigate = useNavigate();
  
  const [cartModal, setCartModal] = useState(false);
  const cartModalHandle = () => setCartModal(true);
  const [placeOrderModal, setPlaceOrderModal] = useState(false);
  const placeOrderhandler = () => setPlaceOrderModal(true);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const successHandler = () => setOrderSuccess(true);
  const [cartmodal, setCartMoadal] = useState(true);
  const classes = useStyles();
  const [err, setErr] = useState("");
  let [detail, setDetail] = useState([]);
  let [cartFoodPrice3, setCartFoodPrice3] = useState();
  const [foodName1, setFoodName] = useState("");
  let [cartfoodPrice, setCartFoodPrice] = useState();
  let [cartOrders, setCartOrders] = useState([]);
  const [cartfoodName, setCartFoodName] = useState("");
  const [placeOrder, setPlaceOrder] = useState([]);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
 
  localStorage.setItem("AppBar",true);
  console.log(cartLength, "l");
  const cartMOdalHandle = () => {
    setDetail(FoodDetail);
    console.log(detail);
    setCartModal(true);
  };
  const logOut = () => {
    // localStorage.removeItem("button1");
    // localStorage.removeItem("userButton2");
    // localStorage.removeItem("AdminButton");
    // localStorage.removeItem("books");
    
   
   navigate('/')
   
  };
  

  console.log();
  const CartModalCancel = () => {
    setCartModal(false);
  };
  const AvatarOpen = (e) => {
    setAvatarOpen(true);
    setAnchorEl(e.currentTarget);
  };
  const MenuOpen = (e) => {
    setMenuOpen(true);
    setAnchorEl(e.currentTarget);
  };
  const cartCounter = (cartfoodName, cartIns) => {
    let filtercartFoods = detail.filter((element, i) => {
      if (element.cartfoodName === cartfoodName) {
        if (element.count) {
          element.cartfoodPrice = element.cartfoodPrice + element.price;
          element.count = element.count + 1;
        }
        return {
          ...element,
          cartfoodPrice: element.cartfoodPrice,
          ...element.count,
        };
      } else {
        return element;
      }
      // return ele.cartfoodName === cartfoodName
    });
    setDetail(filtercartFoods);

    console.log("5");
  };

  const cartCounterReduce = (cartfoodName, cartIns) => {
    let filtercartFoods = detail.filter((element, i) => {
      if (element.cartfoodName === cartfoodName) {
        if (element.count > 1) {
          element.cartfoodPrice = element.cartfoodPrice - element.price;
          element.count = element.count - 1;
        }
        return {
          ...element,
          cartfoodPrice: element.cartfoodPrice,
          ...element.count,
        };
      } else {
        return element;
      }
    });
    setDetail(filtercartFoods);

    console.log("5");
  };
  cartFoodPrice3 = detail.map((item) => {
    return item.cartfoodPrice;
  });
  let cartFodss = cartFoodPrice3.reduce((total, value) => total + value, 0);
  const PlaceOrder = () => {
    let placeOrderDetails = {
      placeOrderName1: cartfoodName,
      placeOrderPrice1: cartfoodPrice,
    };
    cartLength = 0;
    setPlaceOrder([...detail]);
    console.log(detail, "place");
    setPlaceOrderModal(false);
    setCartModal(false);
    setOrderSuccess(true);
    setErr("your orders placed successfully");
  };
  const placeOrderCancel = () => {
    setPlaceOrderModal(false);
    setOrderSuccess(false);
  };
  const placeOrderBtn = () => {
    setPlaceOrderModal(true);
  };
const Details=()=>
{
  navigate("/admin");
}
  return (
    <div>
  
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="top"
          classes={{ paper: classes.drawerPaper }} >
            
          <AppBar>
            <Toolbar  className={classes.appBar}>
            <Typography> FoodCorner </Typography>
             <MenuIcon
                  className={classes.menu}
                  sx={{ display: { xs: "block", sm: "none", md: "none" } }}
                  onClick={MenuOpen}>
                  {" "}
                </MenuIcon>
                <Menu
                  id="demo-positioned-menu"
                  area-labelledby="demo-positioned-button"
                  open={menuOpen}
                  onClose={() => setMenuOpen(false)}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  anchorEl={anchorEl}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}>
                  <MenuItem onClick={cartMOdalHandle}>CART</MenuItem>
                  <MenuItem onClick={placeOrderBtn}>ORDERS</MenuItem>
                  <MenuItem>DETAILS</MenuItem>
                  
                  <MenuItem onClick={logOut}>LOG OUT</MenuItem>
                </Menu>
           
                 <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }} className={classes.ButtonGroup}>
                 <ButtonGroup    >
                    <Button   onClick={cartMOdalHandle}
                     >
                      <AddShoppingCartOutlinedIcon  />
                      cart{cartLength}
                    </Button>
                    <Button   onClick={placeOrderBtn}>
                      <CircleNotificationsIcon />
                      orders
                    </Button>
                    <Avatar onClick={AvatarOpen}>G</Avatar>
                  <Menu  
                    id="demo-positioned-menu"
                    area-labelledby="demo-positioned-button"
                    open={avatarOpen}
                    onClose={() => setAvatarOpen(false)}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                     
                    }}
                    anchorEl={anchorEl}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}>
                     
                    <MenuItem  onClick={Details}>DETAILS</MenuItem>
                    <MenuItem  onClick={logOut}>LOGOUT</MenuItem>
                    
                  </Menu>
                  </ButtonGroup >
                
                 </Box>
                  
                  
                
                  
                {/* <LogIn drawer={<Drawer/>? {display:'none'} :' '}/> */}
                
         
            {/* <MenuIcon
                  className={classes.menu}
                  sx={{ display: { xs: "block", sm: "none", md: "none" } }}
                  onClick={MenuOpen}>
                  {" "}
                </MenuIcon>
                <Menu
                  id="demo-positioned-menu"
                  area-labelledby="demo-positioned-button"
                  open={menuOpen}
                  onClose={() => setMenuOpen(false)}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  anchorEl={anchorEl}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}>
                  <MenuItem onClick={cartMOdalHandle}>CART</MenuItem>
                  <MenuItem onClick={placeOrderBtn}>ORDERS</MenuItem>
                  <MenuItem>DETAILS</MenuItem>
                  <MenuItem onClick={logOut}>LOG OUT</MenuItem>
                </Menu>
                <Toolbar   >
              <Typography> FoodCorner </Typography>
            
              
                <Toolbar className={classes.tools} >
              
                  <ButtonGroup >
                    <Button onClick={cartMOdalHandle}>
                      <AddShoppingCartOutlinedIcon />
                      cart{cartLength}
                    </Button>
                    <Button onClick={placeOrderBtn}>
                      <CircleNotificationsIcon />
                      orders
                    </Button>
                  </ButtonGroup>
                  <Avatar onClick={AvatarOpen}>G</Avatar>
                  <Menu
                    id="demo-positioned-menu"
                    area-labelledby="demo-positioned-button"
                    open={avatarOpen}
                    onClose={() => setAvatarOpen(false)}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                     
                    }}
                    anchorEl={anchorEl}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}>
                    <MenuItem onClick={Details}>DETAILS</MenuItem>
                    <MenuItem onClick={logOut}>LOGOUT</MenuItem>
                  </Menu>
                
                </Toolbar>
              
   

              </Toolbar>
              */}
            </Toolbar>
            
          </AppBar>
          <Modal open={cartModal} onClose={cartModalHandle}>
          <Box sx={style}>
            <Container className={classes.cardGrid2} maxWidth="md">
              <Card>
                {detail.map((food) => {
                  return (
                
                         <Container className={classes.cardGrid2} maxWidth="md">
                         <Grid container spacing={3}>
                        <Grid item xs={12} sm={10} md={8}>
                         
                          <Typography>{food.cartfoodName}</Typography>
                          <Typography>{food.cartfoodPrice}</Typography>

                          <ButtonGroup
                            variant="contained"
                            aria-label="outlined primary button group">
                            <Button
                              onClick={() => {
                                cartCounterReduce(food.cartfoodName);
                              }}>
                              -
                            </Button>
                            <Typography>{food.count}</Typography>
                            <Button
                              onClick={() => {
                                cartCounter(food.cartfoodName);
                              }}>
                              +
                            </Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                         </Container>
                     
                   
                  );
                })}
                <Typography>total{cartFodss}</Typography>
             <Box className={classes.carts}>
             <Button variant='outlined' onClick={PlaceOrder}>Place Order</Button>
                  <Button variant='outlined' onClick={CartModalCancel}>Cancel</Button>
             </Box>
                  
         
              </Card>
            </Container>
          </Box>
        </Modal>
        <Modal open={placeOrderModal} onClose={placeOrderhandler}>
          <Box sx={style}>
            <Container className={classes.cardGrid2} maxWidth="md">
              <Card>
                {placeOrder.map((food) => {
                  return (
                    <Box className={classes.type2}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={10} md={8}>
                          <Typography>{food.cartfoodName}</Typography>
                          <Typography>{food.cartfoodPrice}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })}
                <Typography>total{cartFodss}</Typography>
                <ButtonGroup>
                  <Button  onClick={placeOrderCancel}>OK</Button>
                </ButtonGroup>
              </Card>
            </Container>
          </Box>
        </Modal>
        <Modal open={orderSuccess} onClose={successHandler}>
          <Box sx={style}>
            <Container className={classes.cardGrid2} maxWidth="md">
              <Card>
                <Box className={classes.type2}>
                  <Typography>YOUR ORDER PLACED SUCCESSFULLY...</Typography>
                </Box>

                <ButtonGroup>
                  <Button className={classes.ok} onClick={placeOrderCancel}>OK</Button>
                </ButtonGroup>
              </Card>
            </Container>
          </Box>
        </Modal>
        </Drawer>

       
        <div>{children}</div>
    
    </div>
  );
};
export default FoodOrderAppBar;
