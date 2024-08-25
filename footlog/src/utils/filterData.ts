import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { RegionCardDataTypes } from 'types/home/search/SearchTypes';

export const filterCourses = (courses: CourseDetailsDataTypes[], searchInput: string) => {
  return courses.filter((course) => course.title.toLowerCase().includes(searchInput.toLowerCase()));
};

export const filterLocations = (locations: RegionCardDataTypes[], searchInput: string) => {
  return locations.filter((location) => location.title.toLowerCase().includes(searchInput.toLowerCase()));
};
