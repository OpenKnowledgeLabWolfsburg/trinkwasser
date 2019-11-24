package de.oklw.rest.controller;

import de.oklw.persistence.entity.City;
import de.oklw.service.impl.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * City RestController
 * Have a look at the RequestMapping!!!!!!
 */
@RestController
@RequestMapping("${rest.base-path}/city")
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping
    public List<City> findAll() {
        return this.cityService.findAll();
    }

    @GetMapping(value = "/{id}")
    public City findById(@PathVariable("id") Long id) {
        return this.cityService.findById(id);
    }

    /**
     * @param city
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody City city) {
        this.cityService.saveOrUpdate(city);
    }

    @PutMapping
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void update(@RequestBody City city) {
        this.cityService.saveOrUpdate(city);
    }

    @DeleteMapping
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void delete(@RequestBody City city) {
        this.cityService.delete(city);
    }

}
