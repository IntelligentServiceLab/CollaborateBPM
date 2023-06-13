package com.ice.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @Classname ViewController
 * @Description TODO
 * @Date 2023/4/9 10:40
 * @Created by FunCoder
 */
@Controller
public class ViewController {

    @GetMapping("/myPublishTasks/{publisher}")
    public String myPublishTasks(@PathVariable("publisher") String publisher, Model model) {
        // Add data to the model to be displayed in the view
        model.addAttribute("publisher", publisher);
        return "myPublishTasks";
    }


    @GetMapping("/publishTasks/{publisher}")
    public String publishTasks(@PathVariable("publisher") String publisher, Model model) {
        // Add data to the model to be displayed in the view
        model.addAttribute("publisher", publisher);
        return "publishTasks";
    }

    @GetMapping("/showTasks/{username}")
    public String showTasks(@PathVariable("username") String username, Model model) {
        // Add data to the model to be displayed in the view
        model.addAttribute("username", username);
        return "showTasks";
    }

    @GetMapping("/myTasks/{username}")
    public String myTasks(@PathVariable("username") String username, Model model) {
        // Add data to the model to be displayed in the view
        model.addAttribute("username", username);
        return "myTasks";
    }

    @GetMapping("/applicationReceiver/{username}")
    public String applicationTasks(@PathVariable("username") String username, Model model) {
        model.addAttribute("username", username);
        return "application_receiver";
    }

    @GetMapping("/myApply/{username}")
    public String myApply(@PathVariable("username") String username, Model model) {
        model.addAttribute("username", username);
        return "myApply";
    }

    @GetMapping("/saveCompany/{username}")
    public String saveCompany(@PathVariable("username") String username, Model model) {
        model.addAttribute("username", username);
        return "saveCompany";
    }

    @GetMapping("/chooseCompany/{username}")
    public String chooseCompany(@PathVariable("username") String username, Model model) {
        model.addAttribute("username", username);
        return "chooseCompany";
    }

    @GetMapping("/assignTasks")
    //window.location.href="/assignTasks?username="+ username+"&account="+obj.data.name+"&telephone="+obj.data.telephone;
    public String assignTasks(@RequestParam("username") String username, @RequestParam("account") String account, @RequestParam("telephone") String telephone ,Model model) {
        model.addAttribute("username", username);
        model.addAttribute("account",account);
        model.addAttribute("telephone",telephone);
        return "assignTasks";
    }

    @GetMapping("/toLogin")
    public String toLogin(){
        return "login";
    }

    @PostMapping("/register")
    public String toRegister(){
        return "register";
    }


}
