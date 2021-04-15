package org.launchcode.backend.controllers;

import org.launchcode.backend.models.User;
import org.launchcode.backend.models.data.UserRepository;
import org.launchcode.backend.models.dto.RegisterFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.Optional;

@Controller
@RequestMapping("auth") //do we need mapping here? "register"??
public class AuthController {

    @Autowired
    UserRepository userRepository;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Long userId = (Long) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

//    @GetMapping("register")
//    public String displayRegistrationForm(Model model) {
//        model.addAttribute(new RegisterFormDTO());
//        model.addAttribute("title", "Register");
//        return "register";
//    }

    @PostMapping("register")
    public String processRegistrationForm(@RequestBody @Valid RegisterFormDTO registerFormDTO,
                                          Errors errors, HttpServletRequest request) {

        if (errors.hasErrors()) {
            return "register";
        }

        User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());

//        if (existingUser != null) {
//            errors.rejectValue("username", "username.alreadyexists", "A user with that username already exists");
//            return "register";
//        }
//
        String password = registerFormDTO.getPassword();
        String verifyPassword = registerFormDTO.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
            return "register";
        } //returns user to registration form if passwords don't match

        User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword());
        userRepository.save(newUser);
        setUserInSession(request.getSession(), newUser);

        return "redirect:"; //needs to show the logged in version of the page they're on
    }

}
