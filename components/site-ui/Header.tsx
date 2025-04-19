"use client";
import React, { useEffect, useState } from "react";
import headerContents from "@/components/json/header-contents.json";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "../core-ui/Button";
import { allDocs, Doc } from "@/.contentlayer/generated";
import { Label } from "../core-ui/Label";
import { cn } from "../libs/utils";
import { usePathname } from "next/navigation";
import { Dialog, DialogBody, DialogFooter, DialogHeader, DialogSection, DialogTrigger } from "../core-ui/Dialog";
import { Separator } from "../core-ui/Separator";
import { useTheme } from "next-themes";
const Header: React.FC = () => {
  const pathname = usePathname();
  const [name, setName] = useState<string>("");
  const [results, setResults] = useState<Doc[]>([]);
  const { theme, setTheme } = useTheme()
  const groupedNavContents = allDocs.reduce<{ [key: string]: Doc[] }>(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {}
  );
  useEffect(() => {
    if(name.length < 2) return setResults([]);
    const filteredResults = allDocs.filter(item => item.title.toLowerCase().includes(name.toLowerCase())).map(i => i);

    setResults(filteredResults);
  }, [name])
  return (
    <>
      <header className="sticky top-0 flex justify-between items-center py-2 px-4">
        <header className="flex items-center gap-8">
          <Link href={"/"} className="flex items-center gap-2">
            <Icon
              className="text-2xl"
              icon={"solar:airbuds-case-minimalistic-outline"}
            />
            <span className="font-semibold text-xl text-foreground">
              @core/ui
            </span>
          </Link>
          <nav className="flex items-center gap-2">
            {headerContents["header-contents"].map(({ title, href }, i) => (
              <Link
                className="text-muted flex items-center gap-2 text-sm hover:text-foreground transition"
                href={href as string}
                key={i}
              >
                <span>{title}</span>
                <span className="text-[10px] p-1 px-3 rounded-lg bg-secondary text-muted font-medium">soon</span>
              </Link>
            ))}
          </nav>
        </header>
        <footer className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
            <button className="p-1.5 px-3 flex items-center gap-8 hover:bg-secondary transition cursor-pointer rounded-lg border border-border bg-tertiary">
            <span className="text-[13px] text-muted">
              Search in documentation
            </span>
            <span className="text-[11px] text-muted">⌘+K</span>
          </button>
            </DialogTrigger>
            <DialogBody>
              <DialogHeader className="p-3 flex flex-row items-center gap-1">
                <Icon icon={"solar:magnifer-outline"} />
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="placeholder:text-muted/75 font-medium w-full p-1.5 text-[15px] outline-none" placeholder="Search in documentation..." />
                <kbd className="cursor-pointer text-[11px] p-1.5 bg-secondary rounded-lg text-muted px-3 border border-border">ESC</kbd>
              </DialogHeader>
              <Separator orientation="horizontal" />
              <DialogSection className="p-2 gap-0">
                {results.length > 0 ? results.map(item => (
                  <Link className="p-4 rounded-lg transition flex items-center justify-between hover:bg-secondary" href={`/${item.fileUrl}`} key={item.title}>
                    <div className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full flex items-center justify-center bg-muted/15 text-muted"><Icon className="text-sm" icon={"solar:hashtag-outline"} /></span>
                    <div className="flex flex-col gap-0">
                    <span className="text-xs text-muted">{item.category.replace("-", " ").split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")}</span>
                    <span className="text-foreground text-[15px] font-medium">{item.title}</span>
                    </div>
                    </div>
                    <Icon className="text-muted text-[15px]" icon={"solar:alt-arrow-right-outline"} />
                  </Link>
                )) : (<span className="text-sm text-muted text-center">Results will be here.</span>)}
              </DialogSection>
              <Separator orientation="horizontal" />
              <DialogFooter className="p-1.5 text-[12px] text-muted px-3">
                &copy; {new Date().getFullYear()} yunusedev
              </DialogFooter>
            </DialogBody>
          </Dialog>
          <Button onClick={() => setTheme(theme == "light" ? "dark" : "light")} iconOnly size={"sm"} variant={"ghost"}>
            <Icon icon={`solar:${theme == "light" ? "sun" : "moon"}-outline`} />
          </Button>
        </footer>
      </header>
      {pathname.includes("docs") && (
        <aside className="fixed w-72 flex flex-col px-4 mt-8">
          <section className="overflow-y-auto max-h-[calc(100vh-13vh)] flex flex-col gap-6">
            {Object.keys(groupedNavContents).map((item, i) => (
              <div className="flex flex-col gap-3" key={i}>
                <Label>
                  {item
                    .replace("-", " ")
                    .split(" ")
                    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                    .join(" ")}
                </Label>
                <nav className="flex flex-col gap-px">
                  {groupedNavContents[item].map((item) => (
                    <Link
                      className={cn(
                        "text-sm text-muted p-2 hover:text-foreground px-3 cursor-pointer transition rounded-lg",
                        {
                          "p-2 px-3 text-foreground":
                            pathname == "/" + item.fileUrl,
                        }
                      )}
                      key={item.title}
                      href={"/" + item.fileUrl}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </section>
        </aside>
      )}
    </>
  );
};

export default Header;
