<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_theme_style');

function enqueue_parent_theme_style() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}

add_action( 'wp_enqueue_scripts', 'my_custom_script_load' );

function my_custom_script_load(){
  wp_enqueue_script( 'my-custom-script', get_stylesheet_directory_uri() . '/js/my-script.js', array( 'jquery' ) );
}