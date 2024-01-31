"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  CommissionIcon,
  Country,
  IRate,
  NameColumn,
  TxIcon,
} from "./tabledefaultValues";

export type Rent = {
  id: string;
  date: Date;
  name: string;
  country: string;
  interestRate: string;
  tx: string;
  commission: string;
};

export const columns: ColumnDef<Rent>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date") as Date;
      const formatted = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: () => {
      return (
        <div className="flex gap-x-2 items-center">
          <NameColumn />
          <h3 className="text-black dark:text-white font-normal text-base">
            Bmw Séries 2 #102
          </h3>
        </div>
      );
    },
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => {
      return (
        <div className="flex gap-x-2 items-center">
          <Country country={row.getValue("country") as string} />
          <h3 className="text-black dark:text-white font-normal text-base">
            {row.getValue("country")}
          </h3>
        </div>
      );
    },
  },
  {
    accessorKey: "interestRate",
    header: "Interest Rate",
    cell: ({ row }) => {
      return (
        <div className="flex gap-x-2 items-center">
          <IRate />
          <h3 className="text-black dark:text-white font-normal text-base">
            {row.getValue("interestRate")}
          </h3>
        </div>
      );
    },
  },
  {
    accessorKey: "tx",
    header: () => <div className="text-center ">Tx</div>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-x-2 justify-end">
          <TxIcon />
          <h3 className="text-black dark:text-white font-normal text-base">
            {row.getValue("tx")}
          </h3>
        </div>
      );
    },
  },
  {
    accessorKey: "commission",
    header: () => <div className="text-right">Commission</div>,

    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <CommissionIcon />
        </div>
      );
    },
  },
];
