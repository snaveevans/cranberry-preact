import { h } from 'preact';
import { Link } from 'preact-router/match';

const anchorClass = "inline-block py-0 px-4 text-white h-full flex justify-center items-center hover:bg-transparent/20"

const Header = () => (
	<header class="fixed left-0 top-0 flex justify-between w-full h-14 z-50 bg-purple-700 text-white">
		<a href="/" class="flex items-center py-0.5 px-1">
			<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" height="32" width="32" />
			<h1 class="py-0 px-0.5 text-xl font-normal hidden sm:block">Preact CLI</h1>
		</a>
		<nav class="flex">
			<Link href="/" class={anchorClass} activeClassName="bg-transparent/40">
				Home
			</Link>
			<Link href="/profile" class={anchorClass} activeClassName="bg-transparent/40">
				Me
			</Link>
			<Link href="/profile/john" class={anchorClass} activeClassName="bg-transparent/40">
				John
			</Link>
		</nav>
	</header>
);

export default Header;
