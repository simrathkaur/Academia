package com.esdproject.academiq.employee;

import com.esdproject.academiq.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeSalaryRepository extends JpaRepository<EmployeeSalary, Integer> {

    Optional<List<EmployeeSalary>> findAllByEmployee(Employee employee);
}
