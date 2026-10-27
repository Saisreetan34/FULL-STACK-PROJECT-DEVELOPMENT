package com.klef.soa.exam.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ElectricVehicleResponse {

    private Long id;

    private String modelName;

    private String manufacturer;

    private Integer rangeKm;

    private Double price;
}