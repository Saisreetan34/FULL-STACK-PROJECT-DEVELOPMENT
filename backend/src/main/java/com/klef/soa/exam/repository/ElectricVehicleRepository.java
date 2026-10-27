package com.klef.soa.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klef.soa.exam.entity.ElectricVehicle;

public interface ElectricVehicleRepository
        extends JpaRepository<ElectricVehicle, Long> {
}