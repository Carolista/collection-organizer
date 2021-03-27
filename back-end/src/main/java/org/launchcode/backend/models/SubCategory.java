package org.launchcode.backend.models;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class SubCategory extends AbstractEntity {

    @OneToMany
    @JoinColumn(name="subcategory")
    private List<Item> items = new ArrayList<>();

    public SubCategory(String title, List<Item> items) {
        super(title);
        this.items = items;
    }

    public SubCategory() {
    }
}
