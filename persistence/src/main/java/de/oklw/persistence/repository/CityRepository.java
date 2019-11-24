package de.oklw.persistence.repository;

import de.oklw.persistence.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * City Repository class
 */
@Repository
public interface CityRepository extends JpaRepository<City, Long> {

}
