package be.adenvansevenant.wkfantasy.service;

import be.adenvansevenant.wkfantasy.dto.SpelerResponse;
import be.adenvansevenant.wkfantasy.repository.SpelerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class SpelerService {

    private final SpelerRepository spelerRepository;

    public SpelerService(SpelerRepository spelerRepository) {
        this.spelerRepository = spelerRepository;
    }

    public List<SpelerResponse> getAlleSpelers() {
        return spelerRepository.findAll().stream()
                .map(SpelerResponse::from)
                .toList();
    }
}
