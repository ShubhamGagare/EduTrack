import { Avatar, AvatarFallback, AvatarImage, Card, Label } from "@repo/ui";

export function StudentCard({
  title,
  status,
  style
}: {
  title: string;
  status?: string,
  style?: string

  children?: React.ReactNode;
}): JSX.Element {

  return (
    <Card className="p-4 w-56 justify-center">
      <div className="w-full flex justify-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <Label>{title}</Label>
      </div>
      <div>

      </div>
    </Card>

  );
}