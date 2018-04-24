package helper;
public class Helper {

    public int foo(int a,int b){
        return a+b;
    }

    public boolean isContaining(String[] arr, String item) {
        Boolean res = false;
        for (int i = 0; i < arr.length; ++i) {
            if(arr[i].equals(item)){
                res = true;
                break;
            }
        }
        return res;
    }


}