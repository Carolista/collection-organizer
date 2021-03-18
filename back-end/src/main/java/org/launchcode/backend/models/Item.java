package org.launchcode.backend.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;
import java.util.Objects;
import javax.persistence.*;
//import javax.validation.constraints;

public class Item {


    private int id;

    private String title;

    public Item(int id, String title) {
        this.id = id;
        this.title = title;
    }

    public Item() {}

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

//continue working on ItemController - reference Anya's updated form/class
//research how public vs private fields when hooking FE to BE
//research URL as fields in java

}
