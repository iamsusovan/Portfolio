const fs = require('fs');
const path = require('path');

const backendApiDir = path.join(__dirname, '..', 'backend', 'src', 'api');

const createApi = (name, schema) => {
  const apiDir = path.join(backendApiDir, name);
  const contentTypesDir = path.join(apiDir, 'content-types', name);
  const controllersDir = path.join(apiDir, 'controllers');
  const routesDir = path.join(apiDir, 'routes');
  const servicesDir = path.join(apiDir, 'services');

  [apiDir, contentTypesDir, controllersDir, routesDir, servicesDir].forEach(d => {
    if (!fs.existsSync(d)) {
      fs.mkdirSync(d, { recursive: true });
    }
  });

  fs.writeFileSync(path.join(contentTypesDir, 'schema.json'), JSON.stringify(schema, null, 2));

  const capName = name.charAt(0).toUpperCase() + name.slice(1);

  // Controller
  fs.writeFileSync(path.join(controllersDir, `${name}.ts`), `import { factories } from '@strapi/strapi';\nexport default factories.createCoreController('api::${name}.${name}');`);

  // Route
  fs.writeFileSync(path.join(routesDir, `${name}.ts`), `import { factories } from '@strapi/strapi';\nexport default factories.createCoreRouter('api::${name}.${name}');`);

  // Service
  fs.writeFileSync(path.join(servicesDir, `${name}.ts`), `import { factories } from '@strapi/strapi';\nexport default factories.createCoreService('api::${name}.${name}');`);

  console.log(`Created API for ${name}`);
};

const heroSchema = {
  kind: "singleType",
  collectionName: "heroes",
  info: { singularName: "hero", pluralName: "heroes", displayName: "Hero" },
  options: { draftAndPublish: false },
  attributes: {
    heading: { type: "string" },
    subheading: { type: "text" },
    experienceYears: { type: "integer" },
    badgeText: { type: "string" }
  }
};

const experienceSchema = {
  kind: "collectionType",
  collectionName: "experiences",
  info: { singularName: "experience", pluralName: "experiences", displayName: "Experience" },
  options: { draftAndPublish: false },
  attributes: {
    role: { type: "string" },
    company: { type: "string" },
    period: { type: "string" },
    location: { type: "string" },
    description: { type: "text" },
    badge: { type: "string" },
    order: { type: "integer" }
  }
};

const metricsSchema = {
  kind: "singleType",
  collectionName: "metrics",
  info: { singularName: "metrics", pluralName: "metrics", displayName: "Metrics" },
  options: { draftAndPublish: false },
  attributes: {
    stat1Value: { type: "string" },
    stat1Label: { type: "string" },
    stat1Desc: { type: "string" },
    stat2Value: { type: "string" },
    stat2Label: { type: "string" },
    stat2Desc: { type: "string" },
    stat3Value: { type: "string" },
    stat3Label: { type: "string" },
    stat3Desc: { type: "string" },
    stat4Value: { type: "string" },
    stat4Label: { type: "string" },
    stat4Desc: { type: "string" }
  }
};

const contactSchema = {
  kind: "singleType",
  collectionName: "contacts",
  info: { singularName: "contact", pluralName: "contacts", displayName: "Contact" },
  options: { draftAndPublish: false },
  attributes: {
    email: { type: "string" },
    linkedinUrl: { type: "string" }
  }
};

createApi('hero', heroSchema);
createApi('experience', experienceSchema);
createApi('metrics', metricsSchema);
createApi('contact', contactSchema);

console.log("All schemas created! Restarting Strapi is required (auto-reloads if running in dev mode).");
