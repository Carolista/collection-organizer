package org.launchcode.backend.models;


import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class Item {

    @Id
    @GeneratedValue
    public int id; //changed fields temporarily to public until we resolve what to do between FE/BE

    @NotBlank
    @Size(min = 3, max = 100, message = "Name must be between 3 and 100 characters")
    public String title;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return id == item.id &&
                Objects.equals(title, item.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title);
    }


    //continue working on ItemController to do's - reference Anya's updated form/class
    //research how public vs private fields when hooking FE to BE
    //research URL as fields in java

}
