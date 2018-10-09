package at.fhj.swd;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
	    String quotes = "The Scandal of education is that every time " +
            "    you teach something, you deprive a student of the pleasure" +
            "    and benefit of discovery." +
            "    (Seymour Papert, born February 29, 1928 died July 31 2016)" +
            "    If debugging is the process of removing bugs, then programming" +
            "    must be the process of putting them in." +
            "    (Edsger W. Dijkstra)";

        String[] words = quotes.split("\\W+\\s*");

        System.out.println(quotes);
        System.out.println();
        System.out.println("=====================");
        System.out.println();
        System.out.println(Arrays.toString(words));
        System.out.println("There are " + words.length + " words in this text");

        String maxChars = "";
        for (String word : words) {
            if (maxChars.length() < word.length()){
                maxChars = word;
            }
        }

        System.out.println("The longest word in the text is: " + maxChars);

    }
}
