import { h } from "preact";
import { Link } from "preact-router";

const Home = () => {
  return (
    <div>
      <header class="prose prose-invert">
        <h1>Welcome to Cranberry!</h1>
        <p>We are here to help you make healthier choices.</p>
      </header>
      <section class="mt-8 grid gap-4 lg:grid-cols-3 text-center">
        <Resource
          title="Food"
          description="Search food ingredients"
          link="/food"
        />
        <Resource
          title="Hygiene"
          description="Search hygiene ingredients"
          link="/hygiene"
        />
        <Resource
          title="Makeup"
          description="Search makeup ingredients"
          link="/makeup"
        />
        <Resource
          title="Cleaners"
          description="Search cleaners ingredients"
          link="/cleaners"
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
    <Link
      href={props.link}
      class="py-3 px-6 rounded text-left decoration-inherit no-underline text-white bg-neutral-900 border border-neutral-900 hover:border-white"
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Link>
  );
};

export default Home;
