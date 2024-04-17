import DataTable from "@/components/dataTable";
import PageTitle from "@/components/pageTitle";
import { seed } from "@/data/seed";
import { Setting } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

const SettingsPage = () => {
  const { settingData } = seed;
  const columns: ColumnDef<Setting>[] = [
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "value",
      header: "Value",
    },
  ];
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={settingData} />
    </div>
  );
};

export default SettingsPage;
