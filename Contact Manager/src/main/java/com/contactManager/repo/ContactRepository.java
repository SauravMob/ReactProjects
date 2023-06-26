package com.contactManager.repo;

import com.contactManager.entities.Contacts;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ContactRepository extends JpaRepository<Contacts, Integer> {

    @Query("from Contacts as c where c.user.id =:userId")
    Page<Contacts> findContactsByUser(int userId, Pageable pageable);

    @Query("from Contacts as c where c.cid =:id")
    Contacts findContactsById(int id);

}
