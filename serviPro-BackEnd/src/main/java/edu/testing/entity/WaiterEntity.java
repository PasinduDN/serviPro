package edu.testing.entity;

import jakarta.persistence.*;
import jdk.jfr.StackTrace;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "waiter")
public class WaiterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long waiterId;

    private String firstName;
    private String lastName;
    private String gender;
    private String empId;
    private String age;
    private String contactNumb;
}
