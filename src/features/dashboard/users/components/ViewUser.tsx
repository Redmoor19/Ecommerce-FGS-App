import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { User } from "@/types/user"
import RoleBadge from "./RoleBadge"
import StatusBadge from "./StatusBadge"
import formatDate from "@/lib/formatDate"

type ViewUserProps = {
  children: React.ReactNode
  user: User
}

const ViewUser = ({ children, user }: ViewUserProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle>
            <span className="text-primary">User information</span>
          </SheetTitle>
        </SheetHeader>
        <div className="w-full max-w-md p-6 grid gap-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-2xl font-semibold">{user.name}</h3>
              <div className="flex gap-3">
                <RoleBadge title={user.role} />
                <StatusBadge title={user.activeStatus} />
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <p className="text-muted-foreground">Email</p>
              <p>{user.email}</p>
            </div>
            <div className="grid gap-1">
              <p className="text-muted-foreground">Birth Date</p>
              <p>
                {user.birthDate ? (
                  <span>{formatDate(new Date(user.birthDate))}</span>
                ) : (
                  <span className="text-primary">no information</span>
                )}
              </p>
            </div>
            <div className="grid gap-1">
              <p className="text-muted-foreground">Address</p>
              <p>{user.address ?? <span className="text-primary">no information</span>}</p>
            </div>
            <div className="grid gap-1">
              <p className="text-muted-foreground">Phone</p>
              <p>{user.phone ?? <span className="text-primary">no information</span>}</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ViewUser
