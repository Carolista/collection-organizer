package org.launchcode.backend.models.data;

import org.launchcode.backend.models.ERole;
import org.launchcode.backend.models.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RoleRepository extends CrudRepository<Role, Long> {

    Optional<Role> findByName(ERole name);

}
