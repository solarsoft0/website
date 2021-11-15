import { Typography } from "@supabase/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { TApp } from "../../hooks/items";

type Props = {
  item: TApp;
};

const AppCard = ({ item }: Props) => {
  const { basePath } = useRouter();

  return (
    <Link href={`${basePath}/items/${item.id}`}>
      <a className="mb-10 md:mb-0 border p-6 rounded-md dark:border-gray-600">
        <div className="flex items-center">
          <div className="mr-5 inline-flex items-center justify-center rounded-md bg-gray-100 dark:bg-gray-500 text-white h-12 w-12">
            <img src={item.icon} alt={item.name} />
          </div>
          <dt className="flex flex-row xl:flex-col">
            <Typography.Title level={4} className="m-0">
              {item.name}
            </Typography.Title>
          </dt>
        </div>
        <div className="mt-5">
          <Typography.Text>{item.description}</Typography.Text>
        </div>
        <div className="mt-5 flex items-center justify-end">
          <div className="rounded-full bg-gray-100 dark:bg-gray-500 h-8 w-8">
            {item.picture && <img src={item.picture} alt={item.name} />}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AppCard;
