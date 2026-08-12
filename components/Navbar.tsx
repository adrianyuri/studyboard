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
        <nav className="flex items-center gap-6 border-b px-8 py-5">
            <span className="font-bold text-lg">Studyboard</span>
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
                                    ? "text-purple-700"
                                    : "text-purple-700"
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