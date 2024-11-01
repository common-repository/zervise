<?php
// Adds Scripts
function zervise_add_scripts()
{
  // Adds Socket io Script
  wp_register_script('socketio', 'https://cdn.jsdelivr.net/npm/socket.io-client@4.1.2/dist/socket.io.js');
  wp_enqueue_script('socketio');

  // Adds Main CSS
  wp_enqueue_style('yts-main-style', plugin_dir_url(__FILE__) . 'css/style.css', array(), null, 'all');
  // Adds Main JS
  wp_enqueue_script('yts-main-script', plugin_dir_url(__FILE__) . 'js/main.js', array(), null, 'all');
}

add_action('wp_enqueue_scripts', 'zervise_add_scripts');
