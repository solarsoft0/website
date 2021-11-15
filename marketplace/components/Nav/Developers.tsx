import React from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@supabase/ui'

type Props = {
  text: string
  description?: string
  url?: string
  icon?: string
}

const Developers = () => {
  const { basePath } = useRouter()
  

  return (
    <div className="grid grid-cols-12">
      {/* <nav className="col-span-6" aria-labelledby="solutionsHeading">
        <div className="grid grid-cols-12 m-3 gap-3">{iconSections}</div>
      </nav> */}
      <div className="col-span-6">
        <div className="m-3 mx-6">
          <Typography.Text type="secondary">Latest announcements</Typography.Text>
          <ul className="mt-6 space-y-3 pb-6">
            {/* {AnnouncementsData.map((caseStudy: any, idx: number) => (
              <li className="flow-root" key={`flyout_case_${idx}`}>
                <a
                  href={caseStudy.url}
                  className="p-3 flex rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition ease-in-out duration-150 border dark:border-gray-600"
                >
                  <div className="hidden sm:block flex-shrink-0">
                    <img
                      className="w-32 h-20 object-cover rounded-md"
                      src={`${basePath}/${caseStudy.imgUrl}`}
                      alt="caseStudyThumb"
                    />
                  </div>
                  <div className="min-w-0 flex-1 sm:ml-8">
                    <Typography.Title level={5} className="mb-0">
                      {caseStudy.title}
                    </Typography.Title>
                    <Typography.Text type="secondary">{caseStudy.description}</Typography.Text>
                  </div>
                </a>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Developers
