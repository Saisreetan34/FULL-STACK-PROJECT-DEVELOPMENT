
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ElectricVehicleForm from "../components/ElectricVehicleForm";
import ElectricVehicleList from "../components/ElectricVehicleList";

function Home() {
  const [refresh, setRefresh] = useState(0);

  const handleAdded = () => {
    setRefresh((previous) => previous + 1);
  };

  return (
    <>
      <Navbar />

      <main className="container py-4">

        <div className="text-center mb-4">

          <h1 className="fw-bold">
            Electric Vehicle Management System
          </h1>

          <p className="text-muted">
            Add, view and manage electric vehicle records
          </p>

        </div>

        <ElectricVehicleForm
          onAdded={handleAdded}
        />

        <ElectricVehicleList
          refresh={refresh}
        />

      </main>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <small>
          Electric Vehicle Management System | SOA Exam
        </small>
      </footer>
    </>
  );
}

export default Home;
