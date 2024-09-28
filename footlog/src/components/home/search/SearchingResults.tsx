import Link from 'next/link';
import RegionCard from '@components/home/search/RegionCard';
import LocationCard from '@components/common/LocationCard/LocationCard';
import { CityRegionsDtoDataTypes } from 'types/home/search/SearchTypes';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

interface SearchingResultsProps {
  filteredCourses: CourseResponseDtoDataTypes[];
  filteredLocations: CityRegionsDtoDataTypes[];
  searchInput: string;
}

export default function SearchingResults(props: SearchingResultsProps) {
  const { filteredCourses, filteredLocations, searchInput } = props;

  return (
    <section className="flex flex-col pt-15pxr">
      {filteredLocations.length > 0 && (
        <section className="mb-24pxr flex flex-col gap-24pxr">
          {filteredLocations.map((location) => (
            <Link key={location.sigunguId} href={`/home/list/small/${location.sigunguId}`} passHref>
              <RegionCard location={location} searchInput={searchInput} />
            </Link>
          ))}
        </section>
      )}
      {filteredCourses.length > 0 ? (
        <section className="flex flex-col gap-24pxr">
          {filteredCourses.map((course) => (
            <LocationCard key={course.course_id} course={course} searchInput={searchInput} />
          ))}
        </section>
      ) : (
        <></>
      )}
    </section>
  );
}
