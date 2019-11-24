package de.oklw.persistence.repository;

import de.oklw.persistence.entity.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * District Repository class
 */
@Repository
public interface DistrictRepository extends JpaRepository<District, Long> {

}
