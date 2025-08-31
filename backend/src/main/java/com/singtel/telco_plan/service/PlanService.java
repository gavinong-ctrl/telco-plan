package com.singtel.telco_plan.service;

import com.singtel.telco_plan.model.Plan;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class PlanService {

    private final List<Plan> mockPlans = Arrays.asList(
            new Plan(1, "Merdeka Freedom", new BigDecimal("31.00"), "1957 days", "Unlimited", "Postpaid",
                    "Celebrate Merdeka with unlimited data for only RM31/month! Enjoy validity of 1957 days. Limited to the first 8 customers — act fast to grab this exclusive deal!"),
            new Plan(2, "Prepaid Lite", new BigDecimal("10.00"), "7 days", "5GB", "Prepaid",
                    "Affordable plan with short validity, perfect for light users."),
            new Plan(3, "Prepaid Plus", new BigDecimal("30.00"), "30 days", "20GB", "Prepaid",
                    "Great for regular users with more data needs."),
            new Plan(4, "Postpaid Basic", new BigDecimal("50.00"), "30 days", "40GB", "Postpaid",
                    "Unlimited calls + generous data allowance."),
            new Plan(5, "Postpaid Premium", new BigDecimal("80.00"), "30 days", "100GB", "Postpaid",
                    "For heavy users who want maximum benefits.")
    );



    public List<Plan> getAllPlans() {
        return mockPlans;
    }

    public Optional<Plan> getPlanById(int id) {
        return mockPlans.stream().filter(plan -> plan.getId() == id).findFirst();
    }
}

