package org.launchcode.backend.models;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Category extends AbstractEntity{

    @OneToMany
    @JoinColumn(name="category")
    private List<Item> items = new ArrayList<>();

    public Category(String title) {
        super(title);
    }

    public Category() {
    }

    public List<Item> getItems() {
        return items;
    }

}
