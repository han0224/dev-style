import {
  MdKeyboardArrowDown,
  MdOutlineRadioButtonChecked,
  MdQuestionMark,
} from "react-icons/md";
import { IoIosCheckboxOutline, IoMdClose } from "react-icons/io";
import { LuTextCursorInput } from "react-icons/lu";
import { ImSortNumbericDesc } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

import { iconName } from "@/types/type";

export const icons = (name: iconName, size = 20) => {
  const icons: Record<string, JSX.Element> = {
    "": <MdQuestionMark size={size} />,
    checkbox: <IoIosCheckboxOutline size={size} />,
    text: <LuTextCursorInput size={size} />,
    radio: <MdOutlineRadioButtonChecked size={size} />,
    number: <ImSortNumbericDesc size={size} />,
    arrowDown: <MdKeyboardArrowDown size={size} />,
    hamburger: <GiHamburgerMenu size={size} />,
    close: <IoMdClose size={size} />,
    html: <FaHtml5 size={size} />,
    css: <FaCss3Alt size={size} />,
  };
  return icons[name];
};
