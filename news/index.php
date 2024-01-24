<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- STANDARD -->
	<meta property="og:url" content="https://810NICLEDay.com/news/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="News | 810NICLE Day 2024" />
	<meta property="og:description" content="810NICLE Day is back!" />
	<meta property="og:image" content="img/ogp-2024-light.jpg" />
	<meta property="og:image:alt" content="810NICLE Day 2024" />
	<meta name="theme-color" content="#313320">
	<!-- TWITTER -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="News | 810NICLE Day 2024" />
	<meta name="twitter:site" content="@810NICLE" />
	<meta name="twitter:creator" content="@JSLBrowning" />
	<meta name="twitter:description" content="810NICLE Day is back!" />
	<meta name="twitter:image" content="img/ogp-2024-light.jpg" />
	<meta name="twitter:image:alt" content="810NICLE Day 2024 News" />
	<!-- END OF OGP DATA -->
	<link rel="stylesheet" type="text/css" href="../css/main.css">
	<link rel="stylesheet" type="text/css" href="../css/news.css">
	<link rel="icon" type="image/x-icon" href="../img/favicon.ico">
	<title>News | 810NICLE Day 2024</title>
	<style>
		div p {
			margin: 1rem 0rem;
		}

		div p,
		ul li {
			font-size: 1.125rem;
		}

		svg:last-of-type {
			display: none;
		}
	</style>
</head>

<body>
	<a id="bs01-logo-wrapper" href="https://linktr.ee/askbs01" target="_blank">
		<img id="bs01-logo" alt="BIONICLEsector01" title="BIONICLEsector01 Linktree" src="../img/chips/bs01.webp"
			width="64" height="64">
	</a>
	<a id="mod-logo-wrapper" href="https://linktr.ee/MaskofDestiny" target="_blank">
		<img id="mod-logo" alt="Mask of Destiny" title="Mask of Destiny Linktree" src="../img/chips/mod.webp" width="64"
			height="64">
	</a>
	<header>
		<img onclick="window.location.href='../home'" src="../img/810_2024_Logo_Long.png">
	</header>
	<main>
		<h2><a href="../home">Home</a> | <span class="disabled">News</span> | <a href="../cards">Cards</a> | <a
				href="../schedule">Schedule</a> | <a href="../watch">Watch</a> | <a href="../signup">Sign Up</a></h2>
		<hr>
		<h1 class="title">News</h1>
		<h1 id="countdown">EVERY LEGEND HAS A BEGINNING</h1>
		<div class="grid-container">
			<?php
			# Set up the database connection
			$database = mysqli_connect("localhost", "tronec_810_wp", "0J2O1lk6yA9UWSJU", "tronec_810_wp");
			if (mysqli_connect_errno()) {
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
				exit();
			}

			# Get everything from wp_posts.
			$sql = "SELECT * FROM wp_posts WHERE post_type = 'post' AND post_status = 'publish' ORDER BY post_date DESC";
			$result = mysqli_query($database, $sql);
			if (mysqli_num_rows($result) > 0) {
				while ($row = $result->fetch_assoc()) {
					$author = '';
					$sql_author = "SELECT display_name FROM wp_users WHERE ID = " . $row['post_author'];
					$result_author = mysqli_query($database, $sql_author);
					if (mysqli_num_rows($result_author) > 0) {
						while ($row_author = $result_author->fetch_assoc()) {
							$author = $row_author['display_name'];
						}
					}

					$title = $row['post_title'];
					$date = $row['post_date'];
					$content = $row['post_content'];
					echo "<div>";
					echo "<h1 style=\"text-align:left !important;\">$title</h1>";
					echo "<h2>Posted by $author</h2>";
					echo "<h3>$date</h3>";
					echo "$content";
					echo "</div>";
					echo "<svg height=\"5\" width=\"100%\"><line x1=\"0\" y1=\"0\" x2=\"100%\" y2=\"0\" style=\"stroke:#720012;stroke-width:2\"></line>Sorry, your browser does not support inline SVG.</svg>";
				}
			}
			?>
		</div>
	</main>
	<footer>
		<p>Site designed by <a href="https://linktr.ee/JSLBrowning" target="_blank">JSLBrowning</a> of <a
				href="https://wallofhistory.com/" target="_blank">Wall of History</a>.</p>
	</footer>
	<script src="../js/jquery/jquery-3.6.0.min.js"></script>
	<script src="../js/jquery/jquery-ui-1.13.0/jquery-ui.min.js"></script>
	<script src="../js/timer.js"></script>
	<script src="../js/zoom.js"></script>
</body>

</html>