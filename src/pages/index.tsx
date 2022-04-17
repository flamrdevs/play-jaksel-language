import { Fragment, useCallback, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

import { FileIcon, GitHubLogoIcon, InfoCircledIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Container, Header, IconButton, IconButtonLink, JakSelCodeEditor, JavaScriptCodePreview, Main } from "~/components";

import { useThemeContext } from "~/components/ThemeProvider";
import { useAppContext } from "~/components/AppProvider";
import { files } from "~/static/files";

const links = {
  github: {
    playJakSelLanguage: "https://github.com/flamrdevs/play-jaksel-language",
    jakSelLanguage: "https://github.com/RioChndr/jaksel-language",
  },
};

const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`px-2 flex justify-center items-center py-0.5 text-xs font-medium border border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400 rounded-full ${className}`}
      {...props}
    />
  );
};

const LeftSideHeader = () => {
  return (
    <a href="/" className="flex items-center space-x-4">
      <img src="/unstable-jaksel-lang-logo.png" className="w-8 h-8 bg-center bg-cover rounded" alt="JakSel Lang Logo" />
      <span className="self-center text-xl font-bold whitespace-nowrap">{process.env.NEXT_PUBLIC_APP_NAME.toLowerCase()}</span>
      <div>
        <Badge>beta</Badge>
      </div>
    </a>
  );
};

const RightSideHeader = () => {
  const { dark, toggleDark } = useThemeContext();

  const [dialog, setDialog] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const KEY = "info";

    try {
      if (!Boolean(JSON.parse(localStorage.getItem(KEY)))) {
        setDialog(true);
        localStorage.setItem(KEY, JSON.stringify(true));
      }
    } catch (error) {
      console.error("LocalStorage error");
    }
  }, []);

  const openDialog = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  const SunOrMoonIcon = useCallback((props: { className: string }) => {
    return dark ? <SunIcon className={props.className} /> : <MoonIcon className={props.className} />;
  }, []);

  return (
    <Fragment>
      <div className="flex items-center space-x-2">
        <div>
          Powered by{" "}
          <a
            href={links.github.jakSelLanguage}
            className="text-primary-500 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-400"
          >
            jaksel-language@1.0.2
          </a>
        </div>

        <IconButtonLink href={links.github.playJakSelLanguage}>
          <GitHubLogoIcon className="w-6 h-6" />
        </IconButtonLink>

        <IconButton onClick={openDialog}>
          <InfoCircledIcon className="w-6 h-6" />
        </IconButton>

        <IconButton onClick={toggleDark}>
          <SunOrMoonIcon className="w-6 h-6" />
        </IconButton>
      </div>

      <Transition show={dialog} as={Fragment}>
        <Dialog onClose={closeDialog} className="fixed inset-0 z-10 overflow-y-auto">
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
              <div className="relative w-full max-w-xl p-6 mx-auto my-8 bg-white bg-opacity-70 rounded-xl dark:bg-black dark:bg-opacity-50 backdrop-blur-md">
                <Dialog.Title className="flex items-center space-x-4 text-xl font-bold">
                  <img src="/unstable-jaksel-lang-logo.png" className="w-8 h-8 bg-center bg-cover rounded" alt="JakSel Lang Logo" />
                  <span>{process.env.NEXT_PUBLIC_APP_NAME.toLowerCase()}</span>
                  <div>
                    <Badge>beta</Badge>
                  </div>
                </Dialog.Title>
                <Dialog.Description className="my-4 text-lg">
                  <div>Jaksel-lang Online Compiler & Interpreter</div>
                  <div>
                    Powered by{" "}
                    <a
                      href={links.github.jakSelLanguage}
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-400"
                    >
                      jaksel-language@1.0.2
                    </a>
                  </div>
                </Dialog.Description>

                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white transition-colors bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 dark:bg-primary-500 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-400"
                    onClick={closeDialog}
                  >
                    Enjoy
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
  const { file, setFileByName } = useAppContext();

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full gap-3 px-4 py-2 text-lg font-medium shrink-0">
        {Object.values(files).map((_file) => {
          return (
            <button
              key={_file.name}
              className={`px-2 shrink-0 flex items-center justify-center gap-2 py-0.5 border-2 border-transparent focus:outline-none ${
                file.name === _file.name ? "border-b-primary-400 dark:border-b-primary-500" : ""
              }`}
              onClick={() => {
                setFileByName(_file.name);
              }}
            >
              <FileIcon className="w-4 h-4" />
              {_file.name}
            </button>
          );
        })}
      </div>
      <div className="flex-grow w-full overflow-auto">
        <JakSelCodeEditor />
      </div>
    </div>
  );
};

const RightPanelMain = () => {
  const { file } = useAppContext();

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full gap-3 px-4 py-2 text-lg font-medium shrink-0">
        <button className="px-2 shrink-0 flex items-center justify-center gap-2 py-0.5 border-2 border-transparent border-b-primary-400 dark:border-b-primary-500 focus:outline-none">
          <FileIcon className="w-4 h-4" />
          {file.name}
        </button>
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
