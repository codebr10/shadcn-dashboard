"use client";
import DataTable from "@/components/dataTable";
import PageTitle from "@/components/pageTitle";
import { seed } from "@/data/seed";
import { Payment } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

const UsersPage = () => {
  const { paymentData } = seed;
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 items-center">
            <img
              className="h-10 w-10"
              src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
                "name",
              )}`}
              alt="user-image"
            />
            <p>{row.getValue("name")} </p>
          </div>
        );
      },
    },
    {
      accessorKey: "email",
      header: "Email",
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
      <PageTitle title="Users" />
      <DataTable columns={columns} data={paymentData} />
    </div>
  );
};

export default UsersPage;
