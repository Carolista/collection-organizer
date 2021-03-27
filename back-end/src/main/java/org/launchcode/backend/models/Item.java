package org.launchcode.backend.models;
import javax.persistence.Entity;
import javax.validation.constraints.Size;

@Entity
public class Item extends AbstractEntity {

    private String imagePath;
    private String creator;

//    @NotNull(message="Category required")
//    @ManyToOne
//    private Category category;
//
//    @ManyToMany
//    private List<Keyword> keywords = new ArrayList<>();


    private int yearCreated;
    private String placeOfOrigin;
    private int yearAcquired;
    private String condition;
    private String mediaType;

    @Size(max = 500, message = "Description too long!")
    private String description;

    private String references;

    public Item(String title) {
        super(title);
    }

    public Item() {}


}
