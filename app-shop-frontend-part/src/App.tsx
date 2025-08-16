import activeIcon from '@shared/assets/icons/favicon-bg-dark.svg'
import inactiveIcon from '@shared/assets/icons/favicon-bg-white.svg'

import { useDynamicFavicon } from '@/app/hooks/useDynamicFavicon'

export default function App() {
  useDynamicFavicon(activeIcon, inactiveIcon)

  return <div></div>
}
