"use client";

import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { cn } from "@nextui-org/theme";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ThemeSwitch } from "./theme-switch";

import { GithubIcon, Logo, TwitterIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <NextUINavbar
      classNames={{
        base: "bg-primary",
        wrapper: "w-full justify-center",
        item: "hidden sm:flex text-primary-foreground/75 text-sm data-[active=true]:text-primary-foreground",
      }}
      height="64px"
      isMenuOpen={isMenuOpen}
      maxWidth={!isHome ? "full" : "xl"}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand as="li" className="gap-3 max-w-fit text-primary-foreground">
        <NextLink className="flex items-center justify-start gap-1" href="/">
          <Logo size={34} />
          <p className="font-bold text-small">ACME</p>
        </NextLink>
      </NavbarBrand>

      {isHome && (
        <NavbarContent>
          <ul className="justify-start hidden gap-4 ml-2 sm:flex">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href} isActive={pathname === item.href}>
                <NextLink href={item.href}>{item.label}</NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>
      )}

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-primary-foreground/75" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-primary-foreground/75" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 basis-1 sm:hidden" justify="end">
        <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
          <TwitterIcon className="text-primary-foreground/75" />
        </Link>
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-primary-foreground/75" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle className="text-primary-foreground/75" />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-2 mx-4 mt-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                className={cn("text-large", {
                  "text-primary": pathname === item.href,
                })}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
