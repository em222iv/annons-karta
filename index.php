<?php
session_start();
//ini_set('include_path', 'C:\xampp\htdocs\phppot_samples\php_google_oauth_login\google-api-php-client\src');
require_once('getBaseInfo.php');
function getToken() {
    $_SESSION['csrf'] = substr(hash('sha512',uniqid(rand(),true)),0,15);
    return $_SESSION['csrf'];
}
?>
<!DOCTYPE>
<html MANIFEST="manifest.appcache">
<head>
    <meta name="viewport" charset="UTF-8" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
    <link href="css/style.css" rel="stylesheet">

    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>

    <style>
        .DemoBS2{
            margin:20px;
        }

    </style>
</head>
<body>
<div id="wrapper" class="">
    <div id="sidebar-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <form action="#" method="post">
                    <div class="input-group" id="input-container">
                        <input  id="searchInput" type="text" name="name" class="form-control">
                         <span class="input-group-btn">
                            <input class=" btn btn-default"type="button" id="searchButton" value="Sök!" />
                        </span>
                    </div>
                    <input type="hidden"  name="TOKEN" id="token" value="<?php echo getToken() ?>" />
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                        Län
                        <span class="caret"></span>
                    </button>
                    <ul id="region-dropdown" class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
                    </ul>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="true">
                        Kategorier
                        <span class="caret"></span>
                    </button>
                    <ul id="category-dropdown" class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
             <div id="fb-login">
                <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
                </fb:login-button>
             </div>
            <div id="status"></div>
            <div
                class="fb-like"
                data-share="true"
                data-width="450"
                data-show-faces="true">
            </div>
            </div>
        </div>
        <div class="DemoBS2">
            <div class="panel-group" id="accordion">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion"
                               href="#accordionOne">
                                Senast besökta artiklar
                            </a>
                        </h4>
                    </div>
                    <div id="accordionOne" class="panel-collapse collapse in">
                        <div class="panel-body" id="browsList">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="page-content-wrapper">
        <a href="#" class="btn btn-default" id="menu-toggle">Menu</a>
        <a href="#" class="btn btn-default" id="info-popup">Info</a>
        <div id="info-container"></div>
        <div id="map-canvas"></div>
    </div>

</div>
<script src="js/connectionStatus.js"></script>
<script src="js/presentBrowseHistory.js"></script>
<script src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCN3etb_MUZAn64OCBYr8_DUQt-hFTUDzA"></script>
<script src="js/googleMap.js"></script>
<script src="js/dropdownfunctionality.js"></script>
<script src="js/areaListsAppender.js"></script>
<script src="js/PresentChosenSearchQuery.js"></script>
<script src="js/searchButtonClickEvent.js"></script>
<script src="js/jqueries.js"></script>
<script src="js/searchLocations.js"></script>
<script src="js/facebookLogin.js"></script>
<script src="js/previousFilteringChoices.js"></script>
</body>
</html>
