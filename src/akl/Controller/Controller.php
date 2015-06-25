<?php

namespace AKL\Controller;

use AKL\Note\File as File;
use AKL\Note\Note as Note;
use AKL\Note\Collection as Collection;

use AKL\View\View as View;
use AKL\Renderer\NoteRenderer as Renderer;

use AKL\Parser\Parser as Parser;

use AKL\Rout as Rout;



class Controller
{
	public function index()
	{
		return View::render('index');
	}

	protected function handlePartial( $class, $render, $data = [] )
	{
		$isPartial = Rout::input('partial');

		if( $isPartial )
		{
			echo json_encode([
				"partial" => call_user_func( [$class, $render], $data )
			]);
		}
		else
		{
			$header = View::getPartial('header');
			$rendered = call_user_func([$class, $render], $data);
			$footer = View::getPartial('footer');

			echo $header . $rendered . $footer;
		}
	}
}