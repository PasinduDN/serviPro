package edu.testing.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.testing.dto.Waiter;
import edu.testing.entity.WaiterEntity;
import edu.testing.repository.WaiterRepository;
import edu.testing.service.WaiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WaiterServiceImpl implements WaiterService {

    @Autowired
    WaiterRepository waiterRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public WaiterEntity addWaiter(Waiter waiter){
        WaiterEntity waiterEntity = mapper.convertValue(waiter, WaiterEntity.class);
        return waiterRepository.save(waiterEntity);
    }

    @Override
    public Iterable<WaiterEntity> getWaiter(){
        return waiterRepository.findAll();
    }

    @Override
    public boolean deleteWaiter(Long id){
        Optional <WaiterEntity> waiterEntityOptional = waiterRepository.findById(id);

        if (waiterEntityOptional.isPresent()){
            waiterRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
