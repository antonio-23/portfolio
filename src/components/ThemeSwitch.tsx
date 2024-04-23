import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "../../public/styles/MoonIcon.tsx";
import { SunIcon } from "../../public/styles/SunIcon.tsx";

const ThemeSwitch = () => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch();

  return (
    <div className='flex flex-col gap-2'>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-sky-200",
            ],
          })}
          style={{
            boxShadow:
              "inset 5px 5px 10px rgba(174, 174, 192, 0.5), 5px 5px 10px rgba(174, 174, 192, 0.5)",
          }}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
};

export default function App() {
  return <ThemeSwitch />;
}
