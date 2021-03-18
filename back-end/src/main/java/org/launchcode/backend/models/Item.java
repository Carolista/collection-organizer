package org.launchcode.backend.models;




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

    //continue working on ItemController to do's - reference Anya's updated form/class
    //research how public vs private fields when hooking FE to BE
    //research URL as fields in java

}
