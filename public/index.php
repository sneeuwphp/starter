<?php

use Sneeuw\Application;
use Sneeuw\Http\Request;

require __DIR__.'/../vendor/autoload.php';

$app = (new Application(root: __DIR__))
    ->withFileBasedRoutes(
        pages: __DIR__.'/../src/pages'
    )
    ->withTraditionalRoutes(
        pages: __DIR__.'/../src/app/routes.php'
    );

$app->handle(Request::capture());
