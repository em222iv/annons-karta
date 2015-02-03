<?php
session_start();
include('Requests/library/Requests.php');
/**
 * Created by PhpStorm.
 * User: erikmagnusson
 * Date: 02/12/14
 * Time: 14:44
 */
new APISearch();

class APISearch {
    function __construct(){
       /* var_dump($_SESSION['csrf']);
        var_dump($_REQUEST["token"]);*/
        if($_REQUEST["token"] === $_SESSION['csrf']){
            Requests::register_autoloader();

            $searchquery = $_REQUEST['name'];
            $category = $_REQUEST['category'];
            $region = $_REQUEST['region'];
            strip_tags($searchquery);
            $searchRequest = Requests::get("http://apfy.me/www.blocket.se/burken/Search?q=".$searchquery."&ca=".$region."&cg=".$category."&w=1&st=s&o=1&sp=0",array('x-apfy-authorization' => 'd42a86af-0176-4551-87f4-bc4089433664','x-apfy-accept' => 'application/json'));
            echo $searchRequest->body;
        }else {
            echo 'Token does not match';
            die();
        }
    }
}
