 $(document).ready(function($) {
     "use strict"

     $("body").imagesLoaded(function() {
         $("body").addClass("loading-done");
         var $animatedWaves = $(".ts-animated-waves");
         $animatedWaves.css("transform", "translateX( calc( -100% + " + ($(window).width() + 5) + "px )");
         $animatedWaves.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
             $(this).toggleClass("repeat");
         });
     });

     $(".ts-shapes-canvas .ts-background-image").each(function() {
         var $this = $(this);
         $this.css({
             "animation-duration": (Math.floor(Math.random() * 10) + 5) + "s"
         });
         $this.wrap('<div class="ts-shape"></div>');
         if ($this.attr('data-bg-opacity')) {
             $this.css("opacity", $this.attr('data-bg-opacity'));
         }
     });

     //  Background

     $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
         var $this = $(this);

         if ($this.hasClass("ts-separate-bg-element")) {
             $this.append('<div class="ts-background">');

             // Background Color

             if ($("[data-bg-color]")) {
                 $this.find(".ts-background").css("background-color", $this.attr("data-bg-color"));
             }
             // Background Image

             if ($this.attr("data-bg-image") !== undefined) {
                 $this.find(".ts-background").append('<div class="ts-background-image">');
                 $this.find(".ts-background-image").css("background-image", "url(" + $this.attr("data-bg-image") + ")");
                 $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size"));
                 $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position"));
                 $this.find(".ts-background-image").css("opacity", $this.attr("data-bg-image-opacity"));

                 $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size"));
                 $this.find(".ts-background-image").css("background-repeat", $this.attr("data-bg-repeat"));
                 $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position"));
                 $this.find(".ts-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode"));
             }

             // Parallax effect

             if ($this.attr("data-bg-parallax") !== undefined) {
                 $this.find(".ts-background-image").addClass("ts-parallax-element");
             }
         } else {

             if ($this.attr("data-bg-color") !== undefined) {
                 $this.css("background-color", $this.attr("data-bg-color"));
                 if ($this.hasClass("btn")) {
                     $this.css("border-color", $this.attr("data-bg-color"));
                 }
             }

             if ($this.attr("data-bg-image") !== undefined) {
                 $this.css("background-image", "url(" + $this.attr("data-bg-image") + ")");

                 $this.css("background-size", $this.attr("data-bg-size"));
                 $this.css("background-repeat", $this.attr("data-bg-repeat"));
                 $this.css("background-position", $this.attr("data-bg-position"));
                 $this.css("background-blend-mode", $this.attr("data-bg-blend-mode"));
             }

         }
     });
 });