import { UserRoundX } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

export function UserAvatar({ imagePath }: { imagePath: string }) {
  return (
    <Avatar className="h-8 w-8 rounded-lg">
      <AvatarImage src={imagePath} />
      <AvatarFallback className="rounded-lg">
        <UserRoundX size={20} />
      </AvatarFallback>
    </Avatar>
  )
}
