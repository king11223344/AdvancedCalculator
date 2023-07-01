// hooks
import useCalc from "../hooks/useCalc";

// components
import Display from "./Display";
import DigitButton from "./buttons/DigitButton";
import DeleteButton from "./buttons/DeleteButton";
import ResetButton from "./buttons/ResetButton";
import EqualButton from "./buttons/EqualButton";

export default function Body({ theme }) {
  const { displayExp, caclExp, aboveDis, dispatch } = useCalc();

  const bgSecondary = `${
    theme === "one"
      ? "bg-one-bg-secondary"
      : theme === "two"
      ? "bg-two-bg-secondary"
      : "bg-three-bg-secondary"
  }`;

  return (
    <>
      <Display
        theme={theme}
        displayExp={displayExp}
        calcExp={caclExp}
        aboveDis={aboveDis}
      />

      <div
        className={` grid grid-cols-6 grid-rows-layout-1 content-evenly gap-3 rounded-xl p-6 text-sm md:gap-6 md:p-8 ${bgSecondary}`}
      >
        <ResetButton dispatch={dispatch} theme={theme} />
        <DigitButton dispatch={dispatch} dchar="^2" cchar="**2" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="^3" cchar="**3" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="(" cchar="(" theme={theme} />
        <DigitButton dispatch={dispatch} dchar=")" cchar=")" theme={theme} />
        <DigitButton
          dispatch={dispatch}
          dchar="sin("
          cchar="Math.sin("
          theme={theme}
        />
        <DigitButton
          dispatch={dispatch}
          dchar="cos("
          cchar="Math.cos("
          theme={theme}
        />
        <DigitButton
          dispatch={dispatch}
          dchar="tan("
          cchar="Math.tan("
          theme={theme}
        />
        <DigitButton
          dispatch={dispatch}
          dchar="ln("
          cchar="Math.log("
          theme={theme}
        />
        <DigitButton
          dispatch={dispatch}
          dchar="log("
          cchar="Math.log10("
          theme={theme}
        />
        <DigitButton
          dispatch={dispatch}
          dchar="π"
          cchar="Math.PI"
          theme={theme}
        />
        <DigitButton dispatch={dispatch} dchar="7" cchar="7" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="8" cchar="8" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="9" cchar="9" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="%" cchar="%" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="^" cchar="**" theme={theme} />

        <DeleteButton dispatch={dispatch} theme={theme} />

        <DigitButton dispatch={dispatch} dchar="4" cchar="4" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="5" cchar="5" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="6" cchar="6" theme={theme} />
        <DigitButton
          dispatch={dispatch}
          dchar="√("
          cchar="Math.sqrt("
          theme={theme}
        />
        <DigitButton dispatch={dispatch} dchar="x" cchar="*" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="÷" cchar="/" theme={theme} />

        <DigitButton dispatch={dispatch} dchar="1" cchar="1" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="2" cchar="2" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="3" cchar="3" theme={theme} />

        <DigitButton dispatch={dispatch} dchar="&" cchar="&" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="+" cchar="+" theme={theme} />
        <DigitButton dispatch={dispatch} dchar="-" cchar="-" theme={theme} />

        <DigitButton dispatch={dispatch} dchar="." cchar="." theme={theme} />
        <DigitButton dispatch={dispatch} dchar="0" cchar="0" theme={theme} />
        <DigitButton
          dispatch={dispatch}
          dchar="10^"
          cchar="10**"
          theme={theme}
        />
        <DigitButton dispatch={dispatch} dchar="|" cchar="|" theme={theme} />

        <EqualButton dispatch={dispatch} theme={theme} />
      </div>
    </>
  );
}
