import { h } from "preact";
import { Link } from "preact-router/match";

const anchorClass =
  "inline-block py-0 px-4 text-white h-full flex justify-center items-center hover:bg-transparent/20";

const Navigation = () => (
  <section class="font-bold fixed w-full h-14 bottom-0 bg-purple-700 text-white flex">
    <nav class="flex h-full mx-auto">
      <Link href="/" class={anchorClass} activeClassName="bg-transparent/40">
        Food
      </Link>
      <Link
        href="/profile"
        class={anchorClass}
        activeClassName="bg-transparent/40"
      >
        Hygiene
      </Link>
      <Link
        href="/profile"
        class={anchorClass}
        activeClassName="bg-transparent/40"
      >
        Makeup
      </Link>
      <Link
        href="/profile/john"
        class={anchorClass}
        activeClassName="bg-transparent/40"
      >
        Cleaners
      </Link>
    </nav>
  </section>
);

export default Navigation;
