package de.oklw.persistence.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


/**
 * Data Entity class
 */
@Entity
@Table(name = "DATA")
public class Data extends AbstractEntity<Long> {

    @Column(name="DATEOFMEASUREMENT")
    private Date dateOfMeasurement;

    @Column(name="SULFATE")
	private Double sulfate;
	
    @Column(name="CHLORIDE")
	private Double chloride;
	
    @Column(name="HARDNESS")
	private String hardness;
	
    @Column(name="NATRIUM")
	private Double natrium;
	
    @Column(name="NITRATE")
	private Double nitrate;
	
    @Column(name="MAGNESIUM")
	private Double magnesium;
	
    @Column(name="CALCIUM")
	private Double calcium;
	
    @Column(name="POTASSIUM")
    private Double potassium;
    
    @ManyToOne
    @JoinColumn(name="DISTRICT_ID", nullable=false)
    private District district;
	
    public Double getSulfate() {
        return sulfate;
    }

    public void setSulfate(Double sulfate) {
        this.sulfate = sulfate;
    }
        
    public Double getChloride() {
        return chloride;
    }

    public void setChloride(Double chloride) {
        this.chloride = chloride;
    }
        
    public String getHardness() {
        return hardness;
    }

    public void setHardness(String hardness) {
        this.hardness = hardness;
    }
        
    public Double getNatrium() {
        return natrium;
    }

    public void setNatrium(Double natrium) {
        this.natrium = natrium;
    }
        
    public Double getNitrate() {
        return nitrate;
    }

    public void setNitrate(Double nitrate) {
        this.nitrate = nitrate;
    }
        
    public Double getMagnesium() {
        return magnesium;
    }

    public void setMagnesium(Double magnesium) {
        this.magnesium = magnesium;
    }
        
    public Double getCalcium() {
        return calcium;
    }

    public void setCalcium(Double calcium) {
        this.calcium = calcium;
    }
        
    public Double getPotassium() {
        return potassium;
    }

    public void setPotassium(Double potassium) {
        this.potassium = potassium;
    }

    public District getDistrict() {
        return district;
    }

    public void setDistrict(District district) {
        this.district = district;
    }

	public Date getDateOfMeasurement() {
		return dateOfMeasurement;
	}

	public void setDateOfMeasurement(Date dateOfMeasurement) {
		this.dateOfMeasurement = dateOfMeasurement;
	}       
}
