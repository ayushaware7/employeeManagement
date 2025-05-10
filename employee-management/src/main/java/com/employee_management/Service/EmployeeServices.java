package com.employee_management.Service;

import com.employee_management.Entity.EmployeeEntity;
import com.employee_management.model.Employee;

import java.util.List;

public interface EmployeeServices {

    EmployeeEntity createEmployee(EmployeeEntity employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
