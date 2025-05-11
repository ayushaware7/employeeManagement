package com.employee_management.Controller;

import com.employee_management.Entity.EmployeeEntity;
import com.employee_management.Service.EmployeeServiceImpl;
import com.employee_management.Service.EmployeeServices;
import com.employee_management.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    private EmployeeServices employeeServices;

    public EmployeeController(EmployeeServices employeeServices) {
        this.employeeServices = employeeServices;
    }

//    @PostMapping("/employees")
//    public ResponseEntity<Map<String, String>> testResponse() {
//        Map<String, String> response = new HashMap<>();
//        response.put("message", "Test successful!");
//        return ResponseEntity.ok(response);
//    }


    @PostMapping("/employees")
    public EmployeeEntity  createEmployee(@RequestBody EmployeeEntity employee){
        System.out.println("Received: " + employee);
        return employeeServices.createEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeServices.getAllEmployees();
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
        boolean deleted = false;
        deleted = employeeServices.deleteEmployee(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = null;
        employee = employeeServices.getEmployeeById(id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,
                                                   @RequestBody Employee employee){
        employee = employeeServices.updateEmployee(id , employee);
        return ResponseEntity.ok(employee);
    }

}
