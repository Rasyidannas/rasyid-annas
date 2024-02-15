import { useContext, useEffect, useState } from "react";
import GroupFolder from "../UI/GroupFolder";
import Folder from "../UI/Folder";
import File from "../UI/File";
import Button from "../UI/Button";
import TabContext from "../../store/tab-context";
import LinkFile from "../UI/LinkFile";

function AboutNav({ className, data }) {
  const tabCtx = useContext(TabContext);
  const activeTabs = tabCtx.activeTabs;

  const addedFilesHandler = (value) => {
    tabCtx.addTab(value);
    tabCtx.setTab(value);
  };

  return (
    <div
      className={`${className} flex flex-col gap-2 my-2 sm:my-0 sm:gap-0 flex-none border-r border-lines-10`}
    >
      <GroupFolder title="personal-info">
        <ul className="p-4 flex flex-col gap-2">
          <li className="flex flex-col gap-2">
            <Folder
              title="bio"
              icon="ri-folder-3-fill text-[1rem] text-accent-30"
            >
              <Button onClick={addedFilesHandler.bind(null, data[0])}>
                <File
                  title="about_me"
                  icon="ri-markdown-fill text-scondary-10 text-[1rem]"
                  className={`${
                    activeTabs === "about_me" && "!text-secondary-40"
                  }`}
                />
              </Button>
            </Folder>
          </li>
          <li className="flex flex-col gap-2">
            <Folder
              title="interests"
              icon="ri-folder-3-fill text-[1rem] text-accent-20"
            >
              <Button onClick={addedFilesHandler.bind(null, data[1])}>
                <File
                  title="skill"
                  icon="ri-markdown-fill text-scondary-10 text-[1rem]"
                  className={`${
                    activeTabs === "skill" && "!text-secondary-40"
                  }`}
                />
              </Button>
            </Folder>
          </li>
          <li className="flex flex-col gap-2">
            <Folder
              title="education"
              icon="ri-folder-3-fill text-[1rem] text-secondary-30"
            >
              <Button onClick={addedFilesHandler.bind(null, data[2])}>
                <File
                  title="high_school"
                  icon="ri-markdown-fill text-scondary-10 text-[1rem]"
                  className={`${
                    activeTabs === "high_school" && "!text-secondary-40"
                  }`}
                />
              </Button>
              <Button onClick={addedFilesHandler.bind(null, data[3])}>
                <File
                  title="university"
                  icon="ri-markdown-fill text-scondary-10 text-[1rem]"
                  className={`${
                    activeTabs === "university" && "!text-secondary-40"
                  }`}
                />
              </Button>
            </Folder>
          </li>
        </ul>
      </GroupFolder>

      <GroupFolder title="contacts">
        <ul className="p-4 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <LinkFile
              icon="ri-mail-fill"
              text="rasshit.dsgn@gmail.com"
              link="mailto:rasshit.dsgn@gmail.com"
            />
          </li>
          <li className="flex items-center gap-2">
            <LinkFile icon="ri-map-pin-2-fill" text="sidoarjo, indonesia" />
          </li>
        </ul>
      </GroupFolder>
    </div>
  );
}

export default AboutNav;
