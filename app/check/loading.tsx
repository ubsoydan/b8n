import { Skeleton } from "components/ui/skeleton";

export default function Loading() {
    return (
        <div>
            <Skeleton className="w-[48rem] h-16 my-4" />
            <Skeleton className="w-[48rem] h-[16rem]" />
        </div>
    );
}
