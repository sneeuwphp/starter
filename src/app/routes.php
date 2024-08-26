<?php

use Sneeuw\Routing\RouteBag;

return function (RouteBag $routes) {
    $routes->get('/', fn () => 'hello world');
};
