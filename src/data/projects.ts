export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "LongLyf",
    techs: ["Java","Springboot","ReactJs","AWS"],
    link: "https://github.com/Sahith1408/LongLyf",
  },
  {
    title: "ParkingLotManagement",
    techs: ["Java", "SpringMVC", "Hibernate", "PostgreSQL", "Thymeleaf"],
    link: "https://github.com/Sahith1408/ParkingLotManagement",
  },
  {
    title: "Sentimental-Analysis",
    techs: ["Python", "Numpy", "Pandas"],
    link: "https://github.com/Sahith1408/Sentimental-Analysis",
  },
  {
    title: "Employee_management",
    techs: ["Java", "JDBC"],
    link: "https://github.com/Sahith1408/ParkingLotManagement",
  },
];

export default projects;
