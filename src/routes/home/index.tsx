import { h } from "preact";

const Home = () => {
  return (
    <div class="text-center">
      <a href="https://preactjs.com">
        <img
          class="p-6"
          src="../../assets/preact-logo.svg"
          alt="Preact Logo"
          height="160"
          width="160"
        />
      </a>
      <h1>Get Started Building PWAs with Preact-CLI</h1>
      <section class="mt-40 grid gap-4 lg:grid-cols-3">
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          link="https://preactjs.com/tutorial/"
        />
        <Resource
          title="Differences to React"
          description="If you're coming from React, check out our docs for where Preact differs"
          link="https://preactjs.com/guide/v10/differences-to-react"
        />
        <Resource
          title="Learn Preact-CLI"
          description="To learn more about Preact-CLI, read through the ReadMe & Wiki"
          link="https://github.com/preactjs/preact-cli#preact-cli--"
        />
      </section>
    </div>
  );
};

interface ResourceProps {
  title: string;
  description: string;
  link: string;
}

const Resource = (props: ResourceProps) => {
  return (
    <a
      href={props.link}
      class="py-3 px-6 rounded text-left decoration-inherit no-underline text-white bg-neutral-900"
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};

export default Home;
