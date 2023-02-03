import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Card,
  CardAction,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  ButtonGroup,
  Box,
  Modal,
} from "@material-ui/core";
import FoodOrderStyles from "./FoodOrderStyles";
import useStyles from "./FoodOrderStyles";
import { styled, alpha } from "@mui/material/styles";

import FoodOrderAppBar from "./FoodOrderAppBar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

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
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


const FoodOrder = () => {
  const [foodName1, setFoodName] = useState("");
  const [Price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  let [total, setTotal] = useState(Price);
  const [updateModal, setUpdateModal] = useState(false);
  const [details, setDetails] = useState([]);
  const [id, setId] = useState();
  let [cartFoodPrice3, setCartFoodPrice3] = useState();
  const [open, setOpen] = useState(false);
  const [cartfoodName, setCartFoodName] = useState("");
  const handleClose = () => setOpen(false);
  let [cartfoodPrice, setCartFoodPrice] = useState();
  const [cartModal, setCartModal] = useState(false);
  const handlecartClose = () => setCartModal(false);
  const [modal, setModal] = useState();
  const [searchdetail, setSearchDetail] = useState("");
  var [count, setCount] = useState(1);
  const [err, setErr] = useState("");
  const [serachedFoods, setSearhedFoods] = useState([]);
  const classes = useStyles();


  let foods = [
    {
      id: 1,
      foodName: "biriyani",
      src: " https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/03/19/biriyani.jpg",
      price: 120,
    },
    {
      id: 2,
      foodName: "idly",
      src: " https://thumbs.dreamstime.com/b/idli-sambar-indian-food-36638188.jpg",
      price: 10,
    },
    {
      id: 3,
      foodName: "parrota",
      src: "https://img-global.cpcdn.com/recipes/c05528ae66f0dfc0/1200x630cq70/photo.jpg ",
      price: 20,
    },
    {
      id: 4,
      foodName: "pizza",
      src: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900 ",
      price: 200,
    },
    {
      id: 5,
      foodName: "meals",
      src: "https://b.zmtcdn.com/data/pictures/1/19243401/593ad363d99fc8acc77f69734e21df14.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,* ",
      price: 120,
    },
    {
      id: 6,
      foodName: "chappathi",
      src: "https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900",
      price: 120,
    },
  ];


  const update = (id) => {
    setCount(1);
    const filterFoods = foods.filter((el) => {
      return el.id === id;
    });


    setFoodName(filterFoods[0].foodName);
    setPrice(filterFoods[0].price);
    setDescription(filterFoods[0].src);
    setTotal(filterFoods[0].price);
    setOpen(true);
  };


  let Orders;
  let updatePrice;
  const Add = () => {
    Orders = ++count;
    updatePrice = count * Price;
    setTotal(updatePrice);
    setCount(Orders);
  };
  console.log(total);


  const decrease = () => {
    if (count > 1) {
      Orders = --count;
      updatePrice = count * Price;
      setCount(Orders);
      setTotal(updatePrice);
    } else {
    }
  };


  let FoodDetail;
  let totalPrice;
  const cart = () => {
    FoodDetail = {
      cartfoodName: foodName1,
      cartfoodPrice: total,
      cartfoodimg: description,
      cartCount: count,
      count: count,
      id: id,
      cartFoodPrice3: cartFoodPrice3,
      price: total / count,
    };

    setUpdateModal(false);
    setOpen(false);
    setDetails([...details, FoodDetail]);
  };

  const cartCancel = () => {
    setOpen(false);
  };

  const cartCounterReduce = (cartfoodName, cartIns) => {
    let filtercartFoods = details.filter((element, i) => {
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
      // return ele.cartfoodName === cartfoodName
    });

    setDetails(filtercartFoods);
    // setId(filtercartFoods[0].id);
    // setCartCount(filtercartFoods[0].cartCount++);
    // setCartFoodPrice(filtercartFoods[0].cartfoodPrice);
    // setCount(filtercartFoods[0].count);

    // setCartFoodPrice3(filtercartFoods[0].cartFoodPrice)
    console.log("5");
  };

  const cartCounter = (cartfoodName, cartIns) => {
    let filtercartFoods = details.filter((element, i) => {
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

    setDetails(filtercartFoods);
    // setId(filtercartFoods[0].id);
    // setCartCount(filtercartFoods[0].cartCount++);
    // setCartFoodPrice(filtercartFoods[0].cartfoodPrice);
    // setCount(filtercartFoods[0].count);

    // setCartFoodPrice3(filtercartFoods[0].cartFoodPrice)
    console.log("5");
  };
  let cartLength = details.length;
  cartFoodPrice3 = details.map((item) => {
    return item.cartfoodPrice;
  });
  let cartFodss = cartFoodPrice3.reduce((total, value) => total + value, 0);

  let foodsa;
  const SearchDetail = (e) => {
    setSearchDetail(e.target.value);

    foodsa = foods.filter((el) => {
      if (searchdetail.includes(searchdetail)) {
        return el.foodName.includes(searchdetail);
      } else {
        setErr("Try another keywords");
        return err;
      }
    });

    setSearhedFoods(foodsa);
  };

  return (
    <div>
      <FoodOrderAppBar
        FoodDetail={details}
        cartCounter={cartCounter}
        cartCountReduce={cartCounterReduce}
        cartLength={cartLength}
        cartTotal={cartFodss}
      />

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box className={classes.cartModalParent}>
            <Box className={classes.updateFoods}>
              <Container className={classes.cardGrid2} maxWidth="md">
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card1}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={description}
                      />
                      <CardContent className={classes.cardContent} />
                      <Box className={classes.type}>
                        <Typography gutterBottom> {foodName1}</Typography>
                        <Typography> Price:{total}</Typography>
                      </Box>
                      <Box className={classes.increese}>
                        <Button
                          className={classes.decrement}
                          variant="outlined"
                          onClick={decrease}>
                          -
                        </Button>
                        <Typography>{count}</Typography>
                        <Button
                          className={classes.increment}
                          variant="outlined"
                          onClick={Add}>
                          +
                        </Button>
                      </Box>
                      <Box className={classes.carts}>
                        <Button
                          className={classes.add}
                          variant="outlined"
                          onClick={cart}>
                          Add cart
                        </Button>
                        <Button
                          className={classes.cancel}
                          variant="outlined"
                          onClick={cartCancel}>
                          Cancel
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Container className={classes.cardGrid} maxWidth="md">
        <Search sx={{ marginTop: "20px" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={SearchDetail}
          />
        </Search>

        <Grid container spacing={4}>
          {" "}
          {serachedFoods.map((card) => {
            return (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.src}
                    title="image"
                  />

                  <Typography gutterBottom>{card.foodName}</Typography>
                  <Typography>{card.price}</Typography>
                </Card>{" "}
              </Grid>
            );
          })}
        </Grid>
        <Grid container spacing={4}>
          {" "}
          {foods.map((card) => {
            return (
              <Grid
                onClick={() => {
                  update(card.id);
                }}
                item
                key={card}
                xs={12}
                sm={6}
                md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.src}
                    title="image"
                  />

                  <Typography gutterBottom>{card.foodName}</Typography>
                  <Typography>{card.price}</Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
export default FoodOrder;
