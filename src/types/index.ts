import { LucideIcon } from "lucide-react";
import React from "react";

export type CustomLinksProps = {
  href: string;
  children: React.ReactNode;
  name: string;
};

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  discription: string;
};

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

export type Order = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

export type Setting = {
  category: string;
  value: string | number | boolean;
};
