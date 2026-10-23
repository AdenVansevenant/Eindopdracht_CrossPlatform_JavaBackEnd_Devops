package be.adenvansevenant.wkfantasy.controller;

import be.adenvansevenant.wkfantasy.dto.SpelerResponse;
import be.adenvansevenant.wkfantasy.service.SpelerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/spelers")
public class SpelerController {

    private final SpelerService spelerService;

    public SpelerController(SpelerService spelerService) {
        this.spelerService = spelerService;
    }

    @GetMapping
    public List<SpelerResponse> getAlleSpelers() {
        return spelerService.getAlleSpelers();
    }
}
