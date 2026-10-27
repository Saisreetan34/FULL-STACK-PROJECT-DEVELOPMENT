package com.klef.soa.exam.service;

import com.klef.soa.exam.entity.ElectricVehicle;
import java.util.List;

public interface ElectricVehicleService {

    ElectricVehicle addElectricVehicle(ElectricVehicle vehicle);

    ElectricVehicle getElectricVehicleById(Long id);

    List<ElectricVehicle> getAllElectricVehicles();

    ElectricVehicle updateElectricVehicle(Long id, ElectricVehicle vehicle);

    void deleteElectricVehicle(Long id);
}