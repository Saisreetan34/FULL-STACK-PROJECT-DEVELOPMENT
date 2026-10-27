import React, { useEffect, useState } from "react";
import {
  getElectricVehicles,
  deleteElectricVehicle
} from "../services/ElectricVehicleService";

function ElectricVehicleList({ refresh }) {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const loadVehicles = async () => {
    try {
      setLoading(true);
      setMessage("");

      const response = await getElectricVehicles();

      setVehicles(response.data);
    } catch (error) {
      console.error(error);

      setMessage(
        "Unable to connect to the server. Please make sure the Spring Boot backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVehicles();
  }, [refresh]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this electric vehicle?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeletingId(id);
      setMessage("");

      await deleteElectricVehicle(id);

      setMessage("Electric vehicle deleted successfully.");

      await loadVehicles();
    } catch (error) {
      console.error(error);

      setMessage("Unable to delete electric vehicle.");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="card shadow-sm border-0">
        <div className="card-body text-center py-5">

          <div className="spinner-border text-primary mb-3"></div>

          <h5>Loading electric vehicles...</h5>

          <p className="text-muted mb-0">
            Please wait while we retrieve the records.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm border-0">

      <div className="card-header bg-dark text-white py-3">
        <h4 className="mb-0">Electric Vehicle Records</h4>
      </div>

      <div className="card-body p-4">

        {message && (
          <div className="alert alert-info">
            {message}
          </div>
        )}

        {vehicles.length === 0 ? (

          <div className="text-center py-5">

            <h5>No Electric Vehicles Available</h5>

            <p className="text-muted">
              Add a vehicle using the form above to see it here.
            </p>

          </div>

        ) : (

          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

              <thead className="table-dark">

                <tr>
                  <th>ID</th>
                  <th>Model Name</th>
                  <th>Manufacturer</th>
                  <th>Range (Km)</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {vehicles.map((vehicle) => (

                  <tr key={vehicle.id}>

                    <td>
                      <span className="badge bg-secondary">
                        {vehicle.id}
                      </span>
                    </td>

                    <td className="fw-semibold">
                      {vehicle.modelName}
                    </td>

                    <td>
                      {vehicle.manufacturer}
                    </td>

                    <td>
                      {vehicle.rangeKm} Km
                    </td>

                    <td>
                      ₹{Number(vehicle.price).toLocaleString("en-IN")}
                    </td>

                    <td>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          handleDelete(vehicle.id)
                        }
                        disabled={deletingId === vehicle.id}
                      >

                        {deletingId === vehicle.id ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-1"></span>
                            Deleting...
                          </>
                        ) : (
                          "Delete"
                        )}

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>
    </div>
  );
}

export default ElectricVehicleList;
