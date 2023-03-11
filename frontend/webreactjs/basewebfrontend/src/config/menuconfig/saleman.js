export const saleman = {
  id: "MENU_SALESMAN_MANAGEMENT",
  path: "",
  isPublic: false,
  icon: "PeopleIcon",
  text: "QL nhân viên bán hàng",
  child: [
    {
      id: "MENU_SALESMAN_MANAGEMENT_CREATE",
      path: "/salesman/create",
      isPublic: false,
      icon: "StarBorder",
      text: "Tạo mới NVBH",
      child: [],
    },
    {
      id: "MENU_SALESMAN_MANAGEMENT_LIST",
      path: "/salesman/list",
      isPublic: false,
      icon: "StarBorder",
      text: "Danh sách NVBH",
      child: [],
    },
    {
      id: "MENU_SALESMAN_MANAGEMENT_ASSIGN_SALESMAN_2_DISTRIBUTOR",
      path: "/salesman/assign-salesman-2-distributor",
      isPublic: false,
      icon: "StarBorder",
      text: "Phân công NVBH cho NPP",
      child: [],
    },
    {
      id: "MENU_SALESMAN_MANAGEMENT_ASSIGN_SALESMAN_2_RETAIL_OUTLET",
      path: "/salesman/assign-salesman-2-retail-outlet",
      isPublic: false,
      icon: "StarBorder",
      text: "Phân công NVBH phụ trách ĐLBL",
      child: [],
    },
  ],
};