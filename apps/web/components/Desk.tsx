import { Avatar, AvatarFallback, AvatarImage, Card, Label } from "@repo/ui"

const Desk = ({ children }: { children: React.ReactNode; }) => {
  return (
  
      <Card className="flex-col p-2 w-48 h-48 shadow-md border-gray-200">

        {children}

      </Card>

  )
}

export default Desk
