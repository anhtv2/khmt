import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import ApartmentSharpIcon from "@material-ui/icons/ApartmentSharp";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import DescriptionIcon from "@material-ui/icons/Description";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import EventNoteIcon from "@material-ui/icons/EventNote";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PeopleIcon from "@material-ui/icons/People";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PersonIcon from "@material-ui/icons/Person";
import StarBorder from "@material-ui/icons/StarBorder";
import StoreMallDirectorySharpIcon from "@material-ui/icons/StoreMallDirectorySharp";
import React from "react";
import { GiTeacher } from "react-icons/gi";
import TeachingIcon from "../assets/icons/mathematics.svg";
import { buildMapPathMenu } from "../utils/MenuUtils";
import { Chat } from "./menuconfig/chat";
import { eduLearningManagement } from "./menuconfig/classmanagement/student";
import { eduTeachingManagement } from "./menuconfig/classmanagement/teacher";
import { DataAdministration } from "./menuconfig/dataadmin";
//import { WMS } from "./menuconfig/wms.js";
import { ThesisDefenseJuryManagement } from "./menuconfig/thesis_defense_jury_management";
import { ThesisDefensePlanManagement } from "./menuconfig/Thesis_defense_plan_managenment";
import { taskmanagement } from "./menuconfig/taskmanagement";
import { warehouse } from "./menuconfig/warehouse";
import { whiteboard } from "./menuconfig/whiteboard";
import { bigdataanalysis } from "./menuconfig/bigdataanalysis";
import {
  ProgrammingContestMenuTeacher,
  ProgrammingContestMenuStudent,
} from "./menuconfig/ProgramingContest";
import { general } from "./menuconfig/general";
import { teachingassignment } from "./menuconfig/teachingassignment";
import { user } from "./menuconfig/user";
import { tmscontainer } from "./menuconfig/tmscontainer";
import { WMSV2 } from "./menuconfig/wmsv2";
export const MENU_LIST = [];
MENU_LIST.push(general);
MENU_LIST.push(ProgrammingContestMenuTeacher);
MENU_LIST.push(ProgrammingContestMenuStudent);
MENU_LIST.push(eduTeachingManagement);
MENU_LIST.push(eduLearningManagement);

MENU_LIST.push(DataAdministration);
//MENU_LIST.push(WMS);
MENU_LIST.push(ThesisDefensePlanManagement);
//MENU_LIST.push(ThesisDefenseJuryManagement);
MENU_LIST.push(taskmanagement);
MENU_LIST.push(whiteboard);
MENU_LIST.push(bigdataanalysis);
MENU_LIST.push(Chat);
MENU_LIST.push(teachingassignment);
// MENU_LIST.push(schedule);
// MENU_LIST.push(department);
// MENU_LIST.push(tms);
MENU_LIST.push(user);
// MENU_LIST.push(order);
// MENU_LIST.push(promotax);
// MENU_LIST.push(invoice);
// MENU_LIST.push(unpaidinvoice);
// MENU_LIST.push(salesroute);
// MENU_LIST.push(supplier);
// MENU_LIST.push(purchaseorder);
// MENU_LIST.push(productpricesupplier);
MENU_LIST.push(warehouse);
// MENU_LIST.push(transport);
// MENU_LIST.push(post);
// MENU_LIST.push(product);
// MENU_LIST.push(customer);
// MENU_LIST.push(retailoutlet);
// MENU_LIST.push(saleman);
// MENU_LIST.push(distributor);
// MENU_LIST.push(productprice);
// MENU_LIST.push(map);
// MENU_LIST.push(salereport);
// MENU_LIST.push(facilityreport);
// MENU_LIST.push(tmsreport);
MENU_LIST.push(tmscontainer);
// MENU_LIST.push(webcam);
// MENU_LIST.push(backlog);
// MENU_LIST.push(lake_mgr);
MENU_LIST.push(WMSV2);

export const menuIconMap = new Map();
menuIconMap.set(
  "Schedule",
  <EventNoteIcon />
  //   <img alt="Task Schedule icon" src={TaskScheduleIcon} height={24} width={24} />
);
menuIconMap.set(
  "Teaching",
  <img alt="Teaching icon" src={TeachingIcon} height={24} width={24} />
);
menuIconMap.set("DashboardIcon", <DashboardRoundedIcon />);
menuIconMap.set("GiTeacher", <GiTeacher size={24} />);
menuIconMap.set("InboxIcon", <InboxIcon />);
menuIconMap.set("StarBorder", <StarBorder />);
menuIconMap.set("PeopleIcon", <PeopleIcon />);
menuIconMap.set("AirportShuttleIcon", <AirportShuttleIcon />);
menuIconMap.set("PeopleOutlineIcon", <PeopleOutlineIcon />);
menuIconMap.set("PersonIcon", <PersonIcon />);
menuIconMap.set("FormatListNumberedIcon", <FormatListNumberedIcon />);
menuIconMap.set("DescriptionIcon", <DescriptionIcon />);
menuIconMap.set("DescriptionOutlinedIcon", <DescriptionOutlinedIcon />);
menuIconMap.set("ApartmentSharpIcon", <ApartmentSharpIcon />);
menuIconMap.set("AttachMoneySharpIcon", <AttachMoneySharpIcon />);
menuIconMap.set("StoreMallDirectorySharpIcon", <StoreMallDirectorySharpIcon />);
menuIconMap.set("HomeSharpIcon", <HomeSharpIcon />);
menuIconMap.set("FastfoodIcon", <FastfoodIcon />);
menuIconMap.set("LocalGroceryStoreIcon", <LocalGroceryStoreIcon />);
menuIconMap.set("BlurOnIcon", <BlurOnIcon />);
menuIconMap.set("GiTeacher", <GiTeacher size={24} />);
menuIconMap.set("LocalLibraryIcon", <LocalLibraryIcon />);
menuIconMap.set("AssignmentOutlinedIcon", <AssignmentOutlinedIcon />);

export const mapPathMenu = buildMapPathMenu(MENU_LIST);
