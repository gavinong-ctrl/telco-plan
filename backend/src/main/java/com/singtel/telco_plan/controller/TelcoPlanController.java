package com.singtel.telco_plan.controller;


import com.singtel.telco_plan.model.Plan;
import com.singtel.telco_plan.service.PlanService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plans")
public class TelcoPlanController {

    @Autowired
    private PlanService planService;

    @GetMapping
    public List<Plan> getAllPlans() {
        return planService.getAllPlans();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Plan> getPlanById(@PathVariable int id) {
        return planService.getPlanById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
