package de.oklw.persistence.repository;

import de.oklw.persistence.entity.District;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

/**
 * Tests for DistrictRepository
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class DistrictRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private DistrictRepository districtRepository;

    //implement tests here
    @Test
    public void someTest() {

    }
}
