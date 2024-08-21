import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "@/lib/utils";

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={cn('mt-5 scroll-m-20 text-4xl font-bold tracking-tight', className)}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn('mt-10 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0', className)}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={cn('mt-6 scroll-m-20 text-lg font-semibold tracking-tight', className)}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={cn('mt-6 scroll-m-20 text-base font-semibold tracking-tight', className)}
            {...props}
        />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={cn('leading-7 mt-6', className)}
            {...props}
        />
    ),
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <blockquote
            className={cn('mt-6 border-l-4 pl-4 italic text-gray-600', className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul
            className={cn('mt-4 list-disc list-inside', className)}
            {...props}
        />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol
            className={cn('mt-4 list-decimal list-inside', className)}
            {...props}
        />
    ),
    li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
        <li
            className={cn('mt-2', className)}
            {...props}
        />
    ),
    a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
            className={cn('text-blue-600 underline hover:text-blue-800', className)}
            {...props}
        />
    ),
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
        className={cn('my-4 rounded-md border p-4', className)}
        {...props}
        />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
        className={cn('relative rounded bg-slate-800 px-[0.3rem] py-[0.2rem] font-mono text-sm', className)}
        {...props}
        />
    ),
    Image,
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);
    return (
        <div className="mdx dark:bg-[#1a1a1a]">
            <Component components={components} />
        </div>
    )
}