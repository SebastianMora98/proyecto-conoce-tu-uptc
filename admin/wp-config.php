<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'conocetuuptcdb' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'x*nA)vT*ecu@lL5)g-s982)fv;EzRvJS+!(k0#coJ3Q|Xb,6fqZ(VaQp5|Cb+a7W' );
define( 'SECURE_AUTH_KEY',  '61p3qRJVOl%J~s8q!A=wJDGA9bQLe2X%-P:HG6_vA:nAd)uBJF77R8#2ba#s4b!<' );
define( 'LOGGED_IN_KEY',    'Uqz`PJ60rLT/]oFDbdhBq,NPTXhknns &@K5KQQF|7D0C)5G(Ht1&,IU[|)PL-`1' );
define( 'NONCE_KEY',        'JX>V&)xD>|+qB|S$L+w&X9(HXWf2DZa[67-Y]E +N?i=oQ-f_|9T6=*pG-U%YDLN' );
define( 'AUTH_SALT',        'f@ho=SS0 a4+ERlkNN+6# I_[+BsP!!(. [)$qy9[*HbDv5pb Uk*N/h82becs=F' );
define( 'SECURE_AUTH_SALT', '~.pF]jaJ>k}3d{h7RQr|6u;^=|;_RKJ7W?c2biqj*wi&ACZu^z><(fsp}_Ade>V|' );
define( 'LOGGED_IN_SALT',   ' 2[UFc,z6+JQWL%N|(:-3>wC`nMli@EI?nwcEgc1J#/WcBif^UfsW(nwR(/mr{eu' );
define( 'NONCE_SALT',       '7Y5tRbck&|Iu9KQI^)X_vhC9}rIYC74kR=+}aX$V,o1X|^h@p<}KB_%0}uzaeBq8' );
define('JWT_AUTH_SECRET_KEY', 'ctukey');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_ctu_primeng';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
