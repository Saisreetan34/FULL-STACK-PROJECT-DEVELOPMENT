
import React, { useState } from "react";
import { addElectricVehicle } from "../services/ElectricVehicleService";

function ElectricVehicleForm({ onAdded }) {
  const [form, setForm] = useState({
    modelName: "",
    manufacturer: "",
    rangeKm: "",
    price: ""
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.modelName.trim()) {
      newErrors.modelName = "Model name is required.";
    } else if (form.modelName.trim().length < 2) {
      newErrors.modelName = "Model name must contain at least 2 characters.";
    } else if (form.modelName.trim().length > 50) {
      newErrors.modelName = "Model name must not exceed 50 characters.";
    }

    if (!form.manufacturer.trim()) {
      newErrors.manufacturer = "Manufacturer is required.";
    } else if (form.manufacturer.trim().length < 2) {
      newErrors.manufacturer =
        "Manufacturer must contain at least 2 characters.";
    } else if (form.manufacturer.trim().length > 50) {
      newErrors.manufacturer =
        "Manufacturer must not exceed 50 characters.";
    }

    if (!form.rangeKm) {
      newErrors.rangeKm = "Range is required.";
    } else if (Number(form.rangeKm) <= 0) {
      newErrors.rangeKm = "Range must be greater than 0.";
    } else if (Number(form.rangeKm) > 2000) {
      newErrors.rangeKm = "Range must not exceed 2000 Km.";
    }

    if (!form.price) {
      newErrors.price = "Price is required.";
    } else if (Number(form.price) <= 0) {
      newErrors.price = "Price must be greater than 0.";
    } else if (Number(form.price) > 100000000) {
      newErrors.price = "Price must not exceed ₹10 crore.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);

      await addElectricVehicle({
        modelName: form.modelName.trim(),
        manufacturer: form.manufacturer.trim(),
        rangeKm: Number(form.rangeKm),
        price: Number(form.price)
      });

      setMessage("Electric vehicle added successfully.");
      setMessageType("success");

      setForm({
        modelName: "",
        manufacturer: "",
        rangeKm: "",
        price: ""
      });

      setErrors({});

      onAdded();
    } catch (error) {
      console.error(error);

      setMessage(
        "Unable to add electric vehicle. Please check the backend connection."
      );

      setMessageType("danger");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow-sm border-0 mb-4">

      <div className="card-header bg-primary text-white py-3">
        <h4 className="mb-0">Add Electric Vehicle</h4>
        <small>Enter the vehicle details below</small>
      </div>

      <div className="card-body p-4">

        {message && (
          <div className={`alert alert-${messageType}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Model Name
              </label>

              <input
                type="text"
                name="modelName"
                className={`form-control ${
                  errors.modelName ? "is-invalid" : ""
                }`}
                placeholder="Example: Nexon EV"
                value={form.modelName}
                onChange={handleChange}
                maxLength="50"
              />

              {errors.modelName && (
                <div className="invalid-feedback">
                  {errors.modelName}
                </div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Manufacturer
              </label>

              <input
                type="text"
                name="manufacturer"
                className={`form-control ${
                  errors.manufacturer ? "is-invalid" : ""
                }`}
                placeholder="Example: Tata"
                value={form.manufacturer}
                onChange={handleChange}
                maxLength="50"
              />

              {errors.manufacturer && (
                <div className="invalid-feedback">
                  {errors.manufacturer}
                </div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Range (Km)
              </label>

              <input
                type="number"
                name="rangeKm"
                className={`form-control ${
                  errors.rangeKm ? "is-invalid" : ""
                }`}
                placeholder="Example: 465"
                value={form.rangeKm}
                onChange={handleChange}
                min="1"
                max="2000"
              />

              {errors.rangeKm && (
                <div className="invalid-feedback">
                  {errors.rangeKm}
                </div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Price (₹)
              </label>

              <input
                type="number"
                name="price"
                className={`form-control ${
                  errors.price ? "is-invalid" : ""
                }`}
                placeholder="Example: 1499000"
                value={form.price}
                onChange={handleChange}
                min="1"
                max="100000000"
              />

              {errors.price && (
                <div className="invalid-feedback">
                  {errors.price}
                </div>
              )}
            </div>

          </div>

          <button
            type="submit"
            className="btn btn-success px-4"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Adding...
              </>
            ) : (
              "Add Vehicle"
            )}
          </button>

        </form>
      </div>
    </div>
  );
}

export default ElectricVehicleForm;