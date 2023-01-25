import { h } from "preact";
import { Link } from "preact-router/match";
import clsx from "clsx";

const anchorClass =
  "inline-block py-0 px-4 text-white h-full flex justify-center items-center hover:bg-transparent/20 pb-4";

type Props = {
  class?: string;
};

const Navigation = ({ class: className }: Props) => (
  <section
    class={clsx(
      className,
      "font-bold w-full h-14 bg-purple-700 text-white flex"
    )}
  >
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
