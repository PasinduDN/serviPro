package edu.testing.controller;
import edu.testing.dto.Category;
import edu.testing.dto.Response;
import edu.testing.dto.Waiter;
import edu.testing.entity.CategoryEntity;
import edu.testing.entity.WaiterEntity;
import edu.testing.service.WaiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/waiter")
@CrossOrigin
public class WaiterController {

    @Autowired
    WaiterService waiterService;

    @PostMapping("/addWaiter")
    public WaiterEntity addWaiter(@RequestBody Waiter waiter){
        return waiterService.addWaiter(waiter);
    }

    @GetMapping("/getWaiter")
    public Iterable<WaiterEntity> getWaiter(){
        return waiterService.getWaiter();
    }

    @DeleteMapping("/{id}")
    public Response deleteItem(@PathVariable Long id){
        boolean isDeleted = waiterService.deleteWaiter(id);

        if(isDeleted){
            return new Response("Remove Waiter");
        }else{
            return new Response("Remove Waiter");
        }
    }

    @PatchMapping("/updateWaiter")
    public WaiterEntity updateWaiter(@RequestBody Waiter waiter){
        return waiterService.addWaiter(waiter);
    }

}
