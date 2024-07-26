import { Avatar, AvatarFallback, AvatarImage, Card, Label } from "@repo/ui"

const Desk = ({ children }: { children: React.ReactNode; }) => {
  return (
  
      <Card className="flex-col p-2 w-48 h-48 border-gray-200">

        {children}
        {/* <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar> */}
      </Card>

  )
}

export default Desk
