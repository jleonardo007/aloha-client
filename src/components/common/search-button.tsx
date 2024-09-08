import { Button } from 'src/components/common/button';
import searchIcon from 'src/resources/icons/search-icon.svg';

type SearchButtonProps = {
  enableSearch: () => void;
};

export function SearchButton({ enableSearch }: SearchButtonProps) {
  return <Button type="button" className="h-6 w-6 mr-2" icon={searchIcon} onClick={enableSearch} />;
}
