import { cn } from "../../utils/cn";

const DefaultLayout = ({
  className,
  decoration = <></>,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        `relative mx-auto flex flex-col w-full justify-center items-center text-black bg-white gap-4 px-[10vw] py-[5vw] lg:px-4 lgpy-10 xl:px-30 xl:py-20 2xl:px-40 overflow-hidden`,
        className
      )}
      {...props}
    >
      {decoration}
      <div className="relative w-full max-w-360">{children}</div>
    </section>
  );
};
export default DefaultLayout;
