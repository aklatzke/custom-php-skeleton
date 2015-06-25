<?php

use AKL\Controllers\NotesController;

AKL\Rout::routeCollection([
	"/" => [
		'action' => 'AKL\Controller\Controller::index'
	],
]);

AKL\Rout::runRoute($_SERVER['REQUEST_URI']);