//package edu.testing.controller;
//
//import edu.testing.dto.Order;
//import edu.testing.entity.OrderEntity;
//import edu.testing.service.OrderService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@CrossOrigin
//@RequestMapping("/order")
//public class OrderController {
//
//    @Autowired
//    OrderService orderService;
//
//    @PostMapping("/addOrders")
//    public OrderEntity addOrder(@RequestBody Order order){
////        System.out.println(order.getSubtotal());
//        return orderService.addOreder(order);
//    }
//
//    @GetMapping("/getOrders")
//    public Iterable<OrderEntity> getOrder(){
//        return orderService.getOrder();
//    }
//}
