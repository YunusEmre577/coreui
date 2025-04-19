"use client";
import { notFound, useParams } from "next/navigation";
import React from "react";
import { allDocs } from "@/.contentlayer/generated";
import Header from "@/components/site-ui/Header";
import { Heading } from "@/components/core-ui/Heading";
import { MDXContent } from "@/components/site-ui/content/MDXLoader";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function Page() {
  const params = useParams<{ category: string; slug: string }>();
  const findPage = allDocs.find(
    (item) => item.fileUrl === `docs/${params.category}/${params.slug}`
  );
  if (!findPage) notFound();
  if (!findPage.body) notFound();
  if (!findPage.body.code) notFound();
  const getPrevAndNext = () => {
    const getCurrentIndex = allDocs.findIndex(
      (item) => item.fileUrl == `docs/${params.category}/${params.slug}`
    );
    const getPrev = getCurrentIndex != 0 ? getCurrentIndex - 1 : -1;
    const getNext =
      getCurrentIndex != allDocs.length - 1 ? getCurrentIndex + 1 : -1;
    return { getPrev, getNext };
  };
  return (
    <>
      <Header />
      <section className="relative ml-80 flex flex-col gap-8 mb-12 top-6 px-4">
        <header>
          <Heading type="h2">{findPage.title}</Heading>
        </header>
        <section>
          <MDXContent code={findPage.body.code.toString()} />
        </section>
        <footer className="grid grid-cols-2 gap-3">
          {getPrevAndNext().getPrev != -1 && (
            <Link
              className="transition flex-row-reverse hover:bg-tertiary flex justify-between items-center p-4 border border-border rounded-lg"
              href={`/${allDocs[getPrevAndNext().getPrev]?.fileUrl}`}
            >
              <span className="text-[15px] font-medium text-foreground">
                {allDocs[getPrevAndNext().getPrev]?.title}
              </span>
              <span>
                <Icon icon={"solar:alt-arrow-left-outline"} />
              </span>
            </Link>
          )}
          {getPrevAndNext().getPrev == -1 && <span />}
          {getPrevAndNext().getNext != -1 && (
            <Link
              className="transition hover:bg-tertiary flex justify-between items-center p-4 border border-border rounded-lg"
              href={`/${allDocs[getPrevAndNext().getNext]?.fileUrl}`}
            >
              <span className="text-[15px] font-medium text-foreground">
                {allDocs[getPrevAndNext().getNext]?.title}
              </span>
              <span>
                <Icon icon={"solar:alt-arrow-right-outline"} />
              </span>
            </Link>
          )}
        </footer>
      </section>
    </>
  );
}
