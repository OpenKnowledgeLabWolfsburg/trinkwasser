package de.oklw.service.impl;

import de.oklw.persistence.entity.City;
import de.oklw.persistence.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.List;

/**
 * 
 * City Service class
 *
 */
@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    /**
     * @return
     */
    public List<City> findAll() {
        return this.cityRepository.findAll();
    }

    /**
     * @param id
     * @return
     */
    public City findById(Long id) {
        return this.cityRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(String.valueOf(id)));
    }

    /**
     * @param city
     * @return
     */
    public City saveOrUpdate(City city) {
        this.cityRepository.save(city);
        return city;
    }

    /**
     * @param city
     */
    public void delete(City city) {
        this.cityRepository.delete(city);
    }

}
