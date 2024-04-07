'use client'
import { SlashIcon } from "@radix-ui/react-icons";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const PathListItems = () => {
    const path = usePathname();
    const pathParts = path.split("/").filter(Boolean);
    return (
        <BreadcrumbList>
            {pathParts.map((item, index) => {
                const isDashboardPath = item.startsWith('/dashboard/user/page');
                const isLastIndex = index === pathParts.length - 1;

                if (index === 0 || (isDashboardPath && index < pathParts.length - 1)) {
                    return (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink href={`/dashboard/user/page/${item}`}>
                                <span className="text-muted-foreground">{item}</span>
                            </BreadcrumbLink>
                            <SlashIcon />
                        </BreadcrumbItem>
                    );
                } else if (isLastIndex) {
                    return (
                        <BreadcrumbItem key={index}>
                            <span className="text-muted-foreground">{item}</span>
                        </BreadcrumbItem>
                    );
                } else {
                    return (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink href={`/dashboard/user/page/${item}`}>
                                <span className="text-muted-foreground">...</span>
                            </BreadcrumbLink>
                            <SlashIcon />
                        </BreadcrumbItem>
                    );
                }
            })}
        </BreadcrumbList>
    );
};

export default PathListItems;
