import React from "react";

function Footer() {
  const styles = {
    // display: "grid",
    // gridTemplateColumns: "repeat(4,1fr)",
    display:"flex",
    flexWrap:"wrap",
    padding: "20px 20px",
    backgroundColor: "black",
    color: "white",
    gap:"12%",
  }
  return (
    <div style={styles}>
      <div>
        <h2>Our Services</h2>
        <ul type="none">
          <li>Products</li>
          <li>Accessories</li>
          <li>Electronics</li>
        </ul>
      </div>

      <div>
        <h2>Locations</h2>
        <ul type="none">
          <li>Hyderabad</li>
          <li>Bangalore</li>
          <li>Visakhapatnam</li>
        </ul>
      </div>

      <div>
        <h2>Our Services</h2>
        <ul type="none">
          <li>facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>

      <div>
        <h2>Collaboration</h2>
        <ul type="none">
          <li>Adaequare</li>
          <li>Taxila</li>
          <li>Udhyog</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
