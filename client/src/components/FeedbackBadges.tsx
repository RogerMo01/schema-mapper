import { AnimatePresence } from "motion/react";
import { FaFileCsv } from "react-icons/fa6";
import Badge from "./Badge";
import { PiTreeStructure } from "react-icons/pi";

interface Props {
  showFileBadge: boolean;
  showEntityBadge: boolean;
}

export default function FeedbackBadges({
  showFileBadge,
  showEntityBadge,
}: Props) {
  const badgeDivStyle = "h-20 w-20 bg-gray-200 rounded-lg";

  return (
    <div className="flex space-x-2 justify-center p-8">
      <div className={badgeDivStyle}>
        <AnimatePresence initial={false}>
          {showFileBadge && (
            <Badge>
              <FaFileCsv size={50} />
            </Badge>
          )}
        </AnimatePresence>
      </div>
      <div className="h-20 w-20">
        <img
          src="hand-draw-arrow.svg"
          width={80}
          height={80}
          alt="hand-draw-arrow"
        />
      </div>
      <div className={badgeDivStyle}>
        <AnimatePresence initial={false}>
          {showEntityBadge && (
            <Badge>
              <PiTreeStructure size={50} />
            </Badge>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
