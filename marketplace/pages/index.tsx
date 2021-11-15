import Container from "components/Container";
import Layout from "~/components/Layouts/Default";
import Hero from "components/Hero";

import "swiper/swiper.min.css";
import AppCard from "~/components/AppCard";
import Categories from "~/components/Categories";
import { useEffect, useState } from "react";
import { TCategory } from "~/hooks/categories";
import { useItems } from "~/hooks/items";

type Props = {};

const Index = ({}: Props) => {
  const { filter, filtered: items } = useItems();
  const [category, setCategory] = useState<TCategory>();

  useEffect(() => {
    filter(category);
  }, [category]);

  return (
    <Layout>
      <Container>
        <Hero />
        <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative pb-16 sm:pb-18 md:pb-24 lg:pb-24">
          <Categories onChange={(cat) => setCategory(cat)} />

          {items?.length !== 0 && (
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-x-8">
              {items?.map((item) => (
                <AppCard key={item.id} item={item} />
              ))}

              <a
                href="https://github.com/fonoster/marketplace"
                className="hidden md:flex items-center justify-center mb-10 md:mb-0 p-6 rounded-md border-dashed border border-primary"
              >
                <p className="m-0 p-0 text-primary">Your item</p>
              </a>
            </dl>
          )}

          {items?.length === 0 && (
            <p className="flex items-center justify-center m-0 p-0 text-gray-500 dark:text-gray-300">
              Not results
            </p>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default Index;
