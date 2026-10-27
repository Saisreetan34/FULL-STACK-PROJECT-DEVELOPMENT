package com.klef.soa.exam.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.klef.soa.exam.entity.ElectricVehicle;
import com.klef.soa.exam.service.ElectricVehicleService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ElectricVehicleController {

    private final ElectricVehicleService service;

    public ElectricVehicleController(ElectricVehicleService service) {
        this.service = service;
    }

    // Home
    @GetMapping("/home")
    public ResponseEntity<String> home() {
        return ResponseEntity.ok(
                "Electric Vehicle CRUD Service is running"
        );
    }

    // Add Electric Vehicle
    @PostMapping("/Add")
    public ResponseEntity<ElectricVehicle> add(
            @RequestBody ElectricVehicle electricVehicle) {

        ElectricVehicle savedVehicle =
                service.addElectricVehicle(electricVehicle);

        return new ResponseEntity<>(
                savedVehicle,
                HttpStatus.CREATED
        );
    }

    // Display All Electric Vehicles
    @GetMapping("/DisplayAll")
    public ResponseEntity<List<ElectricVehicle>> displayAll() {

        List<ElectricVehicle> vehicles =
                service.getAllElectricVehicles();

        return ResponseEntity.ok(vehicles);
    }

    // Delete Electric Vehicle
    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<String> delete(
            @PathVariable Long id) {

        service.deleteElectricVehicle(id);

        return ResponseEntity.ok(
                "Electric Vehicle deleted successfully"
        );
    }
}