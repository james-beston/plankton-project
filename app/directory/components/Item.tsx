// app/directory/zooplankton/[genus]/[slug]/page.tsx
'use client'

import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { urlFor } from '@/sanity/sanity';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function DimensionsTable(props: any) {
  const [head, ...rows] = props.value.rows
  const isBiDirectional = head.cells[0].length === 0

  return (
    <table>
      <thead>
        <tr>
          {head.cells.map((cell: any) => (
            <th key={'dim-' + cell}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any, index: any) => (
          <tr key={'dim-' + index}>
            {row.cells.map((cell: any, index: any) => {
              const Component = isBiDirectional && index === 0 ? 'th' : 'td'
              return <Component key={index+33} className='text-center'>{cell}</Component>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function PresenceTable(props: any) {
  const [head, ...rows] = props.value.rows
  const isBiDirectional = head.cells[0].length === 0

  return (
    <table>
      <thead>
        <tr>
          {head.cells.map((cell: any) => (
            <th key={'pres-' + cell}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any, index: any) => (
          <tr key={'pres-' + index++}>
            {row.cells.map((cell: any, index: any) => {
              const Component = isBiDirectional && index === 0 ? 'th' : 'td'
              return <Component key={index+99} className={cell === 'yes' || cell === 'no data' ? 'text-center' : 'text-left'}>{cell === 'yes' ? '✅' : cell}</Component>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const components: Partial<PortableTextReactComponents> = {
  types: {
    dimensions: DimensionsTable,
    presence: PresenceTable,
  },
  }

export default function Item({ data }: { data: any }) {
  return (
    <div className="flex flex-col space-y-6">
      {data.hero && (
        <div className="w-full shadow-2xl">
          <div className="relative">
            <Image
              src={urlFor(data.hero).width(768).height(576).url()}
              width={768}
              height={576}
              alt={data.title}
            />
          </div>
        </div>
      )}
      {data.images && (
        <section className='py-12'>
            
              <div className='container'>
                <Swiper
                  navigation
                  zoom={true}
                  pagination={true}
                  modules={[Zoom, Navigation, Pagination]}
                  onSwiper={swiper => console.log(swiper)}
                  className='h-[600px] w-full rounded-lg'
                >
                  {data.images.map((image: any) => (
                    <SwiperSlide key={image.url}>
                      <div className="swiper-zoom-container ">
             
                          <Image
                            src={image.url
                              ? urlFor(image.url).url()
                              : 'https://placehold.co/768x576/png?text=The+Plankton+Project'
                            }
                            fill={true}
                            alt={image.alt}
                            className='block h-full w-full object-cover'
                          />
                
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <p className='text-center text-sm text-slate-500 mt-2'>Double-click to zoom</p>
              </div>

        </section>
      )}
      {data.video && (
        <div className="w-full shadow-2xl">
          <video
            controls
            className="w-full"
            src={data.video}
          />
        </div>
      )}
      <div className="prose lg:prose-xl">
        <PortableText value={data.text} components={components} />
      </div>
    </div>
  )
}