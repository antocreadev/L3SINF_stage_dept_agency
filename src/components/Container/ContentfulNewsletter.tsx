// this is server component
import { Newsletter } from "../devlink";
import { Entry } from "contentful";
// import { Entry } from "contentful";

export default function ContentfulNewsletter({ data }: { data: Entry }) {
  console.log(JSON.stringify(data, null, 2));
  return (
    <Newsletter
      image={data.fields.image.fields.file.url}
      terms={data.fields.terms}
      description={data.fields.description}
      title={data.fields.title}
    />
  );
}
