// app/directory/components/Directory.tsx

import Phytoplankton from './Phytoplankton';
import Zooplankton from './Zooplankton';

export default function Directory() {
  return (
    <div className="space-y-6">
      {/* @ts-expect-error Async Server Component */}
      <Phytoplankton />
      {/* @ts-expect-error Async Server Component */}
      <Zooplankton />
    </div>
  )
}