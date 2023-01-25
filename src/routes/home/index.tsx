import { h } from "preact";

const Home = () => {
  return (
    <div>
      <header class="prose prose-invert">
        <h1>Welcome to Cranberry!</h1>
        <p>We are here to help you make healthier choices.</p>
      </header>
      <section class="mt-8 grid gap-4 lg:grid-cols-3 text-center">
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
      class="py-3 px-6 rounded text-left decoration-inherit no-underline text-white bg-neutral-900 border border-neutral-900 hover:border-white"
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};

export default Home;
