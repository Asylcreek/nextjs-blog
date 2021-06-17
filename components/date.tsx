import { parseISO, format } from "date-fns";

interface PropTypes {
  dateString: string;
}

export default function Date({ dateString }: PropTypes) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
