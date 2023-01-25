import { h } from "preact";
import clsx from "clsx";
import { useState } from "preact/hooks";

type Props = {
  class?: string;
};

const Header = ({ class: className }: Props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <header
      class={clsx("flex w-full h-14 z-50 bg-purple-700 text-white", className)}
    >
      <input
        type="text"
        class="flex-auto w-full m-2 rounded form-input text-black"
        onInput={(e) => setSearchText(e.currentTarget.value)}
        value={searchText}
        placeholder="Search for indredients..."
      />
      <i class="fa-solid fa-camera text-white items-center flex text-4xl mr-2" />
    </header>
  );
};

export default Header;
