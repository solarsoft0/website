import { Typography } from '@supabase/ui'
import { useRouter } from 'next/router'
import SectionContainer from './Layouts/SectionContainer'

const Hero = () =>  {
  const { basePath } = useRouter()

  return (
    <div className="overflow-hidden bg-gray-800">
      <SectionContainer className="pt-24">
        <div className="relative">
          <main className="">
            <div className="mx-auto">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div className="sm:mx-auto md:w-3/4 lg:w-full lg:mx-0">
                    <h1 className="mt-4 text-4xl text-gray-800 dark:text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                      <span className="block text-white">Marketplace</span>
                    </h1>
                    <Typography.Text>
                      <p className="mt-5 text-base text-gray-300 sm:mt-5 lg:text-lg">
                      Find the integrations and VoIP providers that suit you, then use them in your Voice Applications with a single easy-to-use API.
                      </p>
                    </Typography.Text>
                  </div>
                </div>
                <div className="flex content-center mt-16 sm:mt-24 lg:absolute lg:-right-80 lg:w-9/12 lg:mt-0 lg:col-span-6 xl:relative xl:right-0 xl:w-full">
                  <div className="flex flex-col items-center justify-center relative w-full rounded-md">
                    <div
                      className="w-full relative"
                      style={{ padding: '0 0 0 0' }}
                    >
                      <img
                        className="mx-auto"
                        style={{ top: 0, left: 0}}
                        src={`${basePath}/brand-assets/hero-dark.svg`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SectionContainer>
    </div>
  )
}

export default Hero
