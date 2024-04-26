import { fetchData } from "@/functions/fetchContenful";
import { Entry } from "contentful";
import { ContentfulTypeContent } from "@/enum/contentfulTypeContent";
import ContentfulNewsletter from "../Container/ContentfulNewsletter";

const data = await fetchData("OHeTqrqztrTtHeahNNMnU");

// entry.sys.contentType.sys.id === type of content (example: newsletter)

// filter
const newsletterData = data.filter(
  (entry) => entry.sys.contentType.sys.id === ContentfulTypeContent.NEWSLETTER
);

export default function Contentful() {
  return (
    <>
      {newsletterData.map((entry: Entry) => (
        <ContentfulNewsletter key={entry.sys.id} data={entry} />
      ))}
    </>
  );
}
