import React from "react";
import "./admin_update_book.css"; // Import the external CSS file

const Admin_update_book = () => {
  return (
    <>

      <div className="main_container_form">
        <h1>UPDATE BOOK</h1>
        <form >
          <label htmlFor="fname">BOOK NAME</label>
          <input type="text" id="fname" name="firstname" placeholder="BOOK NAME" />

          <label htmlFor="lname">AUTHOR NAME</label>
          <input type="text" id="lname"  placeholder="AUTHOR NAME" />

            
          <label htmlFor="lname">GENRE</label>
          <input type="text" id="lname"  placeholder="GENRE" />

          <label htmlFor="lname">BOOK PRICE</label>
          <input type="text" id="lname" placeholder="BOOK PRICE" />

          <label htmlFor="lname">QUANTITY</label>
          <input type="text" id="lname"  placeholder="QUANTITY" />

          {/* //file upload */}
          <input type="file" className="myFile" name="filename"/>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Admin_update_book ;
