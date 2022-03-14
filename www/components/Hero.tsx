import { Button, IconBookOpen, Space, Typography } from "@supabase/ui";
import Link from "next/link";
import SectionContainer from "./Layouts/SectionContainer";
import { HeroBg } from "./UI/HeroBg";

const Hero = () => (
  <div className="overflow-hidden relative pb-[10%]">
    <HeroBg />
    <SectionContainer className="pb-0 pt-24">
      <div className="relative">
        <main className="min-w-full min-h-full">
          <div className="mx-auto">
            <div className="md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div className="sm:mx-auto md:w-3/4 lg:w-full lg:mx-0 text-center flex items-center justify-center flex-col	">
                <h1 className="mt-4 text-4xl text-gray-800 dark:text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <span className="block text-gray-800 dark:text-white">
                    The Open Source
                  </span>
                  <span className="text-brand-700 md:ml-0 block">
                    Twilio Alternative
                  </span>
                </h1>
                <Typography.Text>
                  <p className="mt-5 text-base sm:mt-5 lg:text-lg">
                    Engage with your customer with voice or messaging with{" "}
                    <br />a single easy-to-use platform.
                  </p>
                </Typography.Text>
                <Space>
                  <Link
                    href="https://form.typeform.com/to/CvQqk9"
                    as="https://form.typeform.com/to/CvQqk9"
                  >
                    <a>
                      <Button className="mt-10 py-3" size="medium">
                        Early Access
                      </Button>
                    </a>
                  </Link>
                  <Link
                    href="https://learn.fonoster.com"
                    as="https://learn.fonoster.com"
                  >
                    <a>
                      <Button
                        className="mt-10 py-3"
                        size="medium"
                        type="text"
                        icon={<IconBookOpen />}
                      >
                        Documentation
                      </Button>
                    </a>
                  </Link>
                </Space>
                <p className="mt-8 text-sm text-gray-300 tracking-wide sm:mt-10">
                  Veteran Owned and Operated
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SectionContainer>
  </div>
);

export default Hero;
