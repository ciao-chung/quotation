<?php

function parseHeaders( $headers ) {
    $head = array();
    foreach( $headers as $k=>$v ) {
        $t = explode( ':', $v, 2 );
        if( isset( $t[1] ) )
            $head[ trim($t[0]) ] = trim( $t[1] );
        else {
            $head[] = $v;
            if( preg_match( "#HTTP/[0-9\.]+\s+([0-9]+)#",$v, $out ) )
                $head['reponse_code'] = intval($out[1]);
        }
    }
    return $head;
}

$ssrHost = 'https://ssr.server';

$host = $_SERVER["REQUEST_SCHEME"].'://'.$_SERVER["SERVER_NAME"];
$user_agent = urlencode($_SERVER['HTTP_USER_AGENT']);
$port = '';

if($_SERVER["REQUEST_SCHEME"] == 'http' && $_SERVER["SERVER_PORT"] != 80){
    $port = ':'.$_SERVER["SERVER_PORT"];
}

if($_SERVER["REQUEST_SCHEME"] == 'https' && $_SERVER["SERVER_PORT"] != 443){
    $port = ':'.$_SERVER["SERVER_PORT"];
}
$requestUrl = $host.$port.$_SERVER['REQUEST_URI'];
$result = file_get_contents($ssrHost.'/'.$requestUrl);

foreach($http_response_header as $headerLine) {
    header($headerLine);
}
http_response_code(parseHeaders($http_response_header)['response-code']);
echo $result;