package edu.testing.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {

    @GetMapping("/getCategory")
    public void getCategory(){

    }
}
