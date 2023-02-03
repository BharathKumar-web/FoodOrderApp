import React from "react";
const Handle=(props)=>
{
    const Update=(e)=>
    {
        props.updateBook(e)
        props.modalE()
    }
    return props.books.map(book=>(
        <tr key={book.auth}>
        <td>{book.auth}</td>
        <td>{book.title}</td>
        <td>{book.name}</td>
        <td>{book.empid}</td>
        <td onClick={()=>props.deleteBook(book.auth)}>
        <i className="fa fa-trash-o"></i> </td>
        <td onClick={()=>Update(book.auth)}>
        <i className="fa fa-edit" ></i>
        </td>

      
       
      
        </tr>
    ))
    }
export default Handle