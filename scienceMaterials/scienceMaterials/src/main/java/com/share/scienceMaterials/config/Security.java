package com.share.scienceMaterials.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;



import com.share.scienceMaterials.services.UserService;

import static com.share.scienceMaterials.config.SecurityConstants.EXPIRATION_TIME;
import static com.share.scienceMaterials.config.SecurityConstants.HEADER_STRING;
import static com.share.scienceMaterials.config.SecurityConstants.SECRET;
import static com.share.scienceMaterials.config.SecurityConstants.SIGN_UP_URL;
import static com.share.scienceMaterials.config.SecurityConstants.TOKEN_PREFIX;

@Configuration
@EnableWebSecurity
public class Security extends WebSecurityConfigurerAdapter{

/*    @Override
    protected void configure(HttpSecurity http) throws Exception{
    	http.csrf().disable().authorizeRequests().anyRequest().permitAll();//http.authorizeRequests().antMatchers("/").permitAll();
    }*/
	
		private UserService userService;
	    private BCryptPasswordEncoder bCryptPasswordEncoder;

	    public Security(UserService userService, BCryptPasswordEncoder bCryptPasswordEncoder) {
	        this.userService = userService;
	        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	    }

	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	        http.cors().and().csrf().disable().authorizeRequests()
	                .antMatchers(HttpMethod.POST, SIGN_UP_URL).permitAll()
	                .antMatchers(HttpMethod.POST, "/api/users/login").permitAll()
	                .antMatchers(HttpMethod.GET, "/api/articles/**").permitAll()
	
	                
	                
	                .anyRequest().authenticated()
	                .and() 
	                .addFilter(new JWTAuthenticationFilter(authenticationManager()))
	                .addFilter(new JWTAuthorizationFilter(authenticationManager()))
	              //  .addFilter(new JWTAuthorizationFilter(authenticationManager()))
	            //    .addFilter(new JWTAuthenticationFilter(authenticationManager))
	          //      .addFilter(getJWTAuthenticationFilter())
				//	 .loginProcessingUrl("/api/users/login")
	             
	                // this disables session creation on Spring Security
	                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	    }

	    @Override
	    public void configure(AuthenticationManagerBuilder auth) throws Exception {
	    	auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder);
	       // auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder);
	    }

	  
	    
	    
	    
	    @Bean
	  CorsConfigurationSource corsConfigurationSource() {
	    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
	    return source;
	  }
	    
	   /* @Bean
	    public JWTAuthenticationFilter getJWTAuthenticationFilter() throws Exception {
	    	
	    	
	        final JWTAuthenticationFilter filter = new JWTAuthenticationFilter(authenticationManager);
	        filter.setFilterProcessesUrl("/api/users/login");
	        return filter;
	    }*/
}