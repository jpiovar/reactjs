package applayer;

public class User {
    public boolean isJankoHrasko(String firstName, String lastName) {
        if(firstName.equals("Janko") && lastName.equals("Hrasko")){
            return true;
        } else {
            return false;
        }
    }
}
