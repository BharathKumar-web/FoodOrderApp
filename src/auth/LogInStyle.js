import { makeStyles } from "@material-ui/core/styles";
/* body {
    background-color: white;
   
  }
  .main {
    border: 1px solid white;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 10%;
    box-shadow: 10px 10px 5px lightblue;
  }
  .btn {
    color: white;
    background-color: rgb(20, 180, 10);
    padding: 1%;
    border: none;
    margin-bottom: 2%;
    border:none;
    border-radius:2%;
  }
  input {
    width: 50%;
    padding: 2%;
    margin-left: 12%;
    margin-bottom: 2%;
  }
  .heading {
    color: rgb(20, 180, 10);
    text-align: center;
    margin-bottom: 6%;
    font-size: larger;
    
  }
  .btn {
    width: 50%;
    margin-left: 23%;
    margin-bottom: 7%;
    font-size: large;
  }
  .link {
    text-decoration: none;
    color: white;
  }
  .errMsg {
    color: red;
    margin-left: 25%;
    margin-top: 2%;
    margin-bottom: 2%;
  } */
  const useStyles = makeStyles((theme) => ({
    main: {
      border: '1px White',
      width: '50%',
      marginLeft: '25%',
      marginRight: '25%',
      marginTop: "10%",
      boxShadow: '10px 10px 5px lightblue'
      
      
    },
    box:
    {
      marginTop:'10%',
      marginLeft:'25%',
      
    },
    
    btn: {
      color: 'white',
      backgroundCcolor: 'rgb(20, 180, 10)',
      padding: '1%',
      border:  'none',
      marginTop: '2%',
      border:"none",
      borderRadius:'2%',
      
    },
    input: {
      width: '50%',
      padding: '2%',
      marginLeft:'12%',
      marginBottom: '4%'
    },
    heading: {
      color: 'rgb(20, 180, 10)',
      textAlign: 'center',
      marginBottom:'6%',
      fontSize: 'larger'
      
    },
    btn: {
      width: '50%',
      marginLeft: '23%',
      marginBottom:'7%',
      fontSize: 'large'
    },
    link: {
      textDecoration: 'none',
      color: 'white'
    },
    errMsg: {
      color: 'red',
      marginLeft:'25%',
      marginTop:'2%',
      marginBottom: '2%'
    } 
   
  }));
  export default useStyles