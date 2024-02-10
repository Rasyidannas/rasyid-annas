import { useEffect, useState } from "react";
import GroupFolder from "../../components/UI/GroupFolder";
import Folder from "../../components/UI/Folder";
import File from "../../components/UI/File";
import Button from "../../components/UI/Button";

function AboutNav({ className, onActiveTab, onCurrentTab, data }) {
  const [files, setFiles] = useState(["about_me"]);

  const addedFilesHandler = (value) => {
    const existIndex = files.indexOf(value);
    if (existIndex < 0) {
      setFiles((prevState) => prevState.concat(value));
    }

    onActiveTab(value);
  };

  // this will send date to parents
  useEffect(() => {
    onCurrentTab(files);
  }, [files]);

  return (
    <div className={`${className} flex-none border-r border-lines-10`}>
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
                />
              </Button>
              <Button onClick={addedFilesHandler.bind(null, data[3])}>
                <File
                  title="university"
                  icon="ri-markdown-fill text-scondary-10 text-[1rem]"
                />
              </Button>
            </Folder>
          </li>
        </ul>
      </GroupFolder>

      <GroupFolder title="contacts">
        <ul className="p-4 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <span className="text-secondary-10 text-[1rem]">
              <i className="ri-mail-fill"></i>
            </span>
            <p className="text-labels text-secondary-10">
              rasshit.dsgn@gmail.com
            </p>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-secondary-10 text-[1rem]">
              <i className="ri-map-pin-2-fill"></i>
            </span>
            <p className="text-labels text-secondary-10">sidoarjo, Indonesia</p>
          </li>
        </ul>
      </GroupFolder>
    </div>
  );
}

export default AboutNav;
