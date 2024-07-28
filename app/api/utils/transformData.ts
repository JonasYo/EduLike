import resolveResponse from 'contentful-resolve-response';

import { Content } from 'common/types';

const extractFields = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => extractFields(item));
  } else if (obj && typeof obj === 'object') {
    if (obj.file && obj.file.url) {
      let newObj = {
        ...obj,
        url: obj.file.url.replace(
          '//images.ctfassets.net',
          'https://images.ctfassets.net',
        ),
      };
      delete obj.file;

      return newObj;
    } else {
      const newObj: { [key: string]: any } = {};
      for (const key in obj) {
        if (key !== 'metadata' && key !== 'sys') {
          if (key === 'fields') {
            const fields = obj.fields;
            for (const fieldKey in fields) {
              newObj[fieldKey] = extractFields(fields[fieldKey]);
              if (newObj[fieldKey]?.file?.url) {
                newObj[fieldKey] = {
                  url: newObj[fieldKey].file.url.replace(
                    '//images.ctfassets.net',
                    'https://images.ctfassets.net',
                  ),
                  ...newObj[fieldKey],
                };
                delete newObj[fieldKey]?.file;
              }
            }
          } else {
            newObj[key] = extractFields(obj[key]);
            if (newObj[key]?.file?.url) {
              newObj[key] = {
                url: newObj[key].file.url.replace(
                  '//images.ctfassets.net',
                  'https://images.ctfassets.net',
                ),
                ...newObj[key],
              };
              delete newObj[key]?.file;
            }
          }
        }
      }
      return newObj;
    }
  } else {
    return obj;
  }
};

const transformData = (data: any): Content => {
  const response = resolveResponse(data)[0].fields;

  return extractFields({
    title: response.title,
    slug: response.slug,
    theme: response.theme.fields,
    banner: response.banner.fields,
    flowchart: response.flowchart.fields,
    aboutUs: response.aboutUs.fields,
    ourServices: response.ourServices.fields,
    posts: response.posts.fields,
    someCases: response.someCases.fields,
    contactUs: response.contactUs.fields,
  }) as Content;
};

export default transformData;
