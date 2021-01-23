package com.share.scienceMaterials.config;

import java.io.IOException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import static com.share.scienceMaterials.config.SecurityConstants.EXPIRATION_TIME;
import static com.share.scienceMaterials.config.SecurityConstants.HEADER_STRING;
import static com.share.scienceMaterials.config.SecurityConstants.SECRET;
import static com.share.scienceMaterials.config.SecurityConstants.SIGN_UP_URL;
import static com.share.scienceMaterials.config.SecurityConstants.TOKEN_PREFIX;

import com.auth0.jwt.JWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.share.scienceMaterials.entities.AppUser;

import lombok.AllArgsConstructor;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
            AppUser creds = new ObjectMapper()
                    .readValue(req.getInputStream(), AppUser.class);
            UsernamePass usernamePass = new UsernamePass( creds.getMail(), creds.getPassword());
            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                    		 creds.getMail(),
                             creds.getPassword(),
                             new ArrayList())
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException, ServletException {
    	
        String token = JWT.create()
                .withSubject(((User) auth.getPrincipal()).getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(HMAC512(SECRET.getBytes()));
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
    	
 /*Date date =(new Date(System.currentTimeMillis() + EXPIRATION_TIME));

       String token = JWT.create()
                .withSubject(((User) auth.getPrincipal()).getUsername())  
            //    .withClaim("password", (((User) auth.getCredentials()).getPassword()))
          
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
             
             
               
                .sign(HMAC512(SECRET.getBytes()));
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);*/
    }
    
    @AllArgsConstructor
    private class UsernamePass{
    	String username;
    	String password;
    }
}
