import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

export type RouteProps = {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
};

export type SidebarProps = PropsWithChildren<{}>;

export type BoxProps = PropsWithChildren<{
  className?: React.ComponentProps<"div">["className"];
}>;

export type HeaderProps = PropsWithChildren<{
  className?: React.ComponentProps<"div">["className"];
}>;
