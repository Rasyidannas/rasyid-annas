import GroupFolder from "../UI/GroupFolder";
import LinkFile from "../UI/LinkFile";

function ContactNav({ className }) {
  return (
    <div
      className={`${className} flex flex-col gap-2 my-2 sm:my-0 sm:gap-0 flex-none border-r border-lines-10`}
    >
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
      <GroupFolder title="find-me-also-in">
        <ul className="p-4 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <LinkFile
              icon="ri-external-link-fill"
              text="LeetCode"
              link="https://leetcode.com/Rasyidannas/"
            />
          </li>
          <li className="flex items-center gap-2">
            <LinkFile
              icon="ri-external-link-fill"
              text="CodeSignal"
              link="https://app.codesignal.com/profile/rasyidannas"
            />
          </li>
          <li className="flex items-center gap-2">
            <LinkFile
              icon="ri-external-link-fill"
              text="Codewars"
              link="https://www.codewars.com/users/rasyidannas"
            />
          </li>
        </ul>
      </GroupFolder>
    </div>
  );
}

export default ContactNav;
