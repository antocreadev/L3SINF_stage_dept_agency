// const contentful = require('contentful')
import { createClient } from "contentful";
import { Entry } from "contentful";

// add : page id to get specific page
export const fetchData = async (id : string) => {
  const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    environment: process.env.CONTENTFUL_ENVIRONMENT || "",
    accessToken: process.env.CONTENTFUL_ACESS_TOKEN || "",
  });

  const response = await client.getEntry(id); // getEntry for specific page

  return response as unknown as Array<Entry>;
};
