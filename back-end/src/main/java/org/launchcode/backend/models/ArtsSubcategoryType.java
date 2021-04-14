package org.launchcode.backend.models;

public enum ArtsSubcategoryType {

    PAINTING("Painting"),
    SCULPTURE("Sculpture"),
    PRINTS("Prints/Photographs/Drawings/Digital European"),
    AFRICAN("Africa/Oceania/Pre-Columbian Americas/Native American/Aboriginal Asian"),
    EASTERN("Near and Middle Eastern"),
    AMERICAN("American"),
    PRETWENTIETH("Pre-20th Century"),
    MODERN("Modern/Contemporary");

    private final String displayName;

    ArtsSubcategoryType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

}
