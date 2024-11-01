<?php
/**
 * Adds Zervise widget.
 */
 class Zervise_Widget extends WP_Widget {
  
    /**
     * Register widget with WordPress.
     */
    function __construct() {
      parent::__construct(
        'zervise_widget', // Base ID
        esc_html__( 'Zervise Support for WordPress', 'zervise_domain' ), // Name
        array( 'description' => esc_html__( 'Widget for zervise.com', 'zervise_domain' )) // Args
      );
    }
  
    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {
      echo $args['before_widget']; // Whatever you want to display before widget (<div>, etc)

      if ( ! empty( $instance['title'] ) ) {
        echo $args['before_title'] . apply_filters( 'widget_title', 'Zervise' ) . $args['after_title'];
      }

      $class = "zervise-btn-3";
      if($instance["position"] == "1")
        $class = "zervise-btn-1";
      else if($instance["position"] == "2")
        $class = "zervise-btn-2";
      else $class = "zervise-btn-3";

      if($instance["accepted"] === 'on'){
        $current_user = wp_get_current_user();

        $current_user_id = $current_user->id;
        $current_user_email = $current_user->user_email;
        $current_user_name = $current_user->user_login;

        $subdomain_url = $instance['subdomain'].'domain?wordpress_id='.$current_user_id.'&wordpress_email='.$current_user_email.'&wordpress_name='.$current_user_name;

        // Widget Content Output
        // echo '<a href="'.$subdomain_url.'" data-user-email="'.$current_user_email.'" data-user-name="'.$current_user_name.'" data-user-register-date="'.$current_user_resgister_date.'" target="_blank" class="zervise-btn">Visit My Zervise Site</a>';
        if($current_user_id and $current_user_email){
          echo '<button class="zervise-btn '.$class.'" data-subdomain="'.$instance['subdomain'].'" data-user-email="'.$current_user_email.'" data-user-id="'.$current_user_id.'" data-user-name="'.$current_user_name.'"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" class="fa-svg-md svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg> &nbsp;Need Support</button>';
        } else {
          echo '<button class="zervise-btn '.$class.' not-accepted" title="Please login to WordPress for using the widget." data-subdomain="'.$instance['subdomain'].'" disabled><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" class="fa-svg-md svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg> &nbsp;Login to enable widget</button>';
        }
      } else {
        echo '<button class="zervise-btn '.$class.' not-accepted" title="Please agree to our Terms & Conditions to use the widget." data-subdomain="'.$instance['subdomain'].'" disabled><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" class="fa-svg-md svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg> &nbsp;Agree to enable widget</button>';
      }

      echo $args['after_widget']; // Whatever you want to display after widget (</div>, etc)
    }
  
    /**
     * Back-end widget form.
     *
     * @see WP_Widget::form()
     *
     * @param array $instance Previously saved values from database.
     */
    public function form( $instance ) {
      $subdomain = ! empty( $instance['subdomain'] ) ? $instance['subdomain'] : esc_html__( 'https://zervise.com/', 'zervise_domain' ); 

      $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Zervise', 'zervise_domain' ); 

      $position = ! empty( $instance['position'] ) ? $instance['position'] : esc_html__( "3", 'zervise_domain' );

      $accepted = ! empty( $instance['accepted'] ) ? $instance['accepted'] : esc_html__( "off", 'zervise_domain' ); 
      ?>

      
      
      
      <!-- SUBDOMAIN -->
      <p>
        <label for="<?php echo esc_attr( $this->get_field_id( 'subdomain' ) ); ?>">
          <?php esc_attr_e( 'Zervise Subdomain URL', 'zervise_domain' ); ?>
        </label>

        <input 
          class="widefat" 
          id="<?php echo esc_attr( $this->get_field_id( 'subdomain' ) ); ?>" 
          name="<?php echo esc_attr( $this->get_field_name( 'subdomain' ) ); ?>" 
          type="text" 
          value="<?php echo esc_attr( $subdomain ); ?>">
      </p>
      <p><span style="font-weight: bold;">NOTE:</span> Make sure the URL ends with a "slash" i.e. "/"</p>
      <p>
        <label for="<?php echo esc_attr( $this->get_field_id( 'position' ) ); ?>">
          <?php esc_attr_e( 'Position of widget on screen', 'zervise_domain' ); ?>
        </label>

        <select 
          class="widefat" 
          id="<?php echo esc_attr( $this->get_field_id( 'position' ) ); ?>" 
          name="<?php echo esc_attr( $this->get_field_name( 'position' ) ); ?>" 
        >
          <option 
            value="1" 
            <?php if ($instance['position'] == "1") echo "selected='selected'";?> >
            Bottom Left
          </option>
          <option 
            value="2" 
            <?php if ($instance['position'] == "2") echo "selected='selected'";?> >
            Bottom Middle
          </option>
          <option 
            value="3" 
            <?php if ($instance['position'] == "3") echo "selected='selected'";?> >
            Bottom Right
          </option>
        </select>
      </p>
      <p>
        <input 
          class="widefat" 
          id="<?php echo esc_attr( $this->get_field_id( 'accepted' ) ); ?>" 
          name="<?php echo esc_attr( $this->get_field_name( 'accepted' ) ); ?>" 
          type="checkbox" 
          <?php checked( $instance[ 'accepted' ], 'on' ); ?>
          >
        <label for="<?php echo esc_attr( $this->get_field_id( 'accepted' ) ); ?>">
        I agree to share <b>wordpress-id</b>, <b>email-id</b> and <b>username</b> to the zervise.com and show my zervise link in my website as per MSA, <a href="https://www.zervise.com/terms" target="_blank">Terms & Conditions</a> and <a href="https://www.zervise.com/privacy" target="_blank">Privacy Policy</a>.
        </label>
      </p>
      <?php 
    }
  
    /**
     * Sanitize widget form values as they are saved.
     *
     * @see WP_Widget::update()
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     */
    public function update( $new_instance, $old_instance ) {
      $instance = array();

      $instance['subdomain'] = 
        (!empty( $new_instance['subdomain']) and 
        (strpos($new_instance['subdomain'], 'https://') === 0) and 
        (strpos($new_instance['subdomain'], '.zervise.com/') === strlen($new_instance['subdomain']) - 13)) 
          ? strip_tags( $new_instance['subdomain'] ) 
          :( (!empty( $old_instance['subdomain']))
              ? $old_instance['subdomain']
              : 'https://zervise.com/');

      $instance['position'] = $new_instance['position'];
      $instance[ 'accepted' ] = $new_instance[ 'accepted' ];
  
      return $instance;
    }
  
  } // class Zervise_Widget