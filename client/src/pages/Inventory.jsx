import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const Navigate = useNavigate();

  const handleCancle = () => {
    Navigate("/property");
  };
  const handleSave = () => {
    Navigate("/property");
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ maxWidth: "630px", paddingBottom: "15px" }}
    >
      <div className="col-md-6 w-100 ">
        <br />
        <h1 className="text-center">Inventory</h1>
        <br />
        <form>
          {/* ... Form fields  ... */}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              <h6>Property Space Name</h6>
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              style={{ borderColor: "#999999" }}
              placeholder="Dormitory-201"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="propertyType">
              <h6>Property Inventory Type</h6>
            </label>
            <select
              id="inputState"
              class="form-select"
              style={{ borderColor: "#999999" }}
            >
              <option selected>Others</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Raw land</option>
              <option>Industrial</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <h6>Other Property Inventory Type</h6>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              style={{ borderColor: "#999999" }}
              placeholder="Add Property Inventory Type"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <h6>Capacity</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              style={{ borderColor: "#999999" }}
              placeholder="Number of occupants"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label ">
              <h6>Amenities</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              style={{ borderColor: "#999999" }}
              name="confirmPassword"
              placeholder="Available amenities"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="propertyType">
              <h6>Availability Status</h6>
            </label>
            <select
              id="inputState"
              class="form-select"
              style={{ borderColor: "#999999" }}
            >
              <option selected>Active</option>
              <option>Non Active</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label ">
              <h6>Note(if any)</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              style={{ borderColor: "#999999" }}
              name="confirmPassword"
              placeholder="Add notes if any"
              required
            />
          </div>
          <button
            onClick={handleCancle}
            type="submit"
            className="btn btn-primary d-block mx-auto w-100"
            style={{
              backgroundColor: "#F9FAFB",
              border: "1px solid #2FA551",
              color: "#2FA551",
            }}
          >
            Cancel
          </button>
          <br />

          <button
            onClick={handleSave}
            type="submit"
            className="btn btn-primary d-block mx-auto w-100"
            style={{ backgroundColor: "#2FA551", border: "none" }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
