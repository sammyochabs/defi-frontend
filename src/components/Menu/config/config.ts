import { MenuItemsType, DropdownMenuItemType } from '@doodaswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: "Home",
    href: "/",
    icon: "Home",
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Dashboard'),
    icon: 'Dashboard',
    href: '/dashboard',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: "Trade",
    href: "/swap",
    icon: "Swap",
    items: [],
  },
  {
    label: "Farms",
    href: "/farms",
    icon: "Farms",
    items: [],
  },
  {
    label: "Pools",
    href: "/pools",
    icon: "Pools",
    items: [],
  },
  {
    label: "IDO",
    href: "#",
    icon: "ifo",
    items: [],
  },
  {
    label: "NFA",
    href: "/collectibles",
    icon: "collectibles",
    items: [],
  },
]

export default config
