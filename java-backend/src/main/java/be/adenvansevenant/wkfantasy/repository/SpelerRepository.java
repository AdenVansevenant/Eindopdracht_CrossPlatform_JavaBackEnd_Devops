package be.adenvansevenant.wkfantasy.repository;

import be.adenvansevenant.wkfantasy.model.Speler;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpelerRepository extends JpaRepository<Speler, Long> {
}
