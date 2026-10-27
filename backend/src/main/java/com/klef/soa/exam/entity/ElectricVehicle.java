package com.klef.soa.exam.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class  ElectricVehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String modelName;
    private String manufacturer;
    private Integer rangeKm;
    private Double price;

    public ElectricVehicle() {
    }

    public ElectricVehicle(String modelName, String manufacturer,
                   Integer rangeKm, Double price) {
        this.modelName = modelName;
        this.manufacturer = manufacturer;
        this.rangeKm = rangeKm;
        this.price = price;
             }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public Integer getRangeKm() {
        return rangeKm;
    }

    public void setRangeKm(Integer rangeKm) {
        this.rangeKm = rangeKm;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}