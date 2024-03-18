//package edu.testing.entity;
//import java.util.List;
//import edu.testing.dto.OrderedItem;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.util.List;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Entity
//@Table(name = "orders")
//public class OrderEntity {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long orderId;
//
//    private String dateTime;
//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    private List<OrderedItemEntity> orderedItem;
//    private Integer subtotal;
//    private Integer quantity;
//    private String cashier;
//}
