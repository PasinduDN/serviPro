package edu.testing.dto;

import jakarta.annotation.sql.DataSourceDefinitions;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    private String dateTime;
    private String itemsList;
    private double subTotal;
    private int quantity;
    private String cashier;
}
