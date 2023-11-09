// app/directory/components/Directory.tsx

import Phytoplankton from './Phytoplankton';
import Zooplankton from './Zooplankton';

export default function Directory() {
  return (
    <div className="space-y-6">
      <Phytoplankton />
      <Zooplankton />
    </div>
  )
}