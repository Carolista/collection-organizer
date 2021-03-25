package org.launchcode.backend.models;

import javax.persistence.ManyToMany;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

public class Keyword {

    @Size(max = 500, message = "Description too long!")
    private String description;

    @ManyToMany(mappedBy="keywords")
    private List<Item> items = new ArrayList<>();

    public Keyword(@Size(max = 500, message = "Description too long!") String description, List<Item> items) {
        this.description = description;
    }

    public Keyword() {}

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Item> getItems() {
        return items;
    }

}
