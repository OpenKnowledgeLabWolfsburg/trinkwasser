package de.oklw.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;

/**
 * Main SpringApplication to start the whole project
 */
@SpringBootApplication(scanBasePackages = {"de.oklw.rest", "de.oklw.service", "de.oklw.persistence"})
@EnableOAuth2Sso
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(new Class[]{Application.class}, args);
    }

}
