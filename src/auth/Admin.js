import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Admin.module.css";
import Handle from "./Handle";
import FoodOrderAppBar from "../food-order/FoodOrderAppBar";


const Admin = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log();
  //   if (!localStorage.getItem("AdminButton")) navigate("/");
  //   localStorage.removeItem("button1");
  //   localStorage.removeItem("userButton2");
  // });
  const [books, setBooks] = useState(
    localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : []
  );

  const [edit, editDetail] = useState("");
  const [update, setUpdate] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("ACTIVE");
  const [auth, setAuth] = useState("");
  const [updateAuth, setUpdateAuth] = useState(update[0] ? update[0].auth : "");
  const [empid, setEmpId] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [addr, setAdd] = useState("");
  const [err, setErr] = useState("");
  const [modal, setModa] = useState();
  const [modalEdit, setModaEdit] = useState();
  const [Edit, setEdit] = useState();
  const [Del, setDel] = useState();

  const handleAddBooks = (e) => {
    e.preventDefault();
    const newdata = localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [];
    let book = {
      name,
      title,
      auth,
      empid,
      addr,
      status,
      id: Math.random() * 30,
    };
    if (auth.trim().length === 0) {
      setErr("*please enter all fields");
    } else if (title.trim().length === 0) {
      setErr("*please enter all fields");
    } else if (title.trim().length === 0) {
      setErr("*please enter all fields");
    } else if (empid.trim().length === 0) {
      setErr("*please enter all fields");
    } else {
      newdata.push(book);
      localStorage.setItem("books", JSON.stringify(newdata));
      setBooks(
        localStorage.getItem("books")
          ? JSON.parse(localStorage.getItem("books"))
          : []
      );
      console.log(books);
      console.log(books, "books");
      setTitle("");
      setName("");
      setEmpId("");
      setStatus("");
      setAdd("");
      setAuth("");
      setModa(false);
    }
  };
  const handleNewAddBooks = (e) => {
    e.preventDefault();
    let book = {
      name,
      title,
      auth,
      empid,
      addr,
      status,
      id: id,
    };

    console.log(book);
    const NewDetail = books.map((ele) => {
      console.log(ele.id, book);
      if (ele.id === book.id) {
        return (ele = book);
      } else {
        return ele;
      }
    });
    console.log(NewDetail);

    setTitle("");
    setName("");
    setEmpId("");
    setStatus("");
    setAdd("");
    setAuth("");
    setBooks(NewDetail);
    setModa(false);
    setModaEdit(false);
  };

  const Modal = () => {
    setModa(true);
    setModaEdit(false);
  };
  const EditModal = () => {
    setModaEdit(true);

    setModa(true);
  };

  const deleteBook = (auth) => {
    const filterBooks = books.filter((el, index) => {
      return el.auth !== auth;
    });
    setBooks(filterBooks);
  };
  const updateBook = (auth) => {
    console.log(auth);
    const filterUpdate = books.filter((el, index) => {
      console.log(el, auth);
      return el.auth === auth;
    });

    //  update.push (filterUpdate)
    setAuth(filterUpdate[0].auth);
    setEmpId(filterUpdate[0].empid);
    setTitle(filterUpdate[0].title);
    setName(filterUpdate[0].name);
    setId(filterUpdate[0].id);
    setAdd(filterUpdate[0].addr);
    setStatus(filterUpdate[0].status);
  };
  useEffect(() => {
   
    setBooks(
      localStorage.getItem("books")
        ? JSON.parse(localStorage.getItem("books"))
        : []
    );
    
  }, []);

  const logOut = () => {
    // localStorage.removeItem("button1");
    // localStorage.removeItem("userButton2");
    // localStorage.removeItem("AdminButton");
    // localStorage.removeItem("books");
    // navigate("/");
   
  };

  return (
   
    <div className={classes.btnDiv} >
     
      <button className={classes.addbtn} onClick={Modal}>
        ADDNEW
      </button>

      {modal && (
        <form onSubmit={handleAddBooks}>
          <div className={classes.inputdetails}>
            <input
              type="text"
              value={auth ? auth : ""}
              placeholder="EMPLOYEE NAME"
              onChange={(e) => {
                setAuth(e.target.value);
              }}></input>
            <br></br>
            <input
              type="number"
              value={title ? title : ""}
              placeholder="EMPLOYEE PHNO"
              onChange={(e) => {
                setTitle(e.target.value);
              }}></input>
            <br></br>

            <input
              type="text"
              value={name ? name : "ACTIVE"}
              placeholder="STATUS"
              onChange={(e) => {
                setName(e.target.value);
              }}></input>
            <input
              type="text"
              value={empid ? empid : ""}
              placeholder="EMPLOYEE ID"
              onChange={(e) => {
                setEmpId(e.target.value);
              }}></input>
            <input
              type="text"
              value={addr ? addr : ""}
              placeholder="ADDRESS"
              onChange={(e) => {
                setAdd(e.target.value);
              }}></input>
            <br></br>

            <div className={classes.errMsg}>{err}</div>
            {modalEdit ? (
              <button
                className={classes.userAddBtn}
                onClick={handleNewAddBooks}>
                Edit
              </button>
            ) : (
              <button className={classes.userAddBtn} onClick={handleAddBooks}>
                Add
              </button>
            )}
          </div>
        </form>
      )}
      {books.length > 0 && (
        <table className={classes.table1}>
          <thead>
            <th>NAME</th>
            <th>PHNO</th>
            <th>STATUS</th>
            <th>EMPID</th>
            <th>DEL</th>
            <th>UPDATE</th>
          </thead>
          <tbody>
            <Handle
              books={books}
              deleteBook={deleteBook}
              updateBook={updateBook}
              modalE={EditModal}
            />
          </tbody>
        </table>
      )}
      {books.length < 1 && (
        <div className={classes.noEmp}> No Employees Added</div>
      )}
    </div>
  );
};
export default Admin;