import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export const ButtonPrimary = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "group cursor-pointer slide-anime px-5 py-3 rounded-full w-[180px] dark:bg-white bg-black text-white dark:text-black flex justify-between items-center font-semibold",
        className
      )}
      {...props}
    >
      {children}
      <div className="group-hover:translate-x-2 transition-all">
        <ArrowRight />
      </div>
    </button>
  );
};

export const ButtonSecondary = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className={cn(
      "group relative cursor-pointer p-2 w-32 border bg-white dark:bg-black rounded-full overflow-hidden text-black dark:text-white text-center font-semibold",
      className
    )}>
      <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
        {children}
      </span>
      <div className="flex gap-2 text-white dark:text-black bg-blue-500 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
        <span>{children}</span>
      </div>
    </div>
  );
};