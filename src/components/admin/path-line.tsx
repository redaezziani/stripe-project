import {
    Breadcrumb,
} from "@/components/ui/breadcrumb"
import PathListItems from "./ui/path-list"


export function PathLine() {
    return (
        <div className="w-full  mt-36 px-4 flex  justify-between items-center">
            <Breadcrumb
                className=""
            >
                <PathListItems />
            </Breadcrumb>
        </div>
    )
}
