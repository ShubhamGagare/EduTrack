
"use server"
import RegisterClient from "../../../../../components/clients/RegisterClient"
import { PrismaClient } from "@repo/db"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/ui";
const client = new PrismaClient()
export type reisterPropType = {
  Attendance: {
    id: number,
    student: {
      user: {
        username: string | null
      },
    },
    status: string | null,
    comment: string | null,
    lateMinutes: number | null
  }[],
  cls: {
    name: string | null
  }

}

export default async function getRegister({ params }: { params: { registerIds: number[] } }) {
  try {
    const response = await client.register.findFirst({
      where: {
        id: Number(params.registerIds[0]) || 1
      },
      include: {
        Attendance: {
          select: {
            id: true,
            student: {
              select: {
                user: {
                  select: {
                    username: true
                  }
                },

              }
            },
            status: true,
            comment: true,
            lateMinutes: true
          }

        },
        cls: {
          select: {
            name: true
          }
        }

      }
    })
    if (!response || response === null) throw new Error("Registers not found")

    const register = response
    return (
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/take-register">Take Register</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{response?.cls.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <RegisterClient register={register} />

      </div>
    )

  } catch (error) {
    console.log(error)
    return [];
  }
}

