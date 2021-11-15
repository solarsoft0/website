import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";

import { items, TApp } from "~/hooks/items";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useRouter } from "next/router";

import Container from "components/Container";
import Layout from "~/components/Layouts/Default";
import { Typography } from "@supabase/ui";
import CodeBlock from "~/components/CodeBlock/CodeBlock";

type Props = TApp & {
  data: Record<string, unknown>;
  content: MDXRemoteSerializeResult;
};

const MDX_COMPONENTS = {
  h1: (props: any) => (
    <Typography.Title className="my-8" level={1} {...props} />
  ),
  h2: (props: any) => (
    <Typography.Title className="my-8" level={2} {...props} />
  ),
  h3: (props: any) => (
    <Typography.Title className="my-6" level={3} {...props} />
  ),
  h4: (props: any) => (
    <Typography.Title className="my-4" level={4} {...props} />
  ),
  h5: (props: any) => (
    <Typography.Title className="my-4" level={5} {...props} />
  ),
  p: (props: any) => <Typography.Text className="block my-6" {...props} />,
  code: (props: any) => <CodeBlock lang="js" {...props} />,
  table: (props: any) => (
    <table
      className="min-w-full divide-y divide-gray-200"
      {...props}
    />
  ),
  thead: (props: any) => <thead className="bg-gray-50 dark:bg-gray-700" {...props} />,
  th: (props: any) => (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-800 dark:text-gray-200 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300" {...props} />
  )
};

export default function AppPage({
  name,
  content,
  data,
  icon,
  description,
  changelog,
  homepage,
  issues,
  license,
  related,
  repository,
  picture,
  org,
}: Props) {
  const { basePath } = useRouter();

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>

      <Layout>
        <Container>
          <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative py-16">
            <div className="relative mx-auto mb-8">
              <Link href="/">
                <a>
                  <Typography.Title level={4}>
                    Back to marketplace
                  </Typography.Title>
                </a>
              </Link>
            </div>
            <div className="mb-8 flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="inline-flex items-center justify-center rounded-md h-28 w-28">
                    <img src={icon} alt={name} />
                  </div>
                </div>
              </div>
              <div>
                <Typography.Title level={2}>{name}</Typography.Title>
                <Typography.Text>{description}</Typography.Text>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <div className="prose">
                  <MDXRemote
                    {...content}
                    components={MDX_COMPONENTS}
                    scope={data}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:sticky md:top-24">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-800 dark:text-white">
                      Homepage
                    </dt>
                    <dd className="mt-1 text-sm text-gray-400 dark:text-gray-300">
                      <a
                        href={homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {homepage}
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-800 dark:text-white">
                      Repository
                    </dt>
                    <dd className="mt-1 text-sm text-gray-400 dark:text-gray-300">
                      <a
                        href={repository}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repository}
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-800 dark:text-white">
                      Changelog
                    </dt>
                    <dd className="mt-1 text-sm text-gray-400 dark:text-gray-300">
                      <a
                        href={changelog}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {changelog}
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-800 dark:text-white">
                      Issues
                    </dt>
                    <dd className="mt-1 text-sm text-gray-400 dark:text-gray-300">
                      <a
                        href={issues}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {issues}
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-800 dark:text-white">
                      License
                    </dt>
                    <dd className="mt-1 text-sm text-gray-400 dark:text-gray-300">
                      {license ?? "N/A"}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-800 dark:text-white">
                      Related
                    </dt>
                    {related?.map((item) => (
                      <dd className="mt-1 text-sm text-gray-400 dark:text-gray-300">
                        <Link href={`${basePath}/items/${item}`}>
                          <a>{item}</a>
                        </Link>
                      </dd>
                    ))}
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-800 dark:text-white">
                      Organization
                    </dt>
                    <dd className="mt-1 text-sm text-gray-400 dark:text-gray-300">
                      <div className="mt-4 flex items-center">
                        <div className="mr-3 rounded-full bg-gray-100 dark:bg-gray-500 h-8 w-8">
                          {picture && <img src={picture} alt={name} />}
                        </div>
                        <Typography.Text>{org}</Typography.Text>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async (
  context
) => {
  const { params } = context;
  const app = items.find((item) => item.id === params?.slug);

  if (!app)
    return {
      props: {},
    };

  const readme = await fetch(app.readme)
    .then((res) => res.text())
    .then((data) => data);

  const { data, content } = matter(readme);

  return {
    props: {
      ...app,
      data,
      content: await serialize(content),
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: items.map((item) => ({
      params: {
        slug: item.id,
      },
    })),
    fallback: false,
  };
}
