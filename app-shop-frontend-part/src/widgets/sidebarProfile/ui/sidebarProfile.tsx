import { useState } from 'react'
import { Check, ChevronsUpDown, GalleryVerticalEnd } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/shared/ui/components/ui/sidebar'

import s from './sidebarProfile.module.scss'

const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Getting Started',
      url: '#',
      items: [
        {
          title: 'Installation',
          url: '#',
        },
        {
          title: 'Project Structure',
          url: '#',
        },
      ],
    },
    {
      title: 'Building Your Application',
      url: '#',
      items: [
        {
          title: 'Routing',
          url: '#',
        },
        {
          title: 'Data Fetching',
          url: '#',
          isActive: true,
        },
        {
          title: 'Rendering',
          url: '#',
        },
        {
          title: 'Caching',
          url: '#',
        },
        {
          title: 'Styling',
          url: '#',
        },
        {
          title: 'Optimizing',
          url: '#',
        },
        {
          title: 'Configuring',
          url: '#',
        },
        {
          title: 'Testing',
          url: '#',
        },
        {
          title: 'Authentication',
          url: '#',
        },
        {
          title: 'Deploying',
          url: '#',
        },
        {
          title: 'Upgrading',
          url: '#',
        },
        {
          title: 'Examples',
          url: '#',
        },
      ],
    },
    {
      title: 'API Reference',
      url: '#',
      items: [
        {
          title: 'Components',
          url: '#',
        },
        {
          title: 'File Conventions',
          url: '#',
        },
        {
          title: 'Functions',
          url: '#',
        },
        {
          title: 'next.config.js Options',
          url: '#',
        },
        {
          title: 'CLI',
          url: '#',
        },
        {
          title: 'Edge Runtime',
          url: '#',
        },
      ],
    },
    {
      title: 'Architecture',
      url: '#',
      items: [
        {
          title: 'Accessibility',
          url: '#',
        },
        {
          title: 'Fast Refresh',
          url: '#',
        },
        {
          title: 'Next.js Compiler',
          url: '#',
        },
        {
          title: 'Supported Browsers',
          url: '#',
        },
        {
          title: 'Turbopack',
          url: '#',
        },
      ],
    },
  ],
}

export function SidebarProfile() {
  const [selectedVersion, setSelectedVersion] = useState(data.versions[0])
  return (
    <Sidebar className="absolute" collapsible="icon">
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground "
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Documentation</span>
                <span className="">v{selectedVersion}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
            side="right"
          >
            {data.versions.map((version) => (
              <DropdownMenuItem
                key={version}
                onSelect={() => setSelectedVersion(version)}
              >
                v{version}{' '}
                {version === selectedVersion && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>
      <SidebarContent className={s['sidebar-content']}>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )

  // <aside className={s['sidebar']}>
  //   <DropdownMenu>
  //     <DropdownMenuTrigger className="focus-within:!outline-none focus-visible:!outline-none focus:!outline-none">
  //       <header className={s['sidebar-header']} tabIndex={0}>
  //         <div className={s['sidebar-header__wrapper']}>
  //           <img
  //             src={sidebarIcon}
  //             alt=""
  //             loading="lazy"
  //             className={s['sidebar-header__shop-icon']}
  //           />
  //           <div className={s['sidebar-header__shop-title-wrapper']}>
  //             <span className={s['sidebar-header__shop-title']}>VK</span>
  //           </div>
  //         </div>
  //         <ChevronsUpDown size={20} />
  //       </header>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent align="start" side="right">
  //       <DropdownMenuItem className="max-w-2xs w-xs">
  //         <div className="flex gap-x-4 items-center line-clamp-1">
  //           <img src={sidebarIcon} alt="" />
  //           <span className="">VK</span>
  //         </div>
  //       </DropdownMenuItem>
  //       <DropdownMenuItem className="max-w-2xs w-xs">
  //         <div className="flex gap-x-4 items-center line-clamp-1">
  //           <img src={sidebarIcon} alt="" />
  //           <span className="">VK</span>
  //         </div>
  //       </DropdownMenuItem>
  //       <DropdownMenuSeparator />
  //       <DropdownMenuItem className="hover:!text-green-400">
  //         <BadgePlus className="!size-5" />
  //         <span className="text-base">Создать</span>
  //       </DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>

  //   <ul className={s['sidebar-list']}>
  //     <li className={s['sidebar-item']}>
  //       <ChartNoAxesColumnIncreasing
  //         size={24}
  //         className={s['sidebar-icon']}
  //       />
  //       <span className={s['sidebar-label']}>Статистика</span>
  //     </li>
  //     <li className={s['sidebar-item']}>
  //       <Album size={22} className={s['sidebar-icon']} />
  //       <span className={s['sidebar-label']}>Категории</span>
  //     </li>
  //     <li className={s['sidebar-item']}>
  //       <PaintBucket size={22} className={s['sidebar-icon']} />
  //       <span className={s['sidebar-label']}>Цвета</span>
  //     </li>
  //     <li className={s['sidebar-item']}>
  //       <GalleryHorizontalEnd size={22} className={s['sidebar-icon']} />
  //       <span className={s['sidebar-label']}>Мои товары</span>
  //     </li>
  //     <li className={s['sidebar-item']}>
  //       <UserStar size={22} className={s['sidebar-icon']} />
  //       <span className={s['sidebar-label']}>Отзывы</span>
  //     </li>
  //     <li className={s['sidebar-item']}>
  //       <ShoppingBag size={22} className={s['sidebar-icon']} />
  //       <span className={s['sidebar-label']}>Покупки</span>
  //     </li>
  //     <li className={s['sidebar-item']}>
  //       <Settings size={22} className={s['sidebar-icon']} />
  //       <span className={s['sidebar-label']}>Настройки магазина</span>
  //     </li>
  //   </ul>
  //   <footer></footer>
  // </aside>
}
