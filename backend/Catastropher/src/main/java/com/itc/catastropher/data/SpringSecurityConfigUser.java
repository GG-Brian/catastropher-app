package com.itc.catastropher.data;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.itc.catastropher.data.service.ImplementUserService;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

@Configuration
public class SpringSecurityConfigUser extends WebSecurityConfigurerAdapter {

	@Autowired private ImplementUserService userService;
	@Autowired private BCryptPasswordEncoder passwordEncoder;
	
	@Bean public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		return bCryptPasswordEncoder;
	}
	
	@Override protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
			.authorizeRequests()
			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()//allow CORS option calls
			.antMatchers("/**").permitAll()
			.antMatchers("/supporter/**").hasAnyAuthority("VISUALIZER", "ADMIN")
//			.antMatchers("/disaster/**").hasAnyRole("ADMIN")
			.antMatchers("/disaster/**").hasAnyAuthority("ADMIN")
			.anyRequest().authenticated()
			.and()
			.httpBasic();
	}
	
	@Autowired public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userService)
			.passwordEncoder(passwordEncoder);
	}
	
}