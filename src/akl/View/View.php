<?php

namespace AKL\View;

class View
{
	public function __construct(  )
	{

	}

	public static function render( $viewName, $data = [] )
	{
		$path = $_SERVER['DOCUMENT_ROOT'] . "/views/_" . $viewName . ".php";
		extract($data);

		if( file_exists($path) )
			include $path;
	}

	public static function partial( $partialName, $data = [] )
	{
		$path = $_SERVER["DOCUMENT_ROOT"] . "/views/partials/_" . $partialName . ".php";
		extract($data);
		
		if( file_exists($path) )
			include $path;
	}

	public static function getPartial($partialName, $data = [])
	{
		ob_start();
			self::partial($partialName, $data);

			$contents = ob_get_contents();
		ob_end_clean();

		return $contents;
	}
}