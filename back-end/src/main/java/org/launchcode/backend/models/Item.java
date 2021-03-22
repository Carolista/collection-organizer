package org.launchcode.backend.models;
import javax.persistence.Entity;

@Entity
public class Item extends AbstractEntity {

    public Item(String title) {
        super(title);
    }

    public Item() {}


}
