import { Client } from '@notionhq/client';

const notion = new Client({ auth: import.meta.env.NOTION_API_KEY });

function getProperty(property, type) {
  return property && property[type] && property[type][0] ? property[type][0].text.content : '';
}

export async function getDatabase() {
  const response = await notion.databases.query({ database_id: import.meta.env.NOTION_DATABASE_ID });
  // console.log("result: ",response.results[0].cover.external.url)

  return response.results.map(page => ({
    id: page.id,
    cover: page.cover.external.url,
    title: getProperty(page.properties.title, 'title'),
    description: getProperty(page.properties.description, 'rich_text'),
    categories: page.properties.categories ? page.properties.categories.multi_select.map(category => category.name) : [],
    tags: page.properties.tags ? page.properties.tags.multi_select.map(tag => tag.name) : [],
    slug: getProperty(page.properties.slug, 'rich_text'),
  }));
}

export async function getPageBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  });
  return response.results[0];
}

export async function getBlocks(blockId: string) {
  const response = await notion.blocks.children.list({ block_id: blockId });
  return response.results;
}

export async function addViews(pageId: string) {
  // get latest views or default is 0
  const response = await notion.pages.retrieve({ page_id: pageId });
  const views = response.properties.views.number || 0;

  // update views
  await notion.pages.update({
    page_id: pageId,
    properties: {
      views: {
        number: views + 1,
      },
    },
  });

  return views + 1;
}