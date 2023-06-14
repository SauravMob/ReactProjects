package com.contactmanager.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "contacts")
public class Contacts {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int cid;

    private String name;

    private String email;

    private String phone;

    private String work;

    private String about;

    @ManyToOne(cascade = CascadeType.ALL)
    private User user;

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWork() {
        return work;
    }

    public void setWork(String work) {
        this.work = work;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Contacts(int cid, String name, String email, String phone, String work, String about, User user) {
        this.cid = cid;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.work = work;
        this.about = about;
        this.user = user;
    }
}
