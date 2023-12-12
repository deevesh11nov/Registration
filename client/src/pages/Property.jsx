import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Property = () => {
  const [showForm, setShowForm] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const Navigate = useNavigate();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const [formData, setFormData] = useState({
    propertyType: "",
    propertyName: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  useEffect(() => {
    const isFormValid = Object.values(formData).every((val) => val !== "");
    setFormCompleted(isFormValid);
  }, [formData]);

  const handleInventory = () => {
    Navigate("/inventory");
  };
  const handleComplete = () => {
    Navigate("/");
  };

  return (
    <div
      className="container mt-5"
      style={{ maxWidth: "800px", paddingBottom: "15px" }}
    >
      <div className="row">
        <div
          className="navbar"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <span>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h2 style={{ color: "black" }}>&larr;</h2>
            </Link>
          </span>
          <h1 style={{ margin: "0", color: "#374151" }}>Property Setup</h1>
          <span style={{ visibility: "hidden" }}>&larr;</span>
        </div>
      </div>
      <br />
      <div
        className="w-100"
        style={{
          height: "250px",
          backgroundColor: "#FFE9F6",
          borderRadius: "10px",
          color: "#E7319D",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h6> Display Icon</h6>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-6 bg-pink" style={{ height: "50px" }}></div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-6 w-100">
          <hr />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-6 d-flex align-items-center justify-content-between w-100">
          <div style={{ color: "#9CA3AF" }}>BUSINESS INFORMATION</div>
          <div>
            <button
              onClick={toggleForm}
              className="btn btn-link"
              style={{ color: "black", textDecoration: "none" }}
            >
              &#9660;
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="row justify-content-center mt-3">
          <div className="col-6 w-100">
            <form>
              <div className="mb-3">
                <label htmlFor="propertyType">
                  <h6>Property Type</h6>
                </label>
                <select
                  id="propertyType"
                  className="form-select"
                  onChange={handleInputChange}
                >
                  <option value="">Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Raw land</option>
                  <option>Industrial</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="propertyName">
                  <h6>Property name</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="propertyName"
                  placeholder="Property name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber">
                  <h6>Phone Number</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Phone number"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailAddress">
                  <h6>Email Address</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="emailAddress"
                  placeholder="Email Address"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">
                  <h6>Address</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="state">
                  <h6>State</h6>
                </label>
                <select
                  id="state"
                  className="form-select"
                  onChange={handleInputChange}
                >
                  {/* Add options for states */}
                  <option selected>States</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Jammu and Kashmir</option>
                  <option>Ladakh</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="city">
                  <h6>City</h6>
                </label>
                <select
                  id="city"
                  className="form-select"
                  onChange={handleInputChange}
                >
                  {/* Add options for cities */}
                  <option selected>City</option>

                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Ahmedabad</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Surat</option>
                  <option>Pune</option>
                  <option>Jaipur</option>
                  <option>Lucknow</option>
                  <option>Kanpur</option>
                  <option>Nagpur</option>
                  <option>Visakhapatnam</option>
                  <option>Indore</option>
                  <option>Thane</option>
                  <option>Bhopal</option>
                  <option>Patna</option>
                  <option>Vadodara</option>
                  <option>Ghaziabad</option>
                  <option>Ludhiana</option>
                  <option>Agra</option>
                  <option>Nashik</option>
                  <option>Faridabad</option>
                  <option>Meerut</option>
                  <option>Rajkot</option>
                  <option>Kalyan-Dombivali</option>
                  <option>Vasai-Virar</option>
                  <option>Varanasi</option>
                  <option>Srinagar</option>
                  <option>Aurangabad</option>
                  <option>Dhanbad</option>
                  <option>Amritsar</option>
                  <option>Navi Mumbai</option>
                  <option>Allahabad</option>
                  <option>Ranchi</option>
                  <option>Howrah</option>
                  <option>Cuttack</option>
                  <option>Mysore</option>
                  <option>Thiruvananthapuram</option>
                  <option>Bikaner</option>
                  <option>Gurgaon</option>
                  <option>Jammu</option>
                  <option>Salem</option>
                  <option>Warangal</option>
                  <option>Raipur</option>
                  <option>Shimla</option>
                  <option>Gulbarga</option>
                  <option>Bhilai</option>
                  <option>Jamshedpur</option>
                  <option>Ujjain</option>
                  <option>Kolhapur</option>
                  <option>Kurnool</option>
                  <option>Udaipur</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="pincode">
                  <h6>Pincode</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  placeholder="e.g. 22011"
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="col-6 w-100">
        <hr />
      </div>
      <button
        className="add-inventory-btn"
        onClick={handleInventory}
        style={{
          color: "#2FA551",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "8px 15px",
          border: "1px solid #2FA551",
          borderRadius: "25px",
          backgroundColor: "#f0f0f0",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        <span
          className="circle-plus"
          style={{
            color: "#2FA551",
            fontSize: "24px",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            border: "1px solid #2FA551",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F9FAFB",
            paddingTop: "1px",
          }}
        >
          &#43;
        </span>{" "}
        Inventory
      </button>
      <div className="row justify-content-center mt-4 w-100">
        <div className="col-6 text-center w-100 ">
          <button
            onClick={formCompleted ? handleComplete : null}
            className="btn btn-primary w-100"
            style={{
              backgroundColor: formCompleted ? "#2FA551" : "#E5E7EB",
              border: "none",
              color: formCompleted ? "#FFFFFF" : "",
            }}
          >
            Complete your setup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
