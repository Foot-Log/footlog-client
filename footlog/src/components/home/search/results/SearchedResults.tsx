import LocationCard from '@components/common/LocationCard/LocationCard';
import BigLocationCard from '@components/common/LocationCard/BigLocationCard';
import RegionCard from '../RegionCard';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { RegionCardDataTypes } from 'types/home/search/SearchTypes';

interface SearchResultsProps {
  filteredCourses: CourseDetailsDataTypes[];
  filteredLocations: RegionCardDataTypes[];
  searchInput: string;
  showBigCards: boolean;
}

export default function SearchedResults(props: SearchResultsProps) {
  const { filteredCourses, filteredLocations, searchInput, showBigCards } = props;

  return (
    <section className="mt-59pxr flex flex-col overflow-y-auto">
      {showBigCards ? (
        filteredCourses.length > 0 ? (
          <section className="flex flex-col">
            {filteredCourses.map((course) => (
              <section key={course.id}>
                <div className="mb-20pxr h-8pxr w-full bg-gray-1" />
                <BigLocationCard course={course} searchInput={searchInput} />
              </section>
            ))}
          </section>
        ) : (
          <p className="fonts-recommendSubtitle mt-289pxr flex justify-center">
            {searchInput}의 검색 결과가 존재하지 않습니다.
          </p>
        )
      ) : (
        <section className="mt-12pxr flex flex-col gap-24pxr">
          {filteredLocations.length > 0 && (
            <section className="mb-24pxr flex flex-col gap-24pxr">
              {filteredLocations.map((location) => (
                <RegionCard key={location.id} location={location} searchInput={searchInput} />
              ))}
            </section>
          )}
          {filteredCourses.map((course) => (
            <section key={course.id}>
              <LocationCard course={course} searchInput={searchInput} />
            </section>
          ))}
        </section>
      )}
    </section>
  );
}
