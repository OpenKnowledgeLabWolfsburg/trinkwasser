package de.oklw.service.impl;

import de.oklw.persistence.entity.Data;
import de.oklw.persistence.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.List;

/**
 * 
 * Data Service class
 *
 */
@Service
public class DataService {

    @Autowired
    private DataRepository dataRepository;

    /**
     * @return
     */
    public List<Data> findAll() {
        return this.dataRepository.findAll();
    }

    /**
     * @param id
     * @return
     */
    public Data findById(Long id) {
        return this.dataRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(String.valueOf(id)));
    }

    /**
     * @param data
     * @return
     */
    public Data saveOrUpdate(Data data) {
        this.dataRepository.save(data);
        return data;
    }

    /**
     * @param data
     */
    public void delete(Data data) {
        this.dataRepository.delete(data);
    }

}
