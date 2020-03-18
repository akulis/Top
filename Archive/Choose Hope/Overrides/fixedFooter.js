angular.module("OrderCloud-FixedFooter", []);

angular
  .module("OrderCloud-FixedFooter")
  .directive("fixedfooter", fixedfooter)
  // .directive('orderbuttons', orderbuttons)
  .controller("FixedFooterCtrl", FixedFooterCtrl);

function fixedfooter() {
  var directive = {
    restrict: "E",
    template: template,
    controller: "FixedFooterCtrl"
  };
  return directive;

  function template() {
    return [
      "<style>", ``
      "body {margin-bottom: 0px;}",
      ".footFoot {margin-top: 400px;}",
      ".footerLogo {max-width: 100%;max-height: 100px;padding: 25px 0px;}",
      ".TopFooter {font-size: 13pt;margin-top: 0px;clear: both;background-color: #f5f5f5;height: 150px;width: 100%;bottom: 0px;padding: 25px 0px;}",
      ".TopxsFooter {margin-top: 0px;clear: both;background-color: #f5f5f5;height: 150px;bottom: 0px;padding: 25px 0px;}",
      ".TopxxsFooter {margin-top: 0px;clear: both;background-color: #f5f5f5;height: 250px;bottom: 0px;padding: 25px 0px;}",
      ".xsFootLeft {margin: 0px;padding: 0px 3px 0px 25px;float: left;width: 100%;max-width: 225px;}",
      ".xxsFootLeft {margin: 0px;padding: 0px 3px 0px 20px;float: left;width: 100%;max-width: 180px;}",
      ".xsFootRight {margin: 0px;padding-right: 10px;float: right;font-size: 2vw;}",
      ".xxsFootRight {margin: 0px;padding-right: 10px;float: right;font-size: 1.8vw;}",
      ".socialFooter {margin-top: 0px;clear: both;background-color: #094e67;height: 60px;width: 100%;bottom: 0px;padding: 10px 0px 0px 60px;}",
      ".socialFooterXS {margin-top: 0px;clear: both;background-color: #094e67;height: 100px;width: 100%;bottom: 0px;padding: 10px 0px 0px 60px;}",
      ".footLeft {margin: 0px;padding: 0px 3px 0px 55px;float: left;width: 100%;max-width: 300px;}",
      ".footRight {margin: 0px;padding-right: 25px;float: right;}",
      ".pageLinksSmall {color: #ffffff;font-size: 12px;padding: 11px 50px 0px 0px}",
      ".pageLinksLarge {color: #ffffff;font-size: 12px;padding: 11px 50px 0px 0px}",
      ".pageLinksSmall:hover,.pageLinksLarge:hover,.pageLinksSmall:focus,.pageLinksLarge:focus,.pageLinksSmall:visited,.pageLinksLarge:visited,.pageLinksSmall:active,.pageLinksLarge:active {color: #f5f5f5;}",
      //'.fixed-footer-bottom .pull-left a {font-size:2em; margin-right:0.5em;}',
      ".copyright-view {margin:0px; padding-bottom:150px;}",
      //'@media (max-width:767px) { .copyright-view {height: 300px !important; margin-top:25px; padding-top:0;} }',
      "</style>",
      '<nav>',
      '<div class="footFoot">',
      '<div class="TopFooter visible-sm visible-md visible-lg">',
      '<div class="footLeft">',
      '<a href="https://www.choosehope.com/" target="_blank"><img class="footerLogo" src="https://www.four51.com/Themes/Custom/cdde0792-3f36-497d-88eb-12c282cba5d2/Choose-Hope/images/LogowTagline.png" alt="Choose Hope" width="100%" /></a>',
      '</div>',
      '<div class="footRight">',
      '<p>Contact Customer Service</p>',
      '<p><i class="fa fa-phone"></i> 1.888.348.4673</p>',
      '<p><i class="fa fa-envelope"></i> <a href="mailto:info@choosehope.com?subject=Choose%20Hope%20Contact">info@choosehope.com</a></p>',
      '</div>',
      '</div>',
      '<div class="TopxsFooter visible-xs">',
      '<div class="xsFootLeft">',
      '<a href="https://www.choosehope.com/" target="_blank"><img class="footerLogo" src="https://www.four51.com/Themes/Custom/cdde0792-3f36-497d-88eb-12c282cba5d2/Choose-Hope/images/LogowTagline.png" alt="Choose Hope" width="100%" /></a>',
      '</div>',
      '<div class="xsFootRight">',
      '<p>Contact Customer Service</p>',
      '<p><i class="fa fa-phone"></i> 1.888.348.4673</p>',
      '<p><i class="fa fa-envelope"></i> <a href="mailto:info@choosehope.com?subject=Choose%20Hope%20Contact">info@choosehope.com</a></p>',
      '</div>',
      '</div>',
      //'<div class="TopxxsFooter visible-xxs">',
      //'<div class="xxsFootLeft">',
      //'<a href="https://www.choosehope.com/" target="_blank"><img class="footerLogo" src="https://www.four51.com/Themes/Custom/cdde0792-3f36-497d-88eb-12c282cba5d2/Choose-Hope/images/LogowTagline.png" alt="Choose Hope" width="100%" /></a>',
      //'</div>',
      //'<div class="xxsFootRight">',
      //'<p>Contact Customer Service</p>',
      //'<p><i class="fa fa-phone"></i> 1.888.348.4673</p>',
      //'<p><i class="fa fa-envelope"></i> <a href="mailto:info@choosehope.com?subject=Choose%20Hope%20Contact">info@choosehope.com</a></p>',
      //'</div>',
      //'</div>',
      '<div class="socialFooter visible-sm visible-md visible-lg">',
      '<a class="pull-left pageLinksLarge" href="shipping-policy">Shipping</a>',
      '<a class="pull-left pageLinksLarge" href="returns">Returns</a>',
      '<a class="pull-left pageLinksLarge" href="using-our-slogans">Choose Hope Designs and Trademarks</a>',
      '<a class="pull-left pageLinksLarge" href="privacy">Privacy Policy</a>',
      '</div>',
      '<div class="socialFooterXS visible-xs">',
      '<ul>',
      '<li><a class="pull-left pageLinksLarge" href="shipping-policy">Shipping</a></li>',
      '<li><a class="pull-left pageLinksLarge" href="returns">Returns</a></li>',
      '<li><a class="pull-left pageLinksLarge" href="using-our-slogans">Choose Hope Designs and Trademarks</a></li>',
      '<li><a class="pull-left pageLinksLarge" href="privacy">Privacy Policy</a></li>',
      '</ul>',
      '</div>',
      '</div>',
      '</nav>'
    ].join("");
  }
}

// function orderbuttons() {
//     var directive = {
//         restrict: 'E',
//         template: template,
//         link: function(scope, element, attrs) {
//             attrs.$observe('continue', function(val) {
//                 scope.continue = val == 'true' ? true : false;
//             });
//
//             attrs.$observe('view', function(val) {
//                 if (val) {
//                     var view;
//                     switch (val) {
//                         case 'cart':
//                             view = 'cart'
//                             break;
//                         case 'checkout':
//                             view = 'checkout';
//                             break;
//                         default:
//                             break;
//                     }
//                     scope.view = 'partials/controls/' + (view == 'cart' ? 'cartButtons.html' : 'checkoutButtons.html');
//                 }
//             });
//         }
//     };
//     return directive;
//
//     function template() {
//         return [
//             '<style>',
//             'orderbuttons {width:100%; margin:0 auto;}',
//             '.navbar-fixed-bottom {position:relative;}',
//             'orderbuttons li {width:25%;float:left; padding-right:10px; }',
//             'orderbuttons .btn {border-radius:0; width:100%; margin:0 5px;}',
//             'orderbuttons btn:nth-of-type(4) {margin-right:0; }',
//             '@media (max-width:767px) { orderbuttons li {width:100%;} }',
//             '@media (max-width:767px) { orderbuttons .btn {border-radius:0;width:100%; margin:5px 0;} }',
//             '</style>',
//             '<ul ng-include="view"></ul>'
//         ].join('');
//     }
// }

FixedFooterCtrl.$inject = ["$scope", "$location"];

function FixedFooterCtrl($scope, $location) {
  var d = new Date();
  $scope.year = d.getFullYear();

  /*below functions from NavCtrl.js in case navigation is used in the footer*/
  $scope.isActive = function(path) {
    var cur_path = $location.path().replace("/", "");
    var result = false;

    if (path instanceof Array) {
      angular.forEach(path, function(p) {
        if (p == cur_path && !result) result = true;
      });
    } else {
      if (cur_path == path) result = true;
    }
    return result;
  };

  //extension of above isActive in path
  $scope.isInPath = function(path) {
    var cur_path = $location.path().replace("/", "");
    var result = false;

    if (cur_path.indexOf(path) > -1) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };
}