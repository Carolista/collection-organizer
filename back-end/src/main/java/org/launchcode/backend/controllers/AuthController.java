package org.launchcode.backend.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/auth")
public class AuthController {

//    @Autowired
//    AuthenticationManager authenticationManager;
//
//    @Autowired
//    UserRepository userRepository;
//
//    @Autowired
//    RoleRepository roleRepository;
//
//    @Autowired
//    PasswordEncoder passwordEncoder;
//
//    @Autowired
//    JwtUtils jwtUtils;
//
//    @PostMapping("signin")
//    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
//
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        String jwt = jwtUtils.generateJwtToken(authentication);
//
//        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
//        List<String> roles = userDetails.getAuthorities().stream()
//                .map(item -> item.getAuthority())
//                .collect(Collectors.toList());
//
//        return ResponseEntity.ok(new JwtResponse(jwt,
//                    userDetails.getId(),
//                    userDetails.getUsername(),
//                    userDetails.getEmail(),
//                    roles));
//    }
//
//    @PostMapping("signup")
//    public ResponseEntity<?>  registerUser(@Valid @RequestBody SignupRequest signupRequest)
//        if(userRepository.existsByUsername(signupRequest.getByUsername())) {
//            return ResponseEntity
//                    .badRequest()
//                    .body(new MessageResponse("Error: That username is taken!"));
//    }
//
//    //Creating new user account
//
//    User user = new User(signupRequest.getUsername(),
//            signupRequest.getEmail(),
//            encoder.encode(signupRequest.getPassword()));
//
//    Set<String> strRoles = signupRequest.getRole();
//    Set<Role> roles = new HashSet<>();
//
//    if (strRoles  null) {
//        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
//                orElseThrow(() -> new RuntimeException("Error: Role not found."));
//        roles.add(userRole);
//    } else {
//        strRoles.forEach(role -> {
//            switch (role) {
//            case "admin":
//                Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
//                    orElseThrow(() -> new RuntimeException("Error: Role not found."));
//                roles.add(adminRole);
//
//                break;
//            case "mod":
//                Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
//                    orElseThrow(() -> new RuntimeException("Error: Role not found."));
//                roles.add(modRole);
//
//                break;
//            default:
//                Role userRole = roleRepository.findByName(ERole.ROLE_USER)
//                    orElseThrow(() -> new RuntimeException("Error: Role not found."));
//                roles.add(userRole);
//            }
//        });
//    }
//
//    user.setRoles(roles);
//    userRepository.save(user);
//
//    return ResponseEntity.ok(new MessageResponse("Thank you for registering!"));

}
