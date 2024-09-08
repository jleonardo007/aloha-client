import { Button } from 'src/components/common/button';
import backIcon from 'src/resources/icons/arrow-left.svg';

type BackButtonProps = {
  back: () => void;
};
export function BackButton({ back }: BackButtonProps) {
  return <Button type="button" icon={backIcon} className="h-8 w-8 mr-2" onClick={back} />;
}
