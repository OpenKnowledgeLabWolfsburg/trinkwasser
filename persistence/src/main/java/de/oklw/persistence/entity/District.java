package de.oklw.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


/**
 * District Entity class
 */
@Entity
@Table(name = "DISTRICT")
public class District extends AbstractEntity<Long> {

//domain attributes
    @Column(name="NAME")
    private String name;
    
    @ManyToOne
    @JoinColumn(name="CITY_ID", nullable=false)
    private City city;
	
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
        
}
