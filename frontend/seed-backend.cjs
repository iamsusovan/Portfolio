const fs = require('fs');
const path = require('path');

const indexTsPath = path.join(__dirname, '..', 'backend', 'src', 'index.ts');
let indexTs = fs.readFileSync(indexTsPath, 'utf8');

const bootstrapCode = `
  async bootstrap({ strapi }) {
    const seedSingleType = async (uid, data) => {
      try {
        const count = await strapi.documents(uid).count({});
        if (count === 0) {
          await strapi.documents(uid).create({ data, status: 'published' });
          console.log(\`Seeded \${uid}\`);
        }
      } catch (err) {
        console.error(\`Failed to seed \${uid}:\`, err.message);
      }
    };

    const seedCollectionType = async (uid, dataArray) => {
      try {
        const count = await strapi.documents(uid).count({});
        if (count === 0) {
          for (const data of dataArray) {
            await strapi.documents(uid).create({ data, status: 'published' });
          }
          console.log(\`Seeded \${uid}\`);
        }
      } catch (err) {
        console.error(\`Failed to seed \${uid}:\`, err.message);
      }
    };

    await seedSingleType('api::header.header', {
      name: "Susovan Sarkar",
      title: "UI/UX Developer",
      logoUrl: "https://ui-avatars.com/api/?name=S+S&background=4f46e5&color=fff&rounded=true&bold=true",
      profileImageUrl: "https://ui-avatars.com/api/?name=Susovan+Sarkar&background=0284c7&color=fff"
    });

    await seedSingleType('api::hero.hero', {
      heading: "Design & High-Performance Development.",
      subheading: "I am passionate about coding as well as designing. I have 5+ years of experience in the IT industry as a UI/UX Developer, crafting responsive UIs and cross-platform applications.",
      experienceYears: 5,
      badgeText: "Available for Q3/Q4 contracts & advisory"
    });

    await seedSingleType('api::metrics.metrics', {
      stat1Value: "5+", stat1Label: "Years of Craft", stat1Desc: "Bridging UI design & code",
      stat2Value: "30+", stat2Label: "Projects", stat2Desc: "Successfully delivered",
      stat3Value: "13+", stat3Label: "Core Skills", stat3Desc: "Mastered in production",
      stat4Value: "99%", stat4Label: "Satisfaction", stat4Desc: "Client & employer rating"
    });

    await seedSingleType('api::contact.contact', {
      email: "susovan412@gmail.com",
      linkedinUrl: "#"
    });

    await seedCollectionType('api::experience.experience', [
      {
        role: "UI/UX Developer",
        company: "SentientGeeks",
        period: "2023 — Present",
        location: "Kolkata, India",
        description: "Developed responsive UIs and cross-platform applications using React, Next.js, Angular, .NET Blazor, MAUI, and WPF.",
        badge: "Current",
        order: 1
      },
      {
        role: "HTML Developer",
        company: "Futuristic Bug Pvt Ltd",
        period: "2022 — 2023",
        location: "Kolkata, India",
        description: "Converted Figma, XD, and Photoshop designs into responsive HTML/CSS with backend support for .NET, WordPress, PHP, and Shopify.",
        badge: "",
        order: 2
      },
      {
        role: "Creative Designer / UX Developer",
        company: "Tangent Tech Solutions",
        period: "2021 — 2022",
        location: "Kolkata, India",
        description: "Designed and built MVC layouts for major clients including Tata Sustainability Group, Tata AIG, IITBAA, and Desun Hospital.",
        badge: "",
        order: 3
      }
    ]);
  },
`;

indexTs = indexTs.replace(/bootstrap\(\/\* \{ strapi \}: \{ strapi: Core.Strapi \} \*\/\) \{\},/g, bootstrapCode);
fs.writeFileSync(indexTsPath, indexTs);
console.log("Patched index.ts to seed data");
