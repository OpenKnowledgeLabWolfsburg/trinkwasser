package de.oklw.service.impl;

import de.oklw.persistence.entity.City;
import de.oklw.persistence.entity.District;
import de.oklw.persistence.repository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

/**
 * 
 * District Service class
 *
 */
@Service
public class DistrictService {

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private CityService cityService;

    /**
     * @return
     */
    public List<District> findAll() {
        return this.districtRepository.findAll();
    }

    /**
     * 
     * @param city
     * @return
     */
    public List<District> findAllByCity(Long cityId) {
        City city = this.cityService.findById(cityId);
        return this.districtRepository.findByCity(city);
    }

    /**
     * @param id
     * @return
     */
    public District findById(Long id) {
        return this.districtRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(String.valueOf(id)));
    }

    /**
     * @param district
     * @return
     */
    public District saveOrUpdate(District district) {
        this.districtRepository.save(district);
        return district;
    }

    /**
     * @param district
     */
    public void delete(District district) {
        this.districtRepository.delete(district);
    }

}
