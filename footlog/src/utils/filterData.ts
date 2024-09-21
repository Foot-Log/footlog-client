import { CityRegionsDtoDataTypes } from 'types/home/search/SearchTypes';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export const filterCourses = (courses: CourseResponseDtoDataTypes[], searchInput: string) => {
  return courses.filter((course) => course.name.toLowerCase().includes(searchInput.toLowerCase()));
};

export const filterLocations = (locations: CityRegionsDtoDataTypes[], searchInput: string) => {
  return locations.filter((location) => location.sigunguName.toLowerCase().includes(searchInput.toLowerCase()));
};
