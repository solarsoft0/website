import { Badge } from '@supabase/ui'
import APISection from '../Sections/APISection'
import SectionContainer from '../Layouts/SectionContainer'
import FeatureColumn from '../FeatureColumn'

import CodeExamples from '~/data/home/api-examples'
import DeveloperFeatures from 'data/DeveloperFeatures.json'
import TextLink from '../TextLink'

const MadeForDevelopers = () => {
  return (
    <SectionContainer className="md:pt-36 lg:pt-36">
      <APISection
        autoHeight={true}
        size="large"
        title={'The SDK and Tooling to help you build fast'}
        text={[
          <p className="lg:text-lg" key={'madefordeveloper-para-1'}>
            Create a smart voice applications that meets your business needs without the clutter of unneeded features 
            or historically burdensome customizations.
          </p>,
        ]}
        // @ts-ignore
        content={CodeExamples}
        footer={[
          <dl className="grid gap-y-4 grid-cols-12 md:gap-8" key={'madefordeveloper-footer'}>
            {DeveloperFeatures.map((feature: any, i: number) => {
              return (
                <div className="col-span-12 md:col-span-6 lg:col-span-6" key={i}>
                  <div className="lg:mt-5">
                    <dt>
                      <FeatureColumn title={feature.name} text={feature.description} />
                      {feature.badge && (
                        <div className="block mb-4">
                          <Badge dot color="blue">
                            {feature.badge}
                          </Badge>
                        </div>
                      )}
                      {feature.badge ? (
                        <TextLink url={feature.url} label="Get notified" />
                      ) : (
                        <TextLink url={feature.url} label="Explore more" />
                      )}
                    </dt>
                  </div>
                </div>
              )
            })}
          </dl>,
        ]}
      />
    </SectionContainer>
  )
}

export default MadeForDevelopers
