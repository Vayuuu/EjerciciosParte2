function calculaTiempo($fechaInicio,$fechaFin){
	$datetime1 = date_Create($fechaInicio);
	$datetime2 = date_Create($fechaFin);
	$interval = date_diff($datetime1,$datetime2);

	$tiempo=array();

	foreach($interval as $valor){
		$tiempo[]=$valor
	}

	return $tiempo;
}