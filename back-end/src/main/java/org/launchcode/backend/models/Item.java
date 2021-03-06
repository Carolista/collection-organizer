package org.launchcode.backend.models;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Item extends AbstractEntity {

    @NotBlank(message="Title is required.")
    @Size(min=3, max=100, message="Name must be between 3 and 100 characters.")
    public String title;

    private String imagePath;

    @NotNull(message="Category required")
//    @ManyToOne
    private String category;

    @NotNull(message="Subcategory required")
//    @ManyToOne
    private String subCategory;

    @Size(max = 500, message = "Description too long!")
    private String description;

    private String creator;
    private int yearCreated;
    private String placeOfOrigin;
    private int yearAcquired;
    private String cond;
    private String mediaType;
    private String refs;

    public Item(String title, String imagePath, String category, String subCategory, String description,
                String creator, int yearCreated, String placeOfOrigin, int yearAcquired, String cond,
                String mediaType, String refs) {
        this.title = title;
        this.imagePath = imagePath;
        this.category = category;
        this.subCategory = subCategory;
        this.description = description;
        this.creator = creator;
        this.yearCreated = yearCreated;
        this.placeOfOrigin = placeOfOrigin;
        this.yearAcquired = yearAcquired;
        this.cond = cond;
        this.mediaType = mediaType;
        this.refs = refs;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
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

    public int getYearCreated() {
        return yearCreated;
    }

    public void setYearCreated(int yearCreated) {
        this.yearCreated = yearCreated;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubCategory() {
        return subCategory;
    }



    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }




    public String getCond() {
        return cond;
    }

    public void setCond(String cond) {
        this.cond = cond;
    }

    public String getRefs() {
        return refs;
    }

    public void setRefs(String references) {
        this.refs = refs;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
