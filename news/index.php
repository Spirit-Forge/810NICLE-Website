<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- STANDARD -->
	<meta property="og:url" content="https://810NICLEDay.com/news/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="News | 810NICLE Day 2026" />
	<meta property="og:description" content="810NICLE Day is back!" />
	<meta property="og:image" content="https://810NICLEDay.com/img/ogp-2026-light.jpg" />
	<meta property="og:image:alt" content="810NICLE Day 2026 News" />
	<meta name="theme-color" content="#313320">
	<!-- TWITTER -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="News | 810NICLE Day 2026" />
	<meta name="twitter:site" content="@810NICLE" />
	<meta name="twitter:creator" content="@JSLBrowning" />
	<meta name="twitter:description" content="810NICLE Day is back!" />
	<meta name="twitter:image" content="https://810NICLEDay.com/img/ogp-2026-light.jpg" />
	<meta name="twitter:image:alt" content="810NICLE Day 2026 News" />
	<!-- END OF OGP DATA -->
	<link rel="stylesheet" type="text/css" href="../css/main.css">
	<link rel="stylesheet" type="text/css" href="../css/news.css">
	<link rel="icon" type="image/x-icon" href="../img/favicon.ico">
	<title>News | 810NICLE Day 2026</title>
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
		<video id="BannerLoop" autoplay loop muted playsinline width=100%>				
			<source src="../img/LongAnim.mp4" type='video/mp4; codecs="hvc1"'>
			<source src="../img/LongAnim.webm" type="video/webm">
		</video>
    </header>
	<main>
		<h2><a href="../home">Home</a> | <span class="disabled">News</span> | <a href="../cards">Cards</a> | <a href="../schedule">Schedule</a> | <a href="../watch">Watch</a> | <a href="../feedback">Feedback</a></h2> 
		<hr>
		<h1 class="title">News</h1>
		<h1 id="countdown">GET READY FOR THE SPIDERS...G</h1>
		<div class="grid-container">
			<!--
			<div class="news1">
				<h1 style="text-align:left !important;">810NICLE Day 2023 Event Registration Live!</h1>
				<h3>Posted by JSLBrowning, March 8th, 2023</h3>
				<p style="font-size:1.2em;">810NICLE Day 2023 fast approaches, and you know what that means — public
					event registration is now live! Just like last year, all you'll need to do is fill out our
					application, which is now conveniently accessible <a href="../signup">on this site</a>. All we'll
					need to know is who you or your group are, what your event would be, and how long you expect it to
					run. Should your event be chosen, our organizers will be in touch soon!</p>
				<p style="font-size: 1.2em;">This year is the fifth anniversary of 810NICLE Day, as well as the 20th
					anniversary of the first BIONICLE movie, <em>Mask of Light</em> — and we want to make sure this
					year's celebration is appropriately special. As such, be sure to give us the best you've got!</p>
				<p style="font-size: 1.2em;">Finally, for any who might not be aware, 810NICLE Day is now on Patreon! If
					you'd like to get a closer look at how we bring 810NICLE Day to life, be sure to sign up. Any
					contribution is greatly appreciated, and will go directly to making this 810NICLE Day the best it
					can be.</p>
				<svg height="5" width="100%">
					<line x1="0" y1="0" x2="100%" y2="0" style="stroke:#720012;stroke-width:2" />
					Sorry, your browser does not support inline SVG.
				</svg>
			</div>
			-->

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
					echo "<svg height=\"5\" width=\"100%\"><line x1=\"0\" y1=\"0\" x2=\"100%\" y2=\"0\" style=\"stroke:#7300ff;stroke-width:2\"></line>Sorry, your browser does not support inline SVG.</svg>";
				}
			}
			?>
		</div>
	</main>
	<footer>
		<p>Site designed by <a href="https://linktr.ee/JSLBrowning" target="_blank">JSLBrowning</a> of <a href="https://wallofhistory.com/" target="_blank">Wall of History</a>, <a href="https://linktr.ee/vahkiti" target="_blank">Vahkiti</a> of <a href="https://maskofdestiny.com/" target="_blank">Mask of Destiny</a>, & <a href="https://linktr.ee/askbs01" target="_blank">Swert</a> of <a href="https://biosector01.com/" target="_blank">BIONICLESector01</a>.</p>
	</footer>
	<script src="../js/jquery/jquery-3.6.0.min.js"></script>
	<script src="../js/jquery/jquery-ui-1.13.0/jquery-ui.min.js"></script>
	<script src="../js/timer.js"></script>
	<script src="../js/zoom.js"></script>
	<video autoplay muted loop id="bgvid">
		<source src="../img/BGAnim.webm"" type="video/webm" playsinline autoplay loop muted>
	</video>
</body>

</html>