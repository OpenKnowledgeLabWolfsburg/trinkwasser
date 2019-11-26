package de.oklw.service;

import de.oklw.persistence.entity.District;
import de.oklw.persistence.repository.DistrictRepository;
import de.oklw.service.impl.CityService;
import de.oklw.service.impl.DistrictService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import javax.persistence.EntityNotFoundException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Tests for DistrictService
 */
@RunWith(SpringRunner.class)
public class DistrictServiceTest {

    /**
     * <pre>
     * To check the Service class, we need to have an instance of Service class created and available as a
     * @Bean so that we can @Autowire it in our test class.
     * This configuration is achieved by using the @TestConfiguration annotation.
     * </pre>
     */
    @TestConfiguration
    static class DistrictServiceTestConfiguration {

        @Bean
        public DistrictService createDistrictService() {
            return new DistrictService();
        }
    }

    @Autowired
    private DistrictService districtService;

    /**
     * Create a mock.
     */
    @MockBean
    private DistrictRepository districtRepository;
    
    @MockBean
    private CityService cityService;

    @Before
    public void setUp() {
        //TODO: setup objects for each test
    }

    //implement tests here
    @Test
    public void someTest() {
        
    }

}
