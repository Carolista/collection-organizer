package org.launchcode.backend.models;
import javax.persistence.Entity;

@Entity
public class Item extends AbstractEntity {

    public String imagePath; //will be URL



    public Item(String title, String imagePath) {
        super(title);
        this.imagePath = imagePath;
    }

    public Item() {}

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

}
