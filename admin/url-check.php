<?php
$file = 'https://www.awin1.com/cread.php?awinmid=13684&awinaffid=731132';
$file_headers = @get_headers($file);
$content = file_get_contents($file);
if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
    echo "NOT FOUND";
}
else {
    if (str_contains($content, 'This link is inactive')) {
        echo "INACTIVE";
    }
}
?>