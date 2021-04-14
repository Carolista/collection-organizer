package org.launchcode.backend.models;

public enum CultureSubcategoryType {

    COLLECTIBLES ("Collectibles (Figurines/toys/misc.)"),
    EPHEMERA ("Ephemera (Autographs/Advertising/Posters/etc.)"),
    NUMISMATICS ("Numismatics/Coins and medals/Monies"),
    MILITARY("Military and Wartime"),
    PHILATELY("Philately/Stamps"),
    SPORTS("Sports"),
    POLITICAL("Political/Fraternal/Organizational"),
    BREWERIANA("Breweriana/Tobacciana/Petroliana"),
    ENTERTAINMENT("Entertainment media (music/movies/video games)"),
    PRINT("Print entertainment media (Comics/Books/Newspapers)");

    private final String displayName;

    CultureSubcategoryType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

}
