"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/groups", label: "Groups" },
];

export default function Navbar() {
    const pathname = usePathname();
    return(
        <nav className="flex items-center gap-6 border-b border-slate-200 bg-white px-8 py-5 shadow-sm">
            <span className="text-lg font-bold text-slate-900">Studyboard</span>
            <div className="flex gap-5">
                {
                    links.map((link) => {
                      const isActive = pathname === link.href;
                        return(
                          <Link
                              key={link.href}
                              href={link.href}
                              className={
                                  isActive
                                    ? "font-semibold text-blue-700"
                                    : "text-slate-700 hover:text-blue-700"
                              }
                           >
                              {link.label}
                            </Link>
                        )
                    })
                }
</div>
        </nav>
    );
}
 
