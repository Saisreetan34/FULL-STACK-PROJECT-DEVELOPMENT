package com.klef.soa.exam.service;

import com.klef.soa.exam.entity.ElectricVehicle;
import com.klef.soa.exam.repository.ElectricVehicleRepository;
import com.klef.soa.exam.service.ElectricVehicleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ElectricVehicleServiceImpl implements ElectricVehicleService {

    private final ElectricVehicleRepository repository;

    public ElectricVehicleServiceImpl(ElectricVehicleRepository repository) {
        this.repository = repository;
    }

    @Override
    public ElectricVehicle addElectricVehicle(ElectricVehicle vehicle) {
        return repository.save(vehicle);
    }

    @Override
    public ElectricVehicle getElectricVehicleById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Electric Vehicle not found"));
    }

    @Override
    public List<ElectricVehicle> getAllElectricVehicles() {
        return repository.findAll();
    }

    @Override
    public ElectricVehicle updateElectricVehicle(
            Long id, ElectricVehicle vehicle) {

        ElectricVehicle existing = getElectricVehicleById(id);

        existing.setModelName(vehicle.getModelName());
        existing.setManufacturer(vehicle.getManufacturer());
        existing.setRangeKm(vehicle.getRangeKm());
        existing.setPrice(vehicle.getPrice());

        return repository.save(existing);
    }

    @Override
    public void deleteElectricVehicle(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Electric Vehicle not found");
        }

        repository.deleteById(id);
    }
}