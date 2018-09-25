package edu.learn.mazahaireuloom.ui_controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/app/**")
    public String app() {
        return "index";
    }
}
