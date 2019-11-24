package de.oklw.rest.controller;

import de.oklw.persistence.entity.Data;
import de.oklw.service.impl.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Data RestController
 * Have a look at the RequestMapping!!!!!!
 */
@RestController
@RequestMapping("${rest.base-path}/data")
public class DataController {

    @Autowired
    private DataService dataService;

    @GetMapping
    public List<Data> findAll() {
        return this.dataService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Data findById(@PathVariable("id") Long id) {
        return this.dataService.findById(id);
    }

    /**
     * @param data
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Data data) {
        this.dataService.saveOrUpdate(data);
    }

    @PutMapping
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void update(@RequestBody Data data) {
        this.dataService.saveOrUpdate(data);
    }

    @DeleteMapping
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void delete(@RequestBody Data data) {
        this.dataService.delete(data);
    }

}
