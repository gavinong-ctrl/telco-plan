package com.singtel.telco_plan.controller;


import com.singtel.telco_plan.dto.PlanDetailDTO;
import com.singtel.telco_plan.dto.PlanSummaryDTO;
import com.singtel.telco_plan.service.PlanService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;


import java.util.List;

@RestController
@RequestMapping("api/plans")
public class TelcoPlanController {

    @Autowired
    private PlanService planService;

    @GetMapping
    public List<PlanSummaryDTO> getAllPlans() {
        return planService.getAllPlans();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlanDetailDTO> getPlanById(@PathVariable int id) {
        return planService.getPlanById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
