"use client";
import DataTable from "@/components/dataTable";
import PageTitle from "@/components/pageTitle";
import { seed } from "@/data/seed";
import { cn } from "@/lib/utils";
import { Order } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

const OrdersPage = () => {
  const { ordersData } = seed;
  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "order",
      header: "Order",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return (
          <div
            className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
              "bg-red-200": row.getValue("status") === "Pending",
              "bg-orange-200": row.getValue("status") === "Processing",
              "bg-green-200": row.getValue("status") === "Completed",
            })}
          >
            {row.getValue("status")}
          </div>
        );
      },
    },
    {
      accessorKey: "lastOrder",
      header: "Last Order",
    },
    {
      accessorKey: "method",
      header: "Method",
    },
  ];
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={ordersData} />
    </div>
  );
};

export default OrdersPage;
