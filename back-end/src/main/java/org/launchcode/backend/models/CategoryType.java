package org.launchcode.backend.models;

public enum CategoryType {

    ARTS("Fine Arts"),
    CULTURE("Culture"),
    DECORATIVE("Decorative Arts"),
    MACHINES("Machines & Transport"),
    TEXTILES("Fashion & Textiles"),
    HISTORY("Natural History");

    private final String displayName;

    CategoryType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

}
