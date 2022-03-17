import { Badge, Typography } from "@supabase/ui";
import Solutions from "data/Solutions.json";
import SectionContainer from "../Layouts/SectionContainer";
import ProductIcon from "../ProductIcon";
import TextLink from "../TextLink";

const Features = () => {
  const IconSections = Object.values(Solutions).map((solution: any) => {
    const { name, description, icon, label, url } = solution;

    return (
      <div key={name} className="mb-10 md:mb-0">
        <div className="flex items-center">
          <ProductIcon icon={icon} />
          <dt className="flex flex-row xl:flex-col ml-4">
            <Typography.Title level={4} className="m-0">
              {name}
            </Typography.Title>
          </dt>
        </div>
        <div className="mt-5">
          <Typography.Text>{description}</Typography.Text>
        </div>

        <div className="mt-3">
          <Badge dot>{label || 'Released'}</Badge>
        </div>

        {url && <TextLink label={"Learn more"} url={url} />}
      </div>
    );
  });

  return (
    <SectionContainer className="pb-0">
      <Typography.Text className="m-0 font-bold tracking-widest dark:!text-brand-700">
        ABOUT
      </Typography.Text>
      <Typography.Title level={2} className="mb-16 max-w-lg">
        Build voice applications for your business, today
      </Typography.Title>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:grid-cols-2 md:gap-16 lg:gap-x-8 xl:gap-x-24">
        {IconSections}
      </dl>
    </SectionContainer>
  );
};

export default Features;
