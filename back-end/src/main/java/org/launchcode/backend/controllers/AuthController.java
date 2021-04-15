package org.launchcode.backend.controllers;

import org.launchcode.backend.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class AuthController {

    @Autowired
    UserRepository userRepository;

}
