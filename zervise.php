<?php
/*
Plugin Name: Zervise Support for WordPress
Plugin URI: https://zervise.com
Description: Zervise Support for WordPress is the best way to give your customers support right from your site.
Version: 1.1.0
Author: Zervise
Author URI: https://zervise.com
*/

// Exit if accessed directly
if(!defined('ABSPATH')){
  exit;
}

// Loads Scripts
require_once(plugin_dir_path(__FILE__).'/includes/zervise-scripts.php');

// Loads Class
require_once(plugin_dir_path(__FILE__).'/includes/zervise-class.php');

// Registers Widget
function register_zervise(){
  register_widget('Zervise_Widget');
}

// Hook in function
add_action('widgets_init', 'register_zervise');