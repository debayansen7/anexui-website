"use client";
import { Skeleton } from "anexui";

export default function SkeletonPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <div className="flex gap-3 items-center">
        <Skeleton variant="circle" width={48} height={48} />
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton variant="text" width="60%" height={14} />
          <Skeleton variant="text" width="90%" height={12} />
        </div>
      </div>
      <Skeleton variant="rect" width="100%" height={80} />
      <Skeleton variant="text" width="45%" height={12} />
    </div>
  );
}
