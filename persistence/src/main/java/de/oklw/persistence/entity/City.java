package de.oklw.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


/**
 * City Entity class
 */
@Entity
@Table(name = "CITY")
public class City extends AbstractEntity<Long> {

//domain attributes
    @Column(name="NAME")
	private String name;
	
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
        
}
