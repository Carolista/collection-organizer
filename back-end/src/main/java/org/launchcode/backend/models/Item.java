package org.launchcode.backend.models;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Item extends AbstractEntity {

    private String imagePath;
    private String creator;

    @NotNull(message="Category required")
    @ManyToOne
    private Category category;

    @NotNull(message="Subcategory required")
    @ManyToOne
    private SubCategory subCategory;

    private int yearCreated;
    private String placeOfOrigin;
    private int yearAcquired;
    private String condition;
    private String mediaType;

    @Size(max = 500, message = "Description too long!")
    private String description;

    private String references;

    public Item(String title, String imagePath, String creator, Category category, SubCategory subCategory,
                int yearCreated, String placeOfOrigin, int yearAcquired, String condition, String mediaType,
                String description, String references) {
        super(title);
        this.imagePath = imagePath;
        this.creator = creator;
        this.category = category;
        this.subCategory = subCategory;
        this.yearCreated = yearCreated;
        this.placeOfOrigin = placeOfOrigin;
        this.yearAcquired = yearAcquired;
        this.condition = condition;
        this.mediaType = mediaType;
        this.description = description;
        this.references = references;
    }

    public Item() {
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public SubCategory getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(SubCategory subCategory) {
        this.subCategory = subCategory;
    }

    public int getYearCreated() {
        return yearCreated;
    }

    public void setYearCreated(int yearCreated) {
        this.yearCreated = yearCreated;
    }

    public String getPlaceOfOrigin() {
        return placeOfOrigin;
    }

    public void setPlaceOfOrigin(String placeOfOrigin) {
        this.placeOfOrigin = placeOfOrigin;
    }

    public int getYearAcquired() {
        return yearAcquired;
    }

    public void setYearAcquired(int yearAcquired) {
        this.yearAcquired = yearAcquired;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getReferences() {
        return references;
    }

    public void setReferences(String references) {
        this.references = references;
    }
}
