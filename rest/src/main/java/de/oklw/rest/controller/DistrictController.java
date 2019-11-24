package de.oklw.rest.controller;

import de.oklw.persistence.entity.District;
import de.oklw.service.impl.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * District RestController
 * Have a look at the RequestMapping!!!!!!
 */
@RestController
@RequestMapping("${rest.base-path}/district")
public class DistrictController {

    @Autowired
    private DistrictService districtService;

    @GetMapping
    public List<District> findAll() {
        return this.districtService.findAll();
    }

    @GetMapping(value = "/{id}")
    public District findById(@PathVariable("id") Long id) {
        return this.districtService.findById(id);
    }

    /**
     * @param district
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody District district) {
        this.districtService.saveOrUpdate(district);
    }

    @PutMapping
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void update(@RequestBody District district) {
        this.districtService.saveOrUpdate(district);
    }

    @DeleteMapping
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void delete(@RequestBody District district) {
        this.districtService.delete(district);
    }

}
