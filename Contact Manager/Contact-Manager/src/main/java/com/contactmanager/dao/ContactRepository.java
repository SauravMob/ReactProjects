package com.contactmanager.dao;

import com.contactmanager.entities.Contacts;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contacts, Integer> {

    @Query("from Contacts as c where c.user.id =:userId")
    Page<Contacts> findContactsByUser(int userId, Pageable pageable);
}
