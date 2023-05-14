import { Skeleton } from "components/ui/skeleton";

export default function Loading() {
    return (
        <div>
            <Skeleton className="w-96 mx-4 h-16 my-4 md:mx-0 md:w-[1152px]" />
            <Skeleton className="w-48 mx-4 h-72 mb-16 md:mx-0 md:w-[52rem]" />
            <div className="mt-8">
                <div className="my-8">
                    <Skeleton className="w-2/3 h-24 mb-2 mx-2 md:mx-0 md:w-[574px]" />
                    <Skeleton className="w-1/3 mx-2 h-10 md:mx-0 md:w-48" />
                </div>
                <div className="my-8">
                    <Skeleton className="w-2/3 h-24 mb-2 mx-2 md:mx-0 md:w-[574px]" />
                    <Skeleton className="w-1/3 mx-2 h-10 md:mx-0 md:w-48" />
                </div>
                <div className="my-8">
                    <Skeleton className="w-2/3 h-24 mb-2 mx-2 md:mx-0 md:w-[574px]" />
                    <Skeleton className="w-1/3 mx-2 h-10 md:mx-0 md:w-48" />
                </div>
            </div>
        </div>
    );
}
