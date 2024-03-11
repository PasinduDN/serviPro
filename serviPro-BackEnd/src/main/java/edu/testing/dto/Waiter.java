package edu.testing.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Waiter {
    private String firstName;
    private String lastName;
    private String gender;
    private String empId;
    private String age;
    private String contactNumb;
}
