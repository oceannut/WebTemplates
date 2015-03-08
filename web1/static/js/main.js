'use strict';

define(function (require) {

    var home = require('./home');
    var product = require('./product');
    var aboutus = require('./about-us');

    return {

        init: function () {

//            $(".nav-links > li > a").click(function (e) {
//                e.preventDefault();
//                var $div = $("<div/>");
//                $($div).load($(this).attr("href"), function () {
//                    $(".story .content").html($div.html());
//                });
//            });

            $('#home-link').click(function (e) {
                e.preventDefault();
                var $div = $("<div/>");
                $($div).load('app/home.htm', function () {
                    $(".story .content").html($div.html());
                    home.init();
                });
            });

            $('#product-link').click(function (e) {
                e.preventDefault();
                var $div = $("<div/>");
                $($div).load('app/product.htm', function () {
                    $(".story .content").html($div.html());
                    product.init();
                });
            });

            $('#aboutus-link').click(function (e) {
                e.preventDefault();
                var $div = $("<div/>");
                $($div).load('app/about-us.htm', function () {
                    $(".story .content").html($div.html());
                    aboutus.init();
                });
            });

            $(".story .content").load('app/home.htm', function () {
                home.init();
            });

        }
    }

});

