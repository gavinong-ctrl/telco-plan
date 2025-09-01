package com.singtel.telco_plan.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlanDetailDTO {
    private int id;
    private String name;
    private BigDecimal price;
    private String validity;
    private String dataLimit;
    private String type;
    private String description;
}

