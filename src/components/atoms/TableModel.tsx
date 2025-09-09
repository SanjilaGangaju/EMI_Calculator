import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table"
import { useMemo } from "react"

interface ScheduleRow {
  month: number
  principal: number
  interest: number
  balance: number
}

interface RepaymentScheduleProps {
  schedule: ScheduleRow[]
}

export function RepaymentSchedule({ schedule }: RepaymentScheduleProps) {
  const columns = useMemo<ColumnDef<ScheduleRow>[]>(
    () => [
      {
        accessorKey: "month",
        header: "Month",
        cell: ({ getValue }) => getValue(),
      },
      {
        accessorKey: "principal",
        header: "Principal",
        cell: ({ getValue }) => `Nu. ${(getValue() as number).toFixed(0)}`,
      },
      {
        accessorKey: "interest",
        header: "Interest",
        cell: ({ getValue }) => `Nu. ${(getValue() as number).toFixed(0)}`,
      },
      {
        accessorKey: "balance",
        header: "Balance",
        cell: ({ getValue }) => `Nu. ${(getValue() as number).toFixed(0)}`,
      },
    ],
    [],
  )

  const table = useReactTable({
    data: schedule,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 12, // show 12 months per page
      },
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Monthly Repayment Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full">
            <thead className="border-b border-blue-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b border-blue-300 bg-gray-50">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="text-left p-3 font-medium">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="border border-gray-100">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <Button variant="ghost" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          {Array.from({ length: Math.min(4, table.getPageCount()) }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={table.getState().pagination.pageIndex + 1 === page ? "default" : "ghost"}
              size="sm"
              onClick={() => table.setPageIndex(page - 1)}
              className={table.getState().pagination.pageIndex + 1 === page ? "bg-teal-500 hover:bg-teal-600" : ""}
            >
              {page}
            </Button>
          ))}

          {table.getPageCount() > 4 && (
            <>
              <span className="px-2">...</span>
              <Button variant="ghost" size="sm" onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                {table.getPageCount()}
              </Button>
            </>
          )}

          <Button variant="ghost" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
