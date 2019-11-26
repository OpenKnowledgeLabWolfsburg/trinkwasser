package de.oklw.persistence.repository;

import de.oklw.persistence.entity.City;
import de.oklw.persistence.entity.District;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * District Repository class
 */
@Repository
public interface DistrictRepository extends JpaRepository<District, Long> {

    List<District> findByCity(City city);

}
