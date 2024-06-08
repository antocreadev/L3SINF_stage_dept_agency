import { fetchData } from "@/functions/fetchContenful";
import ContentfulNewsletter  from "@/components/Container/ContentfulNewsletter";
import { Nav, Newsletter } from "@/components/devlink";
export default async function ContentfulPage() {
  const data = await fetchData("OHeTqrqztrTtHeahNNMnU");

  const title = data.fields.title;
  const slug = data.fields.slug;

  return (
    <div>
      <Nav
        image={data.fields.components[0].fields.logo.fields.file.url}
        textLink1={data.fields.components[0].fields.link1}
        textLink2={data.fields.components[0].fields.link2}
        textLink3={data.fields.components[0].fields.link3}
        link1={data.fields.components[0].fields.link1}
        link2={data.fields.components[0].fields.link2}
        link3={data.fields.components[0].fields.link3}
      />


      <ContentfulNewsletter data={data.fields.components[1]} />

      
      < ContentfulNewsletter data={data.fields.components[2]} />

      {/* <Newsletter
        title={data.fields.components[1].fields.title}
        description={data.fields.components[1].fields.description}
        terms={data.fields.components[1].fields.terms}
        image={data.fields.components[1].fields.image.fields.file.url}
      />

      <Newsletter
        title={data.fields.components[2].fields.title}
        description={data.fields.components[2].fields.description}
        terms={data.fields.components[2].fields.terms}
        image={data.fields.components[2].fields.image.fields.file.url}
      /> */}
    </div>
  );
}
