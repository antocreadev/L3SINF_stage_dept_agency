import { Newsletter } from "../devlink";
export default function ContentfulNewsletter({ data }) {
  return (
    <Newsletter
      image={data.fields.image.fields.file.url}
      terms={data.fields.terms}
      description={data.fields.description}
      title={data.fields.title}
    />
  );
}
