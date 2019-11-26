package de.oklw.persistence.repository;

import de.oklw.persistence.entity.Data;
import de.oklw.persistence.entity.District;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Data Repository class
 */
@Repository
public interface DataRepository extends JpaRepository<Data, Long> {

    List<Data> findByDistrict(District district);
}
