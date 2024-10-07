import { CameraIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { showMessage } from "../../../Features/lightOrDark/lib/showMessage";

interface ReceiveName {
  name: string;
  id: number;
  onCameraClick: () => void;
}

const Header: React.FC<ReceiveName> = ({ name, onCameraClick }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDark(document.body.classList.contains(`dark`));
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 pt-8 border-gray-200 dark:border-gray-900 border-b-2">
        <div className="flex items-center">
          <div className="flex justify-end space-x-10 mb-8 mr-11 w-screen text-gray-800 dark:text-white font-Jakarta font-medium">
            <div className="font-Jakarta font-extrabold">Bem-vindo, {name}</div>
            <div className="ml-10">|</div>
            <button onClick={onCameraClick}>
              <CameraIcon
                title="Câmera"
                className="w-8 h-8 text-gray-800 dark:text-white"
              />
            </button>
            <button
              onClick={() => {
                toggleDarkMode();
                showMessage();
              }}
            >
              {isDark ? (
                  <SunIcon className="w-8 h-8" />
            ) : (
                  <MoonIcon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Header };
