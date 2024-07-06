<?php

use Sneeuw\Application;
use Sneeuw\Http\Request;

// Register the Composer autoloader
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Sneeuw and handle the request
$app = (new Application())
    ->withFileBasedRoutes(
        __DIR__.'/../src/pages'
    );

$app->handle(Request::capture());
