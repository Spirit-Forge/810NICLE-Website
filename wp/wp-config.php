<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tronec_810_wp' );

/** Database username */
define( 'DB_USER', 'tronec_810_wp' );

/** Database password */
define( 'DB_PASSWORD', '0J2O1lk6yA9UWSJU' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(pO5qvZXqkk.KqCB9[}%_Gl=T?qZQ+}w7@(X%3:8su~V]8/aQw}V`r._KP[pE/)8' );
define( 'SECURE_AUTH_KEY',  'Bk1)s.L%4e@1,fQkKG|H97WnNFEzbW;)eH|#Kg4XUgdA>4zRjv!BnaiTrC^U7+/]' );
define( 'LOGGED_IN_KEY',    '!R{pNi$L]J9~g|^sGMqPoyo#YfB $I6*!|{:eJi!w[S4[ysqIK:C r4|uo],?f,<' );
define( 'NONCE_KEY',        '{}Ib>_yq~dT(t~<66J2-,8?*g<+`c wIey.H_<o,SR(pTvMC^FO3H>{y#u&DP)F1' );
define( 'AUTH_SALT',        '{!w&_.W V(Lkdo-)qSc2MAn]nqy3,3r;zl {<)u::v?IH`!DwR-_h}]K!vE-/}v`' );
define( 'SECURE_AUTH_SALT', '2+ 0{}XB85m,YohU}r(BJ%/A3XM|a>skTm$PCF{O?Loj~rN=4m-DJ.Lo4[-y-QYT' );
define( 'LOGGED_IN_SALT',   '.&oV&g;O]>o5ww=KDq`oF p|qY9+y^Ea!E]i4wn.H1!dt~6S,PvmxOxj*2KxIlZ>' );
define( 'NONCE_SALT',       '%eg`+_e!xd=ObT[]GqFHaV6cd?clN>yIgo=$rWUumf>Ut65W<7esc)Fv=pi/Hh_<' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
