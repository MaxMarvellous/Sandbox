<?php
/**
 * Created by PhpStorm.
 * User: maxifeil
 * Date: 09.10.18
 * Time: 16:31
 */
    $quotes = " The Scandal of education is that every time 
                you teach something, you deprive a student of the pleasure 
                and benefit of discovery.
                (Seymour Papert, born February 29, 1928 died July 31 2016)
                If debugging is the process of removing bugs, then programming 
                must be the process of putting them in.
                (Edsger W. Dijkstra)";

    $words = preg_split("/\\W+\\s*/", $quotes);

    print_r($words);
    $wordCount = count($words);
    echo "There are {$wordCount} words in this text";

    $maxChars = "";
    for($i = 1; $i < count($words); $i ++){
        if (strlen($maxChars) < strlen($words[$i])){
            $maxChars = $words[$i];
        }
    }

    echo "\nThe longest word in the text is: {$maxChars}";
