// @ts-nocheck
// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  
  async bootstrap({ strapi }) {
    try {
      const existingHeader = await strapi.documents('api::header.header').findFirst();
      if (existingHeader) {
        await strapi.documents('api::header.header').update({
          documentId: existingHeader.documentId,
          data: {
            navbarItems: [
              { __component: 'shared.header-items', id_name: 'hero', text: 'Work', href: '#hero', label: 'Work' },
              { __component: 'shared.header-items', id_name: 'expertise', text: 'Expertise', href: '#expertise', label: 'Expertise' },
              { __component: 'shared.header-items', id_name: 'selected-work', text: 'Case Studies', href: '#selected-work', label: 'Case Studies' },
              { __component: 'shared.header-items', id_name: 'experience', text: 'Experience', href: '#experience', label: 'Experience' },
              { __component: 'shared.header-items', id_name: 'contact', text: 'Contact', href: '#contact', label: 'Contact' }
            ]
          }
        });
      }
    } catch (e) {
      console.error('Failed to update navbarItems:', e.message);
    }
    const seedSingleType = async (uid, data) => {
      try {
        const count = await strapi.documents(uid).count({});
        if (count === 0) {
          await strapi.documents(uid).create({ data, status: 'published' });
          console.log(`Seeded ${uid}`);
        }
      } catch (err) {
        console.error(`Failed to seed ${uid}:`, err.message);
      }
    };

    const seedCollectionType = async (uid, dataArray) => {
      try {
        const count = await strapi.documents(uid).count({});
        if (count === 0) {
          for (const data of dataArray) {
            await strapi.documents(uid).create({ data, status: 'published' });
          }
          console.log(`Seeded ${uid}`);
        }
      } catch (err) {
        console.error(`Failed to seed ${uid}:`, err.message);
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

    await seedSingleType('api::footer.footer', {
      name: 'Susovan Sarkar',
      tagline: 'Designed & Engineered with precision.',
      twitterUrl: '#',
      githubUrl: '#',
      dribbbleUrl: '#'
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

};
