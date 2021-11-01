import { useRef } from 'react'

import { useRouter } from 'next/router'

import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper'

import {
  Button,
  Typography,
  IconMessageCircle
} from '@supabase/ui'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import Link from 'next/link'

// install Swiper modules
SwiperCore.use([Navigation, Pagination])

function TwitterSocialProof() {
  // base path for images
  const { basePath } = useRouter()

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 text-center">
          <Typography.Title level={2}>Join the community</Typography.Title>
          <Typography.Text>
            <p className="lg:text-lg">
              Supported by a growing community of advocates, contributors, and heroes.
            </p>
            <div className="my-4">
              <Link
                href={'https://github.com/fonoster/fonoster/discussions'}
                as={'https://github.com/fonoster/fonoster/discussions'}
              >
                <a className="block text-sm text-gray-400 dark:text-gray-400 mt-3" target="_blank">
                  <Button size="small" iconRight={<IconMessageCircle size="tiny" />} type="default">
                    GitHub discussions
                  </Button>
                </a>
              </Link>
            </div>
          </Typography.Text>
        </div>
      </div>

    </>
  )
}

export default TwitterSocialProof
