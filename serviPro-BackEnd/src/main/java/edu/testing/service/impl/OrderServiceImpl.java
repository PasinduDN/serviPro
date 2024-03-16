package edu.testing.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.testing.dto.Order;
import edu.testing.entity.OrderEntity;
import edu.testing.repository.OrderRepository;
import edu.testing.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository repository;

    @Autowired
    ObjectMapper mapper;
    public OrderEntity addOreder(Order order){
        OrderEntity orderEntity = mapper.convertValue(order, OrderEntity.class);
        return repository.save(orderEntity);
    }

    public Iterable<OrderEntity> getOrder(){
        return  repository.findAll();
    }

}
