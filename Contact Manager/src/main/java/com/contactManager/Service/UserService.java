package com.contactManager.Service;

import com.contactManager.entities.Contacts;
import com.contactManager.entities.User;
import com.contactManager.repo.ContactRepository;
import com.contactManager.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final ContactRepository contactsRepository;

    public String dashboard(
            String email
    ) {
        User user = userRepository.findByEmail(email);
        return user.getName();
    }

    public User profile(
            String email
    ) {
        return userRepository.findByEmail(email);
    }

    public HttpStatus addContact(
            Contacts contacts,
            String email
    ) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            contacts.setUser(user);
            user.getContacts().add(contacts);
            userRepository.save(user);
            return HttpStatus.CREATED;
        } else {
            return HttpStatus.BAD_REQUEST;
        }
    }

    public HttpStatus editContact(
            int id,
            Contacts contacts,
            String email
    ) {
        Contacts contacts1 = contactsRepository.findContactsById(id);
        contacts1.setName(contacts.getName());
        contacts1.setEmail(contacts.getEmail());
        contacts1.setAbout(contacts.getAbout());
        contacts1.setWork(contacts.getWork());
        contacts1.setPhone(contacts.getPhone());
        User user1 = userRepository.findByEmail(email);
        contacts1.setUser(user1);
        contactsRepository.save(contacts1);
        return HttpStatus.ACCEPTED;
    }

    public Contacts getContact(
            int id
    )
    {
        return contactsRepository.findContactsById(id);
    }

    public Page<Contacts> allContacts(
            int page,
            String email
    )
    {
        Pageable pageable = PageRequest.of(page, 3);
        User user = userRepository.findByEmail(email);
        return contactsRepository.findContactsByUser(user.getId(), pageable);
    }

    public String deleteContact(
            int id,
            String email
    )
    {
        Contacts contacts = contactsRepository.findContactsById(id);
        User user = userRepository.findByEmail(email);
        user.getContacts().remove(contacts);
        userRepository.save(user);
        contactsRepository.delete(contacts);
        return "Deleted";
    }
}
