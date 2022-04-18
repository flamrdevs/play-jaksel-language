import { Fragment, useRef } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { useBoolean, useIsomorphicLayoutEffect } from "usehooks-ts";

import { Cross2Icon, GitHubLogoIcon, InfoCircledIcon, MoonIcon, PlusIcon, SunIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs";

import { Container, Header, IconButton, IconButtonLink, JakSelCodeEditor, JavaScriptCodePreview, Main } from "~/components";

import { useThemeContext } from "~/contexts/ThemeContext";
import { useFilesContext } from "~/contexts/FilesContext";

const links = {
  github: {
    playJakSelLanguage: "https://github.com/flamrdevs/play-jaksel-language",
    jakSelLanguage: "https://github.com/RioChndr/jaksel-language",
  },
  home: {
    jakselLanguage: "https://jaksel-language.vercel.app",
  },
};

const LeftSideHeader = () => {
  return (
    <div className="flex items-center space-x-2">
      <a
        href="/"
        className="flex items-center p-2 space-x-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-xl"
      >
        <img src="/unstable-jaksel-lang-logo.png" className="w-8 h-8 bg-center bg-cover rounded" alt="JakSel Lang Logo" />
        <span className="self-center hidden text-xl font-bold whitespace-nowrap md:block">
          {process.env.NEXT_PUBLIC_APP_NAME.toLowerCase()}
        </span>
      </a>
      <div>
        <div className="px-2 flex justify-center items-center py-0.5 text-xs font-medium border border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400 rounded-full">
          beta
        </div>
      </div>
    </div>
  );
};

const RightSideHeader = () => {
  const { dark, toggleDark } = useThemeContext();

  const dialog = useBoolean();

  let startRef = useRef<HTMLButtonElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const KEY = "jaksel-language-play-dialog";

    const reWriteDate = () => {
      dialog.setTrue();
      localStorage.setItem(KEY, JSON.stringify(new Date()));
    };

    try {
      const value = JSON.parse(localStorage.getItem(KEY));

      if (value) {
        const day = dayjs(value);
        if (day.isValid() && /* is different day */ dayjs().format("DD") !== day.format("DD")) reWriteDate();
      } else {
        reWriteDate();
      }
    } catch (error) {
      console.error("LocalStorage error");
    }
  }, []);

  return (
    <Fragment>
      <div className="flex items-center space-x-2">
        <div className="hidden lg:block">
          Powered by{" "}
          <a
            href={links.home.jakselLanguage}
            rel="noreferrer noopener"
            target="_blank"
            className="px-1.5 py-0.5 text-primary-500 dark:text-primary-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-xl"
          >
            jaksel-language@1.0.2
          </a>
        </div>

        {/* <IconButtonLink href={links.github.playJakSelLanguage} rel="noreferrer noopener" target="_blank">
          <GitHubLogoIcon className="w-5 h-5" />
        </IconButtonLink> */}

        <div>
          <a href={links.github.playJakSelLanguage} rel="noreferrer noopener" target="_blank">
            <div className="px-2 flex justify-center items-center py-0.5 text-sm font-medium border border-neutral-500 hover:border-primary-500 dark:border-neutral-400 dark:hover:border-primary-400 text-neutral-500 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 rounded-full">
              Bug Report
            </div>
          </a>
        </div>

        <IconButton onClick={dialog.setTrue}>
          <InfoCircledIcon className="w-5 h-5" />
        </IconButton>

        <IconButton onClick={toggleDark}>{dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}</IconButton>
      </div>

      <Transition show={dialog.value} as={Fragment}>
        <Dialog initialFocus={startRef} onClose={dialog.setFalse} className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 dark:bg-opacity-60" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative w-11/12 max-w-xl p-4 mx-auto bg-white border-2 lg:p-6 border-neutral-100 bg-opacity-70 rounded-xl dark:bg-black dark:bg-opacity-50 backdrop-blur-md dark:border-neutral-800">
                <Dialog.Title className="flex items-center space-x-2">
                  <span className="flex items-center p-2 space-x-4">
                    <img src="/unstable-jaksel-lang-logo.png" className="w-8 h-8 bg-center bg-cover rounded" alt="JakSel Lang Logo" />
                    <span className="self-center hidden text-xl font-bold whitespace-nowrap md:block">
                      {process.env.NEXT_PUBLIC_APP_NAME.toLowerCase()}
                    </span>
                  </span>
                  <span>
                    <div className="px-2 flex justify-center items-center py-0.5 text-xs font-medium border border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400 rounded-full">
                      beta
                    </div>
                  </span>
                </Dialog.Title>
                <Dialog.Description className="my-4 ml-4 text-base">
                  <span className="block">Jaksel-lang Online Compiler & Interpreter</span>
                  <span>
                    Powered by{" "}
                    <a
                      href={links.home.jakselLanguage}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="px-1.5 py-0.5 text-primary-500 hover:underline dark:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-xl"
                    >
                      jaksel-language@1.0.2
                    </a>
                  </span>
                </Dialog.Description>

                <div className="flex justify-end mt-8">
                  <button
                    ref={startRef}
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white transition-colors bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 dark:bg-primary-500 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-400"
                    onClick={dialog.setFalse}
                  >
                    Start
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

const LeftPanelMain = () => {
  const { files, active, addFile, removeFileById, setActiveFileById } = useFilesContext();

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full gap-3 px-2 py-1 mb-1 overflow-auto font-medium lg:px-4 lg:py-2 shrink-0">
        {files.map((file) => {
          const isActive = active.id === file.id;

          const fileName = `${file.name}${file.ext}`;

          return (
            <div
              key={file.id}
              className={`relative flex items-center justify-center group shrink-0 transition-colors ${
                isActive ? "text-neutral-900 dark:text-neutral-50" : "text-neutral-400 dark:text-neutral-500"
              }`}
            >
              {isActive && (
                /* maybe add layout animation (ex: framer-motion) */ <div className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary-500 dark:bg-primary-400" />
              )}

              <button
                className="flex items-center justify-center pl-2 pr-1 py-0.5 focus:outline-none"
                onClick={() => {
                  setActiveFileById(file.id);
                }}
              >
                <span>{fileName}</span>
              </button>
              <button
                className={`pr-1 ${isActive ? "opacity-30" : "opacity-0"} group-hover:opacity-80 focus:outline-none transition-colors`}
                onClick={() => {
                  removeFileById(file.id);
                }}
              >
                <Cross2Icon className="w-4 h-4" />
              </button>
            </div>
          );
        })}
        <div className="flex items-center justify-center transition-colors group shrink-0 ">
          <button
            className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none opacity-30 group-hover:opacity-80"
            onClick={addFile}
          >
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-grow w-full overflow-auto">
        <JakSelCodeEditor />
      </div>
    </div>
  );
};

const RightPanelMain = () => {
  const { active } = useFilesContext();

  const fileName = `${active.name}.js`;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full gap-3 px-2 py-1 mb-1 overflow-auto font-medium lg:px-4 lg:py-2 shrink-0">
        <div className="relative flex items-center justify-center transition-colors group shrink-0 text-neutral-900 dark:text-neutral-50">
          <div className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary-500 dark:bg-primary-400" />

          <div className="flex items-center justify-center pl-2 pr-2 py-0.5 focus:outline-none">
            <span>{fileName}</span>
          </div>
        </div>
      </div>
      <div className="flex-grow w-full overflow-auto">
        <JavaScriptCodePreview />
      </div>
    </div>
  );
};

function IndexPage() {
  return (
    <Container>
      <Header leftSide={<LeftSideHeader />} rightSide={<RightSideHeader />} />
      <Main leftPanel={<LeftPanelMain />} rightPanel={<RightPanelMain />} />
    </Container>
  );
}

export default IndexPage;
