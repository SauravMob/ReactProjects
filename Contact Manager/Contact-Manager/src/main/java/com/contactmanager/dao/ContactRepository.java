package com.contactmanager.dao;

import com.contactmanager.entities.Contacts;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface ContactRepository extends JpaRepository<Contacts, Integer> {

    public Page<Contacts> findContactsByUser(@Param("userId")int userId, Pageable pageable);
}
