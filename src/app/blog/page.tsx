import { Card } from "@/components/blog/Card";
import { Navbar } from "@/components/navbar/Navbar";
import * as React from "react";

export default function BlogPage() {
  return (
    <section className="flex flex-wrap gap-5 justify-center items-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}
