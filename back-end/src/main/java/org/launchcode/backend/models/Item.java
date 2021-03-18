package org.launchcode.backend.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;
import java.util.Objects;
import javax.persistence.*;
//import javax.validation.constraints;

public class Item {


    private int id;

        //    public imagePath: string;
//    public category: string;
    private String category;
//    public keywords: string[];
//    public title: string;


    private String title;
    //    public countryCreator: string;
    //    public year: number;
    private int year;
        //    public condition: string;
        //    public media: string;
    private String media;
        //    public description: string;
    private String description;
//    public references: string;
//


        public Item(int id, String category, String title, int year, String media, String description) {
            this.id = id;
            this.category = category;
            this.title = title;
            this.year = year;
            this.media = media;
            this.description = description;
        }

        public Item() {}

        public int getId() {
            return id;
        }

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public int getYear() {
            return year;
        }

        public void setYear(int year) {
            this.year = year;
        }

        public String getMedia() {
            return media;
        }

        public void setMedia(String media) {
            this.media = media;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            org.launchcode.backend.models.Item item = (org.launchcode.backend.models.Item) o;
            return id == item.id &&
                    year == item.year &&
                    Objects.equals(category, item.category) &&
                    Objects.equals(title, item.title) &&
                    Objects.equals(media, item.media) &&
                    Objects.equals(description, item.description);
        }

        @Override
        public int hashCode() {
            return Objects.hash(id, category, title, year, media, description);
        }



// item repository - anna
// item controller - chandler
// item class - tara
// decide what goes into each class, then filter/create AbstractEntity from there --> look in github at Anya's form for reference
// repl.it - github

}


// item repository - anna
// item controller - tara
// item class - chandler
// decide what goes into each class, then filter/create AbstractEntity from there --> look in github at Anya's form for reference
// repl.it - github