package com.klef.soa.exam.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ElectricVehicleRequest {

    @NotBlank(message = "Model name is required")
    @Schema(
        description = "Electric vehicle model name",
        example = "Nexon EV"
    )
    private String modelName;

    @NotBlank(message = "Manufacturer is required")
    @Schema(
        description = "Electric vehicle manufacturer",
        example = "Tata Motors"
    )
    private String manufacturer;

    @NotNull(message = "Range is required")
    @Min(value = 1, message = "Range must be greater than 0")
    @Schema(
        description = "Driving range in kilometers",
        example = "312"
    )
    private Integer rangeKm;

    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.01", message = "Price must be greater than 0")
    @Schema(
        description = "Price of the electric vehicle",
        example = "1499999.0"
    )
    private Double price;
}