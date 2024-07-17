<?php

use Sneeuw\Application;
use Sneeuw\Http\Request;

$requestUri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
if ($requestUri !== '/' && file_exists(__DIR__.$requestUri)) {
    header('Content-Type: text/css');
    readfile(__DIR__.$requestUri);

    return true;
}

// Register the Composer autoloader
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Sneeuw and handle the request
$app = (new Application())
    ->withFileBasedRoutes(
        pages: realpath(__DIR__.'/../src/pages'),
        components: realpath(__DIR__.'/../src/components')
    );

$app->handle(Request::capture());
